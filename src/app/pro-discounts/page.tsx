
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const partners = [
    {
        name: "Byootique",
        logoUrl: "https://uploads.dovetale.com/brand-profile-logo/brandprofile/33535/logo/thumb-db1f1b4174fd99b5ba2678562bf41a14.png",
        hint: "Byootique logo",
        description: "Exclusive discounts on professional beauty cases, makeup bags, and supplies to keep your kit organized and ready for any client.",
        link: "https://byootique-global.com/VELOURA_BEAUTY_X"
    },
    {
        name: "The Nailest",
        logoUrl: "https://thenailest.com/cdn/shop/files/STICKER_1.5_w_R-01-01_150x@2x.png?v=1614284508",
        hint: "The Nailest logo",
        description: "Get access to high-quality, trendy, and durable nail products. Perfect for the modern nail professional.",
        link: "https://thenailest.com/a/buzzbassador/bassador-signup/245381uhcgUpj4"
    }
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
                                we partner with leading beauty brands to give our VÉLOURA Pros exclusive access to discounts, helping you save money and elevate your kit.
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
                        <div className="grid md:grid-cols-2 gap-8 justify-center">
                            {partners.map((partner) => (
                               <Card key={partner.name} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300">
                                    <Link href={partner.link} target="_blank" rel="noopener noreferrer" className="block">
                                        <CardHeader className="items-center text-center p-6 pt-12">
                                             <div className="h-24 flex items-center justify-center">
                                                <Image 
                                                    src={partner.logoUrl} 
                                                    alt={`${partner.name} logo`}
                                                    width={150}
                                                    height={75}
                                                    data-ai-hint={partner.hint}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center p-6 pt-6">
                                            <p className="text-muted-foreground flex-grow mb-4">{partner.description}</p>
                                             <Button variant="link">
                                                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Link>
                               </Card>
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
                                 <Link href="mailto:support@velourabeautyondemand.com?subject=Collaboration%20Inquiry">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Collaboration Inquiry
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
