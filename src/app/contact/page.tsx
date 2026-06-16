
"use client";

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, MapPin, Phone, Clock } from 'lucide-react';
import { ContactForm } from '@/components/features/contact-form';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                                Get in Touch
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                Have questions about our services or need help with a booking? Our team is here to support you.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Contact Info Sidebar */}
                            <div className="lg:col-span-1 space-y-6">
                                <Card className="bg-primary text-primary-foreground">
                                    <CardHeader>
                                        <CardTitle className="font-headline">Contact Information</CardTitle>
                                        <CardDescription className="text-primary-foreground/80">
                                            Reach out to us through any of these channels.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6 pt-4">
                                        <div className="flex items-start gap-4">
                                            <Mail className="h-6 w-6 shrink-0" />
                                            <div>
                                                <p className="font-bold">Email Us</p>
                                                <a href="mailto:support@velourabeautyondemand.com" className="text-sm hover:underline">
                                                    support@velourabeautyondemand.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MessageSquare className="h-6 w-6 shrink-0" />
                                            <div>
                                                <p className="font-bold">Text Us</p>
                                                <p className="text-sm">(305) 317-2759</p>
                                                <p className="text-[10px] italic opacity-80 mt-1">Text messages only — no calls.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Clock className="h-6 w-6 shrink-0" />
                                            <div>
                                                <p className="font-bold">Support Hours</p>
                                                <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM EST</p>
                                                <p className="text-sm">Sun: 10:00 AM - 4:00 PM EST</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-headline">Our Locations</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 pt-2">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-primary shrink-0" />
                                            <p className="text-sm text-muted-foreground">Serving Los Angeles, New York City, and Miami.</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground italic border-t pt-4">
                                            VÉLOURA is a mobile-first platform. Our professionals come to you, wherever you are.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Contact Form Main */}
                            <div className="lg:col-span-2">
                                <Card className="shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
                                        <CardDescription>
                                            Fill out the form below and we'll respond within 24 hours.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <ContactForm />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
