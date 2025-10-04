import Link from 'next/link';
import { Calendar, Tag, User, Clock } from 'lucide-react';
import { bookings } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { NailIcon } from '@/components/shared/logo';

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
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8 font-headline">My Bookings</h1>
          <div className="text-center py-20 border-2 border-dashed rounded-lg mt-6">
              <NailIcon className="mx-auto h-12 w-12 text-muted-foreground"/>
              <h3 className="mt-4 text-lg font-medium">Coming Soon!</h3>
              <p className="mt-2 text-sm text-muted-foreground">We are getting ready to launch! You'll be able to see your bookings here.</p>
              <Button className="mt-6" variant="accent" asChild><Link href="/">Go to Homepage</Link></Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
