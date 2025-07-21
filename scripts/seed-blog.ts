import { PrismaClient } from '@prisma/client';
import { blogPosts } from '../src/app/data/blogs';

const prisma = new PrismaClient();

async function seedBlogPosts() {
  console.log('Starting blog posts migration...');

  try {
    for (const post of blogPosts) {
      const existingPost = await prisma.blogPost.findUnique({
        where: { slug: post.id }
      });

      if (existingPost) {
        console.log(`Blog post with slug "${post.id}" already exists, skipping...`);
        continue;
      }

      await prisma.blogPost.create({
        data: {
          title: post.title,
          slug: post.id,
          summary: post.summary,
          excerpt: post.excerpt,
          content: post.content,
          author: post.author,
          category: post.category,
          tags: JSON.stringify(post.tags),
          readTime: post.readTime,
          featured: post.featured || false,
          published: true,
          createdAt: new Date(post.date),
        },
      });

      console.log(`✅ Created blog post: "${post.title}"`);
    }

    console.log('✅ Blog posts migration completed successfully!');
  } catch (error) {
    console.error('❌ Error during migration:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run if called directly
if (require.main === module) {
  seedBlogPosts();
}

export { seedBlogPosts };
