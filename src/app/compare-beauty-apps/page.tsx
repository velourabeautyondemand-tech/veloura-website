import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Check, X, Star, Users, Camera, Layout } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/compare-beauty-apps',
  },
};

export default function CompareBeautyAppsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">VÉLOURA vs Other Beauty Apps: Why We're Different</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Not all apps are created equal. Discover the unique features and commitment to excellence that set VÉLOURA apart from the competition.
                        </p>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-5xl mx-auto mb-16 overflow-hidden rounded-2xl border shadow-lg">
                            <table className="w-full text-left bg-card">
                                <thead>
                                    <tr className="bg-primary/10 border-b">
                                        <th className="p-6 font-bold text-foreground">Feature</th>
                                        <th className="p-6 font-bold text-primary">VÉLOURA</th>
                                        <th className="p-6 font-bold text-muted-foreground">Competitors</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="p-6 font-medium">Professional Background Checks</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground">Limited/Varies</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Talent Agency Integration</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground"><X className="w-6 h-6" /></td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Photography & Event Services</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground"><X className="w-6 h-6" /></td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Verified Portfolio Reviews</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground">Standard Only</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Luxury Brand Partnerships</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground">Rarely</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="prose lg:prose-lg max-w-4xl mx-auto text-muted-foreground">
                            <h2 className="text-3xl font-bold font-headline text-foreground">What Makes VÉLOURA Unique?</h2>
                            <p>
                                While many apps offer basic beauty services, VÉLOURA is built as a complete <strong>lifestyle and talent ecosystem</strong>. We don't just connect you with a technician; we manage an elite network of creative professionals.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                                <div className="bg-secondary/10 p-6 rounded-2xl border border-primary/5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="text-primary w-6 h-6" />
                                        <h3 className="text-xl font-bold text-foreground">Talent Agency Aspect</h3>
                                    </div>
                                    <p className="text-sm">We represent our pros. Our Talent Agency bridges the gap between high-end creative talent and premium opportunities like fashion shows and multi-day productions.</p>
                                </div>
                                <div className="bg-secondary/10 p-6 rounded-2xl border border-primary/5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Camera className="text-primary w-6 h-6" />
                                        <h3 className="text-xl font-bold text-foreground">Photography & Events</h3>
                                    </div>
                                    <p className="text-sm">We are the first beauty app to fully integrate professional photography and event coordination, allowing you to book your look and your photographer in one go.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground">Quality Over Quantity</h3>
                            <p>
                                Many platforms focus on having the most workers. We focus on having the <strong>best</strong> workers. Our professionals are treated as partners, keeping 80% of their earnings, which attracts more dedicated and skilled talent to our network.
                            </p>

                            <h3 className="text-2xl font-bold text-foreground">A Complete Beauty Ecosystem</h3>
                            <p>
                                From our Partner Press collaborations to our pro-discounts network, VÉLOURA provides more value to both the customer and the service provider. We aren't just an app; we are a community dedicated to redefining beauty on demand.
                            </p>
                        </div>

                        <div className="mt-20 text-center bg-primary p-12 rounded-3xl text-primary-foreground">
                            <h2 className="text-3xl font-bold font-headline mb-4">Experience the VÉLOURA Difference</h2>
                            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Download the app today and see why we are the preferred choice for discerning clients in LA, NYC, and Miami.</p>
                            <Button asChild size="lg" variant="secondary" className="font-bold px-12">
                                <Link href="/">Explore Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
