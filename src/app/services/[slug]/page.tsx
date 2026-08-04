
import { notFound } from 'next/navigation';
import { ACTIVE_SERVICES, ACTIVE_LOCATIONS } from '@/lib/marketplace-data';
import { getAllPublishedSEONodes } from '@/lib/seo-marketplace';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Clock, MapPin, ArrowRight, ShieldCheck, Wand2, Hotel, Home, Sparkles, ChevronRight, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ACTIVE_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = ACTIVE_SERVICES.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `https://velourabeautyondemand.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://velourabeautyondemand.com/services/${service.slug}`,
      siteName: 'VÉLOURA Beauty On Demand',
      type: 'website',
    }
  };
}

export default async function ServiceHubPage({ params }: Props) {
  const resolvedParams = await params;
  const service = ACTIVE_SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const seoNodes = getAllPublishedSEONodes();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@id": "https://velourabeautyondemand.com/#organization"
    },
    "areaServed": ACTIVE_LOCATIONS.map(l => ({ "@type": "City", "name": l.name }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="bg-background py-4 border-b">
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary">{service.name}</span>
                </nav>
            </div>
        </div>

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
              {service.h1}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg">
                <Link href="/match">Find Your VÉLOURA Match <Wand2 className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-full bg-white/80">
                <Link href="/book" className="flex items-center gap-2">
                   <Smartphone className="w-5 h-5" />
                   Download the App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Localized City Service Hubs */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-headline mb-4">Localized {service.name} Hubs</h2>
              <p className="text-muted-foreground">Select your city for neighborhood-specific coverage and local {service.name.toLowerCase()} experts.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {ACTIVE_LOCATIONS.map((loc) => (
                  <Card key={loc.slug} className="hover:shadow-xl transition-all border-primary/10 overflow-hidden group">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="font-headline flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" /> {loc.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-6">Expert {service.name.toLowerCase()} professionals serving {loc.areas.slice(0, 3).join(', ')}, and beyond.</p>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        <Link href={`/locations/${loc.slug}/${service.slug}`}>
                          {service.name} in {loc.name} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Long Content Section */}
        <section className="py-16 sm:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose lg:prose-lg max-none text-muted-foreground mb-16">
              <h2 className="text-3xl font-bold font-headline text-foreground">Premium {service.name} Delivered To You</h2>
              <p>{service.longDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-primary/10 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="text-primary w-6 h-6" /> Licensed Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Every {service.name.toLowerCase()} expert on our platform is identity-verified and license-authenticated.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="text-primary w-6 h-6" /> Real-Time Booking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Need a {service.name.toLowerCase()} specialist today? Our platform shows real-time availability in your neighborhood.</p>
                </CardContent>
              </Card>
            </div>

            {/* Venue and Occasion Internal Links */}
            <div className="grid sm:grid-cols-3 gap-4 mb-16 text-center">
                {seoNodes.filter(n => n.type === 'venue' || n.type === 'occasion').slice(0, 3).map(node => (
                    <Link key={node.id} href={`/${node.type}s/${node.slug}`} className="p-6 bg-white rounded-xl border hover:border-primary transition-all group shadow-sm">
                        {node.type === 'venue' && node.slug === 'hotels' && <Hotel className="w-6 h-6 text-primary mx-auto mb-3" />}
                        {node.type === 'venue' && node.slug === 'home-service' && <Home className="w-6 h-6 text-primary mx-auto mb-3" />}
                        {node.type === 'occasion' && <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />}
                        <p className="font-bold text-sm">{node.slug.replace('-', ' ')} {service.name}</p>
                    </Link>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-headline text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="bg-card border rounded-xl px-6 shadow-sm">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Experience the Best {service.name}</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Elite care is just a few clicks away. Download the VÉLOURA app to get started.</p>
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
