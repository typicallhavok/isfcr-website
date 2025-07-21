import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/app/data/blogs';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
      {/* Header Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Button asChild variant="ghost" size="sm" className="mb-6">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="outline">{post.category}</Badge>
                {post.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl font-medium text-foreground mb-4">
                {post.summary}
              </p>
              
              <p className="text-lg dark:text-muted-foreground md:text-xl mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-0 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Card className="mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="font-headline text-2xl font-bold text-primary mt-8 mb-4 first:mt-0">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('# ')) {
                      return (
                        <h1 key={index} className="font-headline text-3xl font-bold text-primary mt-8 mb-4 first:mt-0">
                          {paragraph.replace('# ', '')}
                        </h1>
                      );
                    }
                    return (
                      <p key={index} className="mb-4 text-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Share Section */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Share this post</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-background/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
                  Related Posts
                </h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <Card 
                    key={relatedPost.id}
                    className="group cursor-pointer hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-8"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <CardHeader>
                      <Badge variant="outline" className="text-xs w-fit">
                        {relatedPost.category}
                      </Badge>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <h3 className="text-lg font-bold font-headline group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-sm dark:text-muted-foreground line-clamp-3">
                        {relatedPost.summary}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{relatedPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{relatedPost.readTime}m</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/blog">
                    View All Posts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Learn More About ISFCR
            </h2>
            <p className="text-lg dark:text-muted-foreground mb-8">
              Discover our team, achievements, and join our cybersecurity community
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/about">About Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/achievements">Our Achievements</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/members">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
