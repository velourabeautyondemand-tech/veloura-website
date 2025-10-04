import { notFound } from 'next/navigation';
import { bookings } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { User, Calendar, Clock, Tag, MapPin, Sprout, PlusCircle, Flag, CheckCircle } from 'lucide-react';

export default function JobDetailPage({ params }: { params: { id: string } }) {
    const job = bookings.find(b => b.id === params.id);

    if (!job) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Job Details</CardTitle>
                    <CardDescription>Job #{job.id}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <User className="w-5 h-5 mt-1 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Customer</h3>
                                <p className="text-muted-foreground">{job.customerName}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 mt-1 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-muted-foreground">123 Sparkle Ave, Glam City, 12345</p>
                                <Button variant="link" className="p-0 h-auto">View on Map</Button>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Sprout className="w-5 h-5 mt-1 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Service</h3>
                                <p className="text-muted-foreground">{job.serviceName}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Calendar className="w-5 h-5 mt-1 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Date & Time</h3>
                                <p className="text-muted-foreground">{new Date(job.date).toLocaleDateString('en-US', { dateStyle: 'medium' })}, {job.time}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Tag className="w-5 h-5 mt-1 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Price</h3>
                                <p className="text-muted-foreground">${job.price.toFixed(2)}</p>
                            </div>
                        </div>
                     </div>
                     <Separator />
                     <div>
                        <h3 className="font-semibold">Job Notes</h3>
                        <p className="text-muted-foreground mt-2 bg-muted p-3 rounded-md">Customer requested extra care on cuticles and prefers a light pink shade if possible.</p>
                     </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Job Controls</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    <Button variant="outline">
                        <Flag className="mr-2 h-4 w-4" />
                        Start Job
                    </Button>
                    <Button variant="outline">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Request Add-ons
                    </Button>
                    <Button variant="accent">
                         <CheckCircle className="mr-2 h-4 w-4" />
                        Finish Job
                    </Button>
                    <Button variant="destructive" className="ml-auto">
                        Report Issue
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
