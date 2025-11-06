
"use client";

import Link from 'next/link';
import { Calendar, Tag, User, Clock } from 'lucide-react';
import { bookings } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { useUser } from '@/firebase';
import { Loader2 } from 'lucide-react';

export default function BookingsPage() {
  const { user, isUserLoading } = useUser();

  // MOCK: We will use a hardcoded customer ID for now.
  // In a real app, you would use user.uid
  const customerId = 'c1'; 

  const upcomingBookings = bookings.filter(b => b.customerId === customerId && b.status === 'upcoming');
  const pastBookings = bookings.filter(b => b.customerId === customerId && b.status !== 'upcoming');

  const BookingCard = ({ booking }: { booking: typeof bookings[0] }) => (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="font-headline flex justify-between items-start">
          {booking.serviceName}
          <Badge variant={booking.status === 'completed' ? 'secondary' : booking.status === 'cancelled' ? 'destructive' : 'default'}>
            {booking.status}
          </Badge>
        </CardTitle>
        <CardDescription className="flex items-center pt-2">
          <User className="w-4 h-4 mr-2" /> With {booking.technicianName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" /> {new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" /> {booking.time}
        </div>
        <div className="flex items-center text-sm font-semibold text-primary">
          <Tag className="w-4 h-4 mr-2" /> ${booking.price.toFixed(2)}
        </div>
      </CardContent>
       <CardFooter>
            {booking.status === 'upcoming' && (
                <Button variant="outline" size="sm">Cancel / Reschedule</Button>
            )}
            {booking.status === 'completed' && (
                 <Button variant="accent" size="sm">Book Again</Button>
            )}
      </CardFooter>
    </Card>
  );

  const BookingList = ({ bookings }: { bookings: typeof pastBookings }) => {
    if (bookings.length === 0) {
      return <p className="text-center text-muted-foreground py-10">No bookings found in this category.</p>
    }
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map(booking => <BookingCard key={booking.id} booking={booking} />)}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8 font-headline">My Bookings</h1>

           {isUserLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
           ) : !user ? (
             <div className="text-center py-20 border-2 border-dashed rounded-lg">
              <h3 className="text-lg font-medium">Please Log In</h3>
              <p className="mt-2 text-sm text-muted-foreground">You need to be logged in to view your bookings.</p>
              <Button className="mt-6" asChild><Link href="/login">Log In</Link></Button>
            </div>
           ) : (
            <Tabs defaultValue="upcoming">
                <TabsList className="grid w-full grid-cols-2 md:w-[400px] mb-8">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <BookingList bookings={upcomingBookings} />
                </TabsContent>
                <TabsContent value="past">
                     <BookingList bookings={pastBookings} />
                </TabsContent>
            </Tabs>
           )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
