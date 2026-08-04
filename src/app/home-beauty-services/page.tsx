
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Clock, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VÉLOURA At-Home Beauty Services | Mobile Salon',
  description: 'Experience professional salon services in the comfort of your home. Book licensed pros for hair, makeup, nails and wellness through VÉLOURA.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/home-beauty-services',
  },
};

export default function HomeBeautyServicesPage() {
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to get professional salon services at home with VÉLOURA",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Download the VÉLOURA app",
          "text": "Available on iOS and Android. Download the app to start your journey."
        },
        {
          "@type": "HowToStep",
          "name": "Choose your service",
          "text": "Select from nails, hair, makeup, or wellness packages."
        },
        {
          "@type": "HowToStep",
          "name": "Pick your pro",
          "text": "Browse vetted professional profiles and portfolios."
        },
        {
          "@type": "HowToStep",
          "name": "Schedule & relax",
          "text": "Set your time and location; your pro arrives ready to glam."
        }
      ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="howto-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">Professional Salon Services At Home With VÉLOURA</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Experience the luxury of a high-end salon without ever leaving your living room. VÉLOURA brings elite beauty professionals directly to your door.
                        </p>
                    </div>
                </section>
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <Button asChild size="lg" className="rounded-full h-14 px-12 font-bold shadow-xl">
                            <Link href="/book">Book Your Home Appointment</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
