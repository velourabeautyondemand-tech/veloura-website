
import { notFound } from 'next/navigation';
import { getNodeBySlug, getPublishedNodesByType } from '@/lib/registry';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldCheck, Clock, MapPin, ArrowRight, Wand2, CheckCircle2, Home, Building2, Palmtree } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ACTIVE_SERVICES } from '@/lib/marketplace-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedNodesByType('venue').map((node) => ({
    slug: node.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = getNodeBySlug('venue', slug);
  if (!node) return {};

  return {
    title: node.metadata.title,
    description: node.metadata.description,
    alternates: {
      canonical: `https://velourabeautyondemand.com/venues/${node.slug}`,
    }
  };
}

export default async function VenueHubPage({ params }: Props) {
  const { slug } = await params;
  const node = getNodeBySlug('venue', slug);

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
          { "@type": "ListItem", "position": 2, "name": "Venues", "item": "https://velourabeautyondemand.com/venues" },
          { "@type": "ListItem", "position": 3, "name": node.content.h1 }
        ]
      },
      {
        "@type": "Service",
        "name": node.content.h1,
        "description": node.metadata.description,
        "provider": { "@id": "https://velourabeautyondemand.com/#organization" },
        "areaServed": ["Los Angeles", "New York City", "Miami"]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/50 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              <span>Elite Venue Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">{node.content.h1}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">{node.content.intro}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href="/match">Find My Match <Wand2 className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold font-headline mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {node.content.howItWorks.map((step, i) => (
                <div key={i} className="text-center space-y-4">
                   <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto text-xl">{i+1}</div>
                   <h3 className="font-bold text-xl">{step.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 mb-16">
                <h3 className="text-2xl font-bold font-headline mb-6 text-center">Trust & Safety</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                        <div>
                            <p className="font-bold">Fully Vetted Pros</p>
                            <p className="text-xs text-muted-foreground">Every professional undergoes identity and background checks via Checkr.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <div>
                            <p className="font-bold">Licensed Talent Only</p>
                            <p className="text-xs text-muted-foreground">We verify state-issued cosmetology and esthetician licenses for all beauty pros.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-headline text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="bg-card border rounded-xl px-6">
                {node.content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-16 pt-12 border-t text-center">
                 <h3 className="font-bold mb-6">Explore Available Services</h3>
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

        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Experience VÉLOURA {slug === 'hotels' ? 'Guest' : 'At-Home'} Services</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Elite beauty is just a few clicks away. Book your professional today.</p>
            <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold text-primary rounded-full">
              <Link href="/match">Book Your Match</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
