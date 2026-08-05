
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, User, MapPin, Calendar, Heart, ShieldAlert } from "lucide-react";

const formSchema = z.object({
  bookerName: z.string().min(1, "Person making booking is required"),
  relationship: z.string().min(1, "Relationship is required"),
  clientName: z.string().min(1, "Senior client's name is required"),
  clientPhone: z.string().min(10, "Valid phone number required"),
  address: z.string().min(1, "Service address is required"),
  residenceType: z.string().min(1, "Residence type is required"),
  service: z.string().min(1, "Selected service is required"),
  datetime: z.string().min(1, "Requested date and time is required"),
  mobilityNotes: z.string().optional(),
  allergies: z.string().optional(),
  emergencyName: z.string().min(1, "Emergency contact is required"),
  emergencyPhone: z.string().min(10, "Emergency phone required"),
  specialInstructions: z.string().optional(),
  confirmEligible: z.boolean().refine(v => v === true, "Confirmation is required")
});

export function SeniorBookingNotice() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#FFFBEB] border-2 border-[#F59E0B]/20 rounded-[2rem] p-8 shadow-xl">
           <h2 className="text-2xl md:text-3xl font-headline font-bold text-[#92400E] mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8" /> Important Booking Information
          </h2>
          <div className="space-y-4 text-lg text-[#92400E]/80 leading-relaxed">
            <p>Senior Care services are specially priced and designed for older adults who may benefit from extra time, gentle techniques, and senior-focused service.</p>
            <p>Customers must choose the correct service and provide accurate appointment information.</p>
            <p className="font-bold text-[#92400E]">If a Senior Care service is booked for someone who is not eligible for the senior offer, or if the requested service is different from the selected booking, the professional may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Change the appointment to the correct service</li>
              <li>Request payment for the applicable price difference</li>
              <li>Decline or end the appointment when the booking information is inaccurate</li>
              <li>Decline a service that cannot be performed safely or comfortably</li>
            </ul>
            <p className="text-sm italic pt-4">Any additional charge must be clearly explained to the customer before the service begins. Do not automatically charge a different amount without customer approval.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeniorFamilyBooking() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      confirmEligible: false
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Placeholder for submission logic
  }

  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="rounded-[3rem] shadow-2xl border-none overflow-hidden">
          <CardHeader className="bg-primary p-12 text-white text-center">
            <CardTitle className="text-3xl md:text-4xl font-headline font-bold mb-4">Booking for a Parent or Grandparent?</CardTitle>
            <CardDescription className="text-white/90 text-xl max-w-2xl mx-auto">
              You can arrange a thoughtful beauty or companionship visit for someone you love, even when you cannot be there in person.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-16">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Section: Booker Details */}
                  <div className="space-y-6">
                    <h3 className="font-headline font-bold text-xl text-[#4A3728] border-b pb-2 flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" /> Your Information
                    </h3>
                    <FormField
                      control={form.control}
                      name="bookerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Person Making Booking</FormLabel>
                          <FormControl><Input placeholder="Your full name" {...field} className="h-12 text-lg" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="relationship"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Relationship to Senior</FormLabel>
                          <FormControl><Input placeholder="e.g. Daughter, Son, Grandchild" {...field} className="h-12 text-lg" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Section: Client Details */}
                  <div className="space-y-6">
                    <h3 className="font-headline font-bold text-xl text-[#4A3728] border-b pb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" /> Senior Client Details
                    </h3>
                    <FormField
                      control={form.control}
                      name="clientName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Senior Client’s Name</FormLabel>
                          <FormControl><Input placeholder="Client full name" {...field} className="h-12 text-lg" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Senior Client’s Phone</FormLabel>
                          <FormControl><Input placeholder="(555) 555-5555" {...field} className="h-12 text-lg" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                   {/* Section: Location */}
                   <div className="space-y-6">
                    <h3 className="font-headline font-bold text-xl text-[#4A3728] border-b pb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" /> Location & Residence
                    </h3>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Service Address</FormLabel>
                          <FormControl><Input placeholder="Full address and suite #" {...field} className="h-12 text-lg" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="residenceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Residence Type</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-lg">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="private-home">Private Home / Apartment</SelectItem>
                              <SelectItem value="assisted-living">Assisted Living</SelectItem>
                              <SelectItem value="retirement">Retirement Community</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Section: Appointment */}
                  <div className="space-y-6">
                    <h3 className="font-headline font-bold text-xl text-[#4A3728] border-b pb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" /> Service Request
                    </h3>
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Selected Service</FormLabel>
                          <FormControl><Input placeholder="e.g. Senior Haircut & Tea Companion" {...field} className="h-12 text-lg" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="datetime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Requested Date & Time</FormLabel>
                          <FormControl><Input placeholder="e.g. Wednesday, Oct 12 at 10:00 AM" {...field} className="h-12 text-lg" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-headline font-bold text-xl text-[#4A3728] border-b pb-2 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-primary" /> Safety & Special Notes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-10">
                    <FormField
                      control={form.control}
                      name="mobilityNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Mobility or Accessibility Notes</FormLabel>
                          <FormControl><Textarea placeholder="e.g. Uses wheelchair, limited arm range" {...field} className="text-lg" rows={3} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="allergies"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Allergies or Sensitivities</FormLabel>
                          <FormControl><Textarea placeholder="e.g. Fragrance sensitive, latex allergy" {...field} className="text-lg" rows={3} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <FormField
                    control={form.control}
                    name="emergencyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Emergency Contact Name</FormLabel>
                        <FormControl><Input {...field} className="h-12 text-lg" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emergencyPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Emergency Contact Phone</FormLabel>
                        <FormControl><Input placeholder="(555) 555-5555" {...field} className="h-12 text-lg" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="confirmEligible"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-4 space-y-0 rounded-2xl border-2 border-primary/20 p-6 bg-primary/5">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-6 h-6 border-primary data-[state=checked]:bg-primary"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-tight">
                        <FormLabel className="text-lg font-bold text-[#4A3728]">
                          I confirm that this appointment is for an eligible senior client and that the booking information is accurate.
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-16 text-2xl font-bold rounded-full shadow-2xl transition-transform hover:scale-[1.01] active:scale-[0.99]">
                  Send Booking Request
                </Button>
                
                <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto">
                   Submission of this form is a request. A VÉLOURA concierge will review your details and confirm professional availability before the appointment is finalized.
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
