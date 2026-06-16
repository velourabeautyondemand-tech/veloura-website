
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Building2, Palmtree, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function BeautyServicesNearMePage() {
    const locations = [
        { name: "New York City", icon: Building2, areas: "Manhattan, Brooklyn, Queens" },
        { name: "Los Angeles", icon: Navigation, areas: "Santa Monica, West Hollywood, Downtown" },
        { name: "Miami", icon: Palmtree, areas: "South Beach, Brickell, Coral Gables" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
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

                                <div className="bg-primary/5 p-8 rounded-2xl my-12 border border-primary/10">
                                    <h3 className="text-xl font-bold text-foreground mb-4">Where Can You Book?</h3>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        <li className="flex items-center gap-2 font-medium text-foreground">
                                            <Home className="w-5 h-5 text-primary" /> At Your Home
                                        </li>
                                        <li className="flex items-center gap-2 font-medium text-foreground">
                                            <Building2 className="w-5 h-5 text-primary" /> At Your Office
                                        </li>
                                        <li className="flex items-center gap-2 font-medium text-foreground">
                                            <Palmtree className="w-5 h-5 text-primary" /> At Your Hotel
                                        </li>
                                        <li className="flex items-center gap-2 font-medium text-foreground">
                                            <MapPin className="w-5 h-5 text-primary" /> At Your Event Venue
                                        </li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-foreground">Elite Professionals in Your Area</h3>
                                <p>
                                    We recruit the top 10% of talent in every city we serve. By choosing VÉLOURA, you're supporting local independent professionals while receiving a level of service that meets global luxury standards.
                                </p>
                            </div>

                            <div className="mt-16 text-center">
                                <Button asChild size="lg" className="font-bold rounded-full px-12">
                                    <Link href="/">Find a Pro Near Me</Link>
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
