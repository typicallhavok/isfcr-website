import { prisma } from '@/lib/prisma';
import BlogPageClient from './blog-client';

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
    return [];
  }
}

async function getCategories() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { category: true },
      distinct: ['category'],
    });

    const categories = ['All', ...posts.map(post => post.category)];
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['All', 'Web Security', 'Cryptography', 'Penetration Testing', 'Reverse Engineering', 'Incident Response', 'CTF Writeups', 'Research'];
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories(),
  ]);

  return <BlogPageClient posts={posts} categories={categories} />;
}
