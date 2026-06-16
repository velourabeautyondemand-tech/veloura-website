
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Clock, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeBeautyServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">How To Get Professional Salon Services At Home With VÉLOURA</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Experience the luxury of a high-end salon without ever leaving your living room. VÉLOURA brings elite beauty professionals directly to your door.
                        </p>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                            <h2 className="text-3xl font-bold font-headline text-foreground">Bringing the Salon to Your Door</h2>
                            <p>
                                In today's fast-paced world, finding time for self-care shouldn't be another chore. VÉLOURA is redefining the beauty industry by offering a mobile-first platform that eliminates the need for travel, parking, and waiting rooms. Whether you're a busy professional, a new parent, or simply value the comfort of your own space, our at-home beauty services are designed for you.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="bg-card p-6 rounded-xl border shadow-sm">
                                    <h3 className="font-bold text-foreground flex items-center gap-2">
                                        <Home className="text-primary w-5 h-5" />
                                        Your Space, Your Comfort
                                    </h3>
                                    <p className="text-sm">Enjoy treatments in the environment where you feel most relaxed. No bright salon lights or crowded spaces.</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border shadow-sm">
                                    <h3 className="font-bold text-foreground flex items-center gap-2">
                                        <Clock className="text-primary w-5 h-5" />
                                        Time-Saving Luxury
                                    </h3>
                                    <p className="text-sm">Save up to 2 hours per appointment by eliminating the commute. We work around your schedule.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold font-headline text-foreground">Simple Steps to Book</h2>
                            <ol className="space-y-4">
                                <li><strong>Download the App:</strong> Available on iOS and Android.</li>
                                <li><strong>Choose Your Service:</strong> Select from nails, hair, makeup, or wellness packages.</li>
                                <li><strong>Pick Your Pro:</strong> Browse vetted professional profiles and portfolios.</li>
                                <li><strong>Schedule & Relax:</strong> Set your time and location. Your pro arrives ready to glam.</li>
                            </ol>

                            <h2 className="text-2xl font-bold font-headline text-foreground mt-12">Available Services</h2>
                            <p>From classic manicures to full bridal transformations, VÉLOURA offers a comprehensive menu including:</p>
                            <ul className="grid grid-cols-2 gap-2">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Manicures & Pedicures</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Blowouts & Hairstyling</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Professional Makeup</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Facials & Skincare</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Lash Extensions</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Event Photography</li>
                            </ul>

                            <h2 className="text-2xl font-bold font-headline text-foreground mt-12">Why VÉLOURA is Better Than a Traditional Salon</h2>
                            <p>
                                Traditional salons require you to fit into their schedule. With VÉLOURA, we fit into yours. You receive personalized, one-on-one attention from a dedicated professional who is focused solely on you. There are no distractions, no overbooked chairs, and no rush.
                            </p>
                        </div>

                        <div className="mt-16 text-center bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10">
                            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h2 className="text-3xl font-bold font-headline mb-4">Ready for At-Home Luxury?</h2>
                            <p className="text-muted-foreground mb-8">Download the VÉLOURA app today and book your first appointment.</p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Button asChild size="lg">
                                    <Link href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank">App Store</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="https://play.google.com/store/apps/details?id=com.veloura.app" target="_blank">Google Play</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
