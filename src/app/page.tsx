
import Link from 'next/link';
import { Heart, HandHeart, Sparkles, Briefcase, Newspaper, Smartphone, Layout, Clock, Home, ShieldCheck, Zap, Star, Wand2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { SubscribeForm } from '@/components/features/subscribe-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DiscountPopup } from '@/components/features/discount-popup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://velourabeautyondemand.com/',
  },
};

const useCases = [
  {
    icon: Clock,
    title: 'Last-Minute Needs',
    description: 'Glam, photographer, or event support — right when you need it.',
  },
  {
    icon: Briefcase,
    title: 'Busy Schedules',
    description: 'No traffic. No waiting. Just more time for what matters.',
  },
  {
    icon: Home,
    title: 'At-Home Convenience',
    description: 'Stay in your space. We bring everything to you.',
  },
  {
    icon: HandHeart,
    title: 'New Moms',
    description: 'Gentle, relaxing care at home-yes, even during nap time.',
  },
  {
    icon: Sparkles,
    title: 'Recovery & Wellness',
    description: 'Professional, respectful care — where you feel most comfortable.',
  },
  {
    icon: Layout,
    title: 'Real-Life Moments',
    description: 'From everyday needs to special occasions — handled seamlessly.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Download & Explore',
    description: 'Get the VÉLOURA Beauty on Demand app on iOS or Android. Browse our curated menu of luxury beauty, photography, and event services.',
  },
  {
    step: '02',
    title: 'Select Your Pro',
    description: 'View profiles, ratings, and portfolios of elite, vetted professionals available in your area.',
  },
  {
    step: '03',
    title: 'Book Your Moment',
    description: 'Choose a time and location that fits your life. Our pros arrive fully equipped to deliver the salon experience to your door.',
  },
  {
    step: '04',
    title: 'Relax & Enjoy',
    description: 'Experience professional care in the comfort of your home. No traffic, no waiting—just luxury on your terms.',
  }
];

const platformBenefits = [
  {
    icon: ShieldCheck,
    title: 'Vetted Professionals',
    description: 'Every VÉLOURA Beauty on Demand pro undergoes rigorous identity and background checks to ensure your safety and quality of service.',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Our real-time scheduling system lets you book last-minute or plan ahead with confidence.',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'We partner with leading beauty brands and top-tier talent to provide five-star results every time.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Enjoy one-on-one attention and services tailored specifically to your needs and environment.',
  }
];

const problemsSolved = [
    {
        problem: '"I have a last-minute event."',
        solution: 'On-demand glam for runway, photoshoots, VIP parties-pros arrive equipped and ready.'
    },
    {
        problem: '"My schedule is too tight."',
        solution: 'Express services that fit a lunch break or between meetings-professional, efficient, elegant.'
    },
    {
        problem: '"I can\'t travel easily."',
        solution: 'In-home, gentle care designed for comfort and well-being.'
    },
    {
        problem: '"I want luxury without the stress."',
        solution: 'Five-star products and pros-without traffic, waiting, or parking.'
    }
];

export default function HomePage() {
  const interfaceImages = [
    PlaceHolderImages.find(p => p.id === 'interface_1'),
    PlaceHolderImages.find(p => p.id === 'interface_2'),
    PlaceHolderImages.find(p => p.id === 'interface_3'),
    PlaceHolderImages.find(p => p.id === 'interface_4'),
    PlaceHolderImages.find(p => p.id === 'interface_5'),
  ].filter(Boolean);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://velourabeautyondemand.com/#organization",
        "name": "VÉLOURA Beauty On Demand",
        "legalName": "iAmDreamMaker Production Group LLC",
        "url": "https://velourabeautyondemand.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://velourabeautyondemand.com/#logo",
          "url": "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c",
          "contentUrl": "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c",
          "caption": "VÉLOURA Beauty On Demand"
        },
        "image": {
          "@id": "https://velourabeautyondemand.com/#logo"
        },
        "description": "VÉLOURA Beauty On Demand is an on-demand beauty marketplace connecting customers with licensed beauty professionals for mobile beauty services at homes, hotels, offices, weddings, events, and corporate locations across the United States.",
        "sameAs": [
          "https://www.instagram.com/veloura_beauty_x/",
          "https://www.youtube.com/@VÉLOURABeautyonDemand",
          "https://blog.velourabeautyondemand.com/"
        ],
        "knowsAbout": [
          "Mobile beauty services",
          "On-demand beauty services",
          "At-home beauty services",
          "Hotel beauty services",
          "Bridal beauty services",
          "Accessible beauty services",
          "Beauty services for seniors",
          "Mobile hairstylists",
          "Mobile makeup artists",
          "Mobile nail technicians",
          "Independent beauty professionals",
          "Beauty professional careers"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://velourabeautyondemand.com/#website",
        "url": "https://velourabeautyondemand.com/",
        "name": "VÉLOURA Beauty On Demand",
        "description": "Book mobile beauty professionals for services at your home, hotel, office, wedding, or event.",
        "publisher": {
          "@id": "https://velourabeautyondemand.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://velourabeautyondemand.com/#webpage",
        "url": "https://velourabeautyondemand.com/",
        "name": "VÉLOURA Beauty On Demand | Mobile Beauty Marketplace",
        "isPartOf": {
          "@id": "https://velourabeautyondemand.com/#website"
        },
        "about": {
          "@id": "https://velourabeautyondemand.com/#organization"
        },
        "description": "Premium on-demand beauty services delivered to your door. Book licensed professionals for nails, hair, makeup, and more."
      },
      {
        "@type": "MobileApplication",
        "name": "VÉLOURA Beauty on Demand",
        "operatingSystem": "iOS, Android",
        "applicationCategory": "LifestyleApplication",
        "url": "https://velourabeautyondemand.com",
        "author": {
          "@id": "https://velourabeautyondemand.com/#organization"
        },
        "publisher": {
          "@id": "https://velourabeautyondemand.com/#organization"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "VÉLOURA Beauty on Demand",
        "image": "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c",
        "url": "https://velourabeautyondemand.com",
        "priceRange": "$$",
        "areaServed": ["Los Angeles", "New York City", "Miami"],
        "parentOrganization": {
          "@id": "https://velourabeautyondemand.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Header />
      <DiscountPopup />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline uppercase">
                 VÉLOURA Beauty on Demand
              </h1>
              <p className="mt-4 text-lg text-muted-foreground font-semibold">
                Where technology meets beauty. One App. One Click.
              </p>
              
               <div className="mt-12 flex flex-col items-center gap-6">
                  <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">
                      <Link href="/book" className="flex items-center gap-2">
                        <Smartphone className="w-6 h-6" />
                        Download the App to Book
                      </Link>
                  </Button>
                  
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground opacity-70">Get VÉLOURA on the App Store</p>
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                      <a href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                          alt="Download on the App Store"
                          width={150}
                          height={50}
                          className="h-10 w-auto transition-transform hover:scale-105"
                        />
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                         <Image
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          alt="Get it on Google Play"
                          width={170}
                          height={50}
                          className="h-12 w-auto transition-transform hover:scale-105"
                          unoptimized
                        />
                      </a>
                    </div>
                  </div>
                </div>

              <p className="mt-16 text-xl font-bold text-primary italic">
                Your Choice: We Come to You, or You Come to Us
              </p>

              {/* Interface Gallery */}
              <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {interfaceImages.map((img, index) => (
                    <div key={index} className="relative aspect-[9/19.5] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 hover:scale-105 transition-transform duration-500 rounded-2xl">
                      <Image
                        src={img!.imageUrl}
                        alt={img!.description}
                        fill
                        className="object-cover"
                        data-ai-hint={img!.imageHint}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Concierge Promo Section */}
        <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>AI Talent Matcher</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">Not sure what you need? <br /> Let our AI handle it.</h2>
                        <h3 className="text-lg opacity-90 leading-relaxed font-normal">
                            Tell the VÉLOURA Beauty on Demand AI Concierge about your event, your location, and your personal style. We'll find the perfect professional and service package tailored specifically for you.
                        </h3>
                        <Button asChild variant="secondary" size="lg" className="h-14 px-10 text-primary font-bold rounded-full">
                            <Link href="/match">
                                Try the AI Concierge <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                    <div className="flex-1 relative aspect-square w-full max-sm mx-auto">
                        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse scale-110"></div>
                        <div className="bg-white/10 backdrop-blur-md rounded-full w-full h-full flex items-center justify-center border border-white/20 shadow-2xl">
                            <Wand2 className="w-32 h-32 text-white opacity-90" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* How to get salon services at home Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">How to Get Salon Services at Home</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Transforming your living room into a luxury studio is easier than ever. Follow these simple steps to start your on-demand beauty journey with VÉLOURA Beauty on Demand.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative p-6 rounded-2xl bg-secondary/20 border border-primary/5 shadow-sm">
                  <div className="text-4xl font-bold text-primary/20 absolute top-4 right-6 font-headline">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 pr-8">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top on-demand beauty app benefits Section */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Top Benefits of On-Demand Beauty</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the best mobile beauty platform features designed for your lifestyle.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {platformBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-5 p-8 rounded-3xl bg-card border border-primary/10 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Download Section */}
        <section className="py-16 sm:py-24 bg-background border-y border-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center bg-secondary/20 p-8 md:p-12 rounded-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                        <Smartphone className="w-4 h-4" />
                        <span>EXPERIENCE THE APP</span>
                    </div>
                    <h2 className="text-3xl font-bold font-headline mb-4">Download Our App</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Experience luxury beauty on demand. Explore more services, meet vetted professionals, and book your next moment of calm with just one click.
                    </p>
                    <div className="flex justify-center items-center gap-6 flex-wrap">
                        <a href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                width={150}
                                height={50}
                                className="h-12 w-auto transition-transform hover:scale-105"
                            />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                width={170}
                                height={50}
                                className="h-14 w-auto transition-transform hover:scale-105"
                                unoptimized
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6 max-xl text-center">
                 <div className="flex items-center justify-center gap-2 mb-4">
                    <Newspaper className="h-5 w-5 text-primary"/>
                    <h2 className="font-semibold text-foreground text-xl">Stay in the loop!</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                    Subscribe to be the first to know when we launch.
                </p>
                <div className="max-w-md mx-auto">
                    <SubscribeForm />
                </div>
            </div>
        </section>

        {/* For Real Life Section */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Built for Real Life — Not Perfect Schedules</h2>
                    <div className="mt-6 space-y-4">
                        <p className="text-xl font-semibold text-foreground">
                            No time. No flexibility. Too many moving parts. <br />
                            We get it.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            VÉLOURA Beauty on Demand brings beauty, photography, and event services directly to you — so you don’t have to figure it out.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                    {useCases.map((item, index) => (
                        <div key={index} className="flex items-start gap-5">
                            <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-20 p-8 rounded-2xl bg-secondary/20 border border-primary/5">
                    <p className="text-xl font-medium text-foreground italic">
                        "Because your time matters — and getting ready shouldn’t be the hard part."
                    </p>
                </div>
            </div>
        </section>

        {/* Problems Solved Section */}
        <section className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">We Solve Everyday Beauty Problems - with Luxury Convenience</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Responsive Video Container 1 */}
                    <div className="w-full relative overflow-hidden rounded-xl shadow-lg bg-muted" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/Ox4SEDyYh8Q"
                            title="VÉLOURA Solutions 1"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Responsive Video Container 2 */}
                    <div className="w-full relative overflow-hidden rounded-xl shadow-lg bg-muted" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/Oq-3R0VMSAw"
                            title="VÉLOURA Solutions 2"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                 <ul className="space-y-8">
                    {problemsSolved.map((item, index) => (
                        <li key={index}>
                            <p className="font-bold text-lg text-primary">{item.problem}</p>
                            <p className="text-muted-foreground mt-1">{item.solution}</p>
                        </li>
                    ))}
                </ul>
                <p className="text-center font-bold text-xl mt-12 text-foreground">VÉLOURA Beauty on Demand turns your beauty routine into a moment of calm, confidence, and care.</p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
