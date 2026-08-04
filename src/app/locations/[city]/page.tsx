'use client';

import { use, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { 
  MapPin, 
  ChevronRight, 
  Smartphone, 
  Home, 
  Building2, 
  Hotel, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://velourabeautyondemand.com/locations" },
      { "@type": "ListItem", "position": 3, "name": `${city.name}, ${city.stateCode}` }
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
              <span className="text-primary">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              <span>{city.name} Market Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
              Mobile Beauty Services in <br className="hidden md:block" /> <span className="text-primary italic">{city.name}, {city.stateCode}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {city.introduction}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href="/book" className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Download the App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Active Services */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-headline mb-4">Service Categories in {city.name}</h2>
              <p className="text-muted-foreground">Explore localized beauty and lifestyle services delivered to your door.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enabledServices.map(service => (
                <Card key={service.slug} className="hover:shadow-lg transition-all border-primary/10 group overflow-hidden">
                  <CardHeader className="bg-primary/5 pb-4">
                    <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{service.shortDescription}</p>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Link href={`/locations/${city.slug}/${service.slug}`}>
                        Explore {service.name} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Areas */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">Serving Your Neighborhood</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {city.neighborhoods.map((n, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-semibold border border-primary/5 shadow-sm">
                  {n}
                </span>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-primary/5">
                <Home className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">Home Service</h3>
                <p className="text-xs text-muted-foreground">Professional care in your most comfortable environment.</p>
              </div>
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-primary/5">
                <Hotel className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">Hotel Suites</h3>
                <p className="text-xs text-muted-foreground">Premium guest services for travelers and event attendees.</p>
              </div>
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-primary/5">
                <Building2 className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">Office Visits</h3>
                <p className="text-xs text-muted-foreground">Efficient, professional styling for busy corporate schedules.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-headline mb-8">Vetted & Verified in {city.name}</h2>
            <p className="text-lg text-muted-foreground mb-12">
              VÉLOURA connects customers with approved beauty professionals serving {city.name} and surrounding areas. We prioritize safety and quality above all else.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold">Licensed Talent Only</p>
                  <p className="text-xs text-muted-foreground">We verify state-issued cosmetology and esthetician licenses.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold">Identity Verified</p>
                  <p className="text-xs text-muted-foreground">Every pro undergoes multi-step background checks via Checkr.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
