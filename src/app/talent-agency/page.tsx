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
    },
    {
        icon: Clock,
        title: "Flexible Coordination",
        description: "Seamless booking and project management tailored to your timeline."
    },
    {
        icon: Palette,
        title: "Luxury Aesthetic",
        description: "Our talent's creative direction is aligned with modern, high-end brands."
    }
];

export default function TalentAgencyPage() {
    const agencyHero = PlaceHolderImages.find(p => p.id === 'agency_hero');
    const agencyShowcase = PlaceHolderImages.find(p => p.id === 'agency_showcase');
    const agencyShowcase2 = PlaceHolderImages.find(p => p.id === 'agency_showcase_2');
    const agencyWhoWeAre = PlaceHolderImages.find(p => p.id === 'agency_who_we_are');

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
                                    VÉLOURA Talent Agency represents a network of licensed, vetted makeup artists, hairstylists, and photographers — available for fashion, events, production, and private clients
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" className="text-lg h-auto py-4 px-8 whitespace-normal" asChild>
                                        <a href="mailto:support@velourabeautyondemand.com?subject=Talent%20Agency%20Inquiry">
                                            Planning an Event? Inquire Here (We’ll Get Back to You Quickly)
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            {agencyHero && (
                                <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={agencyHero.imageUrl}
                                        alt={agencyHero.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={agencyHero.imageHint}
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Editorial Showcase Above About */}
                <section className="py-12 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src={agencyWhoWeAre?.imageUrl || ""}
                                alt={agencyWhoWeAre?.description || "Who We Are Showcase"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                data-ai-hint="editorial photography"
                            />
                            <div className="absolute bottom-4 right-6 text-white/90 text-sm font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                                Photo by Sasha Lebedeva
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section className="py-16 sm:py-24 bg-background border-b">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8">Who We Are</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                VÉLOURA is a beauty on-demand platform and talent agency connecting brands, productions, and private clients with high-quality beauty and creative professionals.
                            </p>
                            <p>
                                We specialize in sourcing and coordinating talent for fast-paced, high-standard environments — from fashion shows and editorial shoots to events, weddings, and VIP experiences.
                            </p>
                            <p className="font-semibold text-foreground text-xl pt-4">
                                Our agency is built on three pillars:
                            </p>
                            <div className="grid sm:grid-cols-3 gap-8 pt-4">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-foreground">Quality</h3>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-foreground">Reliability</h3>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-foreground">Elevated Service</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section className="py-16 sm:py-24 bg-secondary/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What We Offer</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                Our roster includes elite professionals tailored for the most demanding creative environments.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Beauty Talent */}
                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold font-headline mb-4">Beauty Talent</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Makeup Artists</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Hairstylists</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Nail Technicians</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Grooming Specialists</li>
                                </ul>
                            </div>

                            {/* Creative Talent */}
                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Camera className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold font-headline mb-4">Creative Talent</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Photographers</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Content Creators</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Styling Assistants</li>
                                </ul>
                            </div>

                            {/* Use Cases */}
                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold font-headline mb-4">Use Cases</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Fashion Shows & Backstage</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Editorial & Campaign Shoots</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Events & Brand Activations</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Weddings & Private Clients</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> VIP & Hotel Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Work With Us Section */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Work With Us</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                We provide more than just talent; we provide peace of mind and professional excellence.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyWorkWithUs.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-6 space-y-4">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-2">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Showcase Section */}
                <section className="py-16 sm:py-24 bg-secondary/10 space-y-12">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src={agencyShowcase?.imageUrl || ""}
                                alt={agencyShowcase?.description || "Showcase 1"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                data-ai-hint="professional photography"
                            />
                            <div className="absolute bottom-4 right-6 text-white/90 text-sm font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                                Photo by Michael Lee
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src={agencyShowcase2?.imageUrl || ""}
                                alt={agencyShowcase2?.description || "Showcase 2"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                data-ai-hint="fashion photography"
                            />
                            <div className="absolute bottom-4 right-6 text-white/90 text-sm font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                                Photo by Michael Lee
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 sm:py-24 bg-secondary/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl text-center space-y-6 border border-primary/5">
                            <h2 className="text-3xl font-bold font-headline">The VÉLOURA Edge</h2>
                            <p className="text-xl italic text-muted-foreground">
                                "At VÉLOURA, we don't just represent talent; we build careers. Our agency was born from the same commitment to excellence that powers our on-demand platform—bringing luxury, reliability, and artistry to every booking."
                            </p>
                            <p className="font-bold text-primary">— Huiyu "Cherry" Cheng, Founder</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <div className="max-w-3xl mx-auto bg-primary/10 p-12 rounded-3xl border border-primary/20">
                            <Send className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-bold font-headline mb-4">Ready to Collaborate?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Whether you are a brand looking for the perfect face or a creator looking for professional representation, we want to hear from you.
                            </p>
                            <div className="flex flex-col gap-6 items-center">
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                    <Button size="lg" className="w-full sm:w-auto h-auto py-4 px-8" asChild>
                                        <a href="mailto:support@velourabeautyondemand.com?subject=Agency%20Collaboration%20Inquiry">
                                            <Mail className="mr-2 h-5 w-5" />
                                            Contact the Agency
                                        </a>
                                    </Button>
                                </div>
                                <div className="flex flex-col items-center gap-2 pt-4 border-t border-primary/10 w-full max-w-xs mx-auto">
                                    <div className="flex items-center gap-2 text-foreground font-semibold">
                                        <MessageSquare className="w-5 h-5 text-primary" />
                                        <span>Text Us: (305) 317-2759</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground italic">Text messages only — this number does not receive calls.</p>
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
