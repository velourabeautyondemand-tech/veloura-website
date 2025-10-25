
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Building, Send, PartyPopper } from "lucide-react";
import { useFirestore, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required."),
  contactName: z.string().min(1, "Contact name is required."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please enter a message of at least 10 characters."),
});

export function PartnershipInquiryForm() {
    const { toast } = useToast();
    const firestore = useFirestore();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: "",
            contactName: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (!firestore) {
             toast({
                variant: "destructive",
                title: "Error",
                description: "Could not connect to the database. Please try again later.",
            });
            return;
        }

        try {
            const inquiriesCollection = collection(firestore, "partnership_inquiries");
            addDocumentNonBlocking(inquiriesCollection, {
                ...values,
                submittedAt: new Date().toISOString(),
            });
            
            setIsSubmitted(true);
            form.reset();

        } catch (error) {
            console.error("Failed to submit inquiry:", error);
            toast({
                variant: "destructive",
                title: "Oh no! Something went wrong.",
                description: "Could not submit your inquiry. Please try again or contact us directly.",
            });
        }
    }
    
    if (isSubmitted) {
        return (
            <Alert variant="default" className="border-primary text-primary-foreground bg-primary/10">
                <PartyPopper className="h-5 w-5 text-primary" />
                <AlertTitle className="font-bold text-primary">Thank You!</AlertTitle>
                <AlertDescription>
                    Your partnership inquiry has been submitted. We will get back to you shortly.
                </AlertDescription>
            </Alert>
        )
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-secondary/30 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input placeholder="Your Company" {...field} className="pl-10" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Name</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input placeholder="Your Name" {...field} className="pl-10" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Work Email Address</FormLabel>
                        <FormControl>
                            <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="you@company.com" {...field} className="pl-10" />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tell us about your products and how we can partner..." {...field} rows={5}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Inquiry
                </Button>
            </form>
        </Form>
    )
}
