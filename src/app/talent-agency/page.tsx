
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Users, Camera, Sparkles, Send, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function TalentAgencyPage() {
    const agencyHero = PlaceHolderImages.find(p => p.id === 'agency_hero');

    const talentCategories = [
        {
            icon: Users,
            title: "Models",
            description: "High-fashion, commercial, and promotional models for runway, digital content, and brand activations."
        },
        {
            icon: Camera,
            title: "Creative Artists",
            description: "Elite photographers, videographers, and content creators specializing in luxury lifestyle and beauty."
        },
        {
            icon: Sparkles,
            title: "VIP Stylists",
            description: "Celebrity-caliber makeup artists and hair stylists for red carpets, weddings, and executive portraits."
        }
    ];

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
                                    <Button size="lg" className="text-lg" asChild>
                                        <a href="mailto:support@velourabeautyondemand.com?subject=Talent%20Agency%20Inquiry">Inquire for Talent</a>
                                    </Button>
                                    <Button size="lg" variant="outline" className="text-lg" asChild>
                                        <a href="mailto:support@velourabeautyondemand.com?subject=Agency%20Roster%20Application">Join the Roster</a>
                                    </Button>
                                </div>
                            </div>
                            {agencyHero && (
                                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
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

                {/* Categories Section */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-headline mb-4">Our Creative Roster</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">We specialize in representing multi-talented individuals who define the intersection of beauty and lifestyle.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {talentCategories.map((cat, i) => (
                                <Card key={i} className="hover:shadow-lg transition-shadow border-primary/10">
                                    <CardHeader className="text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <cat.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-headline text-2xl">{cat.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center text-muted-foreground">
                                        <p>{cat.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl text-center space-y-6">
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
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                <Button size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="mailto:support@velourabeautyondemand.com">
                                        <Mail className="mr-2 h-5 w-5" />
                                        Contact the Agency
                                    </a>
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
