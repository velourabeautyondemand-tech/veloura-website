import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'VÉLOURA',
  description: 'Book professional beauty technicians to your door.',
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "url": "https://velourabeautyondemand.com",
                "name": "VÉLOURA",
                "@type": "WebPage",
                "@context": "https://schema.org",
                "inLanguage": "en",
                "description": "Book professional beauty technicians to your door."
              },
              {
                "url": "https://velourabeautyondemand.com",
                "@type": "WebSite",
                "@context": "https://schema.org",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://velourabeautyondemand.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@context": "https://schema.org",
                "itemListElement": [
                  {
                    "item": "https://velourabeautyondemand.com",
                    "name": "Home",
                    "@type": "ListItem",
                    "position": 1
                  }
                ]
              },
              {
                "url": "https://velourabeautyondemand.com",
                "name": "VÉLOURA",
                "@type": "Organization",
                "@context": "https://schema.org",
                "description": "VÉLOURA brings beauty, photography, and event services directly to you."
              },
              {
                "name": "How to get salon services at home with VÉLOURA",
                "step": [
                  {
                    "name": "Download & Explore",
                    "text": "Get the VÉLOURA app on iOS or Android. Browse our curated menu of luxury beauty, photography, and event services.",
                    "@type": "HowToStep"
                  },
                  {
                    "name": "Select Your Pro",
                    "text": "View profiles, ratings, and portfolios of elite, vetted professionals available in your area.",
                    "@type": "HowToStep"
                  },
                  {
                    "name": "Book Your Moment",
                    "text": "Choose a time and location that fits your life. Our pros arrive fully equipped to deliver the salon experience to your door.",
                    "@type": "HowToStep"
                  },
                  {
                    "name": "Relax & Enjoy",
                    "text": "Relax while professionals deliver high-quality care in the comfort of your home.",
                    "@type": "HowToStep"
                  }
                ],
                "@type": "HowTo",
                "@context": "https://schema.org",
                "description": "Follow these steps to start your on-demand beauty journey with VÉLOURA."
              },
              {
                "name": "VÉLOURA",
                "@type": "SoftwareApplication",
                "@context": "https://schema.org",
                "description": "Download the VÉLOURA app to find vetted beauty professionals near you and book on-demand beauty services.",
                "operatingSystem": "iOS, Android",
                "applicationCategory": "Lifestyle"
              }
            ])
          }}
        />
        {/* Google tag (gtag.js) */}
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
      </body>
    </html>
  );
}
