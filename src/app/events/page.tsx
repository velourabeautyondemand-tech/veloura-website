
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Mail, MessageSquare, Loader2, Calendar as CalendarIcon, MapPin as MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Suspense } from 'react';

function EventsContent() {
    const eventHeroImage = PlaceHolderImages.find(p => p.id === 'event_hero');
    const westPalmImage = PlaceHolderImages.find(p => p.id === 'west_palm_team');
    const eventMay2026Image = PlaceHolderImages.find(p => p.id === 'event_may_2026');

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                                VÉLOURA Beauty Events
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Join us for exclusive events, networking, and industry seminars.
                            </p>
                        </div>

                        <Card className="shadow-lg overflow-hidden border-2 border-primary/20 mb-16">
                            <CardHeader className="text-center bg-accent/5 pb-8">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-md bg-background">
                                    <Image
                                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop"
                                        alt="VÉLOURA Special Event"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 800px"
                                    />
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>FEATURED EVENT</span>
                                </div>
                                <CardTitle className="text-3xl font-headline text-primary">VÉLOURA Special Event</CardTitle>
                                <div className="flex flex-col items-center gap-2 mt-4 text-muted-foreground font-semibold">
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="w-5 h-5 text-primary" />
                                        <span>Date: 05/07/2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPinIcon className="w-5 h-5 text-primary" />
                                        <span>Location Details in Invitation</span>
                                    </div>
                                </div>
                                <CardDescription className="pt-4 text-lg max-w-lg mx-auto">
                                    An exclusive gathering for creative talent and industry leaders. Request your invitation to secure a spot at our premier networking experience.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-8 pb-10 text-center bg-white/50 backdrop-blur-sm">
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button asChild size="lg" variant="accent" className="font-bold shadow-lg hover:scale-105 transition-transform">
                                        <a href="https://forms.gle/HE9LuLS8EGyczDwv6" target="_blank" rel="noopener noreferrer">Request to Join</a>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 shadow-sm">
                                        <a href="https://luma.com/gtf2g251" target="_blank" rel="noopener noreferrer">Event Details</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-12">
                             <div className="text-center">
                                <h2 className="text-2xl font-bold font-headline mb-8">Our Teams Across the Country</h2>
                             </div>

                            <div className="mb-12">
                                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop"
                                        alt="VÉLOURA New York Team"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 1200px"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                                        New York Team
                                    </div>
                                </div>
                            </div>

                            <Card className="shadow-lg overflow-hidden">
                                <CardHeader className="text-center bg-primary/10">
                                    <CardTitle className="text-2xl font-headline text-primary">VÉLOURA Recruiting Seminar <br/>- Miami, Florida</CardTitle>
                                    <p className="text-lg font-semibold text-muted-foreground pt-2">Date: 12/11/2025</p>
                                    <CardDescription className="pt-2">An Exclusive, Invitation-Only Event / No walk-ins</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6 text-center space-y-4 text-muted-foreground">
                                    <div className="relative aspect-video w-full rounded-md overflow-hidden bg-muted mb-6 shadow-inner">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src="https://www.youtube-nocookie.com/embed/Ox4SEDyYh8Q"
                                            title="VÉLOURA Miami Recruiting Seminar"
                                            style={{ border: 0 }}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p className="text-lg font-semibold text-foreground">
                                        All applications have been processed!
                                    </p>
                                    <p>
                                        Please check your Indeed messages or email for the official invitation, which includes detailed seminar information and the event schedule.
                                    </p>
                                    <p className="font-bold text-primary pt-4">- The VÉLOURA Team</p>
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

export default function EventsPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>}>
            <EventsContent />
        </Suspense>
    );
}
