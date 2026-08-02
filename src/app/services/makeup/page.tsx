
import { Metadata } from 'next';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Wand2, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Star,
  ChevronRight,
  Heart,
  Camera,
  Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Professional Mobile Makeup Artist Services | VÉLOURA',
  description: 'Book elite makeup artists for on-demand glam. At-home and hotel services for weddings, events, and photoshoots in LA, NYC, and Miami. Licensed pros only.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/services/makeup',
  },
  openGraph: {
    title: 'Mobile Makeup Artistry | Professional Glam On-Demand',
    description: 'VÉLOURA connects you with elite, licensed makeup artists for any occasion.',
    url: 'https://velourabeautyondemand.com/services/makeup',
  }
};

export default function MakeupServicePage() {
  const naturalMakeup = PlaceHolderImages.find(p => p.id === 'makeup_1');
  const eventMakeup = PlaceHolderImages.find(p => p.id === 'makeup_2');
  const bridalMakeup = PlaceHolderImages.find(p => p.id === 'makeup_3');

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://velourabeautyondemand.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Makeup Artistry" }
        ]
      },
      {
        "@type": "Service",
        "name": "Professional Makeup Artistry On-Demand",
        "serviceType": "Mobile Beauty Service",
        "provider": {
          "@type": "Organization",
          "name": "VÉLOURA",
          "url": "https://velourabeautyondemand.com"
        },
        "areaServed": [
          { "@type": "City", "name": "Los Angeles" },
          { "@type": "City", "name": "New York City" },
          { "@type": "City", "name": "Miami" }
        ],
        "description": "Professional on-site makeup artistry for weddings, events, photoshoots, and everyday glam. Licensed and background-checked professionals."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need to have my own makeup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, our professionals arrive with a fully equipped professional kit featuring high-end, sanitised products. However, if you have specific skin sensitivities or a favorite foundation, you are welcome to have it ready."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a mobile makeup session take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard glam session typically takes between 60 to 90 minutes. Bridal sessions or complex editorial looks may take longer."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Breadcrumbs Navigation */}
        <div className="bg-background py-4 border-b">
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary">Makeup Artistry</span>
                </nav>
            </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-secondary/50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Elite Talent Network</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 leading-tight">
                Professional <span className="text-primary italic">Makeup Artistry</span> Delivered to You.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Skip the salon stress. VÉLOURA connects you with the top 10% of licensed makeup artists for five-star glam at your home, hotel, or office.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                  <Link href="/match">
                    Find My Match <Wand2 className="ml-2 w-5 h-5" />
                  </Link>
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
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">
                  Beauty That Works With <br /> <span className="text-primary">Your Lifestyle.</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Licensed & Background Checked</h3>
                      <p className="text-muted-foreground text-sm">Every artist on VÉLOURA is identity-verified and state-license authenticated for your peace of mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Real-Time Reliability</h3>
                      <p className="text-muted-foreground text-sm">Our platform manages the logistics, ensuring your pro arrives on time and fully prepared to glam.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary shrink-0">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Seamless In-App Experience</h3>
                      <p className="text-muted-foreground text-sm">From professional portfolios and client reviews to secure Stripe payments, everything is handled inside the app.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white">
                <Image
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1080&auto=format&fit=crop"
                  alt="Professional Makeup Artist at Work"
                  fill
                  className="object-cover"
                  data-ai-hint="makeup artist"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Categories Grid */}
        <section className="py-24 bg-secondary/20 border-y border-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Choose Your Look</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From soft naturals to high-fashion drama, our network features specialists in every category.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={naturalMakeup?.imageUrl || "https://picsum.photos/seed/natural/800/1000"}
                    alt="Natural Makeup Look"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint="natural makeup"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold font-headline">Everyday Essentials</h3>
                    <p className="text-sm opacity-90 mt-2">Soft glam for meetings, dates, or a "no-makeup" glow.</p>
                  </div>
                </div>
              </Card>

              <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={eventMakeup?.imageUrl || "https://picsum.photos/seed/event/800/1000"}
                    alt="Event Makeup Glam"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint="glam makeup"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold font-headline">Special Occasions</h3>
                    <p className="text-sm opacity-90 mt-2">Bold, camera-ready glam for parties, proms, and galas.</p>
                  </div>
                </div>
              </Card>

              <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={bridalMakeup?.imageUrl || "https://picsum.photos/seed/bridal/800/1000"}
                    alt="Bridal Makeup Artistry"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint="bridal makeup"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold font-headline">Bridal & Wedding</h3>
                    <p className="text-sm opacity-90 mt-2">Timeless, high-definition elegance for your big day.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Hubs */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-primary-foreground text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MapPin className="w-64 h-64" />
              </div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold font-headline">Where We Glam</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">We are currently booking elite artists in these major metropolitan markets:</p>
                <div className="flex flex-wrap justify-center gap-8 text-2xl font-bold font-headline italic">
                   <Link href="/locations/los-angeles" className="hover:underline">Los Angeles</Link>
                   <span className="opacity-40">•</span>
                   <Link href="/locations/new-york" className="hover:underline">New York City</Link>
                   <span className="opacity-40">•</span>
                   <Link href="/locations/miami" className="hover:underline">Miami</Link>
                </div>
                <div className="pt-8">
                   <Button asChild variant="secondary" size="lg" className="rounded-full h-14 px-12 text-primary font-bold shadow-lg">
                      <Link href="/book">Book in Your City</Link>
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-center mb-12">Makeup FAQs</h2>
            <Accordion type="single" collapsible className="bg-card border rounded-2xl p-6 shadow-sm">
              <AccordionItem value="prep">
                <AccordionTrigger className="text-left font-bold">How should I prepare for my makeup session?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Please have a clean, moisturized face and arrive with any facial hair groomed as desired. Ensure you have a space with good natural light and a chair near a power outlet if your artist needs to use hair tools for a total look.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sanitation">
                <AccordionTrigger className="text-left font-bold">What are VÉLOURA's sanitation standards?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Hygiene is our top priority. All VÉLOURA artists must wear masks during application. They use sanitized brushes, disposable applicators, and hospital-grade disinfectants for their palettes and toolkits between every client.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="products">
                <AccordionTrigger className="text-left font-bold">What product brands do the artists use?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our professionals use high-performance, professional-grade kits featuring luxury brands like MAC, NARS, Charlotte Tilbury, and Danessa Myricks, ensuring your look lasts through events and high-res photography.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Internal SEO Linking & Footer */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
             <div className="max-w-4xl mx-auto space-y-12">
                <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                    <h2 className="text-3xl font-bold font-headline text-foreground">Why VÉLOURA is the Best Choice for On-Demand Makeup</h2>
                    <p>
                        In today’s fast-paced environment, the luxury of time is unparalleled. Searching for a <strong>makeup artist near me</strong> often leads to unverified freelance listings. VÉLOURA changes the search by offering a centralized, premium marketplace where quality is guaranteed.
                    </p>
                    <p>
                        Whether you are a traveler needing <strong>hotel room makeup services</strong> in Midtown, a bride looking for <strong>on-site bridal glam</strong> in Beverly Hills, or a professional needing a quick refresh in Miami, our platform scales to meet your needs.
                    </p>
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 not-prose">
                    <Link href="/services/hair" className="flex items-center justify-between p-6 bg-card rounded-2xl border hover:border-primary transition-colors group">
                        <div className="flex flex-col">
                            <span className="font-bold">Hair Styling</span>
                            <span className="text-[10px] text-muted-foreground">Blowouts & Updos</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/services/nails" className="flex items-center justify-between p-6 bg-card rounded-2xl border hover:border-primary transition-colors group">
                        <div className="flex flex-col">
                            <span className="font-bold">Nail Services</span>
                            <span className="text-[10px] text-muted-foreground">Manis & Pedis</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/match" className="flex items-center justify-between p-6 bg-primary/10 rounded-2xl border-2 border-primary/20 hover:bg-primary/20 transition-all group">
                        <div className="flex flex-col">
                            <span className="font-bold text-primary">AI Concierge</span>
                            <span className="text-[10px] text-primary/70">Smart Matching</span>
                        </div>
                        <Wand2 className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
                    </Link>
                </div>

                <div className="text-center pt-8">
                   <Button asChild size="lg" className="rounded-full h-16 px-12 text-xl font-bold shadow-2xl">
                      <Link href="/book">Download & Book Your Artist</Link>
                   </Button>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
