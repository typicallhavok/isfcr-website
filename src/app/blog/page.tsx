import { prisma } from '@/lib/prisma';
import { blogPosts, categories as staticCategories } from '@/app/data/blogs';
import BlogPageContent from './blog-content';

export const metadata = {
  title: 'Blog',
};

async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (posts.length === 0) {
      // Fallback to static data if no posts in database
      return blogPosts;
    }

    return posts.map((post: any) => ({
      id: post.slug,
      title: post.title,
      summary: post.summary,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      date: post.createdAt.toISOString().split('T')[0],
      category: post.category,
      tags: JSON.parse(post.tags),
      readTime: post.readTime,
      featured: post.featured,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Fallback to static data if database is not available
    return blogPosts;
  }
}

async function getCategories() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { category: true },
      distinct: ['category'],
    });

    if (posts.length === 0) {
      return staticCategories;
    }

    const categories = ['All', ...posts.map((post: any) => post.category)];
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return staticCategories;
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories(),
  ]);

  return <BlogPageContent posts={posts} categories={categories} />;
}
