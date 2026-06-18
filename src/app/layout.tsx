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
                "isPartOf": {
                  "url": "https://velourabeautyondemand.com",
                  "name": "VÉLOURA",
                  "@type": "Organization"
                },
                "publisher": {
                  "url": "https://velourabeautyondemand.com",
                  "name": "VÉLOURA",
                  "@type": "Organization"
                },
                "inLanguage": "en",
                "description": "Book professional beauty technicians to your door."
              },
              {
                "url": "https://velourabeautyondemand.com",
                "name": "VÉLOURA",
                "@type": "Organization",
                "@context": "https://schema.org",
                "description": "VÉLOURA brings beauty, photography, and event services directly to you—on demand."
              },
              {
                "url": "https://velourabeautyondemand.com",
                "name": "VÉLOURA App",
                "@type": "SoftwareApplication",
                "@context": "https://schema.org",
                "publisher": {
                  "url": "https://velourabeautyondemand.com",
                  "name": "VÉLOURA",
                  "@type": "Organization"
                },
                "description": "Download the VÉLOURA app to browse and book on-demand beauty services, photographers, and events.",
                "operatingSystem": "iOS; Android",
                "applicationCategory": "LifestyleApplication"
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
