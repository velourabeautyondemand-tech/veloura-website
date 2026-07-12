'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { blogPosts as legacyPosts } from '@/lib/blog-data';
import { GhostSignupForm } from '@/components/features/ghost-signup-form';

export default function BlogPage() {
    const firestore = useFirestore();

    const postsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'blogPosts'), orderBy('publishedAt', 'desc'));
    }, [firestore]);

    const { data: firestorePosts, isLoading, error } = useCollection(postsQuery);

    // Combine legacy static posts with new dynamic posts from Firestore
    // Sort combined list by date descending
    const allPosts = [
        ...(firestorePosts || []).map(p => ({
            ...p,
            date: p.publishedAt,
            imageUrl: p.heroImageUrl,
            isDynamic: true
        })),
        ...legacyPosts.filter(lp => !(firestorePosts || []).some(fp => fp.slug === lp.slug))
    ].sort((a, b) => {
        const dateA = new Date(a.publishedAt || a.date || 0).getTime();
        const dateB = new Date(b.publishedAt || b.date || 0).getTime();
        return dateB - dateA;
    });

    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://blog.velourabeautyondemand.com/#blog",
      "url": "https://blog.velourabeautyondemand.com/",
      "name": "VÉLOURA Beauty On Demand Blog",
      "description": "Guides about mobile beauty services, accessible beauty, hotel beauty, bridal services, beauty careers, and the independent beauty industry.",
      "publisher": {
        "@id": "https://velourabeautyondemand.com/#organization"
      },
      "isPartOf": {
        "@id": "https://velourabeautyondemand.com/#website"
      },
      "inLanguage": "en-US"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                            The VÉLOURA Journal
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Your guide to beauty, lifestyle, and professional growth in the on-demand economy.
                        </p>
                    </div>

                    {isLoading && (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                        </div>
                    )}

                    {!isLoading && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {allPosts.map((post: any) => (
                                <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow border-primary/5 bg-card">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={post.imageUrl || post.heroImageUrl || "https://picsum.photos/seed/blog/800/600"}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            data-ai-hint="beauty blog"
                                        />
                                        <Badge className="absolute top-4 left-4" variant="accent">
                                            {post.category || "Lifestyle"}
                                        </Badge>
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.publishedAt || post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime || "5 min read"}
                                            </div>
                                        </div>
                                        <CardTitle className="font-headline text-2xl line-clamp-2">{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-sm leading-relaxed line-clamp-3">
                                            {post.excerpt || post.metaDescription || "Read more about this topic on our blog."}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="pt-0 pb-6 px-6">
                                        <Button asChild variant="link" className="p-0 h-auto text-primary font-bold group">
                                            <Link href={`/blog/${post.slug}`}>
                                                Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                    
                    {!isLoading && allPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground">New stories coming soon. Stay tuned!</p>
                        </div>
                    )}

                    <div className="mt-20">
                        <GhostSignupForm />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
