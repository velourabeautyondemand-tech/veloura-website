'use client';

import { use, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { MapPin, ChevronRight, Smartphone, Home, Building2, Hotel, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CityHubPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = use(params);
  const city = useMemo(() => CITIES.find(c => c.slug === citySlug), [citySlug]);

  if (!city) {
    notFound();
  }

  const enabledServices = useMemo(() => {
    const combos = PAGE_COMBINATIONS.filter(p => p.citySlug === city.slug && p.enabled);
    return SERVICES.filter(s => combos.some(p => p.serviceSlug === s.slug));
  }, [city]);

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
              <span className="text-primary">{city.name}</span>
            </nav>
          </div>
        </div>

        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
              Mobile Beauty Services in {city.name}, {city.stateCode}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              {city.introduction}
            </p>
            <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
              <Link href="/book" className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Book in the App
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold font-headline mb-12 text-center">Service Categories in {city.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enabledServices.map(service => (
                <Card key={service.slug} className="hover:shadow-lg transition-all border-primary/10 group">
                  <CardHeader className="bg-primary/5 pb-4">
                    <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-6">{service.shortDescription}</p>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      <Link href={`/locations/${city.slug}/${service.slug}`}>
                        Explore {service.name} <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
