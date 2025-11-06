
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, PartyPopper } from "lucide-react";
import { useFirestore, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export function SubscribeForm() {
    const { toast } = useToast();
    const firestore = useFirestore();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
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
            const subscribersCollection = collection(firestore, "subscribers");
            addDocumentNonBlocking(subscribersCollection, {
                ...values,
                subscribedAt: new Date().toISOString(),
            });
            
            setIsSubmitted(true);
            form.reset();

        } catch (error) {
            console.error("Failed to submit subscription:", error);
            toast({
                variant: "destructive",
                title: "Oh no! Something went wrong.",
                description: "Could not process your subscription. Please try again.",
            });
        }
    }
    
    if (isSubmitted) {
        return (
            <Alert variant="default" className="border-green-500 text-green-700 text-left">
                <PartyPopper className="h-5 w-5 text-green-500" />
                <AlertTitle className="font-bold text-green-600">You're on the list!</AlertTitle>
                <AlertDescription>
                    We'll notify you as soon as we launch.
                </AlertDescription>
            </Alert>
        )
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
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
                
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    <Send className="mr-2 h-5 w-5" />
                    Subscribe
                </Button>
            </form>
        </Form>
    )
}
