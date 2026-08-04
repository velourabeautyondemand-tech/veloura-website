
'use client';

import React from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Camera } from 'lucide-react';
import Link from 'next/link';
import { EarningsCalculator } from '@/components/features/earnings-calculator';
import Script from 'next/script';

export default function PhotographerJobsPage() {
    const faqs = [
        {
            q: "What types of photography jobs are available?",
            a: "We offer event photography, portrait sessions, and glamour shoots. You choose your specialties and service areas."
        },
        {
            q: "Who owns the rights to the photos?",
            a: "Photographers maintain their creative rights, but grant VÉLOURA and the client usage rights for the delivered files."
        },
        {
            q: "What gear is required?",
            a: "A professional DSLR or Mirrorless camera, a range of lenses suitable for portraits and events, and basic lighting equipment."
        }
    ];

    const jobSchema = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "On-Demand Professional Photographer",
      "description": "Join VÉLOURA's Creative Network. Provide on-location professional photography for portraits, events, and glamour shoots.",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "VÉLOURA Beauty On Demand",
        "sameAs": "https://velourabeautyondemand.com"
      },
      "jobLocationType": "TELECOMMUTE",
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressLocality": "Los Angeles, NYC, Miami"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": {
          "@type": "QuantitativeValue",
          "value": 80,
          "unitText": "PERCENT"
        }
      }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="job-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/30 py-16 md:py-24 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                            <Camera className="w-4 h-4" />
                            <span>NOW RECRUITING PHOTOGRAPHERS</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
                            Photography Jobs On-Demand | VÉLOURA
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Book more sessions without the marketing headache. The first platform to integrate elite beauty and professional photography.
                        </p>
                        <Button asChild size="lg" className="h-14 px-10 text-lg font-bold">
                            <Link href="/apply">Apply to the Agency</Link>
                        </Button>
                    </div>
                </section>
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <EarningsCalculator />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
