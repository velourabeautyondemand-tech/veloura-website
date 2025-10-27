
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Search, Star, Heart, Briefcase, Home } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

const useCases = [
  {
    icon: '👠',
    title: 'Fashion/Runway & VIP Events',
    description: 'Last-minute glam for red carpets, shoots, or parties.',
  },
  {
    icon: '👩‍🍼',
    title: 'New Moms',
    description: 'Gentle, relaxing care at home—yes, even during nap time.',
  },
  {
    icon: '🌿',
    title: 'Recovery & Wellness',
    description: 'Compassionate, hygienic service for clients healing or with limited mobility.',
  },
  {
    icon: '💼',
    title: 'Busy Professionals',
    description: 'Only have a one-hour break? We’ll meet you at your office or hotel.',
  },
  {
    icon: '🏡',
    title: 'Home Comfort Seekers',
    description: 'Prefer privacy and convenience? Enjoy salon quality on your couch.',
  },
];

const problemsSolved = [
    {
        problem: "“I have a last-minute event.”",
        solution: "On-demand glam for runway, photoshoots, VIP parties—pros arrive equipped and ready."
    },
    {
        problem: "“My schedule is too tight.”",
        solution: "Express services that fit a lunch break or between meetings—professional, efficient, elegant."
    },
    {
        problem: "“I can’t travel easily.”",
        solution: "In-home, gentle care designed for comfort and well-being."
    },
    {
        problem: "“I want luxury without the stress.”",
        solution: "Five-star products and pros—without traffic, waiting, or parking."
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
                VÉLOURA — Beauty That Fits Your Life
              </h1>
              <p className="mt-4 text-lg font-semibold text-muted-foreground">No traffic. No waiting. No rush. No parking.</p>
              <p className="mt-2 text-xl text-foreground">
                Salon-quality nails, hair, and makeup — delivered to you.
              </p>
              <div className="mt-10 max-w-xl mx-auto">
                <Button size="lg" asChild>
                  <Link href="/bookings">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For Real Life Section */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">For Real Life — Not Perfect Schedules</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Life moves fast. From high-fashion moments to real-life chaos, <strong className="text-primary">VÉLOURA brings beauty wherever you are.</strong></p>
                </div>
                <ul className="space-y-6">
                    {useCases.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <span className="text-2xl mt-1">{item.icon}</span>
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">We Solve Everyday Beauty Problems — with Luxury Convenience</h2>
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
                     <Button size="lg" asChild>
                        <Link href="/bookings">Book Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <a href="mailto:info@iamdreammaker.com">Chat with Support</a>
                    </Button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
