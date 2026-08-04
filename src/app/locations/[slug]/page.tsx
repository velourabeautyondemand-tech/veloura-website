
import { notFound } from 'next/navigation';
import { ACTIVE_LOCATIONS, ACTIVE_SERVICES } from '@/lib/marketplace-data';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ArrowRight, Home, Building2, Palmtree, Smartphone, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ACTIVE_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const location = ACTIVE_LOCATIONS.find((l) => l.slug === resolvedParams.slug);
  if (!location) return {};

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    alternates: {
      canonical: `https://velourabeautyondemand.com/locations/${location.slug}`,
    }
  };
}

export default async function LocationHubPage({ params }: Props) {
  const resolvedParams = await params;
  const location = ACTIVE_LOCATIONS.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
              <MapPin className="w-4 h-4" />
              <span>LICENSED PROS IN {location.name.toUpperCase()}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
              {location.h1}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href="/match">Try AI Concierge <Wand2 className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-bold rounded-full bg-white/80">
                <Link href="/book" className="flex items-center gap-2">
                   <Smartphone className="w-5 h-5" />
                   Download App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-12 bg-background border-b">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Serving Your Neighborhood</h2>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold uppercase tracking-widest">
              {location.areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localized Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-headline mb-4">{location.name} Local Service Hubs</h2>
              <p className="text-muted-foreground">Select a specific service for localized expertise and pricing in {location.name}.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ACTIVE_SERVICES.map((service) => (
                <Card key={service.slug} className="hover:shadow-lg transition-all border-primary/10 overflow-hidden group">
                  <CardHeader className="bg-primary/5 border-b">
                    <CardTitle className="font-headline">{service.name} in {location.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">Elite mobile {service.name.toLowerCase()} delivered to your door in {location.name}.</p>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Link href={`/locations/${location.slug}/${service.slug}`}>
                        Explore Local {service.name} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">Where We Come To You in {location.name}</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-full w-fit mx-auto shadow-sm">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold">Your Home</h3>
                <p className="text-sm text-muted-foreground">Luxury salon results in your most comfortable environment.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-full w-fit mx-auto shadow-sm">
                  <Palmtree className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold">Your Hotel</h3>
                <p className="text-sm text-muted-foreground">Premium guest services for travelers and event attendees.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-full w-fit mx-auto shadow-sm">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold">Your Office</h3>
                <p className="text-sm text-muted-foreground">Efficient, professional styling for busy corporate schedules.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Redefining Beauty in {location.name}</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join thousands of satisfied clients who choose VÉLOURA for elite on-demand beauty.</p>
            <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold text-primary rounded-full">
              <Link href="/book">Find Professionals in the App</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
