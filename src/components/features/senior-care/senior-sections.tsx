
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { seniorCareContent, BOOKING_APP_URL } from "@/lib/senior-care-data";
import { CheckCircle2, ShieldAlert, ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SeniorPricingBanner() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <Badge variant="accent" className="mb-4 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full">
          {seniorCareContent.seniorOffer.badge}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-[#4A3728] mb-4">
          {seniorCareContent.seniorOffer.heading}
        </h2>
        <p className="text-lg md:text-xl text-[#6B5A4E] leading-relaxed">
          {seniorCareContent.seniorOffer.text}
        </p>
      </div>
    </section>
  );
}

export function SeniorServiceGrid() {
  return (
    <section id="senior-services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#4A3728]">
            💇 Beauty at Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional beauty services delivered directly to your home, senior apartment, retirement community, or assisted living residence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {seniorCareContent.beautyCategories.map((cat) => (
            <Card key={cat.id} className="border-none shadow-lg bg-[#FDFBF7] rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5 pb-6">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-4">
                  <cat.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl text-[#4A3728]">{cat.title}</CardTitle>
                <CardDescription className="text-[#6B5A4E] font-medium">{cat.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {cat.services.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#4A3728] text-lg font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                {cat.note && (
                  <p className="mt-6 text-sm italic text-muted-foreground bg-white/50 p-3 rounded-xl border border-dashed border-primary/20">
                    "{cat.note}"
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="h-16 px-12 text-xl font-bold rounded-full shadow-2xl">
            <Link href={BOOKING_APP_URL}>View Senior Beauty Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CompanionServiceGrid() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#1E293B]">
            ❤️ Companion & Wellness Services
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Sometimes the most meaningful part of a visit is simply spending time together. Our companion services are designed to offer friendly conversation, gentle activities, and meaningful social connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seniorCareContent.companionServices.map((service) => (
            <Card key={service.id} className={cn(
              "border-none shadow-md rounded-[2rem] flex flex-col h-full overflow-hidden transition-all",
              service.isComingSoon ? "opacity-75 grayscale bg-slate-100" : "bg-white hover:-translate-y-1 hover:shadow-lg"
            )}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    service.isComingSoon ? "bg-slate-200" : "bg-blue-50 text-blue-600"
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  {service.isComingSoon && (
                    <Badge variant="outline" className="uppercase tracking-widest font-bold bg-white text-slate-500 border-slate-300">
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-lg text-[#475569]">{service.description}</p>
                {service.note && (
                  <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-100">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{service.note}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  asChild={!service.isComingSoon} 
                  disabled={service.isComingSoon}
                  variant={service.isComingSoon ? "secondary" : "outline"}
                  className="w-full h-12 rounded-full font-bold"
                >
                  {service.isComingSoon ? (
                    "Coming Soon"
                  ) : (
                    <Link href={BOOKING_APP_URL}>Book Now</Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NonMedicalNotice() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#FFF1F2] border-2 border-primary/20 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldAlert className="w-48 h-48" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 flex items-center justify-center gap-3">
                <ShieldAlert className="w-10 h-10" /> Important Note
              </h2>
              <p className="text-xl font-bold text-[#4A3728]">
                VÉLOURA Senior Care provides non-medical companionship and wellness services only.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="space-y-4">
                <p className="font-bold text-[#4A3728] uppercase tracking-widest text-sm">We do not provide:</p>
                <ul className="space-y-2 text-lg text-[#6B5A4E]">
                  <li>• Nursing care</li>
                  <li>• Medical treatments</li>
                  <li>• Medication administration</li>
                  <li>• Bathing or personal hygiene</li>
                  <li>• Dressing or toileting assistance</li>
                  <li>• Feeding assistance</li>
                </ul>
              </div>
              <div className="space-y-4 md:pt-9">
                 <ul className="space-y-2 text-lg text-[#6B5A4E]">
                  <li>• Mobility, transfer, or lifting</li>
                  <li>• Transportation</li>
                  <li>• Physical or occupational therapy</li>
                  <li>• Mental health treatment</li>
                  <li>• Emergency medical care</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-primary/10">
              <p className="text-lg text-[#6B5A4E] leading-relaxed text-center">
                Our services focus on beauty, gentle relaxation, companionship, and social connection in the comfort of home. 
                <br /><br />
                If a client requires medical care, personal care, mobility assistance, or emergency support, please contact a licensed healthcare provider or home-care agency.
              </p>
            </div>

            <div className="bg-primary text-white p-6 rounded-2xl text-center shadow-lg animate-pulse">
              <p className="text-xl font-bold font-headline">
                VÉLOURA is not an emergency service. In an emergency, call 911 or the appropriate local emergency number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
