
'use client';

import Link from 'next/link';
import { Heart, HandHeart, Sparkles, Briefcase, Newspaper, Smartphone, Layout, Clock, Home, ShieldCheck, Zap, Star, Wand2, ArrowRight, ShoppingBag, Gift, Bell } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { SubscribeForm } from '@/components/features/subscribe-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DiscountPopup } from '@/components/features/discount-popup';
import { useLanguage } from '@/context/language-context';
import { useRemoteConfigBoolean, useRemoteConfigString } from '@/firebase';

const useCases = [
  { icon: Clock, title: 'Last-Minute Needs', description: 'Glam, photographer, or event support — right when you need it.' },
  { icon: Briefcase, title: 'Busy Schedules', description: 'No traffic. No waiting. Just more time for what matters.' },
  { icon: Home, title: 'At-Home Convenience', description: 'Stay in your space. We bring everything to you.' },
  { icon: HandHeart, title: 'New Moms', description: 'Gentle, relaxing care at home-yes, even during nap time.' },
  { icon: Sparkles, title: 'Recovery & Wellness', description: 'Professional, respectful care — where you feel most comfortable.' },
  { icon: Layout, title: 'Real-Life Moments', description: 'From everyday needs to special occasions — handled seamlessly.' },
];

const howItWorks = [
  { step: '01', title: 'Download & Explore', description: 'Get the VÉLOURA Beauty on Demand app on iOS or Android.' },
  { step: '02', title: 'Select Your Pro', description: 'View profiles, ratings, and portfolios of elite professionals.' },
  { step: '03', title: 'Book Your Moment', description: 'Choose a time and location that fits your life.' },
  { step: '04', title: 'Relax & Enjoy', description: 'Experience professional care in the comfort of your home.' }
];

export default function HomePage() {
  const { t } = useLanguage();
  
  // Remote Config hooks synced with console screenshot
  const showAds = useRemoteConfigBoolean('show_ads', false);
  const showPromoBanner = useRemoteConfigBoolean('show_promo_banner', false);
  const promoBannerText = useRemoteConfigString('promo_banner_text', 'Welcome to VÉLOURA — Your Elite Beauty Partner.');
  const heroTitleOverride = useRemoteConfigString('hero_title_override', '');

  const interfaceImages = [
    PlaceHolderImages.find(p => p.id === 'interface_1'),
    PlaceHolderImages.find(p => p.id === 'interface_2'),
    PlaceHolderImages.find(p => p.id === 'interface_3'),
    PlaceHolderImages.find(p => p.id === 'interface_4'),
    PlaceHolderImages.find(p => p.id === 'interface_5'),
  ].filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Promo Banner - Controlled by show_promo_banner and promo_banner_text */}
      {showPromoBanner && (
        <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs font-bold tracking-widest uppercase animate-in slide-in-from-top duration-500">
          <div className="container mx-auto flex items-center justify-center gap-2">
            <Bell className="w-3 h-3" />
            <span>{promoBannerText || 'Welcome to VÉLOURA — Your Elite Beauty Partner.'}</span>
            <Link href="/book" className="underline ml-2 hover:text-white/80 transition-colors font-black">Download Now</Link>
          </div>
        </div>
      )}

      <Header />
      <DiscountPopup />
      <main className="flex-1">
        {/* Hero Section - Controlled by hero_title_override */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline uppercase">
                 {heroTitleOverride || t('hero.title')}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground font-semibold">
                {t('hero.subtitle')}
              </p>
              
               <div className="mt-12 flex flex-col items-center gap-6">
                  <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">
                      <Link href="/book" className="flex items-center gap-2">
                        <Smartphone className="w-6 h-6" />
                        {t('hero.cta')}
                      </Link>
                  </Button>
                  
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                      <a href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank" rel="noopener noreferrer">
                        <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width={150} height={50} className="h-10 w-auto" />
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                         <Image src="https://www.gstatic.com/marketing-cms/assets/images/e1/8a/041f778e49dd8a553b7fb220f747/consolenavlogo.svg" alt="Play Store" width={170} height={50} className="h-12 w-auto" unoptimized />
                      </a>
                    </div>
                  </div>
                </div>

              <p className="mt-16 text-xl font-bold text-primary italic">
                {t('hero.choice')}
              </p>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {interfaceImages.map((img, index) => (
                  <div key={index} className="relative aspect-[9/19.5] overflow-hidden shadow-2xl border-4 border-white rounded-2xl">
                    <Image src={img!.imageUrl} alt={img!.description} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Remote Config Controlled Ad Section - Controlled by show_ads */}
        {showAds && (
          <section className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 py-16 border-y border-accent/20 animate-in fade-in zoom-in-95 duration-1000">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border-2 border-primary/20 shadow-2xl">
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <Badge variant="accent" className="animate-pulse px-4 py-1 text-sm font-bold tracking-widest uppercase">
                    Partner Showcase
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold font-headline leading-tight">
                    Premium Kits & <br /> <span className="text-primary italic">Pro Essentials</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-md">
                    We've partnered with the industry's best to give VÉLOURA Pros exclusive discounts on high-end beauty equipment.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="rounded-full px-8 font-bold">
                      <Link href="/pro-discounts">
                        Browse Partner Offers <ShoppingBag className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold border-primary text-primary">
                       <Link href="/store">
                         Visit Boutique <Gift className="ml-2 w-4 h-4" />
                       </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-64 flex items-center justify-center">
                   <div className="bg-primary/10 w-48 h-48 rounded-full absolute animate-ping opacity-20" />
                   <div className="bg-primary/20 w-40 h-40 rounded-full absolute animate-pulse opacity-40" />
                   <Sparkles className="w-32 h-32 text-primary opacity-90 drop-shadow-xl" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* AI Concierge Promo Section */}
        <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>AI Talent Matcher</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">Not sure what you need? <br /> Let our AI handle it.</h2>
                        <Button asChild variant="secondary" size="lg" className="h-14 px-10 text-primary font-bold rounded-full">
                            <Link href="/match">Try the AI Concierge <ArrowRight className="ml-2 w-5 h-5" /></Link>
                        </Button>
                    </div>
                    <div className="flex-1 relative w-full max-w-sm mx-auto flex items-center justify-center">
                         <Wand2 className="w-32 h-32 text-white opacity-90" />
                    </div>
                </div>
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">How to Get Salon Services at Home</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative p-6 rounded-2xl bg-secondary/20 border border-primary/5">
                  <div className="text-4xl font-bold text-primary/20 absolute top-4 right-6 font-headline">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 pr-8">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <h2 className="text-3xl font-bold font-headline mb-12">Built for Real Life — Not Perfect Schedules</h2>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                    {useCases.map((item, index) => (
                        <div key={index} className="flex items-start gap-5">
                            <div className="bg-primary/10 p-3 rounded-xl shrink-0"><item.icon className="w-7 h-7 text-primary" /></div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Newspaper className="h-5 w-5 text-primary"/>
                    <h2 className="font-semibold text-foreground text-xl">Stay in the loop!</h2>
                </div>
                <div className="max-w-md mx-auto"><SubscribeForm /></div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
