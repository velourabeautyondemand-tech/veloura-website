
import { notFound } from 'next/navigation';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { blogPosts } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-background py-12">
        <article className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" size="sm" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="space-y-4 mb-8">
              <Badge variant="accent">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-y py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.imageHint}
                priority
              />
            </div>

            <div 
              className="prose lg:prose-xl max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-headline prose-a:text-primary prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t">
              <h3 className="text-2xl font-bold font-headline mb-4">About the Author</h3>
              <div className="bg-secondary/20 p-6 rounded-2xl flex items-center gap-4">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-lg">{post.author}</p>
                  <p className="text-sm">VÉLOURA Contributor</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
