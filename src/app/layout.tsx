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
  title: 'VÉLOURA Talent Agency: Luxury Makeup Artists & Photographers',
  description: 'Book professional beauty technicians to your door. VÉLOURA connects you with elite beauty professionals for mobile and at-home services.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/',
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
        {/* Schema Block 1: Mobile Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "VÉLOURA",
              "operatingSystem": "iOS, Android",
              "applicationCategory": "LifestyleApplication",
              "url": "https://velourabeautyondemand.com"
            })
          }}
        />
        {/* Schema Block 2: Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VÉLOURA Beauty on Demand",
              "description": "Mobile beauty marketplace connecting clients with licensed beauty professionals for in-home, in-office, and event services.",
              "url": "https://velourabeautyondemand.com",
              "areaServed": ["Los Angeles", "New York City", "Miami"],
              "serviceType": ["Mobile Manicures", "Lash Extensions", "Hair Styling", "Makeup Services", "Skincare"],
              "priceRange": "$$"
            })
          }}
        />
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
