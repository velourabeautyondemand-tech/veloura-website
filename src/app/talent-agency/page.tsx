
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Send, Mail, ShieldCheck, Sparkles, Award, Camera, Briefcase, MapPin, Layers, Clock, Palette, MessageSquare } from 'lucide-react';

const whyWorkWithUs = [
    {
        icon: MapPin,
        title: "500+ vetted professionals",
        description: "A deep roster of elite talent across major cities, ready to deploy."
    },
    {
        icon: Award,
        title: "Licensed & Experienced",
        description: "Every professional is licensed, experienced, and has passed rigorous screening."
    },
    {
        icon: Layers,
        title: "Scalable Support",
        description: "From small boutique teams to large-scale multi-day productions."
    }
];

export default function TalentAgencyPage() {
    const agencyHero = PlaceHolderImages.find(p => p.id === 'agency_hero');
    const agencyRunway = PlaceHolderImages.find(p => p.id === 'agency_runway');

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 bg-secondary/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                                    <Star className="w-4 h-4 fill-primary" />
                                    <span>VÉLOURA TALENT AGENCY</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
                                    Where Talent <br />
                                    <span className="text-primary">Meets Opportunity.</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-xl">
                                    VÉLOURA Talent Agency represents a network of licensed, vetted makeup artists, hairstylists, and photographers.
                                </p>
                                <Button size="lg" asChild>
                                    <a href="mailto:support@velourabeautyondemand.com?subject=Talent%20Agency%20Inquiry">
                                        Inquire About Talent
                                    </a>
                                </Button>
                            </div>
                            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={agencyHero?.imageUrl || "https://picsum.photos/seed/agency/800/1000"}
                                    alt="Talent Agency"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="fashion editorial"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Showcase */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={agencyRunway?.imageUrl || "https://picsum.photos/seed/runway/1200/800"}
                                alt="Runway Showcase"
                                fill
                                className="object-cover"
                                data-ai-hint="runway fashion"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
