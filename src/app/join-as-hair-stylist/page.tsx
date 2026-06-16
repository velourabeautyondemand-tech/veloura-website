
'use client';

import React from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Scissors, Quote } from 'lucide-react';
import Link from 'next/link';
import { EarningsCalculator } from '@/components/features/earnings-calculator';

export default function HairStylistJobsPage() {
    const faqs = [
        {
            q: "How much do hair stylists make on VÉLOURA?",
            a: "Stylists keep 80% of their service fee plus 100% of tips. On average, a mobile hair stylist doing 5 bookings a week can earn between $500 and $800."
        },
        {
            q: "Do I need to be licensed?",
            a: "Yes, we require all hair professionals to hold an active state cosmetology license to ensure safety and quality standards."
        },
        {
            q: "What equipment do I need?",
            a: "You should have a professional-grade kit including blow dryers, styling tools, and high-quality products. VÉLOURA provides brand partner discounts to help you upgrade your kit."
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
                            <Scissors className="w-4 h-4" />
                            <span>NOW RECRUITING HAIR STYLISTS</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
                            Hair Stylist Jobs - Work On Your <br /> <span className="text-primary">Own Schedule</span> With VÉLOURA
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            The top platform for freelance hair stylists and mobile professionals. Bring the salon to the client and keep more of what you earn.
                        </p>
                        <Button asChild size="lg" className="h-14 px-10 text-lg font-bold">
                            <Link href="/apply">Apply to Join Today</Link>
                        </Button>
                    </div>
                </section>

                {/* Earnings Calculator */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold font-headline mb-4">Calculate Your Earnings</h2>
                            <p className="text-muted-foreground">Adjust the sliders to see your potential take-home pay with VÉLOURA.</p>
                        </div>
                        <EarningsCalculator />
                    </div>
                </section>

                {/* Requirements */}
                <section className="py-16 bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold font-headline mb-6">Requirements for Hair Pros</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Valid State Cosmetology License",
                                        "Minimum 2 years of professional experience",
                                        "Personal professional styling kit & tools",
                                        "Reliable transportation",
                                        "Commitment to high-end service standards",
                                        "Completion of background screening (Checkr)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                                            <span className="text-muted-foreground font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card p-8 rounded-3xl border shadow-sm">
                                <h3 className="text-xl font-bold mb-4">Why Mobile Hair Styling?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Traditional salon jobs often take 40-60% of your earnings. With VÉLOURA, you are the boss. You set your radius, choose your hours, and build direct relationships with premium clients in Los Angeles, NYC, and Miami.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold font-headline mb-12">What Our Stylists Say</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                            <Card className="bg-card/50">
                                <CardContent className="pt-8">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="italic text-lg mb-6">"I left my booth rental for VÉLOURA and never looked back. I make my own schedule around my kids and the earnings are significantly higher per hour."</p>
                                    <p className="font-bold">Tanya K.</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Lead Stylist &middot; Los Angeles</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/50">
                                <CardContent className="pt-8">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="italic text-lg mb-6">"Managing high-end NYC clients is easy with the app. The support team is incredible and the brand partners give us great discounts on tools."</p>
                                    <p className="font-bold">Danielle F.</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Editorial Stylist &middot; New York</p>
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
                <section className="py-20 bg-primary text-primary-foreground text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Ready to Build Your Brand?</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join the #1 network for professional mobile hair stylists today.</p>
                        <Button asChild size="lg" variant="secondary" className="h-14 px-12 text-lg font-bold">
                            <Link href="/apply">Apply Now</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
