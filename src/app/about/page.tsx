import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  HandHeart, 
  Sparkles, 
  Users, 
  Linkedin, 
  Newspaper, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Briefcase,
  Smartphone,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About VÉLOURA Beauty On Demand | Our Story & Marketplace',
  description: 'VÉLOURA Beauty On Demand is a luxury marketplace connecting customers with licensed beauty professionals for mobile appointments in homes, hotels, and offices.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/about',
  },
  openGraph: {
    title: 'About VÉLOURA Beauty On Demand',
    description: 'Connecting you with elite, licensed beauty professionals wherever you are.',
    url: 'https://velourabeautyondemand.com/about',
  }
};

export default function AboutPage() {
    const values = [
        {
            title: "Empowerment",
            description: "Giving professionals the freedom to build their own brand and schedule.",
            icon: Sparkles
        },
        {
            title: "Reliability",
            description: "Consistently delivering high-quality, vetted services wherever you are.",
            icon: Award
        },
        {
            title: "Community",
            description: "Building a supportive network of professionals and a loyal client base.",
            icon: Users
        },
        {
            title: "Convenience",
            description: "Making self-care accessible and efficient for the modern, busy life.",
            icon: HandHeart
        }
    ];

    const founderImage = PlaceHolderImages.find(p => p.id === 'founder_photo');
    const roxanneImage = PlaceHolderImages.find(p => p.id === 'team_roxanne');
    const riniImage = PlaceHolderImages.find(p => p.id === 'team_rini');
    const magazineFeatureImage = PlaceHolderImages.find(p => p.id === 'magazine_feature');

    const teamMembers = [
        {
            name: "Huiyu \"Cherry\" Cheng",
            role: "Founder & Visionary",
            description: "She didn't just build VÉLOURA Beauty on Demand — she built it from real-life experience. Today, VÉLOURA empowers professionals and delivers beauty and lifestyle services on demand.",
            imageUrl: founderImage?.imageUrl || "https://picsum.photos/seed/founder/400/400",
            hint: "woman portrait"
        },
        {
            name: "Roxanne Resma",
            role: "Operations Director",
            description: "Roxanne oversees operations, ensuring efficiency as we grow. She manages onboarding and systems, keeping both professionals and clients supported.",
            imageUrl: roxanneImage?.imageUrl || "https://picsum.photos/seed/roxanne/400/400",
            hint: "operations director"
        },
        {
            name: "Rini Sugianto",
            role: "Media Lead",
            description: "Dedicated to capturing the beauty and artistry of the VÉLOURA experience through compelling visual storytelling and brand production.",
            imageUrl: riniImage?.imageUrl || "https://picsum.photos/seed/rini/400/400",
            hint: "media professional"
        }
    ];

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
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
              "name": "About",
              "item": "https://velourabeautyondemand.com/about"
            }
          ]
        },
        {
          "@type": "AboutPage",
          "@id": "https://velourabeautyondemand.com/about/#webpage",
          "url": "https://velourabeautyondemand.com/about",
          "name": "About VÉLOURA Beauty On Demand",
          "isPartOf": { "@id": "https://velourabeautyondemand.com/#website" },
          "about": { "@id": "https://velourabeautyondemand.com/#organization" },
          "description": "VÉLOURA Beauty On Demand is an on-demand beauty marketplace connecting customers with licensed beauty professionals for appointments at homes, hotels, offices, weddings, events, and other approved locations."
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
                {/* Hero Section */}
                <section id="story" className="py-16 sm:py-24 bg-secondary/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline mb-6">Our Story</h1>
                            <p className="text-xl font-semibold text-foreground mb-8">
                                Why is something so essential so inefficient?
                            </p>
                            <div className="prose lg:prose-lg text-muted-foreground">
                                <p>
                                    Balancing work, life, and everything in between, we kept running into the same issue — there just wasn’t an easy way to access reliable beauty and lifestyle services when we needed them.
                                </p>
                                <p>
                                    VÉLOURA Beauty on Demand was built to solve this — creating a better way for people to connect, work, and live.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marketplace Overview Section */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto space-y-16">
                            
                            {/* What is Section */}
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                    <Info className="w-3.5 h-3.5" />
                                    <span>Core Mission</span>
                                </div>
                                <h2 className="text-3xl font-bold font-headline">What Is VÉLOURA Beauty On Demand?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    VÉLOURA Beauty On Demand is an on-demand beauty marketplace connecting customers with licensed beauty professionals for appointments at homes, hotels, offices, weddings, events, and other approved locations.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Who We Serve */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                                        <Users className="text-primary w-6 h-6" /> Who VÉLOURA Serves
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Customers seeking convenient beauty appointments",
                                            "Travelers and hotel guests needing suite service",
                                            "Brides and wedding event clients",
                                            "Seniors and people with mobility challenges",
                                            "Busy corporate professionals",
                                            "Licensed and qualified independent beauty professionals"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What customers can request */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                                        <Sparkles className="text-primary w-6 h-6" /> Services On Demand
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "Hair Services", "Makeup Artistry", "Nail Care", 
                                            "Skincare", "Lash & Brow", "Event Styling"
                                        ].map((item, i) => (
                                            <div key={i} className="p-3 bg-secondary/50 rounded-lg text-sm font-medium border border-primary/5 text-center">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="/services">View Service Menu <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* How it works */}
                            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                                <h3 className="text-2xl font-bold font-headline text-center mb-8">How The Marketplace Works</h3>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center space-y-2">
                                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">1</div>
                                        <h4 className="font-bold">Request</h4>
                                        <p className="text-sm text-muted-foreground">Customers request a service via the app or <Link href="/match" className="text-primary hover:underline font-semibold">AI Concierge</Link>.</p>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">2</div>
                                        <h4 className="font-bold">Match</h4>
                                        <p className="text-sm text-muted-foreground">Available professionals review and receive booking opportunities.</p>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">3</div>
                                        <h4 className="font-bold">Delivery</h4>
                                        <p className="text-sm text-muted-foreground">Services are delivered directly to the approved customer location.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Where we operate */}
                            <div className="text-center space-y-6">
                                <h3 className="text-2xl font-bold font-headline flex items-center justify-center gap-2">
                                    <MapPin className="text-primary w-6 h-6" /> Where VÉLOURA Operates
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-foreground/80">
                                    <span>New York City</span>
                                    <span className="text-primary">•</span>
                                    <span>Los Angeles</span>
                                    <span className="text-primary">•</span>
                                    <span>Miami</span>
                                </div>
                                <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                                    We are currently serving and expanding within these major metropolitan areas, bringing elite beauty talent to your doorstep.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Navigation Section */}
                <section className="py-12 bg-secondary/20 border-y">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-xl font-bold font-headline mb-8">Explore VÉLOURA</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/services" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1.5"><Sparkles className="w-4 h-4"/> Services</Link>
                            <Link href="/match" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1.5"><Smartphone className="w-4 h-4"/> Find Your Match</Link>
                            <Link href="/talent-agency" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1.5"><Briefcase className="w-4 h-4"/> Talent Agency</Link>
                            <Link href="/apply" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1.5"><Users className="w-4 h-4"/> Join Our Team</Link>
                            <Link href="/blog" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1.5"><Newspaper className="w-4 h-4"/> Blog</Link>
                            <Link href="/blog/in-home-beauty-services-for-elderly" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1.5"><HandHeart className="w-4 h-4"/> Accessible Beauty Guide</Link>
                        </div>
                    </div>
                </section>

                {/* Founder Note Section */}
                <section id="founder" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
                            <div className="md:col-span-1 flex justify-center">
                                 <div className="relative w-48 h-48">
                                    <Image
                                        src={founderImage?.imageUrl || "https://picsum.photos/seed/founder/400/400"}
                                        alt="Huiyu Cherry Cheng"
                                        fill
                                        className="rounded-full object-contain shadow-lg bg-white"
                                        data-ai-hint="woman portrait"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <h3 className="text-2xl font-bold font-headline">A Note from Our Founder</h3>
                                    <Link href="https://www.linkedin.com/in/huiyu-cheng" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                        <Linkedin className="h-6 w-6" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </div>
                                <div className="prose lg:prose-lg text-muted-foreground space-y-4 italic">
                                    <p>
                                        "As a busy professional, I was constantly choosing between my schedule and feeling put together — and somehow, my schedule always won."
                                    </p>
                                    <p>
                                        "That’s where VÉLOURA Beauty on Demand began. A platform designed not only to make services more accessible, but to empower professionals — giving them more freedom, more control, and more opportunity."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured In Section */}
                <section className="py-16 bg-background border-y border-primary/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
                            <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={magazineFeatureImage?.imageUrl || "https://picsum.photos/seed/magazine/600/800"}
                                    alt="Global Woman Magazine Feature"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="magazine cover"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                                    <Newspaper className="w-3.5 h-3.5" />
                                    <span>IN THE PRESS</span>
                                </div>
                                <h3 className="text-3xl font-bold font-headline">Featured in Global Woman Magazine</h3>
                                <p className="text-lg text-muted-foreground">
                                    Read about Huiyu "Cherry" Cheng's vision for VÉLOURA Beauty on Demand and how she is redefining the beauty industry through technology and empowerment.
                                </p>
                                <Button asChild variant="accent" size="lg">
                                    <Link href="https://globalwomanmagazine.com/huiyu-cherry-cheng/" target="_blank" rel="noopener noreferrer">
                                        Read the Full Story
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section id="values" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Core Values</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {values.map((value, index) => (
                                <div key={index} className="bg-card p-8 rounded-xl shadow-md flex flex-col">
                                    <div className="mb-4">
                                        <value.icon className="h-12 w-12 text-primary mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground flex-grow">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section id="team" className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Team</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center text-center space-y-4"
                                >
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 bg-background">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            className="object-contain bg-white"
                                            data-ai-hint={member.hint}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold font-headline">{member.name}</h3>
                                        <p className="text-primary font-semibold uppercase tracking-wider text-sm">{member.role}</p>
                                        <p className="text-muted-foreground text-sm">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
