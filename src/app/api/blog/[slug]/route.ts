import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: {
        slug: params.slug,
        published: true,
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const formattedPost = {
      ...post,
      tags: JSON.parse(post.tags),
    };

    return NextResponse.json({
      post: formattedPost,
    });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    // Check for API token
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');
    
    if (!token || token !== process.env.BLOG_API_TOKEN) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid API token' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Validate data types if provided
    if (body.readTime && typeof body.readTime !== 'number') {
      return NextResponse.json(
        { error: 'readTime must be a number' },
        { status: 400 }
      );
    }

    if (body.tags && !Array.isArray(body.tags)) {
      return NextResponse.json(
        { error: 'tags must be an array' },
        { status: 400 }
      );
    }

    // Prepare update data
    const updateData: any = {};
    
    const allowedFields = ['title', 'slug', 'summary', 'excerpt', 'content', 'author', 'authorId', 'category', 'readTime', 'featured', 'published'];
    
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        if (field === 'tags') {
          updateData[field] = JSON.stringify(body[field]);
        } else {
          updateData[field] = body[field];
        }
      }
    }

    if (body.tags) {
      updateData.tags = JSON.stringify(body.tags);
    }

    const updatedPost = await prisma.blogPost.update({
      where: { slug: params.slug },
      data: updateData,
    });

    return NextResponse.json({
      message: 'Blog post updated successfully',
      post: {
        ...updatedPost,
        tags: JSON.parse(updatedPost.tags),
      },
    });

  } catch (error: any) {
    console.error('Error updating blog post:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    if (error.code === 'P2002' && error.meta?.target?.includes('slug')) {
      return NextResponse.json(
        { error: 'A blog post with this slug already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    // Check for API token
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');
    
    if (!token || token !== process.env.BLOG_API_TOKEN) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid API token' },
        { status: 401 }
      );
    }

    await prisma.blogPost.delete({
      where: { slug: params.slug },
    });

    return NextResponse.json({
      message: 'Blog post deleted successfully',
    });

  } catch (error: any) {
    console.error('Error deleting blog post:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
