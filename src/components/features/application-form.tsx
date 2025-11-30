
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, User, Mail, Phone, MapPin, Share2, PartyPopper } from "lucide-react";
import { useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import Link from 'next/link';

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
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  serviceArea: z.string().min(3, "Please enter a valid service area."),
  socialMediaLink: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  resumeUpload: z.any().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});


export function ApplicationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const firestore = useFirestore();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            serviceArea: "",
            socialMediaLink: "",
            agreeToTerms: false,
        },
    });
    
    const resumeFileRef = form.register("resumeUpload");

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!firestore) return;
        try {
            const techniciansCol = collection(firestore, "technician_applications");
            
            const { resumeUpload, agreeToTerms, ...applicationData } = values;

            addDocumentNonBlocking(techniciansCol, {
                ...applicationData,
                applicationStatus: 'pending',
                availability: '{"monday": "9am-5pm", "tuesday": "9am-5pm"}', 
                serviceRadius: 6,
            });

            if(values.resumeUpload && values.resumeUpload[0]) {
                console.log("Resume file (not uploaded):", values.resumeUpload[0]?.name);
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting application:", error);
            toast({
                title: "Submission Failed",
                description: "There was an error submitting your application. Please try again.",
                variant: "destructive",
            });
        }
    }
    
    function handleNewApplication() {
        form.reset();
        setIsSubmitted(false);
    }
    
    if (isSubmitted) {
        return (
            <div className="text-center py-12">
              <PartyPopper className="mx-auto h-16 w-16 text-accent" />
              <h2 className="mt-6 text-2xl font-bold font-headline">Application Submitted!</h2>
              <p className="mt-2 text-muted-foreground">
                Thank you for your interest in joining VÉLOURA! We have received your application and will review it shortly.
              </p>
              <Button onClick={handleNewApplication} className="mt-8" variant="outline">
                Submit Another Application
              </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                        <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Jessica" {...field} className="pl-10" />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                        <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Lee" {...field} className="pl-10" />
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
                name="socialMediaLink"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Social Media Link</FormLabel>
                    <FormControl>
                        <div className="relative">
                        <Share2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="https://instagram.com/your-profile" {...field} className="pl-10" />
                        </div>
                    </FormControl>
                     <FormDescription>Optional. Link to your Instagram, portfolio, or personal website.</FormDescription>
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

            <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                        <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>
                            I have read and agree to the VÉLOURA Partner Handbook & Onboarding Policy Agreement.
                        </FormLabel>
                        <FormDescription>
                            You can review the agreement <Link href="/partner-agreement" target="_blank" className="text-primary hover:underline">here</Link>.
                        </FormDescription>
                        <FormMessage />
                    </div>
                    </FormItem>
                )}
            />
            
            <div className="space-y-4">
                <Button type="submit" className="w-full text-lg" size="lg">Submit Application</Button>
                
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                        Or
                        </span>
                    </div>
                </div>

                <Button asChild variant="secondary" className="w-full text-lg" size="lg">
                    <Link href="https://www.indeed.com/viewjob?jk=c35c02dd395e9fb9&from=shareddesktop_copy" target="_blank">
                        Apply on Indeed
                    </Link>
                </Button>
            </div>
            </form>
        </Form>
    )
}
