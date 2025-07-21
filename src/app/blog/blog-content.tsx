'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, Filter, BookOpen, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
}

interface BlogPageContentProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogPageContent({ posts, categories }: BlogPageContentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
      {/* Header Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              ISFCR Blog
            </h1>
            <p className="mt-4 text-lg dark:text-muted-foreground md:text-xl">
              Insights, tutorials, and research from the frontlines of cybersecurity
            </p>
            <p className="mt-4 text-lg text-foreground md:text-xl">
              Dive deep into our technical explorations, CTF writeups, vulnerability research, 
              and the latest developments in information security. Learn from our experiences 
              and join us on our journey through the ever-evolving landscape of cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-background/20">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
                Featured Posts
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="group cursor-pointer hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 ease-out"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <Badge variant="secondary" className="mb-2">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <CardDescription className="line-clamp-3">
                      {post.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
              All Posts
            </h2>
            {searchTerm || selectedCategory !== 'All' ? (
              <span className="text-sm text-muted-foreground">
                ({filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''})
              </span>
            ) : null}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="group cursor-pointer hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-8"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="text-sm">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge variant="secondary" className="text-sm">
                            <Star className="h-4 w-4 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors duration-300 mb-3">
                        {post.title}
                      </h3>
                    </Link>
                    <CardDescription className="text-base leading-relaxed">
                      {post.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Connect with Us Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background/20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Stay Updated
            </h2>
            <p className="text-lg dark:text-muted-foreground mb-8">
              Follow us for the latest posts and cybersecurity insights
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More About ISFCR</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/achievements">View Our Achievements</Link>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="dark:text-muted-foreground text-sm">
                Want to contribute a guest post or collaborate with us? Reach out through our social channels!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
