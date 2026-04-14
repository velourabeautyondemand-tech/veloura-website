
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function EventsPage() {
    const eventHeroImage = PlaceHolderImages.find(p => p.id === 'event_hero');
    const westPalmImage = PlaceHolderImages.find(p => p.id === 'west_palm_team');

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

                        {/* Featured Event Image - New York Team */}
                        {eventHeroImage && (
                            <div className="mb-12">
                                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={eventHeroImage.imageUrl}
                                        alt={eventHeroImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={eventHeroImage.imageHint}
                                        priority
                                    />
                                    {/* Caption Overlay */}
                                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                                        New York Team
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* West Palm Beach Team Image */}
                        {westPalmImage && (
                            <div className="mb-12">
                                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={westPalmImage.imageUrl}
                                        alt={westPalmImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={westPalmImage.imageHint}
                                    />
                                </div>
                                <div className="text-right mt-2">
                                    <p className="text-sm font-medium text-muted-foreground italic pr-1">West Palm Beach Team</p>
                                </div>
                            </div>
                        )}
                        
                        <div className="space-y-12">
                            {/* Miami Event */}
                            <Card className="shadow-lg overflow-hidden">
                                <CardHeader className="text-center bg-primary/10">
                                    <CardTitle className="text-2xl font-headline text-primary">VÉLOURA Recruiting Seminar <br/>- Miami, Florida</CardTitle>
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
                                <CardContent className="text-center space-y-6">
                                    <Button asChild size="lg" variant="accent">
                                        <a href="mailto:support@velourabeautyondemand.com?subject=Event%20Service%20Request" target="_blank" rel="noopener noreferrer">
                                            <Mail className="mr-2 h-5 w-5" />
                                            Request Custom Event
                                        </a>
                                    </Button>
                                    
                                    <div className="flex flex-col items-center gap-2 pt-4 border-t">
                                        <div className="flex items-center gap-2 text-foreground font-semibold">
                                            <MessageSquare className="w-5 h-5 text-primary" />
                                            <span>Text Us: (305) 317-2759</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground italic">Text messages only — this number does not receive calls.</p>
                                    </div>
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
