
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ACTIVE_LOCATIONS, ACTIVE_SERVICES } from '@/lib/marketplace-data';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Star, 
  Wand2, 
  Smartphone, 
  ChevronRight, 
  Home, 
  Hotel, 
  Building2,
  ArrowRight
} from 'lucide-react';

type Props = {
  params: Promise<{ locationSlug: string; serviceSlug: string }>;
};

export async function generateStaticParams() {
  const params: { locationSlug: string; serviceSlug: string }[] = [];
  
  ACTIVE_LOCATIONS.forEach(loc => {
    ACTIVE_SERVICES.forEach(service => {
      params.push({
        locationSlug: loc.slug,
        serviceSlug: service.slug
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locationSlug, serviceSlug } = await params;
  const location = ACTIVE_LOCATIONS.find(l => l.slug === locationSlug);
  const service = ACTIVE_SERVICES.find(s => s.slug === serviceSlug);

  if (!location || !service) return {};

  const title = `${service.name} in ${location.name} | Mobile ${service.name} On-Demand`;
  const description = `Book elite ${service.name.toLowerCase()} professionals in ${location.name}. VÉLOURA brings licensed talent directly to your home or hotel suite in ${location.areas.slice(0, 3).join(', ')}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://velourabeautyondemand.com/locations/${location.slug}/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://velourabeautyondemand.com/locations/${location.slug}/${service.slug}`,
    }
  };
}

export default async function IntersectionPage({ params }: Props) {
  const { locationSlug, serviceSlug } = await params;
  const location = ACTIVE_LOCATIONS.find(l => l.slug === locationSlug);
  const service = ACTIVE_SERVICES.find(s => s.slug === serviceSlug);

  if (!location || !service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${service.name} in ${location.name}`,
        "description": `Professional ${service.name.toLowerCase()} services delivered to your door in ${location.name}.`,
        "provider": { "@id": "https://velourabeautyondemand.com/#organization" },
        "areaServed": { "@type": "City", "name": location.name }
      },
      {
        "@type": "LocalBusiness",
        "name": `VÉLOURA ${location.name} ${service.name}`,
        "image": "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c",
        "@id": `https://velourabeautyondemand.com/locations/${location.slug}/${service.slug}`,
        "url": `https://velourabeautyondemand.com/locations/${location.slug}/${service.slug}`,
        "telephone": "(305) 317-2759",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.name,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": location.slug === 'miami' ? 25.7617 : location.slug === 'new-york' ? 40.7128 : 34.0522,
            "longitude": location.slug === 'miami' ? -80.1918 : location.slug === 'new-york' ? -74.0060 : -118.2437
          },
          "geoRadius": "10000"
        }
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
              <Link href={`/locations/${location.slug}`} className="hover:text-primary transition-colors">{location.name}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">{service.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              <span>Elite {service.name} in {location.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
              Professional {service.name} <br className="hidden md:block" /> <span className="text-primary italic">Delivered in {location.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Skip the traffic and the salon wait. VÉLOURA brings licensed {service.name.toLowerCase()} experts directly to you in {location.areas.slice(0, 3).join(', ')}, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href="/match">Match with a Local Pro <Wand2 className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-full">
                <Link href="/book" className="flex items-center gap-2">
                   <Smartphone className="w-5 h-5" />
                   Download App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Coverage & Local Details */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline">{service.name} Specialists Near You</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Finding a reliable <strong>{service.name.toLowerCase()} professional in {location.name}</strong> has never been easier. Whether you're getting ready for a wedding at a hotel, a corporate event at the office, or simply want a luxury treatment at home, our platform connects you with the top 10% of local talent.
                </p>
                <ul className="space-y-4">
                  {location.areas.map((area, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground">
                      <Star className="w-4 h-4 text-primary fill-primary" /> Mobile Service in {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/20 p-8 rounded-3xl border border-primary/10 space-y-6">
                <h3 className="text-xl font-bold font-headline">Why VÉLOURA {location.name}?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-sm"><strong>100% Licensed:</strong> We verify all state-issued credentials for {location.name} pros.</p>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-sm"><strong>Punctuality Guarantee:</strong> Our pros are local experts who know {location.name} traffic and logistics.</p>
                  </div>
                  <div className="flex gap-4">
                    <Star className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-sm"><strong>Five-Star Standard:</strong> Every session is designed to deliver a high-end salon experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">Where We Come To You in {location.name}</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-primary/5">
                <Home className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">Your Home</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Luxury {service.name.toLowerCase()} in your most comfortable environment.</p>
              </div>
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-primary/5">
                <Hotel className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">Your Hotel</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Premium suite-side service for travelers in {location.name}.</p>
              </div>
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-primary/5">
                <Building2 className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-bold">Your Office</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Efficient, professional styling for busy {location.name} corporate schedules.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">FAQs: {service.name} in {location.name}</h2>
            <Accordion type="single" collapsible className="bg-card border rounded-xl px-6">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
              <AccordionItem value="location-faq">
                <AccordionTrigger className="text-left font-bold">Do you cover all of {location.name}?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we serve the majority of the {location.name} metro area, including {location.areas.join(', ')}. When you enter your address in the VÉLOURA app, we'll show you all available professionals within a 6-mile radius.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Experience {location.name}'s Best {service.name}</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Luxury is just a few clicks away. Download the app to match with a pro in {location.name} today.</p>
            <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold text-primary rounded-full">
              <Link href="/book">Download & Book in the App</Link>
            </Button>
          </div>
        </section>

        {/* Internal Link Matrix */}
        <section className="py-12 bg-background border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Other Services in {location.name}</h4>
                <div className="flex flex-col gap-2 text-sm">
                  {ACTIVE_SERVICES.filter(s => s.slug !== service.slug).map(s => (
                    <Link key={s.slug} href={`/locations/${location.slug}/${s.slug}`} className="text-muted-foreground hover:text-primary">{s.name}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-4">{service.name} Hubs</h4>
                <div className="flex flex-col gap-2 text-sm">
                  {ACTIVE_LOCATIONS.filter(l => l.slug !== location.slug).map(l => (
                    <Link key={l.slug} href={`/locations/${l.slug}/${service.slug}`} className="text-muted-foreground hover:text-primary">{l.name}</Link>
                  ))}
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
