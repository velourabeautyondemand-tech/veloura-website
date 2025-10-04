import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, MapPin, Sparkles, Calendar as CalendarIcon, Clock } from 'lucide-react';

import { technicians, services as allServices } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import ReviewSummarizer from '@/components/features/review-summarizer';

export default function TechnicianProfilePage({ params }: { params: { id: string } }) {
  const technician = technicians.find(t => t.id === params.id);

  if (!technician) {
    notFound();
  }

  const techAvatar = PlaceHolderImages.find(p => p.id === technician.avatarId);
  const techServices = technician.services.map(serviceId => allServices.find(s => s.id === serviceId)).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Technician Header */}
              <Card>
                <CardContent className="pt-6 flex flex-col md:flex-row items-start gap-6">
                  <Avatar className="w-32 h-32 border-4 border-primary">
                    {techAvatar && <AvatarImage src={techAvatar.imageUrl} alt={technician.name} data-ai-hint={techAvatar.imageHint} />}
                    <AvatarFallback className="text-4xl">{technician.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold font-headline">{technician.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{technician.rating}</span>
                        <span>({technician.reviewsCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-5 h-5" />
                        <span>Based in {technician.baseLocation}</span>
                      </div>
                    </div>
                    <p className="mt-4">{technician.bio}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {techServices.map(service => service && (
                     <div key={service.id} className="flex justify-between items-center p-3 rounded-lg bg-background hover:bg-muted/50">
                        <div>
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.duration} mins</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg text-primary">${service.price.toFixed(2)}</p>
                            <Button size="sm" variant="accent" className="mt-1">Select</Button>
                        </div>
                     </div>
                  ))}
                </CardContent>
              </Card>

              {/* Reviews & AI Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Sparkles className="text-primary w-6 h-6" /> AI-Powered Review Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <ReviewSummarizer reviews={technician.reviews.map(r => r.comment).join('\n')} />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {technician.reviews.map((review, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>{review.reviewer.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{review.reviewer}</p>
                                    <div className="flex items-center">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground mt-2 pl-10">{review.comment}</p>
                            {index < technician.reviews.length - 1 && <Separator className="mt-6" />}
                        </div>
                    ))}
                </CardContent>
              </Card>

            </div>

            {/* Booking Widget */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Book an Appointment</CardTitle>
                  <CardDescription>Select a date and time.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center"><CalendarIcon className="w-4 h-4 mr-2" /> Date</h3>
                    <Calendar
                        mode="single"
                        selected={new Date()}
                        className="rounded-md border"
                    />
                  </div>
                   <div>
                    <h3 className="font-semibold mb-2 flex items-center"><Clock className="w-4 h-4 mr-2" /> Time</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'].map(time => (
                            <Button key={time} variant="outline">{time}</Button>
                        ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between font-semibold">
                        <span>Gel Manicure</span>
                        <span>$50.00</span>
                    </div>
                     <div className="flex justify-between text-muted-foreground">
                        <span>Service Fee</span>
                        <span>$5.00</span>
                    </div>
                     <div className="flex justify-between font-bold text-lg pt-2">
                        <span>Total</span>
                        <span>$55.00</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full text-lg" variant="accent">Request to Book</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
