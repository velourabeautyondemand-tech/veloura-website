
import Link from 'next/link';
import { Heart, Award, HandHeart, Sparkles, Users, Briefcase, ShoppingCart, Calendar, Newspaper, Smartphone, Layout, Clock, Home } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { SubscribeForm } from '@/components/features/subscribe-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DiscountPopup } from '@/components/features/discount-popup';

const useCases = [
  {
    icon: Clock,
    title: 'Last-Minute Needs',
    description: 'Glam, photographer, or event support — right when you need it.',
  },
  {
    icon: Briefcase,
    title: 'Busy Schedules',
    description: 'No traffic. No waiting. Just more time for what matters.',
  },
  {
    icon: Home,
    title: 'At-Home Convenience',
    description: 'Stay in your space. We bring everything to you.',
  },
  {
    icon: HandHeart,
    title: 'New Moms',
    description: 'Gentle, relaxing care at home-yes, even during nap time.',
  },
  {
    icon: Sparkles,
    title: 'Recovery & Wellness',
    description: 'Professional, respectful care — where you feel most comfortable.',
  },
  {
    icon: Layout,
    title: 'Real-Life Moments',
    description: 'From everyday needs to special occasions — handled seamlessly.',
  },
];

const problemsSolved = [
    {
        problem: '"I have a last-minute event."',
        solution: 'On-demand glam for runway, photoshoots, VIP parties-pros arrive equipped and ready.'
    },
    {
        problem: '"My schedule is too tight."',
        solution: 'Express services that fit a lunch break or between meetings-professional, efficient, elegant.'
    },
    {
        problem: '"I can\'t travel easily."',
        solution: 'In-home, gentle care designed for comfort and well-being.'
    },
    {
        problem: '"I want luxury without the stress."',
        solution: 'Five-star products and pros-without traffic, waiting, or parking.'
    }
];

export default function HomePage() {
  const interfaceImages = [
    PlaceHolderImages.find(p => p.id === 'interface_1'),
    PlaceHolderImages.find(p => p.id === 'interface_2'),
    PlaceHolderImages.find(p => p.id === 'interface_3'),
    PlaceHolderImages.find(p => p.id === 'interface_4'),
    PlaceHolderImages.find(p => p.id === 'interface_5'),
  ].filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <DiscountPopup />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                 VÉLOURA
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Where technology meets beauty. One App. One Click.
              </p>
               <div className="mt-10">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Download the app</p>
                  <div className="flex justify-center items-center gap-4 flex-wrap">
                    <a href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                        width={150}
                        height={50}
                        className="h-12 w-auto transition-transform hover:scale-105"
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pli=1" target="_blank" rel="noopener noreferrer">
                       <Image
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        width={170}
                        height={50}
                        className="h-14 w-auto transition-transform hover:scale-105"
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Join Our Team</p>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/apply">Apply Here</Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 italic max-w-xs mx-auto">
                    Starting April 10, 2026, a $29.99 onboarding fee applies to ensure committed applicants — fully refunded after your first completed booking.
                  </p>
                </div>
              <p className="mt-10 text-xl font-bold text-primary">
                Launching Soon — Your Choice: We Come to You, or You Come to Us
              </p>
              <div className="mt-2 font-bold tracking-[0.45rem] text-sm text-foreground/80">VÉLOURA <span className="font-normal tracking-[0.2rem] ml-1.5">Beauty on Demand</span></div>
              <p className="mt-4 text-lg text-foreground">
                Find professionals near you — no traffic, no parking, no waiting. Just more time for what matters.
              </p>

              {/* Interface Gallery */}
              <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {interfaceImages.map((img, index) => (
                    <div key={index} className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 hover:scale-105 transition-transform duration-500">
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
            </div>
          </div>
        </section>

        {/* Dedicated Download Section */}
        <section className="py-16 sm:py-24 bg-background border-y border-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center bg-secondary/20 p-8 md:p-12 rounded-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                        <Smartphone className="w-4 h-4" />
                        <span>EXPERIENCE VÉLOURA</span>
                    </div>
                    <h2 className="text-3xl font-bold font-headline mb-4">Download Our App</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Experience luxury beauty on demand. Explore more services, meet vetted professionals, and book your next moment of calm with just one click.
                    </p>
                    <div className="flex justify-center items-center gap-6 flex-wrap">
                        <a href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                width={150}
                                height={50}
                                className="h-12 w-auto transition-transform hover:scale-105"
                            />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pli=1" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                width={170}
                                height={50}
                                className="h-14 w-auto transition-transform hover:scale-105"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
                 <div className="flex items-center justify-center gap-2 mb-4">
                    <Newspaper className="h-5 w-5 text-primary"/>
                    <h3 className="font-semibold text-foreground text-xl">Stay in the loop!</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                    Subscribe to be the first to know when we launch.
                </p>
                <div className="max-w-md mx-auto">
                    <SubscribeForm />
                </div>
            </div>
        </section>

        {/* For Real Life Section */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Built for Real Life — Not Perfect Schedules</h2>
                    <div className="mt-6 space-y-4">
                        <p className="text-xl font-semibold text-foreground">
                            No time. No flexibility. Too many moving parts. <br />
                            We get it.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            VÉLOURA brings beauty, photography, and event services directly to you — so you don’t have to figure it out.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                    {useCases.map((item, index) => (
                        <div key={index} className="flex items-start gap-5">
                            <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-20 p-8 rounded-2xl bg-secondary/20 border border-primary/5">
                    <p className="text-xl font-medium text-foreground italic">
                        "Because your time matters — and getting ready shouldn’t be the hard part."
                    </p>
                </div>
            </div>
        </section>

        {/* Problems Solved Section */}
        <section className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">We Solve Everyday Beauty Problems - with Luxury Convenience</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="aspect-video w-full rounded-md overflow-hidden bg-muted flex items-center justify-center text-muted-foreground">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/Ox4SEDyYh8Q"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="aspect-video w-full rounded-md overflow-hidden bg-muted flex items-center justify-center text-muted-foreground">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/Oq-3R0VMSAw"
                            title="YouTube video player 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                 <ul className="space-y-8">
                    {problemsSolved.map((item, index) => (
                        <li key={index}>
                            <p className="font-bold text-lg text-primary">{item.problem}</p>
                            <p className="text-muted-foreground mt-1">{item.solution}</p>
                        </li>
                    ))}
                </ul>
                <p className="text-center font-bold text-xl mt-12 text-foreground">VÉLOURA turns your beauty routine into a moment of calm, confidence, and care.</p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
