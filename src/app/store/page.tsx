'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, CreditCard, Star, ArrowRight, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * GLOBAL STORE CONFIGURATION
 * Replace this single URL with your main Stripe Storefront or 
 * a single Stripe Payment Link that handles your primary checkout.
 */
const GLOBAL_STRIPE_STORE_LINK = 'https://buy.stripe.com/your_main_store_link'; 

const storeItems = [
  {
    id: 'gift-card-50',
    name: 'VÉLOURA Digital Gift Card',
    description: 'Give the gift of luxury. Valid for any at-home beauty or photography service booked through the app.',
    price: 50,
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1549461756-371237a4f41b?q=80&w=1080&auto=format&fit=crop',
    imageHint: 'gift card luxury',
  },
  {
    id: 'pro-kit-starter',
    name: 'Technician Starter Kit',
    description: 'Essential professional supplies for new VÉLOURA partners. Includes branded cape, sanitized tool organizer, and safety lights.',
    price: 129,
    category: 'Pro Gear',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1080&auto=format&fit=crop',
    imageHint: 'beauty professional tools',
  },
  {
    id: 'merch-tote',
    name: 'VÉLOURA Canvas Tote',
    description: 'Our signature heavy-duty canvas tote. Perfect for carrying your glam essentials or daily commute items.',
    price: 35,
    category: 'Merchandise',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1080&auto=format&fit=crop',
    imageHint: 'canvas tote bag',
  }
];

export default function StorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2 uppercase tracking-widest">
                <ShoppingBag className="w-4 h-4" />
                <span>Official VÉLOURA Boutique</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
                Luxury Essentials <br /> <span className="text-primary">Curated for You</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Browse our collection below and visit our secure Stripe-powered checkout to complete your purchase.
              </p>
              
              {/* PRIMARY STORE BUTTON - This is the "One Link" for the whole store */}
              <div className="pt-4">
                <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform bg-primary">
                  <a href={GLOBAL_STRIPE_STORE_LINK} target="_blank" rel="noopener noreferrer">
                    Visit the VÉLOURA Stripe Store <ExternalLink className="ml-2 w-6 h-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Store Grid */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-headline mb-4">Featured Products</h2>
                <p className="text-muted-foreground">Detailed view of our current inventory.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {storeItems.map((item) => (
                <Card key={item.id} className="flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary/5 bg-card group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={item.imageHint}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-widest border border-primary/10">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pt-2">
                    <p className="text-2xl font-bold font-headline text-primary">${item.price}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-8 px-6">
                    {/* All buttons now lead to the same global destination */}
                    <Button asChild className="w-full h-12 text-sm font-bold" variant="outline">
                      <a href={GLOBAL_STRIPE_STORE_LINK} target="_blank" rel="noopener noreferrer">
                        Purchase on Stripe <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-12 bg-secondary/20 border-y border-primary/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-primary opacity-60" />
                        <h3 className="font-bold text-sm uppercase tracking-widest">Secure Checkout</h3>
                        <p className="text-xs text-muted-foreground">Payments powered by Stripe.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Zap className="w-8 h-8 text-primary opacity-60" />
                        <h3 className="font-bold text-sm uppercase tracking-widest">Instant Delivery</h3>
                        <p className="text-xs text-muted-foreground">Digital cards sent via email.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Star className="w-8 h-8 text-primary opacity-60" />
                        <h3 className="font-bold text-sm uppercase tracking-widest">Premium Quality</h3>
                        <p className="text-xs text-muted-foreground">Vetted products for elite pros.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Bulk Inquiry */}
        <section className="py-20 bg-background text-center border-t">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-3xl font-bold font-headline mb-4">Questions about an order?</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    If you have questions about your purchase or need help with a bulk order, our support team is available 7 days a week.
                </p>
                <Button asChild variant="ghost" size="lg" className="h-14 px-10 text-lg font-bold border-primary text-primary hover:bg-primary/5">
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
