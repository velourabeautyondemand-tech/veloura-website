
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
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your location or postcode"
                    className="w-full pl-12 pr-24 h-14 text-lg"
                  />
                  <Button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-11"
                    variant="accent"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Service available within a 6-mile radius of our technicians.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-24">
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
        </section>

        {/* Featured Technicians Section */}
        <section id="technicians" className="py-16 sm:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Meet Our Top Technicians</h2>
              <p className="mt-4 text-lg text-muted-foreground">Experienced, licensed, and ready to serve you.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicians.slice(0, 3).map((tech) => {
                const avatar = PlaceHolderImages.find(p => p.id === tech.avatarId);
                return (
                  <Card key={tech.id} className="flex flex-col items-center text-center p-6 shadow-lg">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-primary/50">
                       {avatar && <AvatarImage src={avatar.imageUrl} alt={tech.name} data-ai-hint={avatar.imageHint} />}
                      <AvatarFallback>{tech.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-headline">{tech.name}</CardTitle>
                    <CardDescription className="mt-1">{tech.baseLocation}</CardDescription>
                    <div className="flex items-center gap-1 mt-2">
                       {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.floor(tech.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.07 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({tech.reviewsCount})</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{tech.bio.substring(0, 100)}...</p>
                    <Button asChild className="mt-6 w-full" variant="outline">
                      <Link href={`/technicians/${tech.id}`}>View Profile</Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
