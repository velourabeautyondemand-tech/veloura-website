"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, User, Mail, Phone, MapPin, Award, Twitter, Instagram, Facebook, PartyPopper, Briefcase, DollarSign, Sparkles, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  serviceArea: z.string().min(3, "Please enter a valid service area."),
  licenseNumber: z.string().min(1, "License number is required."),
  licenseUpload: z.any().refine(files => files?.length === 1, "License upload is required."),
  resumeUpload: z.any(),
  twitter: z.string().url().optional().or(z.literal('')),
  instagram: z.string().url().optional().or(z.literal('')),
  facebook: z.string().url().optional().or(z.literal('')),
});

const benefits = [
    {
        icon: Briefcase,
        title: "Be Your Own Boss",
        description: "Enjoy the freedom to set your own schedule and work when you want. You have full control over your availability."
    },
    {
        icon: DollarSign,
        title: "Maximize Your Earnings",
        description: "Keep a majority of your earnings from every appointment. We offer a competitive commission structure that rewards your hard work."
    },
    {
        icon: Sparkles,
        title: "Focus on Your Craft",
        description: "We handle the marketing, booking, and payment processing, so you can concentrate on what you do best: creating beautiful nails."
    },
    {
        icon: Users,
        title: "Access a Wide Client Base",
        description: "We connect you with a steady stream of clients who have busy schedules and are looking for premium, at-home nail services."
    },
    {
        icon: ShieldCheck,
        title: "Your Safety is Our Priority",
        description: "We provide a safe working environment by running background checks for house calls. We also work with insurance partners to provide access to coverage options."
    },
];

export default function ApplyPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            serviceArea: "",
            licenseNumber: "",
            twitter: "",
            instagram: "",
            facebook: "",
        },
    });
    
    const licenseFileRef = form.register("licenseUpload");
    const resumeFileRef = form.register("resumeUpload");

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setIsSubmitted(true);
    }
    
    function handleNewApplication() {
        form.reset();
        setIsSubmitted(false);
    }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <section id="why-join-us" className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Join the Nails On the Go Team?</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We empower talented nail technicians to build their own business with the support of a strong brand behind them.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-stretch">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-card p-8 rounded-xl shadow-md flex flex-col">
                            <div className="mb-4">
                                <benefit.icon className="h-12 w-12 text-primary mx-auto" />
                            </div>
                            <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground flex-grow">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Become a Nails Pro on the Go</CardTitle>
              <CardDescription className="text-lg text-muted-foreground pt-2">Ready to take control of your career? Apply below!</CardDescription>
              <p className="text-sm text-muted-foreground pt-2">Please note: An in-person interview is required. Date and location to be determined upon application selection.</p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <PartyPopper className="mx-auto h-16 w-16 text-accent" />
                  <h2 className="mt-6 text-2xl font-bold font-headline">Application Submitted!</h2>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for your interest in joining Nails On the Go! We have received your application and will review it shortly.
                  </p>
                  <Button onClick={handleNewApplication} className="mt-8" variant="outline">
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                 <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                 <Input placeholder="Jessica Lee" {...field} className="pl-10" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                               <div className="relative">
                                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                 <Input placeholder="you@example.com" {...field} className="pl-10" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                 <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                 <Input placeholder="(123) 456-7890" {...field} className="pl-10" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="serviceArea"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Area</FormLabel>
                             <FormControl>
                              <div className="relative">
                                 <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                 <Input placeholder="e.g. Downtown, Anytown" {...field} className="pl-10" />
                              </div>
                            </FormControl>
                            <FormDescription>Your primary city or neighborhood for clients within a 6-mile service radius.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="licenseNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Professional License Number</FormLabel>
                             <FormControl>
                              <div className="relative">
                                 <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                 <Input placeholder="AB-123456" {...field} className="pl-10" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="licenseUpload"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload License Copy</FormLabel>
                            <FormControl>
                              <div className="relative">
                                 <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                 <Input type="file" {...licenseFileRef} className="pl-10 file:text-primary file:font-medium" />
                              </div>
                            </FormControl>
                            <FormDescription>Please upload a PDF or image of your license.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="resumeUpload"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload Resume</FormLabel>
                            <FormControl>
                              <div className="relative">
                                 <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                 <Input type="file" {...resumeFileRef} className="pl-10 file:text-primary file:font-medium" />
                              </div>
                            </FormControl>
                            <FormDescription>Optional. Please upload a PDF or DOCX file.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Social Media (Optional)</h3>
                      <p className="text-sm text-muted-foreground">
                          Provide links to your professional social media profiles for our review. These will not be displayed to customers.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="instagram"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Instagram</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                  <Input placeholder="https://instagram.com/yourprofile" {...field} className="pl-10" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="facebook"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Facebook</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                  <Input placeholder="https://facebook.com/yourprofile" {...field} className="pl-10" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="twitter"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Twitter / X</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                  <Input placeholder="https://x.com/yourprofile" {...field} className="pl-10" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full text-lg" size="lg" variant="accent">Submit Application</Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
    