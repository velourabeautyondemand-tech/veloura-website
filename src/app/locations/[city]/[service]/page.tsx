
'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { Sparkles, MapPin, ShieldCheck, Clock, CheckCircle2, ChevronRight, Smartphone, Wand2, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export default function MarketIntersectionPage({ params }: { params: Promise<{ city: string, service: string }> }) {
  const resolvedParams = use(params);
  const city = CITIES.find(c => c.slug === resolvedParams.city);
  const service = SERVICES.find(s => s.slug === resolvedParams.service);
  const combination = PAGE_COMBINATIONS.find(p => p.citySlug === resolvedParams.city && p.serviceSlug === resolvedParams.service && p.enabled);

  if (!city || !service || !combination) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} in ${city.name}`,
    "description": combination.uniqueIntro,
    "provider": { "@type": "Organization", "name": "VÉLOURA" },
    "areaServed": { "@type": "City", "name": city.name },
    "url": `https://velourabeautyondemand.com/locations/${city.slug}/${service.slug}`
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>{combination.customTitle || `${service.name} in ${city.name} | VÉLOURA Mobile Glam`}</title>
      <meta name="description" content={combination.customDescription || combination.uniqueIntro} />
      <link rel="canonical" href={`https://velourabeautyondemand.com/locations/${city.slug}/${service.slug}`} />
      <Script id="intersection-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />
      <main className="flex-1">
        <section className="bg-secondary/30 py-16 border-b">
          <div className="container mx-auto px-4">
             <Button asChild variant="ghost" className="mb-6 -ml-4 hover:bg-transparent text-muted-foreground hover:text-primary">
                <Link href={`/locations/${city.slug}`} className="flex items-center gap-2">
                   <ArrowLeft className="w-4 h-4" /> Back to {city.name} Hub
                </Link>
             </Button>
             <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight tracking-tight">
                  {service.name} <br /> in <span className="text-primary italic">{city.name}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{combination.uniqueIntro}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold shadow-lg">
                    <Link href="/book">Book Now in {city.name}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-white/80">
                    <Link href="/match">Try AI Concierge <Wand2 className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>
             </div>
          </div>
        </section>

        <section className="py-24 bg-background">
           <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose lg:prose-lg max-w-none text-muted-foreground mb-16">
                 <h2 className="text-3xl font-bold font-headline text-foreground">Premium {service.name} Delivered To Your Door</h2>
                 <p>{combination.uniqueLocalDetails}</p>
                 <p>{service.customerIntent}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                 <div className="space-y-6">
                    <h3 className="text-xl font-bold font-headline flex items-center gap-2"><Star className="w-5 h-5 text-primary" /> Key Benefits</h3>
                    <ul className="space-y-3">
                       {service.benefits.map(b => (
                          <li key={b} className="flex items-center gap-2 text-sm font-semibold">
                             <CheckCircle2 className="w-4 h-4 text-primary" /> {b}
                          </li>
                       ))}
                    </ul>
                 </div>
                 <Card className="border-primary/10 shadow-xl bg-primary/5">
                    <CardHeader>
                       <CardTitle className="text-lg font-bold">Market Standards</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="flex items-center gap-3">
                          <ShieldCheck className="w-5 h-5 text-primary" />
                          <p className="text-xs font-bold uppercase">Licensed {city.name} Pros</p>
                       </div>
                       <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <p className="text-xs font-bold uppercase">Real-Time Reliability</p>
                       </div>
                    </CardContent>
                 </Card>
              </div>

              <div className="space-y-8">
                 <h2 className="text-3xl font-bold font-headline text-center">Frequently Asked Questions</h2>
                 <Accordion type="single" collapsible className="bg-card border rounded-xl px-6 shadow-sm">
                    {combination.customFAQs ? combination.customFAQs.map((faq, i) => (
                      <AccordionItem key={i} value={`custom-${i}`}>
                        <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                      </AccordionItem>
                    )) : city.uniqueFAQs.map((faq, i) => (
                      <AccordionItem key={i} value={`city-${i}`}>
                        <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </div>
           </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Experience {service.name} in {city.name}</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">VÉLOURA connects you with the top 10% of local talent. Download the app to book your professional.</p>
            <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold text-primary rounded-full shadow-2xl">
              <Link href="/book">Download the VÉLOURA App</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
