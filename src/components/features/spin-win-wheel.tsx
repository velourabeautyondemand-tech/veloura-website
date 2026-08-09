'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { useFirestore, useUser, addDocumentNonBlocking } from '@/firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { Gift, Sparkles, AlertCircle, Copy, Check, Calendar, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useToast } from '@/hooks/use-toast';
import { addDays, format, isAfter } from 'date-fns';
import Link from 'next/link';

const SPIN_LIMIT_DAYS = 10;

const prizes = [
  { label: '10% OFF', code: '10off', color: '#fb5185', percent: 10 },
  { label: '15% OFF', code: '15off', color: '#ff7fa5', percent: 15 },
  { label: '20% OFF', code: '20off', color: '#fb5185', percent: 20 },
  { label: '25% OFF', code: '25offwow', color: '#ff7fa5', percent: 25 },
  { label: 'Free Add-On', code: 'luckyou', color: '#fb5185', percent: 0 },
  { label: 'Next Time!', code: '', color: '#8c6b4f', percent: 0 },
];

const FormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});

export function SpinWinWheel() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<typeof prizes[0] | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [eligibility, setEligibility] = useState<{ isEligible: boolean; nextDate?: Date } | null>(null);
  const [rotation, setRotation] = useState(0);
  const [step, setStep] = useState<'email' | 'wheel' | 'result'>('email');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: '' },
  });

  // Auto-popup logic
  useEffect(() => {
    const hasSeenThisSession = sessionStorage.getItem('veloura_spin_auto_opened');
    if (hasSeenThisSession) return;

    const timer = setTimeout(() => {
      // Check if they've spun recently globally before popping
      const lastSpinGlobal = localStorage.getItem('veloura_last_spin_timestamp');
      if (lastSpinGlobal) {
        const nextEligible = addDays(new Date(lastSpinGlobal), SPIN_LIMIT_DAYS);
        if (isAfter(nextEligible, new Date())) return;
      }

      setIsOpen(true);
      sessionStorage.setItem('veloura_spin_auto_opened', 'true');
    }, 3000); // 3 second delay

    return () => clearTimeout(timer);
  }, []);

  const checkEligibility = async (email: string) => {
    if (!firestore) return { isEligible: true };

    // Check LocalStorage first
    const localLastSpin = localStorage.getItem(`veloura_spin_${email}`);
    if (localLastSpin) {
      const nextEligible = addDays(new Date(localLastSpin), SPIN_LIMIT_DAYS);
      if (isAfter(nextEligible, new Date())) {
        return { isEligible: false, nextDate: nextEligible };
      }
    }

    // Server-side check
    const q = query(
      collection(firestore, 'spin_records'),
      where('email', '==', email),
      orderBy('spinDate', 'desc'),
      limit(1)
    );

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const lastRecord = snapshot.docs[0].data();
      const nextEligible = new Date(lastRecord.nextEligibleSpinDate);
      if (isAfter(nextEligible, new Date())) {
        return { isEligible: false, nextDate: nextEligible };
      }
    }

    return { isEligible: true };
  };

  const onEmailSubmit = async (values: z.infer<typeof FormSchema>) => {
    const status = await checkEligibility(values.email);
    setEligibility(status);
    if (status.isEligible) {
      setStep('wheel');
    }
  };

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const extraSpins = 5 + Math.floor(Math.random() * 5);
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const segmentAngle = 360 / prizes.length;
    const finalRotation = rotation + (extraSpins * 360) + (prizeIndex * segmentAngle);

    setRotation(finalRotation);

    setTimeout(() => {
      const actualPrize = prizes[(prizes.length - (prizeIndex % prizes.length)) % prizes.length];
      setResult(actualPrize);
      setIsSpinning(false);
      setStep('result');

      if (actualPrize.code) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#fb5185', '#ff7fa5', '#ffffff'],
        });
      }

      // Save to Firestore & LocalStorage
      const email = form.getValues('email');
      const now = new Date();
      const nextEligible = addDays(now, SPIN_LIMIT_DAYS);

      localStorage.setItem(`veloura_spin_${email}`, now.toISOString());
      localStorage.setItem('veloura_last_spin_timestamp', now.toISOString());

      if (firestore) {
        addDocumentNonBlocking(collection(firestore, 'spin_records'), {
          email,
          prize: actualPrize.label,
          couponCode: actualPrize.code,
          discountPercent: actualPrize.percent,
          spinDate: now.toISOString(),
          nextEligibleSpinDate: nextEligible.toISOString(),
          redeemed: false,
          source: 'website_spin_game',
          userId: user?.uid || null
        });
      }
    }, 4000);
  };

  const copyCode = () => {
    if (!result?.code) return;
    navigator.clipboard.writeText(result.code);
    setIsCopied(true);
    toast({ title: 'Code Copied!', description: 'Your discount is ready for checkout.' });
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 z-[100] h-14 w-14 rounded-full shadow-2xl p-0 hover:scale-110 transition-transform bg-primary"
          onClick={() => {
            setStep('email');
            setResult(null);
            setEligibility(null);
          }}
        >
          <Gift className="h-6 w-6 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[460px] rounded-[2rem] overflow-hidden border-2 border-primary/20 bg-background">
        <DialogHeader className="text-center pt-4">
          <DialogTitle className="text-3xl font-bold font-headline text-foreground">VÉLOURA Spin & Win</DialogTitle>
          <DialogDescription className="text-muted-foreground font-medium">
            Try your luck and win an elite beauty reward!
          </DialogDescription>
        </DialogHeader>

        {step === 'email' && (
          <div className="space-y-6 py-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onEmailSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter your email to start</FormLabel>
                      <FormControl>
                        <Input placeholder="jessica@example.com" {...field} className="h-12 text-lg rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="bg-primary/5 p-4 rounded-xl border border-dashed border-primary/20 flex gap-3">
                   <AlertCircle className="h-5 w-5 text-primary shrink-0" />
                   <p className="text-[10px] text-muted-foreground leading-relaxed">
                      One spin every 10 days. Save your prize and coupon code — you won't be able to spin again until your next eligible date.
                   </p>
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-bold rounded-xl">Check Eligibility</Button>
              </form>
            </Form>

            {eligibility?.isEligible === false && (
              <div className="bg-destructive/10 p-6 rounded-2xl border border-destructive/20 text-center animate-in fade-in slide-in-from-bottom-2">
                 <h4 className="font-bold text-destructive flex items-center justify-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" /> Already Spun
                 </h4>
                 <p className="text-sm text-muted-foreground">
                    You've already used your Spin & Win. Your next spin is available on <span className="font-bold text-foreground">{format(eligibility.nextDate!, 'PPP')}</span>.
                 </p>
              </div>
            )}
          </div>
        )}

        {step === 'wheel' && (
          <div className="flex flex-col items-center py-8 space-y-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
               {/* Arrow */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20 w-8 h-8">
                  <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[24px] border-t-primary drop-shadow-md" />
               </div>
               
               {/* The Wheel */}
               <div 
                 className="w-full h-full rounded-full border-8 border-white shadow-2xl relative overflow-hidden transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.15, 1)"
                 style={{ transform: `rotate(${rotation}deg)` }}
               >
                  {prizes.map((prize, idx) => (
                    <div 
                      key={idx}
                      className="absolute top-0 left-1/2 w-1/2 h-full origin-left flex items-center justify-center pl-16 text-center"
                      style={{ 
                        backgroundColor: prize.color,
                        transform: `rotate(${idx * (360/prizes.length)}deg) skewY(${90 - (360/prizes.length)}deg)`
                      }}
                    >
                        <div 
                          className="text-[10px] md:text-xs font-black text-white whitespace-nowrap uppercase tracking-tighter"
                          style={{ transform: `skewY(-${90 - (360/prizes.length)}deg) rotate(${(360/prizes.length)/2}deg)` }}
                        >
                          {prize.label}
                        </div>
                    </div>
                  ))}
                  {/* Inner center decoration */}
                  <div className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full z-10 flex items-center justify-center shadow-lg border-2 border-primary/20">
                     <Sparkles className="h-5 w-5 text-primary" />
                  </div>
               </div>
            </div>

            <Button 
              size="lg" 
              className="h-14 px-12 text-xl font-black rounded-full shadow-xl w-full animate-pulse" 
              onClick={handleSpin}
              disabled={isSpinning}
            >
              {isSpinning ? "SPINNING..." : "TAP TO SPIN"}
            </Button>
          </div>
        )}

        {step === 'result' && result && (
          <div className="text-center py-6 space-y-8 animate-in zoom-in-95 duration-500">
             <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Result</p>
                <h3 className="text-4xl font-black font-headline text-foreground">{result.label}</h3>
             </div>

             {result.code ? (
               <div className="space-y-4">
                  <div className="bg-secondary p-6 rounded-3xl border-2 border-primary/10 shadow-inner">
                    <p className="text-xs font-bold text-muted-foreground mb-3 uppercase">Your Exclusive Coupon Code</p>
                    <div className="flex items-center gap-2">
                       <code className="flex-1 text-3xl font-black tracking-widest text-primary bg-white py-3 rounded-xl border-2 border-dashed border-primary/20">
                          {result.code}
                       </code>
                       <Button size="icon" variant="outline" className="h-14 w-14 shrink-0 rounded-xl" onClick={copyCode}>
                          {isCopied ? <Check className="h-6 w-6 text-green-500" /> : <Copy className="h-6 w-6" />}
                       </Button>
                    </div>
                    {result.label === 'Free Add-On' && (
                       <p className="text-[10px] text-primary font-bold mt-4">Redeem this code at checkout for your complimentary upgrade!</p>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground italic">Don't forget to save this code. Your next spin is available in 10 days.</p>
               </div>
             ) : (
               <div className="bg-muted p-8 rounded-3xl border border-muted-foreground/10">
                  <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                    So close! No prize this time — come back in 10 days for another spin.
                  </p>
               </div>
             )}

             <div className="grid gap-3">
                <Button asChild size="lg" className="h-14 text-lg font-bold rounded-xl shadow-lg">
                   <Link href="/book">Book Your Beauty Service</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 text-lg font-bold rounded-xl border-primary text-primary">
                   <Link href="/download-app" className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      Download VÉLOURA App
                   </Link>
                </Button>
             </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}