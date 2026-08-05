import { Metadata } from 'next';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { SeniorHero } from '@/components/features/senior-care/senior-hero';
import { SeniorPricingBanner, SeniorServiceGrid, CompanionServiceGrid, NonMedicalNotice } from '@/components/features/senior-care/senior-sections';
import { SeniorPerfectFor, SeniorWhyFamilies, SeniorSafetyAccordion } from '@/components/features/senior-care/senior-faq';
import { SeniorBookingNotice, SeniorFamilyBooking } from '@/components/features/senior-care/senior-booking';
import { Button } from '@/components/ui/button';
import { BOOKING_APP_URL } from '@/lib/senior-care-data';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Senior Beauty Services at Home | VÉLOURA Senior Care',
  description: 'Book gentle in-home hair, nail, skincare and companionship services for seniors through VÉLOURA Senior Care. Non-medical services at home.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/services/senior-care',
  },
  openGraph: {
    title: 'Senior Beauty Services at Home | VÉLOURA Senior Care',
    description: 'Book gentle in-home hair, nail, skincare and companionship services for seniors. VÉLOURA brings caring beauty and companionship directly to the door.',
    url: 'https://velourabeautyondemand.com/services/senior-care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VÉLOURA Senior Care - In-Home Beauty & Companionship',
    description: 'Gentle, professional beauty and companionship services for older adults at home.',
  }
};

export default function SeniorCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://velourabeautyondemand.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Senior Care" }
        ]
      },
      {
        "@type": "Service",
        "name": "VÉLOURA Senior Care",
        "description": "Beauty, wellness, and non-medical companionship services for older adults at home.",
        "provider": {
          "@type": "Organization",
          "name": "VÉLOURA",
          "url": "https://velourabeautyondemand.com"
        },
        "areaServed": "Major cities",
        "serviceType": "In-home Beauty and Companionship"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="senior-care-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-[#FDFBF7]">
        <SeniorHero />
        <SeniorPricingBanner />
        <SeniorServiceGrid />
        <CompanionServiceGrid />
        <SeniorPerfectFor />
        <SeniorWhyFamilies />
        <SeniorBookingNotice />
        <NonMedicalNotice />
        <SeniorSafetyAccordion />
        <SeniorFamilyBooking />
        
        {/* Warm Final CTA */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4 max-w-3xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#4A3728]">
                A Little Care Can Brighten Someone’s Whole Day
              </h2>
              <p className="text-xl text-[#6B5A4E] leading-relaxed font-medium">
                Whether it is a haircut, a manicure, a favorite song, or a friendly conversation, VÉLOURA Senior Care helps bring comfort and connection directly to the door.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 shadow-xl">
                 <Link href="#senior-services">Explore Senior Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl font-bold rounded-full border-2 border-primary text-primary shadow-lg">
                <Link href={BOOKING_APP_URL}>Book Through the VÉLOURA App</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}