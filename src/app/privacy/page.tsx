
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Privacy Policy for Beauty On Demand and Data Usage',
  description: 'VÉLOURA Privacy Policy: How we collect, use, protect, and share your personal data when you visit our site or use our app, plus your data rights.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
    const privacySchema = {
      "@context": "https://schema.org",
      "@type": "PrivacyPolicy",
      "name": "VÉLOURA Privacy Policy",
      "url": "https://velourabeautyondemand.com/privacy",
      "datePublished": "2025-10-01",
      "dateModified": "2025-10-01"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="privacy-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose lg:prose-lg max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-md">
                        <h1 className="font-headline text-4xl">Privacy Policy</h1>
                        <p className="text-muted-foreground">Effective Date: October 1, 2025</p>
                        <p>VÉLOURA (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>
                        <h2>1. Information We Collect</h2>
                        <p>We may collect the following types of information: Name, Email, Phone, Location, and Payment information (securely handled by Stripe).</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
