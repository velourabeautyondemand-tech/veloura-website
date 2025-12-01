
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
    {
        name: "OPI",
        logoUrl: "https://picsum.photos/seed/opi-logo/200/100",
        hint: "OPI logo",
        description: "30% off all professional-grade nail lacquers and gels.",
        link: "https://www.opi.com/pro"
    },
    {
        name: "Dermalogica",
        logoUrl: "https://picsum.photos/seed/dermalogica-logo/200/100",
        hint: "Dermalogica logo",
        description: "25% off all skincare products for licensed professionals.",
        link: "https://www.dermalogica.com/pages/pro-account-application"
    },
    {
        name: "Fromm",
        logoUrl: "https://picsum.photos/seed/fromm-logo/200/100",
        hint: "Fromm logo",
        description: "Exclusive discounts on professional beauty tools and apparel.",
        link: "https://frommpro.com/pro-program"
    },
    {
        name: "Salonory",
        logoUrl: "https://picsum.photos/seed/salonory-logo/200/100",
        hint: "Salonory logo",
        description: "Get access to wholesale pricing on top salon brands.",
        link: "https://www.salonory.com/"
    },
    {
        name: "Byootique",
        logoUrl: "https://picsum.photos/seed/byootique-logo/200/100",
        hint: "Byootique logo",
        description: "Exclusive discounts on professional beauty cases and supplies.",
        link: "https://byootique-global.com/VELOURA_BEAUTY_X"
    },
]

export default function ProDiscountsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-secondary/50 py-20 md:py-32 text-center">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                                Pro Discounts & Partnerships
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                We partner with leading beauty brands to give our VÉLOURA Pros exclusive access to discounts, helping you save money and elevate your kit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section id="partners" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Companies We Collab With</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our network of brand partners offer special perks for VÉLOURA Pros.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {partners.map((partner) => (
                                <Link key={partner.name} href={partner.link} target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-all hover:shadow-primary/20 hover:scale-105">
                                    <div className="h-20 flex items-center justify-center mb-4">
                                        <Image 
                                            src={partner.logoUrl} 
                                            alt={`${partner.name} logo`}
                                            width={150}
                                            height={75}
                                            data-ai-hint={partner.hint}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-muted-foreground flex-grow">{partner.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 bg-primary/10">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Become a VÉLOURA Partner Brand</h2>
                         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Want to connect your products with a community of elite, on-the-go beauty professionals? Let's talk.</p>
                         <div className="mt-8 flex justify-center">
                             <Button asChild size="lg">
                                 <Link href="/partner-press#partner">
                                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                                 </Link>
                             </Button>
                         </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
