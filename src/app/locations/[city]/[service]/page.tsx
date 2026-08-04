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
import { MapPin, ChevronRight, Smartphone, CheckCircle2, Home, Hotel, Building2, Sparkles, Star } from 'lucide-react';

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

  return (
    <div className="flex flex-col min-h-screen">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              {combination.uniqueIntro}
            </p>
            <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">
              <Link href="/book" className="flex items-center gap-2">
                <Smartphone className="w-6 h-6" />
                Book in the App
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold font-headline">Beauty Services That <span className="text-primary">Come To You.</span></h2>
                <p className="text-lg text-muted-foreground">
                  VÉLOURA Beauty on Demand connects customers with approved beauty professionals serving {city.name} for homes, hotels, offices, weddings, and special events. While we do not promise guaranteed availability for every time slot, our local pro network is ready to serve.
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
              <div className="bg-secondary/20 p-10 rounded-[3rem] border-4 border-white shadow-2xl">
                <h3 className="text-2xl font-bold font-headline mb-6">Suitable For</h3>
                <ul className="space-y-4">
                  {service.suitableFor.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                      <Star className="w-5 h-5 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
