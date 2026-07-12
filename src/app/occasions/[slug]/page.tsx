import { notFound } from 'next/navigation';
import { getSEONodeBySlug, getAllPublishedSEONodes } from '@/lib/seo-marketplace';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, Star, Calendar, ArrowRight, Wand2, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ACTIVE_SERVICES } from '@/lib/marketplace-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPublishedSEONodes()
    .filter(n => n.type === 'occasion')
    .map((node) => ({
      slug: node.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = getSEONodeBySlug('occasion', slug);
  if (!node) return {};

  return {
    title: node.metadata.title,
    description: node.metadata.description,
    alternates: {
      canonical: `https://velourabeautyondemand.com/occasions/${node.slug}`,
    }
  };
}

export default async function OccasionHubPage({ params }: Props) {
  const { slug } = await params;
  const node = getSEONodeBySlug('occasion', slug);

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
          { "@type": "ListItem", "position": 2, "name": "Occasions", "item": "https://velourabeautyondemand.com/occasions" },
          { "@type": "ListItem", "position": 3, "name": node.content.h1 }
        ]
      },
      {
        "@type": "Service",
        "name": node.content.h1,
        "description": node.metadata.description,
        "provider": { "@id": "https://velourabeautyondemand.com/#organization" }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
         {/* Breadcrumbs */}
        <div className="bg-background py-4 border-b">
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-foreground/40">Occasions</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary">{node.slug.replace('-', ' ')}</span>
                </nav>
            </div>
        </div>

        <section className="bg-secondary/50 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Elite Occasion Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">{node.content.h1}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">{node.content.intro}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="accent" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href={node.cta.href}>{node.cta.label} <Wand2 className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold font-headline mb-12 text-center">Planning Your Perfect Day</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {node.content.howItWorks.map((step, i) => (
                <div key={i} className="bg-card p-6 rounded-2xl border border-primary/5 shadow-sm space-y-4">
                   <div className="text-primary font-black text-4xl opacity-20">0{i+1}</div>
                   <h3 className="font-bold text-xl">{step.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/5 rounded-3xl p-8 border border-accent/10 mb-16">
                <h3 className="text-2xl font-bold font-headline mb-6 text-center text-accent">Occasion-Ready Standards</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <p className="font-bold flex items-center gap-2 text-foreground"><Star className="w-5 h-5 text-accent" /> Expert Performance</p>
                        <p className="text-sm text-muted-foreground">Our specialists are trained to deliver professional results under the timelines of weddings and events.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold flex items-center gap-2 text-foreground"><Calendar className="w-5 h-5 text-accent" /> Coordinated Logistics</p>
                        <p className="text-sm text-muted-foreground">We handle the coordination of the glam team so you can focus on the celebration.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-headline text-center">Event Beauty FAQs</h2>
              <Accordion type="single" collapsible className="bg-card border rounded-xl px-6">
                {node.content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-16 text-center">
                 <h3 className="font-bold mb-6 uppercase tracking-widest text-sm opacity-60">Related Services</h3>
                 <div className="flex flex-wrap justify-center gap-3">
                    {ACTIVE_SERVICES.map(s => (
                        <Button key={s.slug} asChild variant="outline" size="sm">
                            <Link href={`/services/${s.slug}`}>{s.name}</Link>
                        </Button>
                    ))}
                 </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-accent-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Book Your Occasion Look</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Don’t leave your event look to chance. Book with VÉLOURA’s elite specialists.</p>
            <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold text-accent rounded-full">
              <Link href={node.cta.href}>{node.cta.label}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
