
'use client';

import React from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Briefcase } from 'lucide-react';
import Link from 'next/script';
import NextLink from 'next/link';
import { EarningsCalculator } from '@/components/features/earnings-calculator';
import Script from 'next/script';

export default function BeautyProfessionalJobsPage() {
    const jobListSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "VÉLOURA Beauty Professional Careers",
      "description": "Information about joining the VÉLOURA network as a beauty or creative professional.",
      "publisher": {
        "@type": "Organization",
        "name": "VÉLOURA"
      }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="job-list-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jobListSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/50 py-16 md:py-24 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                            <Briefcase className="w-4 h-4" />
                            <span>FLEXIBLE CAREER OPPORTUNITIES</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">
                            VÉLOURA Beauty Jobs — Flexible Careers
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Join the fastest-growing on-demand beauty network. Empowerment, flexibility, and premium earnings for independent creative professionals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="h-14 px-10 text-lg font-bold">
                                <NextLink href="/apply">Apply Now</NextLink>
                            </Button>
                        </div>
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
