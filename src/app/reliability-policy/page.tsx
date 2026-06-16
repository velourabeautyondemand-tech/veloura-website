
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NailIcon } from '@/components/shared/logo';
import { Calendar, AlertTriangle, ShieldCheck, Clock, CheckCircle2, Info, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ReliabilityPolicyPage() {
    const customerPdfUrl = "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura_Customer_Policy%20(1).pdf?alt=media&token=89f24616-4796-4ba4-9732-dcbf8e014084";

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
                                            At VÉLOURA, our clients rely on us for important occasions. To maintain a reliable marketplace, technicians are expected to keep their availability up to date and honor all confirmed bookings.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-8 space-y-8">
                                        <section className="space-y-4">
                                            <h3 className="text-xl font-bold flex items-center gap-2">
                                                <Calendar className="w-5 h-5 text-primary" />
                                                Availability
                                            </h3>
                                            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                                <li>Technicians are responsible for keeping their schedules current in the VÉLOURA app.</li>
                                                <li>Failure to update availability may result in scheduling conflicts.</li>
                                                <li>Maintaining accurate schedules may receive priority for future bookings.</li>
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
                                                    <p className="text-sm"><strong>Warning notice:</strong> Initial reminder of standards.</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <span className="font-bold text-primary shrink-0">2nd</span>
                                                    <p className="text-sm"><strong>Reduced Visibility:</strong> Lower placement in search results for 30 days.</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <span className="font-bold text-primary shrink-0">3rd</span>
                                                    <p className="text-sm"><strong>Temporary Suspension:</strong> Suspension from receiving new bookings for 7 days.</p>
                                                </div>
                                            </div>
                                        </section>

                                        <div className="pt-6 border-t">
                                            <p className="text-xs font-bold text-foreground">
                                                Effective Date: June 2026
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="customer" className="animate-in fade-in-50 duration-500">
                                <Card className="shadow-xl border-none">
                                    <CardHeader className="bg-accent/5 pb-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <CardTitle className="text-2xl font-headline text-accent flex items-center gap-2">
                                                <Info className="w-6 h-6" />
                                                Customer Policy
                                            </CardTitle>
                                            <CardDescription className="text-base pt-2">
                                                Respecting the time and craft of our elite professionals.
                                            </CardDescription>
                                        </div>
                                        <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/5 shrink-0">
                                            <a href={customerPdfUrl} target="_blank" rel="noopener noreferrer">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download PDF
                                            </a>
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="pt-8 space-y-8">
                                        <section className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-accent/10 p-2 rounded-lg text-accent">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">24+ Hours Notice</h3>
                                                    <p className="text-muted-foreground text-sm">Cancel or reschedule through the app at no cost.</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-4">
                                                <div className="bg-orange-500/10 p-2 rounded-lg text-orange-600">
                                                    <AlertTriangle className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">Less than 24 Hours</h3>
                                                    <p className="text-muted-foreground text-sm">A cancellation fee equal to 50% of the service price will be charged.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="bg-destructive/10 p-2 rounded-lg text-destructive">
                                                    <AlertTriangle className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">No-Show / Arrival Cancel</h3>
                                                    <p className="text-muted-foreground text-sm">100% of the service fee will be charged to compensate the pro.</p>
                                                </div>
                                            </div>
                                        </section>

                                        <div className="bg-muted/30 p-6 rounded-xl text-center">
                                            <p className="text-sm font-medium mb-4">For the complete set of customer rules and protections:</p>
                                            <Button asChild variant="accent">
                                                <Link href="/customer-policy">View Dedicated Customer Policy Page</Link>
                                            </Button>
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
