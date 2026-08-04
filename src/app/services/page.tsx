
import { Metadata } from 'next';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  Search, 
  Download, 
  Users, 
  ChevronRight,
  Sparkles,
  Zap,
  Star,
  CheckCircle2,
  Clock,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { getAllPublishedSEONodes } from '@/lib/seo-marketplace';
import { ServicesFilter } from '@/components/features/services-filter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Beauty On Demand: Nails, Makeup, Hair & Spa Services',
  description: 'Explore mobile beauty and lifestyle services from VÉLOURA, including hair, makeup, nails, skincare, lashes, bridal beauty, photography, and events.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/services',
  },
};

export default function ServicesDirectoryPage() {
  const publishedNodes = getAllPublishedSEONodes();

  const servicesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "VÉLOURA Beauty Services",
    "description": "Comprehensive list of on-demand beauty and lifestyle services.",
    "itemListElement": publishedNodes.map((node, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": node.displayName,
        "description": node.shortDescription,
        "provider": {
          "@type": "Organization",
          "name": "VÉLOURA Beauty On Demand"
        }
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="services-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      <Header />
      <main className="flex-1">
        <div className="bg-background py-4 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">Services</span>
            </nav>
          </div>
        </div>

        <section className="py-20 md:py-32 bg-secondary/50 overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>The Marketplace Directory</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight tracking-tight">
                Mobile Beauty and Lifestyle <br /> Services, <span className="text-primary italic">Wherever You Are</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                VÉLOURA connects customers with independent beauty and lifestyle professionals for appointments at homes, hotels, offices, weddings, photoshoots, and approved event locations. Explore available service categories, then use the VÉLOURA app to request a professional.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                  <a href="#directory">Explore Services</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-bold rounded-full bg-white/80">
                  <Link href="/book" className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Download App
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </section>

        <section id="directory" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Service Categories</h2>
              <p className="text-muted-foreground">Select a category to view specialized mobile offerings.</p>
            </div>

            <ServicesFilter nodes={publishedNodes} />
          </div>
        </section>

        <section className="py-24 bg-secondary/20 border-y border-primary/5">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-headline">How VÉLOURA Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-md border border-primary/5">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">1. Explore</h3>
                <p className="text-sm text-muted-foreground">Browse beauty and lifestyle service categories on the website to see what matches your needs.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-md border border-primary/5">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">2. Download</h3>
                <p className="text-sm text-muted-foreground">Open the VÉLOURA mobile app to view the available experience in your city and submit a request.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-md border border-primary/5">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">3. Connect</h3>
                <p className="text-sm text-muted-foreground">Qualified independent professionals can review suitable opportunities through the platform to fulfill your request.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-card border rounded-2xl p-6 shadow-sm">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">What types of services are available through VÉLOURA?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  VÉLOURA offers an elite network of makeup artists, hairstylists, nail technicians, estheticians, and professional photographers. We also provide specialized event coordination and solution-based beauty for seniors and busy professionals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">Can beauty professionals come to my home or hotel?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. All VÉLOURA services are designed to be mobile. Our professionals arrive fully equipped at your home, hotel suite, office, or event venue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">How do I request a service?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  All service requests, professional selections, and bookings are handled exclusively through the VÉLOURA mobile app, available for iOS and Android.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
