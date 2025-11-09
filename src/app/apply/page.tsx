
"use client";

import React from "react";
import { PartyPopper, Briefcase, DollarSign, Sparkles, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ApplicationForm } from "@/components/features/application-form";

const benefits = [
    {
        icon: Briefcase,
        title: "Be Your Own Boss",
        description: "Enjoy the freedom to set your own schedule and work when you want. With a $0 sign-up fee and a free app to manage your business, you have full control."
    },
    {
        icon: DollarSign,
        title: "Maximize Your Earnings",
        description: "Keep a majority of your earnings from every appointment. We offer a competitive commission structure that rewards your hard work."
    },
    {
        icon: Sparkles,
        title: "Focus on Your Craft",
        description: "We handle the marketing, booking, and payment processing, so you can concentrate on what you do best: creating beauty services, from nails and hair to makeup and more."
    },
    {
        icon: Users,
        title: "Access a Wide Client Base",
        description: "We connect you with a steady flow of clients who value convenience and quality, seeking premium beauty services delivered right to their door."
    },
    {
        icon: ShieldCheck,
        title: "Your Safety is Our Priority",
        description: "We provide a safe working environment by partnering with emergency device and app companies to ensure our technicians have a secure and reliable work experience. We also collaborate with insurance partners to offer affordable coverage options that technicians can choose and purchase independently."
    },
];

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <section id="why-join-us" className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Why Join the VÉLOURA Team?</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We empower talented technicians to build their own business with the support of a strong brand behind them.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-stretch">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-card p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 flex flex-col">
                            <div className="mb-4">
                                <benefit.icon className="h-12 w-12 text-primary mx-auto" />
                            </div>
                            <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground flex-grow">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>
          <Card className="max-w-3xl mx-auto shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Become a VÉLOURA Pro</CardTitle>
              <CardDescription className="text-lg text-muted-foreground pt-2">Ready to take control of your career? Apply below!</CardDescription>
              <p className="text-sm text-muted-foreground pt-2">Please note: An in-person interview is required. Date and location to be determined upon application selection.</p>
            </CardHeader>
            <CardContent>
                <ApplicationForm />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
