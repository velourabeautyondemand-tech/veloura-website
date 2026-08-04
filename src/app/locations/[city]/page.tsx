'use client';

import { use, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { MapPin, ChevronRight, Smartphone, Home, Building2, Hotel, CheckCircle2, ArrowRight, Wand2, Star } from 'lucide-react';
import Script from 'next/script';

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://velourabeautyondemand.com/locations" },
      { "@type": "ListItem", "position": 3, "name": city.name }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `VÉLOURA Beauty on Demand - ${city.name}`,
    "description": `Elite mobile beauty services in ${city.name}. We bring licensed professionals to your home, hotel, or office.`,
    "url": `https://velourabeautyondemand.com/locations/${city.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.stateCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": city.slug === 'miami' ? 25.7617 : city.slug === 'new-york' ? 40.7128 : 34.0522,
        "longitude": city.slug === 'miami' ? -80.1918 : city.slug === 'new-york' ? -74.0060 : -118.2437
      },
      "geoRadius": "10000"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>{`Mobile Beauty Services in ${city.name}, ${city.stateCode} | VÉLOURA`}</title>
      <meta name="description" content={`Explore mobile beauty services in ${city.name} with VÉLOURA. Licensed professionals for homes, hotels, weddings, and special events.`} />
      <link rel="canonical" href={`https://velourabeautyondemand.com/locations/${city.slug}`} />
      
      <Script id="city-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="city-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

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
              {city.introduction} VÉLOURA connects customers with approved beauty professionals serving {city.name} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href="/book" className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Book in the App
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-bold rounded-full">
                <Link href="/match" className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Try AI Concierge
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 mb-24">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline">Premium Service Categories</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a fresh manicure at home or professional event styling at a hotel, VÉLOURA has approved professionals ready to serve the {city.name} market.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 font-semibold text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Home & Private Appointments</span>
                  </div>
                  <div className="flex items-center gap-3 font-semibold text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Hotel & Resort Suite Service</span>
                  </div>
                  <div className="flex items-center gap-3 font-semibold text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Weddings & Event Coordination</span>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/20 p-8 rounded-3xl border border-primary/10">
                <h3 className="text-xl font-bold font-headline mb-4">Nearby Active Markets</h3>
                <div className="flex flex-wrap gap-3">
                  {CITIES.filter(c => c.slug !== city.slug).map(nearby => (
                    <Button key={nearby.slug} asChild variant="outline" size="sm">
                      <Link href={`/locations/${nearby.slug}`}>{nearby.name}, {nearby.stateCode}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-headline mb-12 text-center">Available Hubs in {city.name}</h2>
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
