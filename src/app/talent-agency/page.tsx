
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Award, MapPin, Layers, MessageSquare, Mail } from 'lucide-react';

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
                                    VÉLOURA Talent Agency represents a network of licensed, vetted makeup artists, hairstylists, and photographers. We bridge the gap between creative professionals and premium opportunities.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <a href="mailto:support@velourabeautyondemand.com?subject=Talent%20Agency%20Inquiry">
                                            Inquire About Talent
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <a href="https://velourabeautyondemand.com/apply" target="_blank" rel="noopener noreferrer">
                                            Apply to Join Agency
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={agencyHero?.imageUrl || "https://images.unsplash.com/photo-1595982248316-52de80608518?auto=format&fit=crop&q=80&w=1200&h=800"}
                                    alt={agencyHero?.description || "Talent Agency Editorial"}
                                    fill
                                    className="object-cover"
                                    data-ai-hint="fashion editorial"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Work With Us */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-headline sm:text-4xl">Why Choose VÉLOURA Agency?</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We provide the structure and reliability you need to execute world-class productions.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12">
                            {whyWorkWithUs.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-secondary/20 border border-primary/5">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Showcase */}
                <section className="py-16 sm:py-24 bg-secondary/10">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={agencyRunway?.imageUrl || "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200&h=800"}
                                alt={agencyRunway?.description || "Runway Showcase"}
                                fill
                                className="object-cover"
                                data-ai-hint="runway fashion"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="text-center text-white space-y-4 px-4">
                                    <h2 className="text-4xl md:text-6xl font-bold font-headline">Unparalleled Artistry.</h2>
                                    <p className="text-xl max-w-xl mx-auto">From high-fashion runways to luxury brand campaigns, our talent delivers excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="bg-primary p-8 md:p-12 rounded-3xl text-primary-foreground text-center space-y-8 shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                             <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                             
                             <h2 className="text-3xl md:text-5xl font-bold font-headline relative z-10">Start Your Partnership</h2>
                             <p className="text-lg opacity-90 relative z-10">
                                Need a bespoke team for your next production? Contact us today to discuss your requirements.
                             </p>
                             <div className="flex flex-col items-center gap-6 relative z-10">
                                <Button size="lg" variant="secondary" className="text-primary font-bold px-8 py-6 text-xl rounded-full hover:scale-105 transition-transform" asChild>
                                    <a href="mailto:support@velourabeautyondemand.com?subject=Agency%20Partnership">
                                        <Mail className="mr-2 h-6 w-6" />
                                        Email the Agency Team
                                    </a>
                                </Button>
                                
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-2 text-white font-semibold text-xl">
                                        <MessageSquare className="w-6 h-6" />
                                        <span>Text Us: (305) 317-2759</span>
                                    </div>
                                    <p className="text-sm opacity-80 italic">Text messages only — this number does not receive calls.</p>
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
