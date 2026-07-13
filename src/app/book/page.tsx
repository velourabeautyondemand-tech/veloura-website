
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Image from 'next/image';
import { Smartphone, Download, Newspaper } from 'lucide-react';
import { SubscribeForm } from '@/components/features/subscribe-form';

export default function BookingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <Smartphone className="w-4 h-4" />
                                <span>The VÉLOURA App</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
                                One App. <br /> One Click. <br /> <span className="text-primary">Luxury Delivered.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                All VÉLOURA service discovery, professional selection, and booking take place exclusively inside our mobile app. Download now to get started.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 py-8">
                             <a 
                                href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <Image
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    width={200}
                                    height={60}
                                    className="h-14 w-auto"
                                />
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.veloura.app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <Image
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    width={230}
                                    height={60}
                                    className="h-16 w-auto"
                                />
                            </a>
                        </div>

                        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border-2 border-primary/10 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Newspaper className="h-5 w-5 text-primary"/>
                                <h3 className="font-semibold text-foreground text-xl">Stay in the loop!</h3>
                            </div>
                            <p className="text-muted-foreground mb-8">
                                Subscribe to receive exclusive offers and be the first to know about new service launches in your city.
                            </p>
                            <SubscribeForm />
                        </div>

                        <p className="text-sm text-muted-foreground italic">
                            Customer-professional communication and secure Stripe payments are handled entirely within the app.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
