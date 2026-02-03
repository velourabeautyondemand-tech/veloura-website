
import Link from 'next/link';
import { Heart, Award, HandHeart, Sparkles, Users, Briefcase, ShoppingCart, Calendar, Newspaper } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { SubscribeForm } from '@/components/features/subscribe-form';

const useCases = [
  {
    icon: Award,
    title: 'Fashion/Runway & VIP Events',
    description: 'Last-minute glam for red carpets, shoots, or parties.',
  },
  {
    icon: HandHeart,
    title: 'New Moms',
    description: 'Gentle, relaxing care at home-yes, even during nap time.',
  },
  {
    icon: Sparkles,
    title: 'Recovery & Wellness',
    description: 'Compassionate, hygienic service for clients healing or with limited mobility.',
  },
  {
    icon: Briefcase,
    title: 'Busy Professionals',
    description: 'Only have a one-hour break? We\'ll meet you at your office or hotel.',
  },
  {
    icon: Users,
    title: 'Home Comfort Seekers',
    description: 'Prefer privacy and convenience? Enjoy salon quality on your couch.',
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
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
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
                        className="h-12 w-auto"
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pli=1" target="_blank" rel="noopener noreferrer">
                       <Image
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        width={170}
                        height={50}
                        className="h-14 w-auto"
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">For Technicians</p>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://velourabeautyondemand.com/apply" target="_blank" rel="noopener noreferrer">Apply Here</a>
                  </Button>
                </div>
              <p className="mt-10 text-lg font-bold text-primary">
                Relax, we’re coming to you.
              </p>
              <div className="mt-2 font-bold tracking-[0.45rem] text-sm text-foreground/80">VÉLOURA <span className="font-normal tracking-[0.2rem] ml-1.5">Beauty on Demand</span></div>
              <p className="mt-4 text-lg text-foreground">
                Find professionals within a 6-mile radius. No traffic, no parking, no waiting.
              </p>
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
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">For Real Life - Not Perfect Schedules</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Life moves fast. From high-fashion moments to real-life chaos, <strong className="text-primary">VÉLOURA brings beauty wherever you are.</strong></p>
                </div>
                <ul className="space-y-6">
                    {useCases.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <item.icon className="w-8 h-8 text-primary mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                 <p className="text-center mt-10 text-lg italic text-muted-foreground">Because beauty should move with you, not slow you down.</p>
            </div>
        </section>

        {/* Problems Solved Section */}
        <section className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">We Solve Everyday Beauty Problems - with Luxury Convenience</h2>
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
