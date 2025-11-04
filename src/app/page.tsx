
import Link from 'next/link';
import { Apple, Smartphone, Heart, Award, HandHeart, Sparkles, Users, Briefcase, ShoppingCart, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

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
              <div className="mt-10 font-bold tracking-[0.45rem] text-sm text-foreground/80">VÉLOURA <span className="font-normal tracking-[0.2rem] ml-1.5">Beauty on Demand</span></div>
              <p className="mt-4 text-lg text-muted-foreground">
                Where technology meets beauty. One App. One Click.
              </p>
              <p className="mt-2 text-md text-muted-foreground italic">
                no traffic, no parking, no rushing, no waiting
              </p>
               <p className="mt-4 text-lg font-bold text-primary flex items-center justify-center gap-2">
                Just Enjoy
              </p>
            </div>
          </div>
        </section>

        {/* New App Download Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              The first smart beauty platform
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Brings professionals to you at your fingertips
            </p>
            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Download the app</p>
              <div className="flex justify-center gap-4">
                <Button size="lg" variant="outline" disabled>
                  <Apple className="mr-2 h-6 w-6" />
                  Coming Soon
                </Button>
                <Button size="lg" variant="outline" disabled>
                  <Smartphone className="mr-2 h-6 w-6" />
                  Coming Soon
                </Button>
              </div>
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
                <div className="mt-10 flex justify-center gap-4">
                    <Button size="lg" variant="outline" disabled>
                        App Launching Soon
                    </Button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
