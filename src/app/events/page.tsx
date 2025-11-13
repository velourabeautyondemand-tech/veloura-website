
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
                                Join us for exclusive events, trainings, and seminars.
                            </p>
                        </div>
                        <Card className="shadow-lg">
                            <CardHeader className="text-center bg-primary/10">
                                <div className="flex justify-center items-center mb-4">
                                     <PartyPopper className="h-12 w-12 text-primary" />
                                </div>
                                <CardTitle className="text-3xl font-headline text-primary">VÉLOURA Training Seminar - Miami, Florida</CardTitle>
                                <CardDescription className="pt-2">An Exclusive, Invitation-Only Event</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 text-center space-y-4 text-muted-foreground">
                                <p className="text-lg">
                                    We're thrilled to announce the upcoming VÉLOURA Training Seminar in our home base of Miami, Florida - an exclusive, invitation-only event for selected Makeup Artists, Hairstylists, and Nail Technicians.
                                </p>
                                <p>
                                    This seminar will offer hands-on training and professional education designed to empower beauty professionals to understand how to elevate their craft and embrace the future with VÉLOURA beauty on demand.
                                </p>
                                <div>
                                    <h3 className="font-semibold text-foreground text-lg mt-6 mb-2">Please Note:</h3>
                                    <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-2">
                                        <li>This seminar is by <span className="font-semibold">invitation only</span> and offered exclusively to selected candidates.</li>
                                        <li>We're currently reviewing all applications, and final selections will be announced once our review process is complete.</li>
                                        <li>Selected candidates will receive an official invitation with detailed seminar information and schedules.</li>
                                    </ul>
                                </div>
                                <p className="font-semibold text-lg pt-4">We look forward to welcoming our next group of talented beauty professionals!</p>
                                <p className="font-bold text-primary">- The VÉLOURA Team</p>
                                 <div className="pt-6">
                                    <Button asChild variant="accent">
                                        <Link href="/apply">Apply to Join Our Team</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

