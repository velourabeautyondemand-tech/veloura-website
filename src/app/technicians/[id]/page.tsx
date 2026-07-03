
'use client';

import { notFound } from 'next/navigation';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { use } from 'react';
import { technicians as legacyTechs, services as allServices } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Star, MapPin, Sparkles, Calendar as CalendarIcon, Clock, Video, Loader2 } from 'lucide-react';
import ReviewSummarizer from '@/components/features/review-summarizer';

export default function TechnicianProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const firestore = useFirestore();

  const techRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, 'technicians', resolvedParams.id);
  }, [firestore, resolvedParams.id]);

  const { data: firestoreTech, isLoading } = useDoc(techRef);

  // Fallback to legacy data if not in firestore yet
  const legacyTech = !firestoreTech && !isLoading ? legacyTechs.find(t => t.id === resolvedParams.id) : null;
  const technician = firestoreTech || legacyTech;

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!technician) {
    return notFound();
  }

  const techAvatar = PlaceHolderImages.find(p => p.id === technician.avatarId);
  const techServices = (technician.services || []).map((serviceId: string) => allServices.find(s => s.id === serviceId)).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="pt-6 flex flex-col md:flex-row items-start gap-6">
                  <Avatar className="w-32 h-32 border-4 border-primary">
                    <AvatarImage src={techAvatar?.imageUrl || `https://picsum.photos/seed/${technician.id}/200/200`} alt={technician.name} data-ai-hint="person face" />
                    <AvatarFallback className="text-4xl">{technician.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold font-headline">{technician.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{technician.rating || 5.0}</span>
                        <span>({technician.reviewsCount || 0} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-5 h-5" />
                        <span>Based in {technician.baseLocation || technician.serviceArea}</span>
                      </div>
                    </div>
                    <p className="mt-4">{technician.bio || "VÉLOURA Certified Professional"}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Video className="text-primary w-6 h-6" /> Portfolio Showcase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-md overflow-hidden bg-muted flex items-center justify-center text-muted-foreground">
                    <span>Professional Portfolio Coming Soon</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {techServices.map(service => service && (
                     <div key={service.id} className="flex justify-between items-center p-3 rounded-lg bg-background hover:bg-muted/50 border border-primary/5">
                        <div>
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.duration} mins</p>
                        </div>
                     </div>
                  ))}
                  {techServices.length === 0 && <p className="text-muted-foreground italic">No specialized services listed.</p>}
                </CardContent>
              </Card>

              {technician.reviews && technician.reviews.length > 0 && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-headline flex items-center gap-2">
                        <Sparkles className="text-primary w-6 h-6" /> AI-Powered Review Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ReviewSummarizer reviews={technician.reviews.map((r: any) => r.comment).join('\n')} />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Customer Reviews</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {technician.reviews.map((review: any, index: number) => (
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
                </>
              )}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl border-primary/10">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Book an Appointment</CardTitle>
                  <CardDescription>Secure your spot with {technician.name.split(' ')[0]}.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center"><CalendarIcon className="w-4 h-4 mr-2" /> Select Date</h3>
                    <Calendar mode="single" selected={new Date()} className="rounded-md border" disabled />
                  </div>
                  <Separator />
                  <p className="text-sm text-center text-muted-foreground italic">Booking functionality will be enabled after your first content sync.</p>
                  <Button size="lg" className="w-full text-lg" variant="accent" disabled>Request to Book</Button>
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
