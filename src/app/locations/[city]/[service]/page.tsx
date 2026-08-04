'use client';

import { use, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { MapPin, ChevronRight, Smartphone, CheckCircle2, Home, Hotel, Building2, Sparkles, Star, Wand2, Camera } from 'lucide-react';
import Script from 'next/script';

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://velourabeautyondemand.com/locations" },
      { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://velourabeautyondemand.com/locations/${city.slug}` },
      { "@type": "ListItem", "position": 4, "name": service.name }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} in ${city.name}`,
    "description": combination.uniqueIntro,
    "provider": {
      "@type": "Organization",
      "name": "VÉLOURA Beauty On Demand"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>{`${service.name} in ${city.name}, ${city.stateCode} | VÉLOURA`}</title>
      <meta name="description" content={`Book professional ${service.name.toLowerCase()} in ${city.name} with VÉLOURA. Mobile service delivered to your home or hotel suite.`} />
      <link rel="canonical" href={`https://velourabeautyondemand.com/locations/${city.slug}/${service.slug}`} />

      <Script id="intersection-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="intersection-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Header />
      <main className="flex-1">
        <div className="bg-background py-4 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/locations" className="hover:text-primary">Locations</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/locations/${city.slug}`} className="hover:text-primary">{city.name}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">{service.name}</span>
            </nav>
          </div>
        </div>

        <section className="bg-secondary/30 py-20 md:py-32 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold font-headline mb-6 tracking-tight">
              {service.name} in {city.name}, {city.stateCode}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {combination.uniqueIntro} VÉLOURA connects you with approved professionals serving {city.name} and the surrounding metropolitan area.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">
                <Link href="/book" className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6" />
                  Book in the App
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl font-bold rounded-full">
                <Link href="/match" className="flex items-center gap-2">
                  <Wand2 className="w-6 h-6" />
                  Match with a Pro
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold font-headline">Market Expertise in <span className="text-primary">{city.name}</span></h2>
                <p className="text-lg text-muted-foreground">
                  {combination.uniqueLocalDetails} Our local professionals arrive fully equipped with professional kits, ensuring a luxury studio experience without the commute.
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
              <div className="bg-secondary/20 p-10 rounded-[3rem] border-4 border-white shadow-2xl space-y-6">
                <h3 className="text-2xl font-bold font-headline text-center">Suitable For</h3>
                <ul className="space-y-4">
                  {service.suitableFor.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Venue Icons */}
            <div className="grid sm:grid-cols-3 gap-8 mb-24">
              <div className="text-center space-y-4 p-8 bg-card rounded-2xl border border-primary/5">
                <Home className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">At Home</h3>
                <p className="text-sm text-muted-foreground">Private sessions in your most comfortable environment.</p>
              </div>
              <div className="text-center space-y-4 p-8 bg-card rounded-2xl border border-primary/5">
                <Hotel className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">At Hotels</h3>
                <p className="text-sm text-muted-foreground">Elite suite-side service for travelers and event guests.</p>
              </div>
              <div className="text-center space-y-4 p-8 bg-card rounded-2xl border border-primary/5">
                <Building2 className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">At Offices</h3>
                <p className="text-sm text-muted-foreground">Quick, efficient glam for busy professional schedules.</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold font-headline text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="bg-card border rounded-xl px-6">
                <AccordionItem value="local-q1">
                  <AccordionTrigger className="text-left font-bold">Do you cover all areas of {city.name}?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we serve the main metropolitan area and key neighborhoods including {city.neighborhoods.slice(0, 4).join(', ')}. When booking in the app, your professional's availability will be based on your specific location.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="local-q2">
                  <AccordionTrigger className="text-left font-bold">How soon can I book {service.name.toLowerCase()} in {city.name}?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The VÉLOURA app shows real-time availability. While we recommend booking 24-48 hours in advance for specific time slots, you can often find same-day availability for last-minute needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Experience {city.name}'s Best {service.name}</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Luxury beauty is just a few clicks away. Download the app to match with a {city.name} local expert today.</p>
            <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold text-primary rounded-full">
              <Link href="/book">Download & Book Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
