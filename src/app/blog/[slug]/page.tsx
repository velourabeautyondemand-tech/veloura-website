import { getBlogBySlug } from 'babylovegrowth-next-js-blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Clock, Calendar } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let post = null;
  
  try {
    post = await getBlogBySlug(slug);
  } catch (e) {
    console.error("Error fetching post:", e);
  }

  if (!post) {
    return notFound();
  }

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
                    {new Date(post.date || post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime || "5 min read"}
                  </div>
                </div>
              </div>

              {post.imageUrl && (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={post.imageUrl}
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
