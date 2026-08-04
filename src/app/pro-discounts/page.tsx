
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Script from 'next/script';

export default function ProDiscountsPage() {
    const silentBeaconLogo = "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c";

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
        },
        {
            name: "Silent Beacon",
            logoUrl: silentBeaconLogo,
            hint: "Silent Beacon logo",
            description: "Personal safety devices designed to support and protect beauty professionals during on-demand mobile appointments.",
            link: "https://silentbeacon.com/"
        }
    ]

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
        { "@type": "ListItem", "position": 2, "name": "Our Partners", "item": "https://velourabeautyondemand.com/pro-discounts" }
      ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="breadcrumb-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/50 py-20 md:py-32 text-center">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                                Our Partners
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                We partner with leading beauty and safety brands to give our VÉLOURA Pros exclusive access to discounts and support, helping you save money and elevate your business.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="partners" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Companies We Collab With</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our network of brand partners offer special perks and tools for VÉLOURA Pros.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {partners.map((partner) => (
                               <Card key={partner.name} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col">
                                    <a href={partner.link} target="_blank" rel="noopener noreferrer" className="block flex-1">
                                        <CardHeader className="items-center text-center p-6 pt-12">
                                             <div className="h-24 flex items-center justify-center w-full relative">
                                                <Image 
                                                    src={partner.logoUrl} 
                                                    alt={`${partner.name} logo`}
                                                    fill
                                                    data-ai-hint={partner.hint}
                                                    className="object-contain"
                                                    sizes="200px"
                                                />
                                             </div>
                                        </CardHeader>
                                        <CardContent className="text-center p-6 pt-6 flex flex-col">
                                            <p className="text-muted-foreground flex-grow mb-4">{partner.description}</p>
                                             <div className="mt-auto">
                                                <Button variant="link" asChild className="p-0">
                                                    <span>Learn More <ArrowRight className="ml-2 w-4 h-4" /></span>
                                                </Button>
                                             </div>
                                        </CardContent>
                                    </a>
                               </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 sm:py-24 bg-primary/10">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Become a VÉLOURA Partner Brand</h2>
                         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Want to connect your products or services with a community of elite, on-the-go beauty professionals? Let's talk.</p>
                         <div className="mt-8 flex justify-center">
                             <Button asChild size="lg">
                                 <a href="mailto:support@velourabeautyondemand.com?subject=Collaboration%20Inquiry" target="_blank" rel="noopener noreferrer">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Collaboration Inquiry
                                 </a>
                             </Button>
                         </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
