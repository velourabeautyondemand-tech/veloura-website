
"use client";

import React from "react";
import { Heart, Youtube, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const faqs = [
    {
        question: "Should I download the app before signing up?",
        answer: "Professional app access is granted only after approval. Each phone number can now be associated with both roles (Customer and Professional). To complete your onboarding, please follow the steps outlined below: Apply via the website or app, set up your profile, and complete your verification."
    },
    {
        question: "I’m trying to submit my application, but it keeps failing. What should I do?",
        answer: "We’re currently updating the app to provide a better experience. If you are having trouble submitting your application, please ensure you are using the official application link: https://velourabeautyondemand.com/apply. If the issue persists, please contact our support team at support@velourabeautyondemand.com."
    },
    {
        question: "I haven’t received anything about the background check. Is something wrong?",
        answer: "Background checks are initiated after your profile is set up and reviewed. Once you've completed the initial onboarding steps, you’ll receive a separate notification with next steps from Checkr."
    },
    {
        question: "What is the Silent Beacon safety device?",
        answer: "The Silent Beacon is a personal safety device offered to professionals for use during VÉLOURA-booked services only. Professionals may choose to accept or decline the device during onboarding. A refundable security deposit is required if you accept the device. If declined, a safety waiver must be signed."
    },
    {
        question: "Is the Silent Beacon Safety Device deposit mandatory?",
        answer: "All professionals are required to sign the Safety Device Waiver, which includes the option to accept or decline the Silent Beacon safety device. While the waiver is mandatory, the device itself may be accepted or declined according to the professional’s choice."
    },
    {
        question: "When can I start accepting jobs?",
        answer: "You can start accepting jobs as soon as your professional status shows “Approved,” all required agreements and waivers are signed, and your account is fully enabled in the app."
    }
];

export default function ApplyPage() {
  const joinTeamImage = PlaceHolderImages.find(p => p.id === 'join_team_banner');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            
            {/* Hero Section */}
            <section className="text-center mb-16 md:mb-24">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 leading-tight">
                    Earn More. Work Free. <br /> Build Yours.
                </h1>
                <p className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto text-foreground/80 mb-12">
                  VÉLOURA brings the clients to you — you keep 80% of every booking, set your own schedule, and grow your business on your terms.
                </p>

                {/* Earnings & Benefits Highlight */}
                <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl max-w-5xl mx-auto my-16 border border-primary/20 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5">
                       <TrendingUp className="w-48 h-48 text-primary" />
                   </div>
                   
                   <div className="grid md:grid-cols-2 gap-12 text-left relative z-10">
                      <div className="space-y-3">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Potential Weekly Earnings
                         </div>
                         <h3 className="font-bold text-xl text-foreground">Nail tech doing 4 bookings a week?</h3>
                         <p className="text-3xl md:text-4xl font-bold font-headline text-primary">$400–$600 <span className="text-sm font-medium text-muted-foreground">in your pocket.</span></p>
                      </div>
                      <div className="space-y-3">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                            High Demand Rates
                         </div>
                         <h3 className="font-bold text-xl text-foreground">Hairstylist with 6 appointments?</h3>
                         <p className="text-3xl md:text-4xl font-bold font-headline text-accent">Easy $700–$1,000/week.</p>
                      </div>
                   </div>

                   <div className="mt-12 pt-8 border-t border-primary/10">
                        <p className="text-lg md:text-xl font-bold text-foreground/70 tracking-tight">
                            No chair rental. No salon split. Just you, your craft, and your clients.
                        </p>
                   </div>
                </div>
                
                {joinTeamImage && (
                    <div className="mt-8 mb-10 flex flex-col items-center">
                        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src={joinTeamImage.imageUrl}
                                alt={joinTeamImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={joinTeamImage.imageHint}
                                priority
                            />
                        </div>
                    </div>
                )}
            </section>

            {/* Onboarding Steps Section */}
            <section id="onboarding" className="mb-16 md:mb-24">
              <div className="max-w-3xl mx-auto space-y-8 bg-card p-8 rounded-xl shadow-xl">
                
                {/* Onboarding Fee Note */}
                <div className="bg-primary/5 border-primary/20 p-8 rounded-xl mb-8 space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                        <Heart className="w-5 h-5 fill-primary" />
                        <h3 className="font-bold text-xl font-headline">Honestly? We really didn’t want to do this.</h3>
                    </div>
                    <div className="prose text-muted-foreground leading-relaxed">
                        <p>
                            We used to cover background check costs for everyone because we believe in making onboarding easy. But with so many starting and not finishing, it’s become tough to sustain — especially when we’re focused on supporting pros who are all-in.
                        </p>
                        <p className="font-semibold text-foreground">
                            So here’s the new move: starting April 10, 2026, there’s a $29.99 onboarding fee. Not a profit — just a way to make sure we’re both serious. And the best part? It’s 100% refunded after your first completed booking.
                        </p>
                        <p>
                            We’re doing this to keep the community strong — and we’re really glad you’re part of it.
                        </p>
                    </div>
                </div>

                <div className="text-center border-b pb-6">
                    <h2 className="text-3xl font-bold font-headline">Professional Onboarding Process</h2>
                    <p className="text-muted-foreground mt-2">Follow these steps to join the VÉLOURA professional network.</p>
                </div>
                
                <ol className="space-y-8">
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 className="font-semibold text-lg">Apply via the website or in the App</h4>
                            <div className="text-muted-foreground space-y-4">
                                <p>Complete the onboarding application below. Provide your basic information and the services you offer.</p>
                                <p>
                                    For photographers, please upload one of your strongest work samples and enter <strong>PH520520</strong> as your license number.
                                </p>
                                <p>
                                    For Event Coordinator, please upload one of your strongest work samples and enter <strong>EC1439</strong> as your license number.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 className="font-semibold text-lg">Download the VÉLOURA App</h4>
                            <p className="text-muted-foreground">Download the VÉLOURA Beauty on Demand app and log in using your registered phone number.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                        <div>
                            <h4 className="font-semibold text-lg">Background Check & Verification</h4>
                            <p className="text-muted-foreground">After signing up, you’ll complete an online screening through Checkr. This process reviews your identity and criminal history.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
                        <div>
                            <h4 className="font-semibold text-lg">Check Your Email</h4>
                            <p className="text-muted-foreground">Please make sure to check all your email folders — including your spam/junk folder — for messages regarding your account status and activation.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">5</div>
                        <div>
                            <h4 className="font-semibold text-lg">Set Up Your Profile</h4>
                            <p className="text-muted-foreground">In the app, you'll add your services, pricing, availability, and service areas. This is what customers see when searching and booking.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">6</div>
                        <div>
                            <h4 className="font-semibold text-lg">Safety Device Waiver (Mandatory)</h4>
                            <p className="text-muted-foreground">All professionals are required to electronically sign the VÉLOURA Safety Device Waiver & Agreement before activation on the platform.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">7</div>
                        <div>
                            <h4 className="font-semibold text-lg">Payment & Payout Setup (Stripe)</h4>
                            <p className="text-muted-foreground">Your payment and payout processing is securely powered by Stripe. From your profile, you can either link an existing Stripe account or create a new one to receive earnings from completed bookings.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">8</div>
                        <div>
                            <h4 className="font-semibold text-lg">Start Receiving Bookings</h4>
                            <p className="text-muted-foreground">Once your profile is live and availability is set, customers can book you directly through the app. You control your schedule and craft.</p>
                        </div>
                    </li>
                </ol>
              </div>
            </section>

            {/* Application Link Section */}
            <section id="application-form" className="mb-16 md:mb-24">
                <Card className="max-w-4xl mx-auto shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl">Become a VÉLOURA Pro</CardTitle>
                        <CardDescription className="text-md">
                            Apply Now below to submit the professional onboarding form
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center space-y-4">
                            <Button asChild size="lg">
                                <a href="https://admin.velourabeautyondemand.com/" target="_blank" rel="noopener noreferrer">Apply Now</a>
                            </Button>
                            <p className="text-sm text-muted-foreground mt-4 italic max-w-lg mx-auto">
                                Starting April 10, 2026, a $29.99 onboarding fee applies to ensure committed applicants — fully refunded after your first completed booking.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* How to sign up video */}
            <section id="how-to-video" className="mb-16 md:mb-24">
                <Card className="max-w-4xl mx-auto shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl flex items-center justify-center gap-2">
                            <Youtube className="h-8 w-8 text-primary" />
                            How to Sign Up
                        </CardTitle>
                        <CardDescription className="text-md">
                            Watch this quick tutorial on how to complete your professional application.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video w-full rounded-md overflow-hidden bg-muted flex items-center justify-center text-muted-foreground">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/3VqLnfcATpk"
                              title="How to Sign Up as a Professional"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16 md:mb-24">
              <div className="max-w-3xl mx-auto">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-4xl font-headline">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full bg-card p-4 sm:p-8 rounded-xl shadow-xl">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
