'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const reviews = [
  { name:"Sophia M.", initials:"SM", date:"Jun 12, 2026", stars:5, category:"lash", service:"Lash extensions", title:"Absolutely obsessed!", body:"I booked a lash appointment last minute and my tech arrived right on time with everything she needed. The results were stunning — I've never had lashes this good at a salon. Veloura is my new go-to.", featured:true },
  { name:"Aisha K.", initials:"AK", date:"Jun 10, 2026", stars:5, category:"makeup", service:"Bridal makeup", title:"Made my wedding day perfect", body:"Words can't describe how happy I was with my bridal look. My artist understood exactly what I wanted — glowy, romantic, long-lasting. She even touched me up before the ceremony. Total professional." },
  { name:"Natalie R.", initials:"NR", date:"Jun 9, 2026", stars:5, category:"nails", service:"Gel manicure", title:"So convenient and high quality", body:"I used to spend hours at the nail salon. Now I book Veloura and my nails are done at home in under an hour. The gel is flawless and has lasted over two weeks. Will definitely keep using!" },
  { name:"Priya D.", initials:"PD", date:"Jun 8, 2026", stars:4, category:"skin", service:"Facial treatment", title:"Great experience overall", body:"The facial was relaxing and my skin looked great afterwards. The technician was very knowledgeable. Only reason for 4 stars is I had to wait about 10 minutes past my booking time, but she apologized and made up for it." },
  { name:"Clara B.", initials:"CB", date:"Jun 7, 2026", stars:5, category:"hair", service:"Hair blowout", title:"Best blowout I've ever had", body:"I booked a blowout for a dinner event and I felt like a celebrity. My hair was bouncy, shiny and lasted 3 days. The stylist was so sweet and talented. Highly recommend for any special occasion!" },
  { name:"Jasmine T.", initials:"JT", date:"Jun 5, 2026", stars:5, category:"skin", service:"Eyebrow shaping", title:"Completely transformed my face", body:"I was nervous about eyebrow threading at home but the technician was so precise and gentle. She shaped them perfectly to my face structure. Friends have been asking what I did differently — it's Veloura!" },
  { name:"Melissa G.", initials:"MG", date:"Jun 3, 2026", stars:5, category:"skin", service:"Full body wax", title:"Professional and comfortable", body:"I was honestly nervous about booking a wax at home but Veloura made it so easy. The technician was professional, fast, and made me feel totally comfortable. Will 100% book again next month." },
  { name:"Rachel O.", initials:"RO", date:"Jun 1, 2026", stars:4, category:"makeup", service:"Makeup application", title:"Really lovely service", body:"My makeup artist did a beautiful job for my anniversary dinner. She had great product quality and really listened to what I asked for. Booking was easy too. Knocked off one star only because I wish there were more evening slots." },
  { name:"Tanya F.", initials:"TF", date:"May 29, 2026", stars:5, category:"lash", service:"Lash lift & tint", title:"Game changer!", body:"I've done lash lifts before but this was on another level. She was meticulous, explained every step, and the results lasted over 6 weeks. I look awake even without mascara now. Cannot recommend enough." },
  { name:"Amara L.", initials:"AL", date:"May 27, 2026", stars:5, category:"nails", service:"Gel pedicure", title:"Luxury from your own couch", body:"I got a pedicure done while watching TV at home — that's the dream right there. The technician was sweet, thorough, and left my feet looking salon-perfect. This app is genuinely amazing." },
  { name:"Diana C.", initials:"DC", date:"May 25, 2026", stars:5, category:"hair", service:"Hair coloring", title:"Stunning results, zero stress", body:"Getting my highlights done used to mean half a day at the salon. With Veloura I got gorgeous balayage done at home in 2 hours. Zero mess, zero stress. My colorist was incredibly skilled and friendly." },
  { name:"Kezia W.", initials:"KW", date:"May 23, 2026", stars:4, category:"skin", service:"Eyebrow tinting", title:"Quick and really well done", body:"Super fast booking and the tint looked very natural. My technician was friendly and efficient. The only thing I'd say is the confirmation email was a bit slow to come through, but the actual service was great." },
  { name:"Olivia H.", initials:"OH", date:"May 21, 2026", stars:5, category:"skin", service:"Facial & dermaplaning", title:"My skin has never looked better", body:"I was skeptical about dermaplaning at home but the technician was fully trained and so professional. My skin is smooth, bright and absolutely glowing. I've already booked my next session." },
  { name:"Fatima S.", initials:"FS", date:"May 19, 2026", stars:5, category:"makeup", service:"Bridal party package", title:"Handled everything flawlessly", body:"We booked Veloura for my entire bridal party — 6 people — and it went without a hitch. Three technicians showed up right on time and everyone looked amazing. Saved us so much stress on the big day." },
  { name:"Zoe A.", initials:"ZA", date:"May 17, 2026", stars:5, category:"skin", service:"Relaxing massage", title:"Didn't expect this level of quality", body:"I tried Veloura for the first time for a massage and I honestly wasn't sure what to expect. The therapist was exceptional — pressure was perfect, timing was great. I've already recommended it to 5 friends." },
];

const filters = [
    { label: "All services", value: "all" },
    { label: "Lashes", value: "lash" },
    { label: "Makeup", value: "makeup" },
    { label: "Nails", value: "nails" },
    { label: "Hair", value: "hair" },
    { label: "Skin & body", value: "skin" },
];

const avatarPalette = [
    { bg: "bg-primary/10", text: "text-primary" },
    { bg: "bg-blue-100", text: "text-blue-700" },
    { bg: "bg-purple-100", text: "text-purple-700" },
    { bg: "bg-amber-100", text: "text-amber-700" },
    { bg: "bg-emerald-100", text: "text-emerald-700" },
    { bg: "bg-orange-100", text: "text-orange-700" },
];

export function ReviewsSection() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredReviews = reviews.filter(r => activeFilter === 'all' || r.category === activeFilter);

    return (
        <section className="py-24" aria-label="Customer reviews">
            <div className="text-center mb-16">
                <span className="text-primary text-[11px] font-bold tracking-[0.18em] uppercase mb-4 block">What our clients say</span>
                <h2 className="text-4xl md:text-6xl font-headline font-normal leading-tight mb-4">
                    Beauty that comes <br /> to <em className="italic text-primary not-italic">you</em>
                </h2>
                <p className="text-muted-foreground text-sm font-light max-w-[420px] mx-auto leading-relaxed mb-8">
                    Real experiences from real clients across Veloura Beauty On Demand.
                </p>
                <div className="inline-flex items-center gap-2.5 bg-background border border-primary/10 rounded-full px-5 py-2.5 shadow-sm">
                    <span className="text-yellow-500 tracking-[2px] leading-none text-lg">★★★★★</span>
                    <span className="font-medium text-foreground">4.8</span>
                    <span className="text-muted-foreground text-xs">· 15 verified reviews</span>
                </div>
            </div>

            <div className="flex gap-2 justify-center flex-wrap mb-12">
                {filters.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setActiveFilter(f.value)}
                        className={cn(
                            "text-xs px-5 py-2 rounded-full border transition-all duration-200",
                            activeFilter === f.value 
                                ? "bg-primary border-primary text-white" 
                                : "bg-background border-primary/10 text-foreground/80 hover:border-primary hover:text-primary"
                        )}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                {filteredReviews.map((r, i) => {
                    const palette = avatarPalette[i % avatarPalette.length];
                    return (
                        <div 
                            key={i} 
                            className={cn(
                                "break-inside-avoid bg-card border border-primary/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
                                r.featured && "bg-gradient-to-br from-primary/[0.03] to-background border-primary/20"
                            )}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0", palette.bg, palette.text)}>
                                    {r.initials}
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                    <div className="text-sm font-bold truncate text-foreground">{r.name}</div>
                                    <div className="text-[11px] text-muted-foreground font-light">{r.date}</div>
                                </div>
                                <div className="text-yellow-500 text-[11px] tracking-widest shrink-0">
                                    {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                                </div>
                            </div>
                            <h3 className={cn("font-headline font-medium text-lg leading-tight mb-2 text-foreground", r.featured && "text-xl")}>{r.title}</h3>
                            <p className={cn("text-[13px] text-muted-foreground leading-relaxed font-light", r.featured && "text-[14px]")}>{r.body}</p>
                            <div className="flex items-center justify-between mt-5 pt-4 border-t border-primary/5">
                                <span className="text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/5 px-3 py-1 rounded-full">{r.service}</span>
                                <span className="text-[11px] text-yellow-600 flex items-center gap-1 font-medium">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredReviews.length === 0 && (
                <p className="text-center py-12 text-muted-foreground font-light italic">No reviews for this category yet.</p>
            )}

            <div className="text-center mt-16 space-y-6">
                <p className="text-sm text-muted-foreground font-light">Ready to experience Veloura for yourself?</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild className="rounded-full h-12 px-8 uppercase tracking-wider text-xs font-bold shadow-lg shadow-primary/10">
                        <Link href="/book">Book a service</Link>
                    </Button>
                    <Button variant="outline" asChild className="rounded-full h-12 px-8 uppercase tracking-wider text-xs font-bold border-primary text-primary hover:bg-primary/5">
                        <Link href="/contact">Leave a review</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
