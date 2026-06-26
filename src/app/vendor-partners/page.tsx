'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
    Briefcase, 
    ShieldCheck, 
    Layout, 
    Calendar, 
    DollarSign, 
    Users, 
    ArrowRight,
    CheckCircle2,
    Zap,
    Layers,
    Smile
} from 'lucide-react';
import Link from 'next/link';

export default function VendorPartnershipPage() {
    const outsourcingEmail = "mailto:support@velourabeautyondemand.com?subject=Vendor%20Outsourcing%20Partnership";

    const features = [
        {
            title: "You Keep the Client. We Handle Ops.",
            description: "Sourcing, vetting (Checkr), background checks, scheduling, dispatch, and secure Stripe payment processing — all managed by our expert team.",
            icon: Briefcase
        },
        {
            title: "White-Label or Co-Branded",
            description: "Operate fully behind the scenes under your brand, or as a co-branded service line. We adapt to your client presentation model.",
            icon: Layout
        },
        {
            title: "Variable, High-Stakes Demand",
            description: "Built for production days, bridal party surges, and corporate amenities that require dependable, on-call glam teams.",
            icon: Zap
        },
        {
            title: "Margin-Friendly Structure",
            description: "Negotiated commission or flat per-event rates let you build VÉLOURA's cost directly into your client pricing with predictable margins.",
            icon: DollarSign
        }
    ];

    const steps = [
        {
            id: "01",
            title: "Scope & Volume",
            description: "We analyze your typical event volume, service mix, and market focus across LA, NYC, and Miami."
        },
        {
            id: "02",
            title: "Structure Sync",
            description: "We agree on a white-label or co-branded framework and a partnership rate that protects your margins."
        },
        {
            id: "03",
            title: "Submit Requests",
            description: "Requests are sent via a dedicated partner channel, shared form, or API for high-volume partners."
        },
        {
            id: "04",
            title: "VÉLOURA Executes",
            description: "We handle the fulfillment and day-of execution while you remain the face of the client relationship."
        }
    ];

    const idealPartners = [
        { name: "Event Production Companies", icon: Layers },
        { name: "Talent & Modeling Agencies", icon: Users },
        { name: "Wedding Planners & Concierges", icon: Smile },
        { name: "Corporate Travel Firms", icon: Briefcase }
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
                                <Briefcase className="w-4 h-4" />
                                <span>Vendor & Outsourcing Partners</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 leading-tight">
                                Your Clients Want Beauty On-Site. <span className="text-primary italic">We're Built to Deliver It.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                                VÉLOURA is the licensed, background-checked beauty fulfillment layer for event companies, talent agencies, and production teams who need reliable on-site glam — without the overhead of staffing it themselves.
                            </p>
                            <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                                <Link href={outsourcingEmail}>
                                    Discuss an Outsourcing Partnership <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Outsource Section */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Why Outsource to VÉLOURA?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">We provide the operational backbone, allowing you to focus on client strategy and sales.</p>
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

                {/* Built for High Stakes */}
                <section className="py-16 sm:py-24 bg-secondary/20">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/10">
                            <h2 className="text-2xl md:text-4xl font-bold font-headline text-center mb-12">Built for Variable, High-Stakes Demand</h2>
                            <ul className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "On-call glam for production days",
                                    "Dependable bridal-party rosters",
                                    "Pre-vetted artists for runway shows",
                                    "Premium guest amenities for corporate",
                                    "Incentive-travel wellness pop-ups"
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
                            <h2 className="text-3xl md:text-5xl font-bold font-headline">The Outsourcing Workflow</h2>
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

                {/* Ideal Partners Section */}
                <section className="py-16 sm:py-24 bg-primary/5">
                    <div className="container mx-auto px-4 md:px-6">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold font-headline">Ideal Partners</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {idealPartners.map((partner, i) => (
                                <div key={i} className="text-center space-y-4 bg-white p-6 rounded-2xl border border-primary/5 shadow-sm">
                                    <partner.icon className="w-10 h-10 mx-auto text-primary" />
                                    <p className="font-bold text-sm leading-tight">{partner.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8">Ready to Scale Your Beauty Services?</h2>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 mb-8">
                                <p className="text-xl mb-6">Let’s explore a partnership structure that works for your business model.</p>
                                <Button asChild variant="secondary" size="lg" className="h-12 px-10 text-primary font-bold">
                                    <Link href={outsourcingEmail}>support@velourabeautyondemand.com</Link>
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