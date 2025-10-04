import Link from 'next/link';
import { Calendar, Tag, User, Clock, Sprout } from 'lucide-react';
import { bookings } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

export default function BookingsPage() {
  const upcomingBookings = bookings.filter(b => b.status === 'upcoming');
  const pastBookings = bookings.filter(b => b.status !== 'upcoming');

  const BookingCard = ({ booking }: { booking: typeof bookings[0] }) => (
    <Card className="shadow-md">
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
      {booking.status === 'upcoming' && (
        <CardFooter className="flex gap-2">
          <Button variant="outline">Reschedule</Button>
          <Button variant="destructive">Cancel</Button>
        </CardFooter>
      )}
       {booking.status === 'completed' && (
        <CardFooter>
          <Button variant="accent" asChild>
            <Link href={`/technicians/${booking.technicianId}`}>Book Again</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8 font-headline">My Bookings</h1>
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past & Cancelled</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              {upcomingBookings.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                  {upcomingBookings.map(booking => <BookingCard key={booking.id} booking={booking} />)}
                </div>
              ) : (
                <div className="text-center py-20 border-2 border-dashed rounded-lg mt-6">
                    <Sprout className="mx-auto h-12 w-12 text-muted-foreground"/>
                    <h3 className="mt-4 text-lg font-medium">No upcoming bookings</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Time for some self-care?</p>
                    <Button className="mt-6" variant="accent" asChild><Link href="/">Book a Service</Link></Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="past">
              {pastBookings.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                  {pastBookings.map(booking => <BookingCard key={booking.id} booking={booking} />)}
                </div>
              ) : (
                 <div className="text-center py-20 border-2 border-dashed rounded-lg mt-6">
                    <Sprout className="mx-auto h-12 w-12 text-muted-foreground"/>
                    <h3 className="mt-4 text-lg font-medium">No past bookings</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Your booking history will appear here.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
