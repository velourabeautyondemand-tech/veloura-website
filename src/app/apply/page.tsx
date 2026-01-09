
"use client";

import React from "react";
import { DollarSign, MapPin, Clock, Briefcase, ShieldCheck, Users, BarChart3, PartyPopper, CheckSquare, Fingerprint, FileText, Package, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Link from 'next/link';
import { ApplicationForm } from "@/components/features/application-form";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const benefits = [
    {
        icon: DollarSign,
        title: "Earn 80% per service",
        description: "Plus, you keep 100% of your tips. No hidden fees."
    },
    {
        icon: MapPin,
        title: "Hyper-Local Bookings",
        description: "Get bookings from clients within a 6-mile radius of your location."
    },
    {
        icon: Clock,
        title: "Set Your Own Schedule",
        description: "Work when and where you want. You have full control over your calendar."
    },
    {
        icon: Briefcase,
        title: "Build Your Personal Brand",
        description: "We give you the platform, you build your reputation with full control."
    },
    {
        icon: ShieldCheck,
        title: "Safety & Support",
        description: "Access background checks, safety support, and insurance partners."
    },
    {
        icon: Users,
        title: "Nationwide Community",
        description: "Join a supportive network of beauty professionals across the country."
    },
    {
        icon: BarChart3,
        title: "Grow Your Income",
        description: "Get access to a steady, reliable stream of on-demand clients."
    }
];

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            
            {/* New Hero Section */}
            <section className="text-center mb-16 md:mb-24">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Your talent. Your schedule. Your earnings — elevated.</h1>
                <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
                    VÉLOURA is a next-generation mobile beauty app built to empower independent beauty professionals and solve the biggest challenges in the industry.
                </p>
            </section>

            {/* Introduction */}
            <section className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
                 <p className="text-lg text-muted-foreground">
                    We help you escape salon politics, unpredictable walk-ins, and expensive booth rent — by giving you a powerful platform where clients find you.
                </p>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="mb-16 md:mb-24">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-4xl font-headline">With VÉLOURA, you’ll be able to:</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 flex flex-col text-center">
                            <div className="mb-4">
                                <benefit.icon className="h-12 w-12 text-primary mx-auto" />
                            </div>
                            <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground flex-grow">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

             {/* Mission Section */}
            <section className="bg-primary/10 rounded-xl p-8 md:p-12 text-center my-16 md:my-24">
                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Our mission is simple:</h2>
                 <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">To help beauty professionals make more money, gain independence, and create careers they’re proud of — without the limits of a traditional salon.</p>
            </section>
            
            {/* How it works */}
            <section className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
                <p className="text-lg text-muted-foreground">
                   VÉLOURA connects you with clients who need beauty services delivered to their home, hotel, office, or event. You focus on your craft — we handle the platform, visibility, and tools you need to grow.
                </p>
                <p className="mt-6 text-xl font-semibold">
                    Your skills deserve freedom, respect, and real opportunity.
                    <br/>
                    <span className="text-primary">That’s why we built VÉLOURA.</span>
                </p>
            </section>

            {/* Onboarding Steps Section */}
            <section id="onboarding" className="mb-16 md:mb-24">
              <div className="max-w-3xl mx-auto space-y-8 bg-card p-8 rounded-xl shadow-xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-headline">Onboarding & Safety</h2>
                    <p className="text-muted-foreground mt-2">Everything you need to know to get started.</p>
                </div>
                
                <div className="bg-muted border-l-4 border-primary p-4 rounded-md">
                    <h3 className="font-bold text-foreground">Important</h3>
                    <ul className="list-disc pl-5 mt-2 text-sm text-foreground/80">
                        <li>App access for technicians is granted only after approval.</li>
                        <li>A single phone number can only be used for one role — either technician or customer (not both).</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold font-headline mb-4">What’s Next: Onboarding Steps</h3>
                    <ol className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                            <div>
                                <h4 className="font-semibold">Complete the Online Application</h4>
                                <p className="text-muted-foreground">Visit our website and submit the technician onboarding form: <Link href="https://velourabeautyondemand.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">velourabeautyondemand.com</Link></p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                            <div>
                                <h4 className="font-semibold">Background Check Verification</h4>
                                <p className="text-muted-foreground">After submitting your application, you will receive an email from Checkr with instructions to complete your background check. Please complete this step promptly to avoid delays.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                            <div>
                                <h4 className="font-semibold">Review & Accept Platform Policies</h4>
                                <p className="text-muted-foreground">Once your background check is submitted, review and accept VÉLOURA’s platform policies to continue the onboarding process.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
                            <div>
                                <h4 className="font-semibold">Final Approval & Device Shipment</h4>
                                <p className="text-muted-foreground">After approval, you will receive a link to submit the refundable deposit for the Silent Beacon safety device. Once the deposit is completed, the device will be mailed to you, and you'll receive a follow-up email with setup instructions.</p>
                            </div>
                        </li>
                    </ol>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold font-headline text-primary mb-4">Technician Sign-Up & Safety Information</h3>
                  <p className="text-muted-foreground">All approved technicians will receive a Silent Beacon safety device as part of our commitment to your safety. The Silent Beacon device allows you to discreetly alert emergency services and your designated emergency contacts if you ever feel unsafe during a service.</p>
                  <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
                    <li>A refundable <span className="font-semibold text-foreground">$19.99 deposit</span> is required for the device.</li>
                    <li>The deposit is fully refundable upon return of the device.</li>
                    <li>In the event of damage, the device can be replaced at no additional charge.</li>
                  </ul>
                   <div className="mt-4">
                        <Button asChild variant="link" className="p-0 h-auto">
                            <a href="https://silentbeacon.com/" target="_blank" rel="noopener noreferrer">
                                Learn more about Silent Beacon
                            </a>
                        </Button>
                    </div>
                </div>
              </div>
            </section>

            {/* Application Section */}
            <section id="application-form" className="mb-16 md:mb-24">
                <Card className="max-w-4xl mx-auto shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl">Become a VÉLOURA Pro</CardTitle>
                        <CardDescription className="text-md">
                            Ready to take control of your career? Apply below!
                             <p className="text-sm mt-2">Please note: An in-person interview is required. Date and location to be determined upon application selection.</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Alert variant="destructive" className="bg-yellow-50 border-yellow-300 text-yellow-800">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          <AlertTitle className="font-bold text-yellow-900">⚠️ Important</AlertTitle>
                          <AlertDescription>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Do not download the app before applying.</li>
                                <li>Technician app access is granted only after approval.</li>
                                <li>A single phone number can be used for one role only — either technician or customer, not both.</li>
                            </ul>
                          </AlertDescription>
                        </Alert>
                        <div className="flex justify-center">
                            <Button asChild size="lg">
                                <a href="https://admin.velourabeautyondemand.com/" target="_blank" rel="noopener noreferrer">Apply Now</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
