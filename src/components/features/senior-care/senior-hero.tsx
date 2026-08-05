
'use client';

import { Button } from "@/components/ui/button";
import { seniorCareContent, BOOKING_APP_URL } from "@/lib/senior-care-data";
import { Smartphone, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SeniorHero() {
  const scrollToServices = () => {
    document.getElementById('senior-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#FDFBF7] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-primary font-headline text-2xl md:text-3xl font-bold tracking-tight uppercase">
                {seniorCareContent.hero.title}
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-[#4A3728] leading-tight">
                {seniorCareContent.hero.subtitle}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-primary/80 italic">
                {seniorCareContent.hero.tagline}
              </p>
            </div>
            
            <div className="space-y-4 text-lg md:text-xl text-[#6B5A4E] leading-relaxed max-w-xl">
              {seniorCareContent.hero.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToServices}
                className="h-16 px-8 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 shadow-xl"
              >
                Explore Senior Services
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="h-16 px-8 text-lg font-bold rounded-full border-2 border-primary text-primary bg-white hover:bg-primary/5"
              >
                <Link href={BOOKING_APP_URL}>
                  <Smartphone className="mr-2 h-6 w-6" />
                  Book Through the VÉLOURA App
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-black/5">
            <Image
              src="https://images.unsplash.com/photo-1581578731522-aa0283526569?q=80&w=1080"
              alt="Senior woman receiving a gentle beauty treatment at home"
              fill
              className="object-cover"
              priority
              data-ai-hint="senior beauty"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/40 to-transparent" />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#E8F0FE] rounded-full blur-3xl" />
    </section>
  );
}
