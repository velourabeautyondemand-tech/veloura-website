
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seniorCareContent } from "@/lib/senior-care-data";
import { ShieldCheck, Heart, UserSearch, Star } from "lucide-react";

export function SeniorSafetyAccordion() {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-[#4A3728]">Safety & Service Guidelines</h2>
          <p className="text-lg text-muted-foreground mt-2">Our commitment to professional boundaries and client well-being.</p>
        </div>
        
        <Accordion type="single" collapsible className="bg-white border rounded-[2rem] px-8 py-4 shadow-xl">
          {seniorCareContent.guidelines.map((guideline, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0 py-2">
              <AccordionTrigger className="text-left text-lg font-bold text-[#4A3728] hover:no-underline">
                Guideline {idx + 1}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B5A4E] text-lg leading-relaxed pt-2">
                {guideline}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function SeniorPerfectFor() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-[#4A3728]">Who Is VÉLOURA Senior Care For?</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {seniorCareContent.perfectFor.map((item, idx) => (
            <div key={idx} className="bg-[#FDFBF7] p-8 rounded-3xl border border-primary/5 text-center space-y-4 hover:shadow-md transition-all">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-[#4A3728] font-bold text-lg leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeniorWhyFamilies() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
              Why Families Choose VÉLOURA Senior Care
            </h2>
            <div className="grid gap-6">
              {seniorCareContent.whyChoose.map((point, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xl font-medium">
                  <Star className="w-6 h-6 text-white shrink-0 fill-white/20" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 shadow-2xl space-y-6">
            <h3 className="text-2xl font-bold font-headline mb-4">Professional Standards</h3>
            <p className="text-lg leading-relaxed opacity-90">
              Only licensed beauty professionals may provide services that legally require a professional license. We prioritize matching our senior clients with pros who demonstrate exceptional patience, empathy, and technical skill.
            </p>
            <div className="pt-6 border-t border-white/20">
               <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Licensed & Background Checked</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
