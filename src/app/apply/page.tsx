
"use client";

import React from "react";
import { DollarSign, MapPin, Clock, Briefcase, ShieldCheck, Users, BarChart3, AlertTriangle, BadgePercent } from "lucide-react";
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
        answer: "Please do not download the app before applying. Technician app access is granted only after your application is approved. At this time, one phone number may be used for one role only—either technician or customer. To complete your onboarding, please follow these steps: Complete the technician application, submit your application, pass background screening. You’ll be notified once your onboarding is complete. Receive approval confirmation from VÉLOURA and log in to the app using the phone number you signed up with."
    },
    {
        question: "I’m trying to submit my application, but it keeps failing. What should I do?",
        answer: "We’re currently updating the app. At this time, one phone number can only be used for one role—either technician or customer. If you created both account types using the same phone number, the application may fail. Please delete one account and reapply using this link: https://velourabeautyondemand.com/apply"
    },
    {
        question: "Can I be both a customer and a technician using the same phone number?",
        answer: "At the moment, no. Due to system updates, each phone number can only be associated with one role. We recommend using a separate phone number if you wish to have both accounts in the future."
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
        answer: "You can start accepting jobs once: Your technician status shows Approved, all required agreements or waivers are signed, and your account is enabled in the app."
    },
    {
        question: "Is VÉLOURA currently updating the app?",
        answer: "Yes. We’re actively improving the platform to provide a better experience. During this time, some features (such as dual-role accounts) may be temporarily limited."
    },
    {
        question: "Are there any new features coming soon?",
        answer: `Yes! We’re actively rolling out new features to improve the experience for both customers and beauty professionals. Upcoming enhancements include:

Flexible Pricing Updates
Beauty professionals will be able to pay a one-time fee to update their service pricing directly within the app.

Secure Payouts via Stripe Connect
Technician payouts will be handled through Stripe Connect, providing faster, secure, and reliable payments.

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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
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
                    <h2 className="text-3xl font-bold font-headline">VÉLOURA Beauty on Demand – Technician Sign-Up, Payment & Safety Process</h2>
                    <p className="text-muted-foreground mt-2">Becoming a VÉLOURA Beauty on Demand professional is simple and designed to keep both technicians and clients safe while helping you get booked and paid seamlessly.</p>
                </div>
                
                <ol className="space-y-6">
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 className="font-semibold">Apply Online</h4>
                            <p className="text-muted-foreground">Visit velourabeautyondemand.com and complete the technician onboarding application. Provide your basic information, professional license (if applicable), and the services you offer.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 className="font-semibold">Background Check & Verification</h4>
                            <p className="text-muted-foreground">To maintain trust and safety across the platform, all technicians must complete a background check and credential verification.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                        <div>
                            <h4 className="font-semibold">Safety Device Waiver (Mandatory)</h4>
                            <p className="text-muted-foreground">All technicians are required to review and electronically sign the VÉLOURA Safety Device Waiver & Agreement, which will be sent via Jotform. Completion of this step is mandatory before activation on the platform and includes instructions for the required safety device.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
                        <div>
                            <h4 className="font-semibold">Payment & Payout Setup</h4>
                            <p className="text-muted-foreground">After your background check is approved, you’ll be prompted to set up your payment and payout information to receive earnings from completed bookings.</p>
                            <p className="text-muted-foreground mt-2">Payments are processed electronically through Homebase (our payroll system). Please be sure to set up and activate your Homebase account to ensure timely payouts.<br/>Technicians keep 100% of their tips.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">5</div>
                        <div>
                            <h4 className="font-semibold">Download the VÉLOURA App</h4>
                            <p className="text-muted-foreground">Download the VÉLOURA Beauty on Demand App to manage your profile, bookings, and availability.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">6</div>
                        <div>
                            <h4 className="font-semibold">Set Up Your Profile</h4>
                            <p className="text-muted-foreground">In the app, you’ll:</p>
                            <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                                <li>Add your services and pricing</li>
                                <li>Set your availability</li>
                                <li>Select your service areas</li>
                            </ul>
                            <p className="mt-2"><strong className="text-primary">This information is what customers see when searching and booking</strong></p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">7</div>
                        <div>
                            <h4 className="font-semibold">Start Receiving Bookings</h4>
                            <p className="text-muted-foreground">Once your profile is live and availability is set, customers can book you directly through the app. You control when you work, what services you offer, and your schedule.</p>
                        </div>
                    </li>
                </ol>

                <div className="pt-6 border-t border-border">
                    <h4 className="font-semibold text-lg text-center mb-4">Silent Beacon Safety Device Deposit – How It Works</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>The Silent Beacon safety device is encouraged for all active technicians to support personal safety during services.</li>
                        <li>A $19.99 refundable deposit is required to receive the device.</li>
                        <li>The deposit payment link is sent after background check approval and completion of the Safety Device Waiver.</li>
                        <li>The deposit is fully refundable upon return of the device, in accordance with the agreement.</li>
                    </ul>
                    <p className="mt-4 text-sm text-center text-muted-foreground">
                        Learn more about the Silent Beacon safety device:
                        <a href="https://silentbeacon.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                            https://silentbeacon.com
                        </a>
                    </p>
                </div>
              </div>
            </section>

            {/* Application Section */}
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

            {/* FAQ Section */}
            <section id="faq" className="mb-16 md:mb-24">
              <div className="max-w-3xl mx-auto">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-4xl font-headline">Frequently Asked Questions (Q&A)</h2>
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
