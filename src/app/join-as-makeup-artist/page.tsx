
'use client';

import React from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Sparkles, Quote } from 'lucide-react';
import Link from 'next/link';
import { EarningsCalculator } from '@/components/features/earnings-calculator';

export default function MakeupArtistJobsPage() {
    const faqs = [
        {
            q: "What types of makeup jobs are available?",
            a: "VÉLOURA offers everything from everyday glam and bridal to high-fashion editorial and event makeup. You can choose which services you offer."
        },
        {
            q: "How do payouts work?",
            a: "Payments are processed securely via Stripe. Once a booking is completed, funds are transferred to your account within 3-5 business days."
        },
        {
            q: "Do I need insurance?",
            a: "Professional liability insurance is strongly recommended. If you don't have it, you assume personal responsibility for your services."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-primary/5 py-16 md:py-24 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>NOW RECRUITING MAKEUP ARTISTS</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
                            Makeup Artist Jobs - Join VÉLOURA's <br /> <span className="text-primary">On-Demand Network</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Take your makeup career mobile. Access bridal, event, and editorial opportunities on your terms.
                        </p>
                        <Button asChild size="lg" className="h-14 px-10 text-lg font-bold">
                            <Link href="/apply">Start Your Application</Link>
                        </Button>
                    </div>
                </section>

                {/* Earnings Calculator */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold font-headline mb-4">Earnings Calculator</h2>
                            <p className="text-muted-foreground">Calculate your potential take-home pay based on your expected work load.</p>
                        </div>
                        <EarningsCalculator />
                    </div>
                </section>

                {/* Requirements */}
                <section className="py-16 bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold font-headline mb-6">MUA Requirements</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Professional portfolio or social media showcase",
                                        "Full professional makeup kit with sanitary supplies",
                                        "Ability to travel to clients (mobile service)",
                                        "Mask-wearing requirement during service",
                                        "Punctual and professional demeanor",
                                        "Completed vetting & background check"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                                            <span className="text-muted-foreground font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card p-8 rounded-3xl border shadow-sm">
                                <h3 className="text-xl font-bold mb-4">Empowering Independent MUAs</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Stop chasing invoices and manage your entire business from one app. VÉLOURA handles the marketing, booking, and payment so you can focus on the artistry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold font-headline mb-12">Voices from our MUA Network</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                            <Card className="bg-card/50">
                                <CardContent className="pt-8">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="italic text-lg mb-6">"VÉLOURA has connected me with amazing wedding and event clients in South Beach. The platform is truly built for serious artists."</p>
                                    <p className="font-bold">Valeria T.</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Bridal Specialist &middot; Miami</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/50">
                                <CardContent className="pt-8">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="italic text-lg mb-6">"The flexibility is unmatched. I can pick up extra jobs during Fashion Week and set my own rates for specialized services."</p>
                                    <p className="font-bold">Solange B.</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Editorial MUA &middot; New York</p>
                                </CardContent>
                            </Card>
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
                <section className="py-20 bg-accent text-accent-foreground text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Ready to Glam?</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join our elite network of professional makeup artists today.</p>
                        <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold text-accent">
                            <Link href="/apply">Apply to Join</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
