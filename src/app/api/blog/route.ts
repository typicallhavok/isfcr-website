import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
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
    
    // Validate required fields
    const requiredFields = ['title', 'slug', 'summary', 'excerpt', 'content', 'author', 'category', 'readTime'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate data types
    if (typeof body.readTime !== 'number') {
      return NextResponse.json(
        { error: 'readTime must be a number' },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.tags)) {
      return NextResponse.json(
        { error: 'tags must be an array' },
        { status: 400 }
      );
    }

    // Create the blog post
    const blogPost = await prisma.blogPost.create({
      data: {
        title: body.title,
        slug: body.slug,
        summary: body.summary,
        excerpt: body.excerpt,
        content: body.content,
        author: body.author,
        authorId: body.authorId || null,
        category: body.category,
        tags: JSON.stringify(body.tags),
        readTime: body.readTime,
        featured: body.featured || false,
        published: body.published !== false, // Default to true unless explicitly false
      },
    });

    return NextResponse.json({
      message: 'Blog post created successfully',
      post: {
        ...blogPost,
        tags: JSON.parse(blogPost.tags),
      },
    }, { status: 201 });

  } catch (error: any) {
    console.error('Error creating blog post:', error);
    
    // Handle unique constraint violation (duplicate slug)
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

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const published = url.searchParams.get('published');
    const featured = url.searchParams.get('featured');
    const category = url.searchParams.get('category');
    const limit = url.searchParams.get('limit');

    const where: any = {};
    
    if (published !== null) {
      where.published = published === 'true';
    }
    
    if (featured !== null) {
      where.featured = featured === 'true';
    }
    
    if (category) {
      where.category = category;
    }

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      take: limit ? parseInt(limit) : undefined,
    });

    const formattedPosts = posts.map((post: any) => ({
      ...post,
      tags: JSON.parse(post.tags),
    }));

    return NextResponse.json({
      posts: formattedPosts,
      count: posts.length,
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
