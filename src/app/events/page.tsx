
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PartyPopper, Calendar, MapPin, Users, Shirt, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                                VÉLOURA Events
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Join us for exclusive events, networking, and industry seminars.
                            </p>
                        </div>
                        
                        <div className="space-y-12">
                            {/* West Palm Beach Event */}
                            <Card className="shadow-2xl overflow-hidden border-primary/20">
                                <CardContent className="p-0">
                                    <Image
                                        src="https://storage.googleapis.com/project-spark-b24962c4-226c-4573-a417-3860d5b6a41f/user/481977759868_20240729_001925_295.jpg"
                                        alt="Veloura West Palm Beach Event Flyer"
                                        width={800}
                                        height={1131}
                                        className="w-full h-auto object-cover"
                                        data-ai-hint="event flyer"
                                    />
                                </CardContent>
                                <CardFooter className="bg-background p-8 flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold font-headline text-primary mb-2">Beauty Industry Networking</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Join us in West Palm Beach for an evening of connection and community. Open to all licensed beauty professionals.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                                        <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm font-semibold">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>Jan 21st, 5:30 PM</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-sm font-semibold">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span>West Palm Beach, FL</span>
                                        </div>
                                    </div>
                                    <Button asChild size="lg" className="w-full sm:w-auto">
                                        <a href="mailto:support@velourabeautyondemand.com?subject=West%20Palm%20Beach%20Event%20Registration" target="_blank" rel="noopener noreferrer">
                                            Register Now
                                        </a>
                                    </Button>
                                    <p className="text-xs text-muted-foreground mt-4 italic">Limited availability / Registration required</p>
                                </CardFooter>
                            </Card>

                            {/* Miami Event */}
                            <Card className="shadow-lg overflow-hidden">
                                <CardHeader className="text-center bg-primary/10">
                                    <div className="flex justify-center items-center mb-4">
                                        <PartyPopper className="h-12 w-12 text-primary" />
                                    </div>
                                    <CardTitle className="text-3xl font-headline text-primary">VÉLOURA Recruiting Seminar <br/>- Miami, Florida</CardTitle>
                                    <p className="text-lg font-semibold text-muted-foreground pt-2">Date: 12/11/2025</p>
                                    <CardDescription className="pt-2">An Exclusive, Invitation-Only Event / No walk-ins</CardDescription>
                                    <div className="mt-4">
                                        <Button asChild variant="outline">
                                            <a href="https://www.nowadays.ai/veloura-seminar-2025" target="_blank" rel="noopener noreferrer">View Agenda</a>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6 text-center space-y-4 text-muted-foreground">
                                    <p className="text-lg font-semibold text-foreground">
                                        All applications have been processed!
                                    </p>
                                    <p>
                                        Please check your Indeed messages or email for the official invitation, which includes detailed seminar information and the event schedule.
                                    </p>
                                    <p className="font-bold text-primary pt-4">- The VÉLOURA Team</p>
                                </CardContent>
                            </Card>

                            {/* Event Request Section */}
                            <Card className="shadow-lg overflow-hidden border-dashed border-2">
                                <CardHeader className="text-center">
                                    <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
                                        <Sparkles className="text-primary w-6 h-6" />
                                        Plan Your Next Event
                                    </CardTitle>
                                    <CardDescription>
                                        From corporate wellness days to bridal showers, we bring the luxury salon experience to you.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <Button asChild size="lg" variant="accent">
                                        <a href="mailto:support@velourabeautyondemand.com?subject=Event%20Service%20Request" target="_blank" rel="noopener noreferrer">
                                            <Mail className="mr-2 h-5 w-5" />
                                            Request Custom Event
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
