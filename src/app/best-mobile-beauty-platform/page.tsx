
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Award, Star, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VÉLOURA On-Demand Beauty: Verified Pros & Luxury Service',
  description: 'Discover why VÉLOURA is the top-rated mobile platform for professional beauty services. Vetted technicians, real-time booking, and a luxury experience delivered to your door.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/best-mobile-beauty-platform',
  },
};

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

    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "VÉLOURA",
      "operatingSystem": "iOS, Android",
      "applicationCategory": "LifestyleApplication",
      "description": "Elite mobile beauty platform enabling on-demand services with licensed professionals and secure payments."
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="software-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="bg-primary/10 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold mb-4 border border-primary/20">
                            <Smartphone className="w-4 h-4" />
                            <span>RANKED #1 MOBILE PLATFORM</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">Why VÉLOURA Is The Best Mobile Beauty Platform</h1>
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
