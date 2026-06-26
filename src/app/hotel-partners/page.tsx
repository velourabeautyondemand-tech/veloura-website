'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
    Hotel, 
    ShieldCheck, 
    Zap, 
    Sparkles, 
    Heart, 
    UserCheck, 
    ArrowRight,
    CheckCircle2,
    MapPin,
    Handshake
} from 'lucide-react';
import Link from 'next/link';

export default function HotelPartnersPage() {
    const partnershipEmail = "mailto:support@velourabeautyondemand.com?subject=Hotel%20Partnership%20Inquiry";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Mobile Beauty Services",
        "provider": {
            "@type": "Organization",
            "name": "VÉLOURA",
            "url": "https://velourabeautyondemand.com"
        },
        "areaServed": [
            { "@type": "City", "name": "Los Angeles" },
            { "@type": "City", "name": "New York City" },
            { "@type": "City", "name": "Miami" }
        ],
        "description": "Offer guests five-star, licensed beauty services on-site. VÉLOURA partners with hotels for liability-free, white-label guest glam."
    };

    const features = [
        {
            title: "Turn Guest Requests Into Revenue, Not Liability",
            description: "Every 'can you recommend a hairstylist' question is either an opportunity or a risk. VÉLOURA removes the risk: every professional is licensed, identity-verified, and background-checked.",
            icon: ShieldCheck
        },
        {
            title: "No Staffing. No Liability. No App to Learn.",
            description: "Your concierge simply shares a link or QR code — guests book directly on their own device. We handle the insurance and safety protocols.",
            icon: UserCheck
        },
        {
            title: "Built for the Moments That Matter Most",
            description: "From bridal parties and VIP arrivals to last-minute glam before a show, we provide the luxury support your property needs.",
            icon: Heart
        },
        {
            title: "White-Label-Ready Guest Experience",
            description: "We can tailor the booking experience to feel like an extension of your property — including co-branded confirmations and property-specific menus.",
            icon: Sparkles
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 bg-secondary/50 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                                <Hotel className="w-4 h-4" />
                                <span>Hotel & Hospitality Partners</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 leading-tight">
                                Your Guests Deserve Five-Star Beauty <span className="text-primary italic">Without Leaving the Suite.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                                VÉLOURA brings licensed, background-checked beauty professionals directly to your property — turning every request into a five-star guest moment your concierge desk can deliver in minutes.
                            </p>
                            <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                                <Link href={partnershipEmail}>
                                    Become a VÉLOURA Hotel Partner <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-16 sm:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Why Hotels Partner With VÉLOURA</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Seamless integration. Professional standards. Unmatched convenience.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {features.map((feature, i) => (
                                <Card key={i} className="border-primary/5 hover:shadow-xl transition-shadow bg-secondary/10">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-2xl">
                                            <feature.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 md:px-6 py-12 text-center border-t border-primary/10">
                    <p className="text-sm text-muted-foreground">
                        Looking for services? View our <Link href="/services" className="text-primary font-bold hover:underline">full service menu</Link> or learn <Link href="/about" className="text-primary font-bold hover:underline">our story</Link>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
