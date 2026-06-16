
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { blogPosts } from '@/lib/blog-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogPosts.map((post) => (
                            <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow border-primary/5">
                                <div className="relative aspect-video">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={post.imageHint}
                                    />
                                    <Badge className="absolute top-4 left-4" variant="accent">
                                        {post.category}
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className="font-headline text-2xl line-clamp-2">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
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
                </div>
            </main>
            <Footer />
        </div>
    );
}
