
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Award, Star, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function BestMobileBeautyPlatformPage() {
    const platformFeatures = [
        {
            icon: ShieldCheck,
            title: "Professional Verified Techs",
            description: "Every professional on our platform undergoes a rigorous multi-step vetting process, including identity and background checks."
        },
        {
            icon: Zap,
            title: "Instant Booking",
            description: "No more phone tags. Our real-time scheduling allows you to book elite talent in seconds."
        },
        {
            icon: Award,
            title: "Luxury Experience",
            description: "We don't just provide a service; we deliver a five-star experience with premium products and personalized care."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="bg-primary/10 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold mb-4 border border-primary/20">
                            <Smartphone className="w-4 h-4" />
                            <span>RANKED #1 MOBILE PLATFORM</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">Why VÉLOURA Is The Best Mobile Beauty Platform For On-Demand Services</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Redefining convenience and quality. Discover why thousands choose VÉLOURA for their beauty and lifestyle needs.
                        </p>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                            {platformFeatures.map((feature, i) => (
                                <div key={i} className="bg-card p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow text-center">
                                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                                        <feature.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="prose lg:prose-lg max-w-3xl mx-auto text-muted-foreground">
                            <h2 className="text-3xl font-bold font-headline text-foreground">A Cut Above the Rest</h2>
                            <p>
                                When searching for a <strong>mobile beauty platform</strong>, the two most important factors are trust and quality. VÉLOURA excels in both. Unlike other gig-economy apps, we prioritize the "Elite" in every category. Our roster isn't just large; it's curated.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-foreground">Verified Professionals Only</h3>
                            <p>
                                Your safety is our priority. Every VÉLOURA pro is licensed, insured, and background-checked. We review portfolios and client feedback continuously to ensure our network maintains the highest standards in the industry.
                            </p>

                            <h3 className="text-2xl font-bold text-foreground">Seamless Convenience</h3>
                            <p>
                                Our technology is built for real life. The VÉLOURA app allows you to filter by service, location, and professional rating. With integrated payment processing via Stripe, your entire experience—from booking to tipping—is handled securely in one place.
                            </p>

                            <h3 className="text-2xl font-bold text-foreground">The Luxury Experience</h3>
                            <p>
                                We believe that on-demand doesn't have to mean "express." Our professionals arrive with high-end toolkits and a commitment to providing a relaxing, salon-quality environment wherever you are. It's high-tech booking meets high-touch service.
                            </p>
                        </div>

                        <div className="mt-20 text-center">
                             <Button asChild size="lg" variant="accent" className="font-bold">
                                <Link href="/apply">Join Our Professional Network</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
