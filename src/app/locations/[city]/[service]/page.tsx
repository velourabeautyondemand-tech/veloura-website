'use client';

import { use, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { 
  MapPin, 
  ChevronRight, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Star,
  Wand2,
  Home,
  Hotel,
  Building2,
  ArrowRight,
  Info,
  Lightbulb
} from 'lucide-react';

export default function LocationServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city: citySlug, service: serviceSlug } = use(params);
  
  const city = useMemo(() => CITIES.find(c => c.slug === citySlug), [citySlug]);
  const service = useMemo(() => SERVICES.find(s => s.slug === serviceSlug), [serviceSlug]);
  const combination = useMemo(() => 
    PAGE_COMBINATIONS.find(p => p.citySlug === citySlug && p.serviceSlug === serviceSlug && p.enabled),
  [citySlug, serviceSlug]);

  if (!city || !service || !combination) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
          { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://velourabeautyondemand.com/locations" },
          { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://velourabeautyondemand.com/locations/${city.slug}` },
          { "@type": "ListItem", "position": 4, "name": service.name }
        ]
      },
      {
        "@type": "Service",
        "name": `${service.name} in ${city.name}`,
        "description": combination.customDescription || service.shortDescription,
        "provider": { "@type": "Organization", "name": "VÉLOURA" },
        "areaServed": { "@type": "City", "name": city.name }
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
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/locations/${city.slug}`} className="hover:text-primary transition-colors">{city.name}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">{service.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-secondary/30 py-20 md:py-32 border-b">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Elite {service.name} in {city.name}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold font-headline mb-6 tracking-tight leading-tight">
              {service.name} <br className="hidden md:block" /> <span className="text-primary italic">in {city.name}, {city.stateCode}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {combination.uniqueIntro}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">
                <Link href="/book" className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6" />
                  Book in the App
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl font-bold rounded-full bg-white/80">
                <Link href={`/locations/${city.slug}`}>Other Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold font-headline">Beauty Services That <span className="text-primary">Come To You.</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  VÉLOURA Beauty on Demand is built for your lifestyle. Customers may request mobile beauty services for homes, hotels, offices, weddings, photoshoots, and special events. While we do not promise guaranteed availability for every time slot, our elite network of local pros in {city.name} is ready to serve you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 font-semibold text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-secondary/20 p-10 rounded-[3rem] border-4 border-white shadow-2xl relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Star className="w-32 h-32 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-6">Suitable For</h3>
                <ul className="space-y-4">
                  {service.suitableFor.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
            <h2 className="text-3xl font-bold font-headline">Professional Care in {city.name}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "{combination.uniqueLocalDetails}"
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
                <Home className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-bold">Private Homes</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
                <Hotel className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-bold">Hotel Suites</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-bold">Office Spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden rounded-[2rem]">
              <div className="bg-primary p-8 text-white text-center">
                <Lightbulb className="w-10 h-10 mx-auto mb-4" />
                <h2 className="text-3xl font-bold font-headline">Preparation Tips</h2>
                <p className="opacity-90">How to get ready for your {service.name.toLowerCase()} session.</p>
              </div>
              <CardContent className="p-10 space-y-6">
                {service.preparationTips.map((tip, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">{i+1}</div>
                    <p className="text-lg text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-card border rounded-2xl px-6 py-2 shadow-lg">
              {city.uniqueFAQs.map((faq, i) => (
                <AccordionItem key={`city-${i}`} value={`city-${i}`}>
                  <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
              {service.slug === 'mobile-hairstylist' && (
                <AccordionItem value="hair-wet">
                  <AccordionTrigger className="text-left font-bold">Should my hair be wet or dry?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">For blowouts, please have your hair washed and damp. For formal updos, dry 'day-old' hair often provides the best hold.</AccordionContent>
                </AccordionItem>
              )}
              <AccordionItem value="availability">
                <AccordionTrigger className="text-left font-bold">Is availability guaranteed in {city.name}?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">The VÉLOURA app shows real-time availability of professionals near you. While we have a deep network in {city.name}, we recommend booking in advance for peak times.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-primary-foreground text-center overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-headline mb-8">Ready for {city.name}'s Best?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">Download the VÉLOURA app today to match with an elite {service.name.toLowerCase()} professional in your neighborhood.</p>
            <Button asChild size="lg" variant="secondary" className="h-16 px-16 text-xl font-bold rounded-full text-primary shadow-2xl">
              <Link href="/book">Get the App</Link>
            </Button>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Sparkles className="w-full h-full scale-150" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
