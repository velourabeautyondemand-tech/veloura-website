
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Building2, Palmtree, Navigation } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VÉLOURA Beauty On Demand: At-Home Elite Pros Near You',
  description: 'Book licensed beauty professionals for mobile beauty services at your home, hotel, office, weddings, events and special occasions near you.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/beauty-services-near-me',
  },
};

export default function BeautyServicesNearMePage() {
    const locations = [
        { name: "New York City", icon: Building2, areas: "Manhattan, Brooklyn, Queens" },
        { name: "Los Angeles", icon: Navigation, areas: "Santa Monica, West Hollywood, Downtown" },
        { name: "Miami", icon: Palmtree, areas: "South Beach, Brickell, Coral Gables" }
    ];

    const localServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "VÉLOURA Beauty On Demand",
      "url": "https://velourabeautyondemand.com/beauty-services-near-me",
      "image": "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c",
      "priceRange": "$$",
      "areaServed": locations.map(l => ({ "@type": "City", "name": l.name })),
      "description": "Mobile beauty services provided by elite professionals who come to your location for various events and personal care."
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="local-service-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="relative py-20 md:py-32 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">Professional Beauty Services Near Me - VÉLOURA Comes To You</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Stop searching and start relaxing. VÉLOURA connects you with elite beauty professionals right in your neighborhood.
                        </p>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                {locations.map((loc, i) => (
                                    <div key={i} className="bg-card p-6 rounded-2xl border text-center">
                                        <loc.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                        <h3 className="text-xl font-bold mb-2">{loc.name}</h3>
                                        <p className="text-sm text-muted-foreground">{loc.areas}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                                <h2 className="text-3xl font-bold font-headline text-foreground">Location-Based Beauty: We Move With You</h2>
                                <p>
                                    Whether you're at home in LA, visiting a hotel in Midtown NYC, or getting ready at your office in Miami, VÉLOURA is your local beauty partner. Our <strong>location-based beauty services</strong> are designed to find the best talent closest to you, ensuring punctuality and expertise.
                                </p>
                                
                                <h3 className="text-2xl font-bold text-foreground">No Travel Needed</h3>
                                <p>
                                    The biggest hurdle to self-care is often the commute. Parking in LA, traffic in NYC, and the heat in Miami can ruin your salon experience before it even begins. VÉLOURA eliminates these stressors. Our professionals arrive fully equipped at your doorstep.
                                </p>
                            </div>

                            <div className="mt-16 text-center">
                                <Button asChild size="lg" className="font-bold rounded-full px-12">
                                    <Link href="/book">Find a Pro Near Me</Link>
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
