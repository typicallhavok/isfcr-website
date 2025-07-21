import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/20 text-primary p-4 rounded-full">
                    <BookOpen className="h-12 w-12" />
                  </div>
                </div>
                
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl mb-4">
                  Blog Post Not Found
                </h1>
                
                <p className="text-lg dark:text-muted-foreground mb-8">
                  The blog post you're looking for doesn't exist or has been moved. 
                  It might have been deleted or the URL might be incorrect.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/blog">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Blog
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <Home className="h-4 w-4 mr-2" />
                      Go Home
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
