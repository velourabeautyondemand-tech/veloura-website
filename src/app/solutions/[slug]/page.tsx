
import { notFound } from 'next/navigation';
import { getNodeBySlug, getPublishedNodesByType } from '@/lib/registry';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, HandHeart, ShieldCheck, ArrowRight, Wand2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedNodesByType('solution').map((node) => ({
    slug: node.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = getNodeBySlug('solution', slug);
  if (!node) return {};

  return {
    title: node.metadata.title,
    description: node.metadata.description,
    alternates: {
      canonical: `https://velourabeautyondemand.com/solutions/${node.slug}`,
    }
  };
}

export default async function SolutionHubPage({ params }: Props) {
  const { slug } = await params;
  const node = getNodeBySlug('solution', slug);

  if (!node) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://velourabeautyondemand.com/solutions" },
          { "@type": "ListItem", "position": 3, "name": node.content.h1 }
        ]
      },
      {
        "@type": "WebPage",
        "name": node.content.h1,
        "description": node.metadata.description,
        "publisher": { "@id": "https://velourabeautyondemand.com/#organization" }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <HandHeart className="w-4 h-4" />
              <span>Dedicated Care Solution</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">{node.content.h1}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">{node.content.intro}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href="/contact">Request Care Assessment</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-headline mb-12 text-center">The VÉLOURA Care Approach</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {node.content.howItWorks.map((step, i) => (
                <div key={i} className="text-center space-y-4">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6" />
                   </div>
                   <h3 className="font-bold text-lg">{step.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <Card className="border-primary/20 shadow-xl mb-16 overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="font-headline flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6" />
                        Safe & Dignified Care
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-4">
                    <p className="text-muted-foreground italic">"We believe that beauty services are not just about aesthetics—they are about dignity, routine, and emotional well-being."</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-primary w-5 h-5" /> Background-checked providers</li>
                        <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-primary w-5 h-5" /> Specialized mobility-limited training</li>
                        <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-primary w-5 h-5" /> Gentle, non-toxic products</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-headline text-center">Solution FAQs</h2>
              <Accordion type="single" collapsible className="bg-card border rounded-xl px-6">
                {node.content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Restoring Routine & Dignity</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Discuss a personalized care plan for your loved one or yourself.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button asChild size="lg" className="h-14 px-12 text-lg font-bold rounded-full">
                    <Link href="/contact">Contact Care Team</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-12 text-lg font-bold rounded-full border-primary text-primary">
                    <Link href="/blog/in-home-beauty-services-for-elderly">Read Care Guide</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
