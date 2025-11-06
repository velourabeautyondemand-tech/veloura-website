
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Hammer, Newspaper } from 'lucide-react';
import { SubscribeForm } from '@/components/features/subscribe-form';

export default function BookingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 flex items-center justify-center py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-md mx-auto text-center bg-card p-8 rounded-xl shadow-2xl">
                        <Hammer className="h-16 w-16 mx-auto text-destructive animate-bounce" />
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mt-6">
                            Ouch...
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our app is still being perfected. We're working hard to bring the VÉLOURA experience to your fingertips.
                        </p>
                        <div className="mt-10">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Newspaper className="h-5 w-5 text-primary"/>
                                <h3 className="font-semibold text-foreground">Stay in the loop!</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">Subscribe to be the first to know when we launch.</p>
                            <SubscribeForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
