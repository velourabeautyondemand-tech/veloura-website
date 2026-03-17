'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PartyPopper, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
