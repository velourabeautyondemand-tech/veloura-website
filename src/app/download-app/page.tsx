
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Smartphone, ShieldCheck, Zap, Star, ChevronRight } from 'lucide-react';
import { NailIcon } from '@/components/shared/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Download the VÉLOURA Beauty on Demand App',
  description: 'Download VÉLOURA to find and book mobile beauty and lifestyle professionals for your home, hotel, office or event.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/download-app',
  },
  openGraph: {
    title: 'Download the VÉLOURA Beauty on Demand App',
    description: 'Find and book elite beauty professionals anywhere.',
    url: 'https://velourabeautyondemand.com/download-app',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'VÉLOURA App',
      },
    ],
  },
};

export default function DownloadAppPage() {
  const appScreenshots = [
    PlaceHolderImages.find(p => p.id === 'interface_1'),
    PlaceHolderImages.find(p => p.id === 'interface_2'),
    PlaceHolderImages.find(p => p.id === 'interface_3'),
    PlaceHolderImages.find(p => p.id === 'interface_4'),
    PlaceHolderImages.find(p => p.id === 'interface_5'),
  ].filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white shadow-2xl p-4 border border-primary/10">
                  <NailIcon className="w-full h-full" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
                  The VÉLOURA App
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                  VÉLOURA is a nationwide mobile beauty marketplace connecting you with elite professionals for appointments at your home, hotel, or office.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">
                <a 
                  href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Get VÉLOURA on the App Store"
                    width={200}
                    height={60}
                    className="h-14 w-auto"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.veloura.app&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="https://www.gstatic.com/marketing-cms/assets/images/e1/8a/041f778e49dd8a553b7fb220f747/consolenavlogo.svg"
                    alt="Get it on Google Play"
                    width={230}
                    height={60}
                    className="h-16 w-auto"
                    unoptimized
                  />
                </a>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 shadow-lg max-w-2xl mx-auto">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Important Notice</p>
                <p className="text-muted-foreground leading-relaxed">
                  All service discovery, professional selection, booking, scheduling, and secure payment take place exclusively inside the VÉLOURA mobile app.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              <div className="text-center space-y-3 p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Vetted Pros</h3>
                <p className="text-sm text-muted-foreground">Every professional is licensed and background-checked for your safety.</p>
              </div>
              <div className="text-center space-y-3 p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Instant Booking</h3>
                <p className="text-sm text-muted-foreground">Real-time availability for last-minute glam or future events.</p>
              </div>
              <div className="text-center space-y-3 p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Seamless Payments</h3>
                <p className="text-sm text-muted-foreground">Secure, cashless transactions handled entirely within the app.</p>
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold font-headline mb-4">Explore the Interface</h2>
              <p className="text-muted-foreground">Designed for elegance and ease of use.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
              {appScreenshots.map((img, index) => (
                <div key={index} className="relative aspect-[9/19.5] rounded-xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-black/5">
                  <Image
                    src={img!.imageUrl}
                    alt={img!.description}
                    fill
                    className="object-cover"
                    data-ai-hint={img!.imageHint}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 bg-secondary/20 border-t">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg font-bold font-headline mb-8 uppercase tracking-widest">Learn More About VÉLOURA</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/services" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                Services <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/locations/los-angeles" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                Locations <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/privacy" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                Privacy Policy <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/terms" className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1">
                Terms of Use <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
