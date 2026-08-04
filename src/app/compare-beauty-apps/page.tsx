
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Check, X, Star, Users, Camera, Layout } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VÉLOURA Beauty App: Elite Talent, Agency & Photography',
  description: 'Compare VÉLOURA with other beauty apps. Discover how our integrated talent agency and event coordination model sets us apart for luxury on-demand services.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/compare-beauty-apps',
  },
};

export default function CompareBeautyAppsPage() {
    const blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "VÉLOURA vs Other Beauty Apps: Why We're Different",
      "author": {
        "@type": "Organization",
        "name": "VÉLOURA"
      },
      "publisher": {
        "@type": "Organization",
        "name": "VÉLOURA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c"
        }
      },
      "description": "A detailed comparison of VÉLOURA's luxury marketplace model vs. standard gig-economy beauty apps."
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Script
              id="blog-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">VÉLOURA vs Other Beauty Apps: Why We're Different</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Not all apps are created equal. Discover the unique features and commitment to excellence that set VÉLOURA apart from the competition.
                        </p>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-5xl mx-auto mb-16 overflow-hidden rounded-2xl border shadow-lg">
                            <table className="w-full text-left bg-card">
                                <thead>
                                    <tr className="bg-primary/10 border-b">
                                        <th className="p-6 font-bold text-foreground">Feature</th>
                                        <th className="p-6 font-bold text-primary">VÉLOURA</th>
                                        <th className="p-6 font-bold text-muted-foreground">Competitors</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="p-6 font-medium">Professional Background Checks</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground">Limited/Varies</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Talent Agency Integration</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground"><X className="w-6 h-6" /></td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Photography & Event Services</td>
                                        <td className="p-6 text-primary"><Check className="w-6 h-6" /></td>
                                        <td className="p-6 text-muted-foreground"><X className="w-6 h-6" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
