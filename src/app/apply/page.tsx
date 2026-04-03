
"use client";

import React from "react";
import { DollarSign, MapPin, Clock, Briefcase, ShieldCheck, Users, BarChart3, AlertTriangle, BadgePercent, Youtube, Camera, Video, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Link from 'next/link';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
    {
        icon: DollarSign,
        title: "Earn 80% per service",
        description: "Plus, you keep 100% of your tips."
    },
    {
        icon: BadgePercent,
        title: "Transparent Earnings",
        description: "No sign-up fees, no monthly fees, and no hidden fees."
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
        title: "Safety & Security",
        description: "VÉLOURA provides access to Silent Beacon personal safety devices to help support technician safety during mobile appointments."
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

const faqs = [
    {
        question: "Should I download the app before signing up?",
        answer: "Please do not download the app before applying. Technician app access is granted only after your application is approved. To complete your onboarding, please follow these steps: Complete the technician application, submit your application, pass background screening. You’ll be notified once your onboarding is complete. Receive approval confirmation from VÉLOURA and log in to the app using the phone number you signed up with."
    },
    {
        question: "I’m trying to submit my application, but it keeps failing. What should I do?",
        answer: "We’re currently updating the app to provide a better experience. If you are having trouble submitting your application, please ensure you are using the official application link: https://velourabeautyondemand.com/apply. If the issue persists, please contact our support team at support@velourabeautyondemand.com."
    },
    {
        question: "Can I be both a customer and a technician using the same phone number?",
        answer: "Yes, each phone number can now be associated with both roles."
    },
    {
        question: "I haven’t received anything about the background check. Is something wrong?",
        answer: "Background checks are initiated after your application is successfully submitted and reviewed. If your application did not complete or failed, the background check will not start. Once approved, you’ll receive a separate notification with next steps."
    },
    {
        question: "How do I know if my technician application is approved?",
        answer: "You’ll receive an email confirmation once your status is updated to Approved. Approved technicians will then be guided to: Sign the required agreement or waiver, Receive the Silent Beacon safety device (if accepted), and Begin accepting bookings."
    },
    {
        question: "What is the Silent Beacon safety device?",
        answer: "The Silent Beacon is a personal safety device offered to technicians for use during VÉLOURA-booked services only. Technicians may choose to accept or decline the device during onboarding. A refundable security deposit is required if you accept the device. If declined, a safety waiver must be signed."
    },
    {
        question: "Is the Silent Beacon Safety Device deposit mandatory?",
        answer: "All technicians are required to sign the Safety Device Waiver, which includes the option to accept or decline the Silent Beacon safety device. While the waiver is mandatory, the device itself may be accepted or declined according to the technician’s choice and the terms outlined in the agreement."
    },
    {
        question: "I already applied once. Do I need to apply again?",
        answer: "If your application failed, was incomplete, or tied to a conflicting account, you may need to reapply. Please use the official application link: https://velourabeautyondemand.com/apply. If you’re unsure, contact our support team."
    },
    {
        question: "Who can I contact if I need help with sign-up or onboarding?",
        answer: "We’re happy to help! Email us at support@velourabeautyondemand.com. Please include: Your full name, email used to sign up, phone number, and a screenshot or description of the issue (if possible)."
    },
    {
        question: "When can I start accepting jobs?",
        answer: "You can start accepting jobs as soon as your technician status shows “Approved,” all required agreements and waivers are signed, and your account is fully enabled in the app.\n\nOnce you’re live, we’d love your help sharing VÉLOURA with your community 💗\nFeel free to post on your social media, tell your clients, and help us spread the word — the more visibility you have, the more booking opportunities come your way.\n\nWelcome to VÉLOURA. Let’s grow together and bring beauty on demand to the world ✨"
    },
    {
        question: "Is VÉLOURA currently updating the app?",
        answer: "Yes. We’re actively improving the platform to provide a better experience."
    },
    {
        question: "How do scheduling, payments, and location changes work?",
        answer: `• Schedule & availability: Yes, you can set your own availability in the app, so it works around your schedule.
• Bookings: Clients can only book services during the availability you’ve set in the app.
• Payments: Payouts are handled via Stripe. You can link your Stripe account directly in your profile settings to receive funds after each completed booking.
• Client payment: Yes, clients pay through the app at the time of booking/service.
• Changing locations: Yes, you can update your service location if you travel — just adjust it in the app so clients in that area can find you.`
    },
    {
        question: "Are there any new features coming soon?",
        answer: `Yes! We’re actively rolling out new features to improve the experience for both customers and beauty professionals. Upcoming enhancements include:

Flexible Pricing Updates
Beauty professionals will be able to pay a one-time fee to update their service pricing directly within the app.

Parking Fee Add-On
Customers will have the option to add parking costs to their booking when applicable.

5-Star Ratings, Reviews & Photo Support
Customers will be able to leave 5-star ratings and reviews, with the ability to upload photos to support feedback.

Experience Levels Displayed on Profiles
The admin team will assign experience levels, which will be displayed on technician profiles in both the customer and technician apps.

We’re committed to continuously improving the platform and appreciate your feedback as we grow.`
    }
];

export default function ApplyPage() {
  const joinTeamImage = PlaceHolderImages.find(p => p.id === 'join_team_graphic');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            
            {/* Hero Section */}
            <section className="text-center mb-16 md:mb-24">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Your talent. Your schedule. <br />
                    Your earnings — elevated.
                </h1>
                <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
                    VÉLOURA is a mobile beauty & lifestyle platform designed to empower independent professionals, connect them with clients, and solve the biggest challenges in the industry — all in one app.
                </p>
                
                {joinTeamImage && (
                    <div className="mt-12 flex justify-center">
                        <div className="relative w-full max-w-2xl aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src={joinTeamImage.imageUrl}
                                alt={joinTeamImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={joinTeamImage.imageHint}
                            />
                        </div>
                    </div>
                )}

                <div className="mt-12">
                    <Button asChild size="lg" className="text-lg px-8">
                        <a href="https://www.canva.com/design/DAHF0SQ_50Q/6gj805msMcs6sNhSh_36Lg/view" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            View VÉLOURA Information
                        </a>
                    </Button>
                </div>
            </section>

            {/* Onboarding Steps Section */}
            <section id="onboarding" className="mb-16 md:mb-24">
              <div className="max-w-3xl mx-auto space-y-8 bg-card p-8 rounded-xl shadow-xl">
                <div className="text-center border-b pb-6">
                    <h2 className="text-3xl font-bold font-headline">Technician Onboarding Process</h2>
                    <p className="text-muted-foreground mt-2">Follow these steps to join the VÉLOURA professional network.</p>
                </div>
                
                <ol className="space-y-8">
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 className="font-semibold text-lg">Apply Online</h4>
                            <p className="text-muted-foreground">Complete the technician onboarding application below. Provide your basic information, professional license, and the services you offer.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 className="font-semibold text-lg">Background Check & Verification</h4>
                            <p className="text-muted-foreground">After signing up, you’ll complete an online screening through Checkr. This process reviews your identity and criminal history.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                        <div>
                            <h4 className="font-semibold text-lg">Check Your Email</h4>
                            <p className="text-muted-foreground">Please make sure to check all your email folders — including your spam/junk folder — for messages from Checkr.com and from us regarding your account status.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
                        <div>
                            <h4 className="font-semibold text-lg">Download the VÉLOURA App</h4>
                            <p className="text-muted-foreground">Download the VÉLOURA Beauty on Demand App to log in as Technicians manage your profile, bookings, and availability weekly.</p>
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
                            <p className="text-muted-foreground">All technicians are required to electronically sign the VÉLOURA Safety Device Waiver & Agreement before activation on the platform.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">7</div>
                        <div>
                            <h4 className="font-semibold text-lg">Payment & Payout Setup (Stripe)</h4>
                            <p className="text-muted-foreground">Your payment and payout processing is securely powered by Stripe. From your profile, you can either link an existing Stripe account or create a new one to receive earnings from completed bookings. All payouts for completed services will be deposited directly into your connected Stripe account. Technicians keep 100% of tips.</p>
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

            {/* Application Form Section */}
            <section id="application-form" className="mb-16 md:mb-24">
                <Card className="max-w-4xl mx-auto shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl">Become a VÉLOURA Pro</CardTitle>
                        <CardDescription className="text-md">
                            Apply Now below to submit the technician onboarding form
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
                                <li>Each phone number can now be associated with both roles (Customer and Technician).</li>
                            </ul>
                          </AlertDescription>
                        </Alert>
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
                            Watch this quick tutorial on how to complete your technician application.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video w-full rounded-md overflow-hidden bg-muted flex items-center justify-center text-muted-foreground">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/3VqLnfcATpk"
                              title="How to Sign Up as a Technician"
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
              <div className="max-w-3xl auto">
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
