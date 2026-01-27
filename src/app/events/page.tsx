
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PartyPopper, Calendar, MapPin, Users, Shirt } from 'lucide-react';
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
                                Join us for exclusive events, and seminars.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <Card className="shadow-lg overflow-hidden">
                                <div className="relative h-60 w-full">
                                    <Image
                                        src="https://vqftsjfwhonwbpyogmzi.supabase.co/storage/v1/object/public/landing-pages/33/components/d449314a-696b-47ed-8e8e-9b114a694ea0/1762890428095-miamibeach.jpg"
                                        alt="Miami Beach event"
                                        layout="fill"
                                        objectFit="cover"
                                        data-ai-hint="miami beach"
                                    />
                                </div>
                                <CardHeader className="text-center bg-primary/10">
                                    <div className="flex justify-center items-center mb-4">
                                        <PartyPopper className="h-12 w-12 text-primary" />
                                    </div>
                                    <CardTitle className="text-3xl font-headline text-primary">VÉLOURA Recruiting Seminar <br/>- Miami, Florida</CardTitle>
                                    <p className="text-lg font-semibold text-muted-foreground pt-2">Date: 12/11/2025</p>
                                    <CardDescription className="pt-2">An Exclusive, Invitation-Only Event / No walk-ins</CardDescription>
                                    <div className="mt-4">
                                        <Button asChild>
                                            <Link href="https://www.nowadays.ai/veloura-seminar-2025" target="_blank" rel="noopener noreferrer">Agenda</Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6 text-center space-y-4 text-muted-foreground">
                                    <p className="text-lg font-semibold text-foreground">
                                        All applications have been processed!
                                    </p>
                                    <p>
                                        Please check your Indeed messages or email for the official invitation, which includes detailed seminar information and the event schedule. Invitations have been sent out.
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
