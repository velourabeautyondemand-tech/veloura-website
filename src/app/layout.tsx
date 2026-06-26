import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'VÉLOURA | On-Demand Luxury Beauty at Home',
  description: 'Book professional beauty technicians to your door. VÉLOURA connects you with elite beauty professionals for mobile and at-home services.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com',
  },
  icons: {
    apple: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  verification: {
    other: {
      'impact-site-verification': 'bccc4b36-52b9-4b9a-b1e4-b51a9eb13213',
      'integration-token': '0c8a34f5-763a-48e2-9e7e-abe4eaa13fc3'
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://velourabeautyondemand.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "url": "https://velourabeautyondemand.com",
                "name": "VÉLOURA",
                "isPartOf": {
                  "@type": "Organization",
                  "url": "https://velourabeautyondemand.com",
                  "name": "VÉLOURA"
                },
                "inLanguage": "en",
                "description": "Book professional beauty technicians to your door."
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://velourabeautyondemand.com",
                "name": "VÉLOURA",
                "description": "VÉLOURA Beauty on Demand connects clients with vetted beauty professionals for mobile and at-home services."
              },
              {
                "@context": "https://schema.org",
                "@type": "MobileApplication",
                "url": "https://velourabeautyondemand.com",
                "name": "VÉLOURA",
                "description": "VÉLOURA app for on-demand beauty services delivered to your door.",
                "operatingSystem": "iOS, Android",
                "applicationCategory": "Lifestyle"
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "On-Demand Beauty Services",
                "provider": {
                  "@type": "Organization",
                  "url": "https://velourabeautyondemand.com",
                  "name": "VÉLOURA"
                },
                "areaServed": "Worldwide",
                "description": "Professional beauty services delivered to your door. Book vetted professionals for mobile or in-home salon experiences.",
                "serviceType": "Mobile beauty, at-home beauty services"
              },
              {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How to get salon services at home with VÉLOURA",
                "description": "Follow these steps to start your on-demand beauty journey with VÉLOURA.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Download & Explore",
                    "text": "Get the VÉLOURA app on iOS or Android. Browse our curated menu of luxury beauty, photography, and event services."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Select Your Pro",
                    "text": "View profiles, ratings, and portfolios of elite, vetted professionals available in your area."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Book Your Moment",
                    "text": "Choose a time and location that fits your life. Our pros arrive fully equipped to deliver the salon experience to your door."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Relax & Enjoy",
                    "text": "Relax while professionals deliver high-quality care in the comfort of your home."
                  }
                ]
              }
            ])
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17907553249"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17907553249');
          `
        }} />
      </head>
      <body className={cn('font-body antialiased', poppins.variable)}>
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
        <Toaster />
        <Script
            src="https://dunsregistered.dnb.com/drsus.js?duns=f54604e6691278f60393f51e1c9ef37e&ProfileURL=https://www.dnb.com/business-directory/company-profiles.iamdreammaker_production_group_llc.f54604e6691278f60393f51e1c9ef37e.html?referrer=DRS"
            strategy="lazyOnload"
        />
        <Script src="//code.tidio.co/4fg7y7nkjc8bki5w501dtqca6eptnd2v.js" async strategy="afterInteractive" />
        <GoogleAnalytics gaId="G-5XNNXSE6MC" />
      </body>
    </html>
  );
}
