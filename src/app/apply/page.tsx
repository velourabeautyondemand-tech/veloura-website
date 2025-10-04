"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, User, Mail, Phone, MapPin, Award } from "lucide-react";

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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  serviceArea: z.string().min(3, "Please enter a valid service area."),
  licenseNumber: z.string().min(1, "License number is required."),
  licenseUpload: z.any().refine(files => files?.length === 1, "License upload is required."),
  resumeUpload: z.any(),
});

export default function ApplyPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            serviceArea: "",
            licenseNumber: "",
        },
    });
    
    const licenseFileRef = form.register("licenseUpload");
    const resumeFileRef = form.register("resumeUpload");

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Application Submitted!",
            description: "Thank you for applying. We will review your application and get back to you soon.",
        });
        form.reset();
    }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Become a Nails Pro on the Go</CardTitle>
              <CardDescription className="text-lg text-muted-foreground pt-2">Join our network of elite mobile nail technicians. Apply below!</CardDescription>
              <p className="text-sm text-muted-foreground pt-2">Please note: An in-person interview is required. Date and location to be determined upon application selection.</p>
            </CardHeader>
            <CardContent>
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
                          <FormDescription>Your primary city or neighborhood for clients.</FormDescription>
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
                  
                  <Button type="submit" className="w-full text-lg" size="lg" variant="accent">Submit Application</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
