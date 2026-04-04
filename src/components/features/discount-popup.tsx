'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // We use useEffect to defer localStorage access until after client-side hydration
    const seen = localStorage.getItem('discountPopupSeen');
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('discountPopupSeen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-card border-2 border-primary/20 max-w-[420px] w-full p-8 rounded-2xl shadow-2xl relative text-center animate-in zoom-in-95 duration-300">
        <button 
          onClick={closePopup}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-2xl font-bold font-headline mb-4 text-foreground">Get 20% Off Your First Booking</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Use code <strong className="text-primary font-bold tracking-wider bg-primary/5 px-3 py-1 rounded-md border border-primary/10">HELLO20</strong> at checkout.
        </p>
        
        <Button onClick={closePopup} className="w-full text-lg h-12" variant="default" size="lg">
          Claim My Discount
        </Button>
        
        <button 
            onClick={closePopup}
            className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
        >
            Maybe later
        </button>
      </div>
    </div>
  );
}
