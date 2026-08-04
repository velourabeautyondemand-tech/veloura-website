
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, MapPin, Gift, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VÉLOURA On-Demand Beauty App: Elite Services Nearby',
  description: 'Download the VÉLOURA on-demand beauty app for professional hair, makeup, and nail services delivered to your door. Smart location matching and verified reviews.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/on-demand-beauty-app',
  },
};

export default function OnDemandBeautyAppPage() {
    const appSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "VÉLOURA",
      "url": "https://velourabeautyondemand.com/on-demand-beauty-app",
      "downloadUrl": "https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381",
      "operatingSystem": "iOS, Android",
      "applicationCategory": "Lifestyle",
      "description": "Book licensed beauty professionals for in-home, hotel, office, and event services with smart location matching and verified reviews."
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="app-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/50 py-16 md:py-24 border-b">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight mb-6">
                                    Top On-Demand Beauty App: <br />
                                    <span className="text-primary">VÉLOURA</span>
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8">
                                    The only app you need for elite beauty, wellness, and creative services. One click brings luxury to your door.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                     <Button asChild size="lg" className="h-14 px-8 text-lg font-bold">
                                        <Link href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank">
                                            <Download className="mr-2 w-5 h-5" />
                                            Download for iOS
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-bold">
                                         <Link href="https://play.google.com/store/apps/details?id=com.veloura.app&pcampaignid=web_share" target="_blank">
                                            <Smartphone className="mr-2 w-5 h-5" />
                                            Download for Android
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-black/5 bg-background">
                                <Image 
                                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1080&auto=format&fit=crop" 
                                    alt="VÉLOURA App Interface"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 600px"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
