
'use client';

import React, { useState } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { CheckCircle, Camera, Clock, DollarSign, Star, Quote } from 'lucide-react';
import Link from 'next/link';

export default function PhotographerJobsPage() {
    const [bookings, setBookings] = useState([3]);
    const avgRate = 250; // Avg photography session rate
    const earnings = bookings[0] * avgRate * 0.8; // 80% take home

    const faqs = [
        {
            q: "What types of photography jobs are available?",
            a: "We offer event photography, portrait sessions, and glamour shoots. You choose your specialties and service areas."
        },
        {
            q: "Who owns the rights to the photos?",
            a: "Photographers maintain their creative rights, but grant VÉLOURA and the client usage rights for the delivered files. Specifics are detailed in the partner agreement."
        },
        {
            q: "What gear is required?",
            a: "A professional DSLR or Mirrorless camera, a range of lenses suitable for portraits and events, and basic lighting equipment for indoor shoots."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-secondary/30 py-16 md:py-24 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                            <Camera className="w-4 h-4" />
                            <span>NOW RECRUITING PHOTOGRAPHERS</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
                            Photography Jobs On-Demand - <br /> Join VÉLOURA's <span className="text-primary">Creative Network</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Book more sessions without the marketing headache. The first platform to integrate elite beauty and professional photography.
                        </p>
                        <Button asChild size="lg" className="h-14 px-10 text-lg font-bold">
                            <Link href="/apply">Apply to the Agency</Link>
                        </Button>
                    </div>
                </section>

                {/* Earnings Calculator */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold font-headline mb-4">Earnings Calculator</h2>
                            <p className="text-muted-foreground">Estimate your weekly payout based on your session load.</p>
                        </div>
                        <Card className="max-w-xl mx-auto shadow-xl border-primary/10">
                            <CardContent className="pt-10 pb-10 px-8 space-y-10">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <label className="font-bold text-lg">Sessions Per Week</label>
                                        <span className="text-3xl font-bold text-primary">{bookings[0]}</span>
                                    </div>
                                    <Slider 
                                        value={bookings} 
                                        onValueChange={setBookings} 
                                        max={10} 
                                        step={1} 
                                        className="py-4"
                                    />
                                </div>
                                <div className="bg-secondary/50 rounded-2xl p-8 text-center border border-primary/5">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">Weekly Estimated Payout</p>
                                    <div className="text-5xl font-black text-foreground font-headline flex items-center justify-center">
                                        <DollarSign className="w-8 h-8 text-primary" />
                                        {Math.round(earnings)}
                                    </div>
                                    <p className="mt-4 text-xs text-muted-foreground italic">
                                        *Based on an average session rate of ${avgRate}. Keep 80% of every booking.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Requirements */}
                <section className="py-16 bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold font-headline mb-6">Photographer Requirements</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Strong portfolio (Events/Portraits/Fashion)",
                                        "Professional DSLR or Mirrorless setup",
                                        "Expertise in retouching and color grading",
                                        "Ability to deliver digital galleries promptly",
                                        "Reliable transportation to client locations",
                                        "Professionalism and reliability"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                                            <span className="text-muted-foreground font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card p-8 rounded-3xl border shadow-sm">
                                <h3 className="text-xl font-bold mb-4">A Unified Creative Ecosystem</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    VÉLOURA is more than a beauty app; it's a talent agency. We represent our photographers and connect them with premium opportunities, from private glam sessions to corporate event productions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-secondary/10">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="bg-card rounded-xl border px-6 py-2">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-foreground text-background text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Capture the VÉLOURA Lifestyle</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join our agency network of professional photographers today.</p>
                        <Button asChild size="lg" className="h-14 px-12 text-lg font-bold">
                            <Link href="/apply">Apply Today</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
