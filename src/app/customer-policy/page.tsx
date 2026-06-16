
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Clock, AlertTriangle, ShieldCheck, Download, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CustomerPolicyPage() {
    const pdfUrl = "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura_Customer_Policy%20(1).pdf?alt=media&token=89f24616-4796-4ba4-9732-dcbf8e014084";

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline mt-4">
                                Customer Policy
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                Ensuring a respectful, safe, and reliable experience for both our clients and our elite professionals.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {/* PDF Download Highlight */}
                            <Card className="bg-primary text-primary-foreground shadow-xl border-none">
                                <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-headline">Official Policy Document</h3>
                                            <p className="text-primary-foreground/80 text-sm">Download the full VÉLOURA Customer Policy PDF.</p>
                                        </div>
                                    </div>
                                    <Button asChild variant="secondary" size="lg" className="font-bold text-primary">
                                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                                            <Download className="mr-2 h-5 w-5" />
                                            Download PDF
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Detailed Breakdown */}
                            <Card className="shadow-lg">
                                <CardHeader className="border-b bg-muted/30">
                                    <CardTitle className="font-headline flex items-center gap-2">
                                        <ShieldCheck className="text-primary w-6 h-6" />
                                        Reliability & Cancellations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 space-y-8">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <section className="space-y-4">
                                            <div className="flex items-center gap-2 text-primary font-bold">
                                                <Clock className="w-5 h-5" />
                                                <h4>Cancellations</h4>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                Our professionals reserve time and travel exclusively for you. Please respect their schedule by providing timely notice for any changes.
                                            </p>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex items-start gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                                                    <span><strong>24+ Hours Notice:</strong> No penalty. Full refund or credit.</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-orange-600">
                                                    <AlertTriangle className="w-4 h-4 mt-0.5" />
                                                    <span><strong>Less than 24 Hours:</strong> 50% cancellation fee applies.</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-destructive">
                                                    <AlertTriangle className="w-4 h-4 mt-0.5" />
                                                    <span><strong>No-Show / Arrival Cancel:</strong> 100% service fee applies.</span>
                                                </li>
                                            </ul>
                                        </section>

                                        <section className="space-y-4">
                                            <div className="flex items-center gap-2 text-primary font-bold">
                                                <ShieldCheck className="w-5 h-5" />
                                                <h4>On-Site Prep</h4>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                To maximize your service time, please ensure you are ready and have a suitable space for the professional to work.
                                            </p>
                                            <ul className="space-y-3 text-sm">
                                                <li className="flex items-start gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                                                    <span><strong>Location:</strong> Private, well-lit, and smoke-free environment.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                                                    <span><strong>Timing:</strong> Pros wait 15 minutes max before marked as no-show.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                                                    <span><strong>Conduct:</strong> Zero-tolerance policy for harassment or disrespect.</span>
                                                </li>
                                            </ul>
                                        </section>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="text-center">
                                <Button asChild variant="link" className="text-muted-foreground">
                                    <Link href="/reliability-policy">
                                        View Technician Reliability Policy
                                        <ChevronRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
