
'use client';

import React, { useState } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { CheckCircle, Briefcase, Clock, DollarSign, Star, Quote } from 'lucide-react';
import Link from 'next/link';

export default function BeautyProfessionalJobsPage() {
    const [bookings, setBookings] = useState([5]);
    const avgRate = 135; // Weighted avg for all pros
    const earnings = bookings[0] * avgRate * 0.8; // 80% take home

    const faqs = [
        {
            q: "Which cities is VÉLOURA hiring in?",
            a: "We are currently active and growing in Los Angeles, New York City, and Miami. We are expanding rapidly, so apply even if your city isn't listed yet."
        },
        {
            q: "What is the onboarding fee?",
            a: "There is a $29.99 onboarding fee to cover your background check through Checkr. This fee is 100% refunded to you after your first completed booking."
        },
        {
            q: "How many hours can I work?",
            a: "As many as you want! You set your availability in the app. Some pros work full-time, while others use VÉLOURA to fill gaps in their salon schedule."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-secondary/50 py-16 md:py-24 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                            <Briefcase className="w-4 h-4" />
                            <span>FLEXIBLE CAREER OPPORTUNITIES</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
                            Flexible Beauty Jobs - Set Your <br /> <span className="text-primary">Own Schedule & Earn More</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Join the fastest-growing on-demand beauty network. Empowerment, flexibility, and premium earnings for independent creative professionals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="h-14 px-10 text-lg font-bold">
                                <Link href="/apply">Apply Now</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold">
                                <Link href="/services">Explore Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Earnings Calculator */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold font-headline mb-4">Earnings Calculator</h2>
                            <p className="text-muted-foreground">Select your expected weekly bookings to see your potential earnings.</p>
                        </div>
                        <Card className="max-w-xl mx-auto shadow-xl border-primary/10">
                            <CardContent className="pt-10 pb-10 px-8 space-y-10">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <label className="font-bold text-lg">Bookings Per Week</label>
                                        <span className="text-3xl font-bold text-primary">{bookings[0]}</span>
                                    </div>
                                    <Slider 
                                        value={bookings} 
                                        onValueChange={setBookings} 
                                        max={25} 
                                        step={1} 
                                        className="py-4"
                                    />
                                </div>
                                <div className="bg-secondary/50 rounded-2xl p-8 text-center border border-primary/5">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">Estimated Weekly Earnings</p>
                                    <div className="text-5xl font-black text-foreground font-headline flex items-center justify-center">
                                        <DollarSign className="w-8 h-8 text-primary" />
                                        {Math.round(earnings)}
                                    </div>
                                    <p className="mt-4 text-xs text-muted-foreground italic">
                                        *Estimated payout after VÉLOURA's 20% platform fee. Pros keep 100% of tips.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* General Requirements */}
                <section className="py-16 bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold font-headline mb-6">Who We're Looking For</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Licensed Stylists, Nail Techs, and Estheticians",
                                        "Professional MUAs and Event Photographers",
                                        "Event Coordinators and Lifestyle Specialists",
                                        "Passionate, reliable, and client-focused talent",
                                        "Individuals with a mobile toolkit and transport",
                                        "Must pass a secure identity and background check"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                                            <span className="text-muted-foreground font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card p-8 rounded-3xl border shadow-sm">
                                <h3 className="text-xl font-bold mb-4">Why VÉLOURA?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    VÉLOURA was built by professionals for professionals. We understand the limitations of traditional salon setups and designed a platform that puts the power back in your hands. Join a community that values your craft and supports your growth.
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
                <section className="py-20 bg-primary text-primary-foreground text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Build Your Own Future</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">VÉLOURA is looking for the top 10% of creative talent. Is that you?</p>
                        <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold">
                            <Link href="/apply">Apply to Join Today</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
