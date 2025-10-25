
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Building, Send } from "lucide-react";

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

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  publication: z.string().min(1, "Publication is required."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please enter a message of at least 10 characters."),
});

export function PressInquiryForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            publication: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const subject = `Press Inquiry from ${values.name} at ${values.publication}`;
        const body = `Name: ${values.name}\nPublication: ${values.publication}\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
        window.location.href = `mailto:joinus@iamdreammaker.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-secondary/30 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
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
                <FormField
                control={form.control}
                name="publication"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Publication / Outlet</FormLabel>
                    <FormControl>
                        <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Your Publication" {...field} className="pl-10" />
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
                    <FormLabel>Your Email Address</FormLabel>
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
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="What would you like to discuss?" {...field} rows={5}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            
            <Button type="submit" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Inquiry
            </Button>
            </form>
        </Form>
    )
}
