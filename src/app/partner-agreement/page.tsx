
import { NailIcon } from '@/components/shared/logo';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Mail, Phone, Globe, MessageSquare } from 'lucide-react';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VÉLOURA Beauty On Demand: Partner Handbook & Onboarding',
  description: 'Official Partner Handbook and Onboarding Policy for VÉLOURA professionals. Understanding our mission, payment policies, and standards.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/partner-agreement',
  },
};

export default function PartnerAgreementPage() {
    const agreementSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Partner Handbook & Onboarding Policy Agreement",
      "publisher": {
        "@type": "Organization",
        "name": "VÉLOURA"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
          { "@type": "ListItem", "position": 2, "name": "Partner Agreement", "item": "https://velourabeautyondemand.com/partner-agreement" }
        ]
      }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="agreement-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(agreementSchema) }}
            />
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose lg:prose-lg max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-md">
                        <div className="text-center mb-12 not-prose">
                            <NailIcon className="h-16 w-16 mx-auto text-primary" />
                            <h1 className="font-headline text-4xl mt-4">Partner Handbook & Onboarding Policy Agreement</h1>
                            <p className="lead text-muted-foreground">VÉLOURA - Beauty on Demand</p>
                        </div>
                        <p>Welcome to VÉLOURA. This handbook outlines the policies, standards, and expectations that define our partnership.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
