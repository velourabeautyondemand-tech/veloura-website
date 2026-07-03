
"use client";

import Link from 'next/link';
import { Calendar as CalendarIcon, Tag, User, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';

export default function BookingsPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const bookingsQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(
        collection(firestore, 'bookings'),
        where('customerId', '==', user.uid),
        orderBy('createdAt', 'desc')
    );
  }, [firestore, user]);

  const { data: dbBookings, isLoading: isBookingsLoading } = useCollection(bookingsQuery);

  const upcomingBookings = (dbBookings || []).filter(b => b.status === 'pending' || b.status === 'confirmed');
  const pastBookings = (dbBookings || []).filter(b => b.status === 'completed' || b.status === 'cancelled');

  const BookingCard = ({ booking }: { booking: any }) => (
    <Card className="shadow-md hover:shadow-lg transition-shadow border-primary/10">
      <CardHeader>
        <CardTitle className="font-headline flex justify-between items-start text-lg">
          {booking.serviceName}
          <Badge variant={booking.status === 'completed' ? 'secondary' : booking.status === 'cancelled' ? 'destructive' : 'accent'}>
            {booking.status}
          </Badge>
        </CardTitle>
        <CardDescription className="flex items-center pt-2">
          <User className="w-4 h-4 mr-2" /> With {booking.technicianName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="w-4 h-4 mr-2" /> {new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" /> {booking.time}
        </div>
        <div className="flex items-center text-sm font-semibold text-primary">
          <Tag className="w-4 h-4 mr-2" /> ${booking.totalAmount?.toFixed(2)}
        </div>
      </CardContent>
       <CardFooter>
            {booking.status === 'pending' && (
                <Button variant="outline" size="sm" className="w-full">Cancel Request</Button>
            )}
            {booking.status === 'completed' && (
                 <Button variant="accent" size="sm" className="w-full">Book Again</Button>
            )}
      </CardFooter>
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8 font-headline">My Bookings</h1>

           {isUserLoading || isBookingsLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
           ) : !user ? (
             <div className="text-center py-20 border-2 border-dashed rounded-lg bg-card">
              <h3 className="text-lg font-medium">Please Log In</h3>
              <p className="mt-2 text-sm text-muted-foreground">You need to be logged in to view your bookings.</p>
              <Button className="mt-6" asChild><Link href="/login">Log In</Link></Button>
            </div>
           ) : (
            <Tabs defaultValue="upcoming">
                <TabsList className="grid w-full grid-cols-2 md:w-[400px] mb-8">
                    <TabsTrigger value="upcoming">Upcoming & Pending</TabsTrigger>
                    <TabsTrigger value="past">History</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    {upcomingBookings.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingBookings.map(b => <BookingCard key={b.id} booking={b} />)}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-card rounded-xl border">
                             <p className="text-muted-foreground">No upcoming bookings. Find your match today!</p>
                             <Button asChild className="mt-6" variant="outline"><Link href="/match">Try AI Concierge</Link></Button>
                        </div>
                    )}
                </TabsContent>
                <TabsContent value="past">
                     {pastBookings.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pastBookings.map(b => <BookingCard key={b.id} booking={b} />)}
                        </div>
                    ) : (
                        <p className="text-center text-muted-foreground py-10">No past bookings found.</p>
                    )}
                </TabsContent>
            </Tabs>
           )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
