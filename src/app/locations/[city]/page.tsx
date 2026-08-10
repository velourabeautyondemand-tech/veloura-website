
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { MapPin, ChevronRight, Smartphone, Wand2, Star, ShieldCheck, Clock, Home, Hotel, Building2 } from 'lucide-react';
import Link from 'next/link';
type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES.find((item) => item.slug === citySlug);
  if (!city) return {};
  const title = `Mobile Beauty Services in ${city.name} | VÉLOURA`;
  const canonical = `/locations/${city.slug}`;
  return {
    title,
    description: city.introduction,
    alternates: { canonical },
    openGraph: { title, description: city.introduction, url: canonical, type: 'website' },
  };
}

export default async function CityHubPage({ params }: Props) {
  const resolvedParams = await params;
  const city = CITIES.find(c => c.slug === resolvedParams.city);

  if (!city) {
    notFound();
  }

  const cityServices = PAGE_COMBINATIONS.filter(p => p.citySlug === city.slug && p.enabled);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `VÉLOURA ${city.name} | Mobile Beauty Hub`,
    "description": city.introduction,
    "url": `https://velourabeautyondemand.com/locations/${city.slug}`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://velourabeautyondemand.com/locations" },
        { "@type": "ListItem", "position": 3, "name": city.name }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script id="city-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />
      <main className="flex-1">
        <section className="bg-secondary/30 py-20 border-b">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              <span>{city.stateName} Market Hub</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold font-headline mb-6 tracking-tight">VÉLOURA {city.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">{city.introduction}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold">
                <Link href="/book">Book in {city.name}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold">
                <Link href="/match">AI Concierge <Wand2 className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold font-headline mb-12 text-center">Services Available in {city.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityServices.map(combo => {
                const s = SERVICES.find(sv => sv.slug === combo.serviceSlug);
                return s ? (
                  <Card key={s.slug} className="hover:shadow-2xl transition-all border-primary/5 group">
                    <CardHeader className="bg-primary/5 pb-6">
                      <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">On-Demand Service</div>
                      <CardTitle className="font-headline text-2xl">{s.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{s.shortDescription}</p>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        <Link href={`/locations/${city.slug}/${s.slug}`}>View {s.name} <ChevronRight className="ml-1 w-4 h-4" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                ) : null;
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <h2 className="text-3xl font-bold font-headline">Coverage Area</h2>
                  <p className="text-muted-foreground">Our elite professionals serve the following neighborhoods and surrounding areas in {city.name}:</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {city.neighborhoods.map(n => (
                      <li key={n} className="flex items-center gap-2 text-sm font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {n}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-xl space-y-6">
                  <h3 className="font-bold text-xl font-headline">Local Expertise</h3>
                  <ul className="space-y-4">
                    {city.localHighlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
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
