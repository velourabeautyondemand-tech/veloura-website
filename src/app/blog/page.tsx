import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

async function getExternalBlogs() {
  try {
    const response = await fetch('https://www.babylovegrowth.com/api/blogs', {
      headers: {
        'x-api-key': process.env.BABYLOVEGROWTH_BLOG_API_KEY || '',
      },
      next: { revalidate: 3600 }
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data.blogs || [];
  } catch (e) {
    console.error("Failed to fetch external blogs:", e);
    return [];
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function BlogPage() {
    const externalPosts = await getExternalBlogs();
    // Combine external posts with local posts, removing duplicates by slug
    const allPosts = [...externalPosts, ...blogPosts].filter((post, index, self) => 
        index === self.findIndex((t) => t.slug === post.slug)
    );

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
                        {allPosts.map((post: any) => (
                            <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow border-primary/5 bg-card">
                                <div className="relative aspect-video">
                                    <Image
                                        src={post.imageUrl || "https://picsum.photos/seed/blog/800/600"}
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
                                            {new Date(post.date || post.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                    {allPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground">New stories coming soon. Stay tuned!</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
