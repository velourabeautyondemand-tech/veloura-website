
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';

import { services, technicians } from '@/lib/data';
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
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                Luxury Beauty Care, Delivered to You
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Browse professional beauty technicians and book an appointment at your home, office, or anywhere you are.
              </p>
              <div className="mt-10 max-w-xl mx-auto">
                <Button size="lg" variant="accent" asChild>
                  <Link href="/apply">Join Our Team of Professionals</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {/* <section id="services" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">From quick touch-ups to luxurious spa treatments.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.slice(0, 8).map((service) => {
                const image = PlaceHolderImages.find(p => p.id === service.imageId);
                return (
                  <Card key={service.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      {image && (
                         <Image
                           src={image.imageUrl}
                           alt={service.name}
                           width={600}
                           height={400}
                           className="w-full h-48 object-cover"
                           data-ai-hint={image.imageHint}
                         />
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold font-headline">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{service.duration} mins</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
