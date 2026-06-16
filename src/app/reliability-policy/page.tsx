
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NailIcon } from '@/components/shared/logo';
import { Calendar, AlertTriangle, ShieldCheck, Clock, CheckCircle2, Info } from 'lucide-react';

export default function ReliabilityPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        
                        <div className="text-center mb-12">
                            <NailIcon className="h-16 w-16 mx-auto text-primary" />
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline mt-4">
                                Reliability & Cancellation Policy
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Professional standards for a reliable marketplace.
                            </p>
                        </div>

                        <Tabs defaultValue="technician" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                                <TabsTrigger value="technician">For Technicians</TabsTrigger>
                                <TabsTrigger value="customer">For Customers</TabsTrigger>
                            </TabsList>

                            <TabsContent value="technician" className="animate-in fade-in-50 duration-500">
                                <Card className="shadow-xl border-none">
                                    <CardHeader className="bg-primary/5 pb-8 border-b">
                                        <CardTitle className="text-2xl font-headline text-primary flex items-center gap-2">
                                            <ShieldCheck className="w-6 h-6" />
                                            Technician Reliability & Cancellation Policy
                                        </CardTitle>
                                        <CardDescription className="text-base pt-2">
                                            At VÉLOURA, our clients rely on us for important occasions including weddings, special events, business meetings, photoshoots, travel, and last-minute beauty needs. To maintain a reliable marketplace, technicians are expected to keep their availability up to date and honor all confirmed bookings.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-8 space-y-8">
                                        <section className="space-y-4">
                                            <h3 className="text-xl font-bold flex items-center gap-2">
                                                <Calendar className="w-5 h-5 text-primary" />
                                                Availability
                                            </h3>
                                            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                                <li>Technicians are responsible for keeping their schedules and availability current within the VÉLOURA app.</li>
                                                <li>Failure to update availability may result in scheduling conflicts or missed booking opportunities.</li>
                                                <li>Technicians who maintain accurate schedules may receive priority for future booking opportunities.</li>
                                            </ul>
                                        </section>

                                        <section className="space-y-4">
                                            <h3 className="text-xl font-bold flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                                Confirmed Bookings
                                            </h3>
                                            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                                <li>Once a booking has been confirmed, technicians are expected to honor their commitment.</li>
                                                <li>Repeated cancellations negatively impact the customer experience and platform reliability.</li>
                                            </ul>
                                        </section>

                                        <section className="space-y-4 bg-muted/50 p-6 rounded-xl border border-dashed border-primary/20">
                                            <h3 className="text-xl font-bold flex items-center gap-2 text-primary">
                                                <AlertTriangle className="w-5 h-5" />
                                                Cancellation Consequences
                                            </h3>
                                            <div className="grid gap-4 mt-4">
                                                <div className="flex gap-4">
                                                    <span className="font-bold text-primary shrink-0">1st</span>
                                                    <p className="text-sm"><strong>Warning notice:</strong> An initial reminder of our reliability standards.</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <span className="font-bold text-primary shrink-0">2nd</span>
                                                    <p className="text-sm"><strong>Reduced Visibility:</strong> Occurring within 30 days, this results in lower placement in search results and fewer booking opportunities.</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <span className="font-bold text-primary shrink-0">3rd</span>
                                                    <p className="text-sm"><strong>Temporary Suspension:</strong> Occurring within 30 days, this results in a suspension from receiving new bookings for 7 days.</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <span className="font-bold text-primary shrink-0">Repeat</span>
                                                    <p className="text-sm"><strong>Account Review:</strong> Persistent issues will lead to a full account review and possible permanent removal from the platform.</p>
                                                </div>
                                            </div>
                                        </section>

                                        <section className="space-y-4">
                                            <h3 className="text-xl font-bold">Exceptions</h3>
                                            <p className="text-muted-foreground text-sm">
                                                No penalty may be applied in cases involving medical emergencies, family emergencies, safety concerns, severe weather or natural disasters, or other circumstances approved by VÉLOURA management.
                                            </p>
                                        </section>

                                        <div className="pt-6 border-t">
                                            <p className="text-xs text-muted-foreground italic">
                                                By continuing to use the platform, technicians agree to comply with these policies and help maintain a reliable experience for every VÉLOURA client.
                                            </p>
                                            <p className="text-xs font-bold text-foreground mt-2">
                                                Effective Date: June 2026
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="customer" className="animate-in fade-in-50 duration-500">
                                <Card className="shadow-xl border-none">
                                    <CardHeader className="bg-accent/5 pb-8 border-b">
                                        <CardTitle className="text-2xl font-headline text-accent flex items-center gap-2">
                                            <Info className="w-6 h-6" />
                                            Customer Cancellation Policy
                                        </CardTitle>
                                        <CardDescription className="text-base pt-2">
                                            Our professionals block out time and travel specifically for you. To respect their craft and schedule, we maintain the following policy for client-initiated cancellations.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-8 space-y-8">
                                        <section className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-accent/10 p-2 rounded-lg">
                                                    <Clock className="w-5 h-5 text-accent" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">More than 24 hours notice</h3>
                                                    <p className="text-muted-foreground">You can cancel or reschedule through the app at no cost. Your deposit (if applicable) will be fully refunded or credited.</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-4">
                                                <div className="bg-orange-500/10 p-2 rounded-lg">
                                                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">Within 24 hours notice</h3>
                                                    <p className="text-muted-foreground">A cancellation fee equal to 50% of the scheduled service price will be charged to compensate the professional for their lost time.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="bg-destructive/10 p-2 rounded-lg">
                                                    <AlertTriangle className="w-5 h-5 text-destructive" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">No-Show / Cancellation at arrival</h3>
                                                    <p className="text-muted-foreground">If you are not present at the location when the professional arrives or cancel upon arrival, 100% of the service fee will be charged.</p>
                                                </div>
                                            </div>
                                        </section>

                                        <section className="bg-muted/30 p-6 rounded-xl space-y-4">
                                            <h3 className="font-bold">Late Arrivals</h3>
                                            <p className="text-sm text-muted-foreground">
                                                If you are running late, please message your professional directly through the app. Professionals are only required to wait for 15 minutes. After 15 minutes, the appointment may be considered a "No-Show."
                                            </p>
                                        </section>

                                        <div className="pt-6 border-t">
                                            <p className="text-xs text-muted-foreground italic">
                                                We appreciate your understanding and support of our independent beauty professionals.
                                            </p>
                                            <p className="text-xs font-bold text-foreground mt-2">
                                                Effective Date: June 2026
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
