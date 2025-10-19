
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
               <Badge variant="secondary" className="mb-4 text-sm">Launching Soon!</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                Luxury Beauty Care, Delivered to You
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're getting ready to launch! We are currently looking for talented technicians to join our exclusive team.
              </p>
              <div className="mt-10 max-w-xl mx-auto">
                <Button size="lg" variant="accent" asChild>
                  <Link href="/apply">Join Our Team of Professionals</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
