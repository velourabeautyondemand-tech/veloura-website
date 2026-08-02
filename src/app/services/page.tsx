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

export const metadata: Metadata = {
  title: 'Mobile Beauty Services | Hair, Makeup, Nails & More | VÉLOURA',
  description: 'Explore mobile beauty and lifestyle services from VÉLOURA, including hair, makeup, nails, skincare, lashes, bridal beauty, photography, and events. Download the app to request a professional.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/services',
  },
  openGraph: {
    type: 'website',
    url: 'https://velourabeautyondemand.com/services',
    title: 'Mobile Beauty Services | VÉLOURA Beauty On Demand',
    description: 'Explore professional beauty and lifestyle services available for homes, hotels, offices, weddings, photoshoots, and events.',
  }
};

export default function ServicesDirectoryPage() {
  const publishedNodes = getAllPublishedSEONodes();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://velourabeautyondemand.com/services/#webpage",
        "url": "https://velourabeautyondemand.com/services",
        "name": "Mobile Beauty & Lifestyle Services Directory",
        "description": "A comprehensive directory of on-demand professional beauty and creative services available through VÉLOURA.",
        "isPartOf": { "@id": "https://velourabeautyondemand.com/#website" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://velourabeautyondemand.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://velourabeautyondemand.com/services"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "VÉLOURA Service Categories",
        "itemListElement": publishedNodes.map((node, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": node.displayName,
          "url": `https://velourabeautyondemand.com${node.cta.href}`
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of services are available through VÉLOURA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VÉLOURA offers an elite network of makeup artists, hairstylists, nail technicians, estheticians, and professional photographers. We also provide specialized event coordination and solution-based beauty for seniors and busy professionals."
            }
          },
          {
            "@type": "Question",
            "name": "Can beauty professionals come to my home or hotel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All VÉLOURA services are designed to be mobile. Our professionals arrive fully equipped at your home, hotel suite, office, or event venue."
            }
          },
          {
            "@type": "Question",
            "name": "How do I request a service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All service requests, professional selections, and bookings are handled exclusively through the VÉLOURA mobile app, available for iOS and Android."
            }
          },
          {
            "@type": "Question",
            "name": "Does VÉLOURA offer wedding and event beauty services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We specialize in on-site bridal glam, event styling, and coordinated team support for weddings and large-scale productions."
            }
          },
          {
            "@type": "Question",
            "name": "How can beauty professionals join VÉLOURA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Independent licensed professionals can apply through our 'Join Our Team' page. Applicants undergo a vetting process, including identity and background checks, before activation on the platform."
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
        {/* Breadcrumb Path */}
        <div className="bg-background py-4 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">Services</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
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

        {/* Marketplace Directory Section */}
        <section id="directory" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Service Categories</h2>
              <p className="text-muted-foreground">Select a category to view specialized mobile offerings.</p>
            </div>

            <ServicesFilter nodes={publishedNodes} />
          </div>
        </section>

        {/* How VÉLOURA Works */}
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

        {/* Venue/Location Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">
                  Beauty Services for Homes, <br /> <span className="text-primary">Hotels, Offices and Events</span>
                </h2>
                <div className="prose text-muted-foreground leading-relaxed">
                  <p>
                    VÉLOURA is architected to move with your life. Mobile services provide essential support for:
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <CheckCircle2 className="text-primary w-5 h-5" /> Home appointments
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <CheckCircle2 className="text-primary w-5 h-5" /> Hotel guests & suite service
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <CheckCircle2 className="text-primary w-5 h-5" /> Weddings & bridal parties
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <CheckCircle2 className="text-primary w-5 h-5" /> Corporate wellness & office glam
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <CheckCircle2 className="text-primary w-5 h-5" /> Photoshoots & production sets
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <CheckCircle2 className="text-primary w-5 h-5" /> Clients with mobility challenges
                  </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href="/venues/hotels">Hotel Beauty Hub</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href="/occasions/weddings">Wedding Beauty Hub</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href="/solutions/seniors">Senior Beauty Hub</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square bg-secondary rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white">
                <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                  <Zap className="w-32 h-32" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">A More Convenient Way to Discover Beauty Professionals</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              VÉLOURA provides the infrastructure for safe and professional mobile encounters. Professionals on the platform complete applicable onboarding requirements, including identity verification. Customers can review service qualifications and detailed professional profiles inside the app.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <ShieldCheck className="w-10 h-10 mx-auto opacity-80" />
                <p className="font-bold">Verified Professionals</p>
              </div>
              <div className="space-y-2">
                <Smartphone className="w-10 h-10 mx-auto opacity-80" />
                <p className="font-bold">Secure In-App Payments</p>
              </div>
              <div className="space-y-2">
                <Star className="w-10 h-10 mx-auto opacity-80" />
                <p className="font-bold">Elite Performance Standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-secondary/30 p-8 md:p-16 rounded-[3rem] border border-primary/5">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                  <Briefcase className="w-3 h-3" /> Professional Partners
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">Grow Your Independent Beauty Business</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Join a community of elite creative entrepreneurs. Professionals can explore opportunities to connect with customers seeking mobile services across LA, NYC, and Miami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-full font-bold">
                    <Link href="/apply">Learn About Joining VÉLOURA</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full font-bold border-primary text-primary">
                    <Link href="/talent-agency">Explore the Talent Agency</Link>
                  </Button>
                </div>
              </div>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-24 h-24 text-primary opacity-40" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-card border rounded-2xl p-6 shadow-sm">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">What types of services are available through VÉLOURA?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  VÉLOURA offers a diverse menu of on-demand beauty and creative services, including hair styling (blowouts, updos), makeup artistry (bridal, event, everyday), nail care (gel manis, spa pedis), skincare, lashes, and professional photography. We also support event planning and coordination.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">Can beauty professionals come to my home or hotel?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. The VÉLOURA model is mobile-first. Our professionals are prepared to deliver high-end salon results at your home, hotel suite, office, or event location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">How do I request a service?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  To request a service, download the VÉLOURA Beauty on Demand app from the App Store or Google Play. Once you create a profile, you can browse available services in your city, view professional portfolios, and submit a request for a specific time and location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">Does VÉLOURA offer wedding and event beauty services?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we have specialized teams and wedding packages for bridal parties and events. Our Talent Agency can coordinate multiple professionals for large groups to ensure everyone is ready on schedule.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-bold">How can beauty professionals join VÉLOURA?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Independent beauty and creative professionals can submit an application via our website or app. VÉLOURA maintains a high standard of quality; all applicants must pass a multi-step vetting process, including identity and credential verification, before they are activated to receive customer requests.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Global Footer Links Section */}
        <section className="py-12 bg-secondary/20 border-t">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-8">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold">
              <Link href="/match" className="hover:text-primary transition-colors">AI Concierge</Link>
              <Link href="/talent-agency" className="hover:text-primary transition-colors">Talent Agency</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">The VÉLOURA Journal</Link>
              <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
