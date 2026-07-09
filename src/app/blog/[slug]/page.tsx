
'use client';

import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Clock, Calendar, Loader2, AlertTriangle, Search } from 'lucide-react';
import { use, useEffect, useState } from 'react';
import { blogPosts as legacyPosts } from '@/lib/blog-data';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = decodeURIComponent(resolvedParams.slug);
  const firestore = useFirestore();

  const postRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, 'blogPosts', slug);
  }, [firestore, slug]);

  const { data: firestorePost, isLoading, error } = useDoc(postRef);

  // Check legacy posts if firestore post is not found and loading is done
  const legacyPost = !firestorePost && !isLoading ? legacyPosts.find(p => p.slug === slug) : null;
  const post = firestorePost || legacyPost;

  if (isLoading) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </main>
            <Footer />
        </div>
    );
  }

  // Improved Error and Not Found state for debugging
  if (!post) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex items-center justify-center bg-secondary/30 py-24">
                <div className="max-w-md w-full bg-card p-8 rounded-2xl shadow-xl text-center border-2 border-dashed border-primary/20">
                    <Search className="h-16 w-16 mx-auto text-primary mb-6 opacity-40" />
                    <h1 className="text-3xl font-bold font-headline mb-4">Post Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        We couldn't find the article you're looking for. <br />
                        <span className="text-xs font-mono bg-muted px-2 py-1 rounded mt-2 inline-block">ID: {slug}</span>
                    </p>
                    <div className="space-y-4">
                        <Button asChild className="w-full">
                            <Link href="/blog">Browse All Articles</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                    {error && (
                        <p className="mt-6 text-xs text-destructive italic">Error details: {error.message}</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
  }

  const publishedDate = post.publishedAt || post.date;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-background py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 p-0 hover:bg-transparent text-muted-foreground hover:text-primary transition-colors">
              <Link href="/blog" className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Journal
              </Link>
            </Button>

            <article className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  {post.category || "Lifestyle"}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-foreground">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime || "5 min read"}
                  </div>
                </div>
              </div>

              {(post.heroImageUrl || post.imageUrl) && (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={post.heroImageUrl || post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <div className="mt-16 pt-8 border-t">
               <Button asChild variant="outline">
                  <Link href="/blog">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    View all posts
                  </Link>
               </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
