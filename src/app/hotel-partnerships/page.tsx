'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
    Hotel, 
    ShieldCheck, 
    Zap, 
    Sparkles, 
    Smartphone, 
    DollarSign, 
    MapPin, 
    UserCheck, 
    ArrowRight,
    CheckCircle2,
    Heart,
    Handshake
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HotelPartnershipPage() {
    const partnershipEmail = "mailto:support@velourabeautyondemand.com?subject=Hotel%20Partnership%20Inquiry";

    const features = [
        {
            title: "Turn Guest Requests Into Revenue, Not Liability",
            description: "Every 'can you recommend a hairstylist' question is either an opportunity or a risk. VÉLOURA removes the risk: every professional is licensed, identity-verified, and background-checked.",
            icon: ShieldCheck
        },
        {
            title: "No Staffing. No Liability. No App to Learn.",
            description: "Your concierge simply shares a link or QR code — guests book directly on their own device. We handle the insurance, safety protocols, and real-time monitoring.",
            icon: UserCheck
        },
        {
            title: "Built for the Moments That Matter Most",
            description: "From bridal parties and VIP arrivals to last-minute glam before a show, we provide the luxury support your property needs during peak demand.",
            icon: Heart
        },
        {
            title: "White-Label-Ready Guest Experience",
            description: "We can tailor the booking experience to feel like an extension of your property — including co-branded confirmations and property-specific service menus.",
            icon: Sparkles
        }
    ];

    const steps = [
        {
            id: "01",
            title: "Custom Setup",
            description: "We set up a property-specific booking link and QR code for your concierge desk and in-room directory."
        },
        {
            id: "02",
            title: "Guest Booking",
            description: "Guests browse vetted professional profiles and book directly — no phone tag or scheduling burden for your staff."
        },
        {
            id: "03",
            title: "Service Delivery",
            // Corrected "guest's" and "fully-equipped" to match provided content
            description: "The professional arrives at the guest's room or a designated service space, fully equipped and ready."
        },
        {
            id: "04",
            title: "Revenue Share",
            description: "You earn a referral commission or negotiated partnership fee per completed booking, discussed during onboarding."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 bg-secondary/50 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                                <Hotel className="w-4 h-4" />
                                <span>Hotel & Resort Partnerships</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 leading-tight">
                                Your Guests Deserve Five-Star Beauty <span className="text-primary italic">Without Leaving the Suite.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                                VÉLOURA brings licensed, background-checked beauty professionals directly to your property — turning every request for a blowout, a manicure, or red-carpet glam into a five-star guest moment your concierge desk can deliver in minutes, not hours.
                            </p>
                            <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                                <Link href={partnershipEmail}>
                                    Become a VÉLOURA Hotel Partner <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Partner Section */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Why Hotels Partner With VÉLOURA</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Seamless integration. Professional standards. Unmatched convenience.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {features.map((feature, i) => (
                                <Card key={i} className="border-primary/5 hover:shadow-xl transition-shadow bg-secondary/10">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-2xl">
                                            <feature.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Moments That Matter Section */}
                <section className="py-16 sm:py-24 bg-secondary/20">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/10">
                            <h2 className="text-2xl md:text-4xl font-bold font-headline text-center mb-12">Built for the Moments That Matter Most</h2>
                            <ul className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "Bridal parties and wedding suites",
                                    "VIP arrivals and red-carpet events",
                                    "Spa overflow during peak season",
                                    "Last-minute glam before dinner",
                                    "Extended-stay and wellness guests"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-semibold text-foreground/80">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-headline">How It Works for Your Property</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, i) => (
                                <div key={i} className="relative group">
                                    <div className="text-6xl font-black text-primary/5 absolute -top-4 -left-4 group-hover:text-primary/10 transition-colors">
                                        {step.id}
                                    </div>
                                    <div className="relative z-10 pt-6">
                                        <h3 className="text-xl font-bold font-headline mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Requirements Section */}
                <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8">What We're Looking For in a Launch Partner</h2>
                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <div className="space-y-2">
                                    <MapPin className="w-10 h-10 mx-auto opacity-80" />
                                    <p className="font-bold">Prime Locations</p>
                                    <p className="text-sm opacity-80">Luxury properties in Los Angeles, New York City, or Miami.</p>
                                </div>
                                <div className="space-y-2">
                                    <Handshake className="w-10 h-10 mx-auto opacity-80" />
                                    <p className="font-bold">Visionary Teams</p>
                                    <p className="text-sm opacity-80">Concierge desks focused on vetting and confident recommendations.</p>
                                </div>
                                <div className="space-y-2">
                                    <Zap className="w-10 h-10 mx-auto opacity-80" />
                                    <p className="font-bold">Pilot Programs</p>
                                    <p className="text-sm opacity-80">Partners open to refining the guest experience during launch.</p>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h3 className="text-2xl font-bold mb-4">Ready to talk partnership?</h3>
                                <Button asChild variant="secondary" size="lg" className="h-12 px-10 text-primary font-bold">
                                    <Link href={partnershipEmail}>support@velourabeautyondemand.com</Link>
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
