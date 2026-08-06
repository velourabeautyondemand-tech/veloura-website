
'use client';

import React, { useState } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, ExternalLink, AlertCircle, TrendingDown, Bell, Loader2, PartyPopper } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const RestockFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  quantity: z.string().min(1, 'Please specify quantity.'),
  priceWillingness: z.string().min(1, 'Please select a price point.'),
});

const ETSY_STORE_LINK = 'https://www.etsy.com/shop/iAmDreamMakerGroup?ref=profile_header&section_id=49528058'; 

export default function StorePage() {
  const firestore = useFirestore();
  const [activeProduct, setActiveProduct] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof RestockFormSchema>>({
    resolver: zodResolver(RestockFormSchema),
    defaultValues: {
      email: '',
      quantity: '1',
      priceWillingness: '',
    },
  });

  const storeItems = [
    {
      id: 'eye-mask-glow',
      name: 'Glow starts before the makeup Deep Moisture Eye Mask',
      description: 'The ultimate pre-makeup essential. Deeply hydrates and refreshes the delicate eye area for a radiant, prepared glow.',
      price: 2.99,
      category: 'Self-Care',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/ChatGPT%20Image%20Aug%201%2C%202026%2C%2002_50_29%20PM.png?alt=media&token=9dabb713-2691-4d4b-b4d9-1962339a8980",
      imageHint: 'eye mask',
      link: 'https://www.etsy.com/listing/4547862207/glow-starts-before-the-makeup-deep'
    },
    {
      id: 'eye-mask-bliss',
      name: 'Luxury Steam Eye Mask - Moment of Bliss',
      description: 'Wrap your eyes in a little moment of peace. This self-heating mask is designed for deep relaxation and pure tranquility.',
      price: 2.99,
      category: 'Self-Care',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/il_fullxfull.8372618205_fd1v.jpg?alt=media&token=45607840-ba57-4ffc-ac6f-9006f791e924",
      imageHint: 'relaxation mask',
      link: 'https://www.etsy.com/listing/4547869516/wrap-your-eyes-in-a-little-moment-of'
    },
    {
      id: 'eye-mask-rose',
      name: 'Japanese Steam Eye Mask - Rose Scent',
      description: 'A self-heating steam eye mask that releases warm, rose-scented steam to soothe tired eyes. Perfect for travel.',
      price: 2.99,
      category: 'Self-Care',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/2c23697c-e405-4d34-9d08-2e39b29ca362.png?alt=media&token=a420a44c-3793-4292-a39b-116c040c1405",
      imageHint: 'rose mask',
      link: 'https://www.etsy.com/listing/4547845649/japanese-steam-eye-mask-rose-scent'
    },
    {
      id: 'lashes-cross-4',
      name: 'Wispy False Eyelashes Cross Pattern 4',
      description: 'Handcrafted cross-pattern wispy lashes designed for a sophisticated, textured look. Lightweight and perfect for adding elegant volume.',
      price: 19.99,
      category: 'Beauty',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/cross%204.png?alt=media&token=f7fd8f90-2d4c-471a-b14d-952288e198ad",
      imageHint: 'wispy lashes',
      link: 'https://www.etsy.com/listing/4550762046/wispy-false-eyelashes-cross-pattern-4',
      stockStatus: 'ONLY 3 LEFT'
    },
    {
      id: 'lashes-natural-10pairs',
      name: 'Natural fake Eyelashes: Everyday Wear, Bridal Glamour - 10 Pairs',
      description: 'Handmade, high-quality natural lashes perfect for everyday wear or bridal elegance. This value pack includes 10 pairs of soft, wispy extensions.',
      price: 19.99,
      category: 'Beauty',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/il_fullxfull.7211702176_lpdj.webp?alt=media&token=36cb11a7-d5b8-46ff-8260-b91c44f511d3",
      imageHint: 'natural lashes',
      link: 'https://www.etsy.com/listing/1743477091/handmade-natural-false-eyelashes'
    },
    {
      id: 'lashes-715',
      name: '715 Airy Wispy Feather Handmade Eyelash',
      description: 'Premium feathered volume lashes for a dramatic doll-eye effect. Lightweight, airy, and handcrafted for superior quality.',
      price: 19.99,
      category: 'Beauty',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/ChatGPT%20Image%20Jul%2031%2C%202026%2C%2003_59_47%20PM.png?alt=media&token=1d202628-b3fc-4350-aa3d-e24c61b97f7c",
      imageHint: 'feathered lashes',
      link: 'https://www.etsy.com/listing/4547739706/715-airy-wispy-feather-handmade-eyelash'
    },
    {
      id: 'lashes-black-red',
      name: 'Black Red Accent Wispy False Eyelashes',
      description: 'Bold black wispy lashes featuring striking red accents. Handcrafted for a dramatic, high-fashion statement that stands out.',
      price: 19.99,
      category: 'Beauty',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/a3636fc6-c875-4c8d-85e4-314c523aef8a.png?alt=media&token=567f469f-3223-4585-b4d0-436a16cbb650",
      imageHint: 'red accent lashes',
      link: 'https://www.etsy.com/listing/4550044956/black-red-accent-wispy-false-eyelashes'
    },
    {
      id: 'lashes-forest-green',
      name: 'Forest Green Fake Eyelashes - Wispy',
      description: 'Bespoke, handcrafted wispy eyelashes in a deep forest green. Perfect for adding a unique, high-fashion touch.',
      price: 6.99,
      category: 'Beauty',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/b29f13e6-3b18-451e-acc3-820dfebcdfe8.png?alt=media&token=e9f79bb1-140d-48d3-9ef2-fab162fdbc41",
      imageHint: 'green eyelashes',
      link: 'https://www.etsy.com/listing/4550694042/forest-green-fake-eyelashes-wispy',
      stockStatus: 'LAST ONE'
    },
    {
      id: 'lashes-a13',
      name: 'A13 Wispy Cat Eye Fake Eyelashes',
      description: 'Soft, wispy cat eye fake eyelashes for a natural yet dramatic look. High-quality synthetic fibers.',
      price: 19.99,
      category: 'Beauty',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/7d693407-9ff8-475d-9793-3a787d390aa7.png?alt=media&token=00c2722e-ceb4-4a3c-aff5-7e85a6d52c99",
      imageHint: 'a13 lashes',
      link: 'https://www.etsy.com/listing/4547699063/a13-wispy-cat-eye-fake-eyelashes-soft'
    },
    {
      id: 'lashes-a03',
      name: 'A03 Soft Band Cat Eye False Lashes',
      description: 'Ultra-soft band lashes with a sophisticated cat eye sweep. Perfect for a seamless, comfortable all-day wear.',
      price: 19.99,
      category: 'Beauty',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/a96af003-bd2c-4211-a443-7f7580ec25b7.png?alt=media&token=205749b0-61d4-4816-997b-02c56586d6f5",
      imageHint: 'soft lashes',
      link: 'https://www.etsy.com/listing/4547689859/a03-soft-band-cat-eye-false-lashes'
    },
    {
      id: 'wax-heater',
      name: 'Mini Pink Professional Wax Heater',
      description: 'The ultimate travel companion for beauty professionals. Precise temperature control in a stylish pink finish.',
      price: 39.99,
      category: 'Equipment',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/AI%20image%20ad%20for%20Mini-Travel%20Wax%20Heater%20(1).png?alt=media&token=e7237c20-2630-4e54-96f9-badedf6ba93c",
      imageHint: 'pink wax heater',
      link: 'https://www.etsy.com/listing/4547862207',
      outOfStock: true,
      priceSuggestions: ['$29.99', '$39.99', '$49.99']
    },
    {
      id: 'wax-bar',
      name: 'Popsicle Hard Wax Bar (100g)',
      description: 'High-quality popsicle hard wax bar for precise and comfortable hair removal. Perfect for on-the-go appointments.',
      price: 19.99,
      category: 'Supplies',
      image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/AI%20image%20ad%20for%20PRE-ORDER%20_%20Ice%20Cream%20Hard%20Wax%20Bar%20(100g).png?alt=media&token=dc84810b-5833-45e4-99df-673003279f01",
      imageHint: 'hard wax',
      link: 'https://www.etsy.com/listing/4547862207',
      outOfStock: true,
      priceSuggestions: ['$14.99', '$19.99', '$24.99']
    }
  ];

  async function onInquirySubmit(values: z.infer<typeof RestockFormSchema>) {
    if (!firestore || !activeProduct) return;

    try {
      await addDocumentNonBlocking(collection(firestore, 'product_inquiries'), {
        productId: activeProduct.id,
        productName: activeProduct.name,
        email: values.email,
        quantity: values.quantity,
        priceWillingness: values.priceWillingness,
        submittedAt: new Date().toISOString(),
      });
      setIsSubmitted(true);
    } catch (e) {
      console.error("Restock inquiry failed:", e);
    }
  }

  const handleOpenDialog = (product: any) => {
    setActiveProduct(product);
    setIsSubmitted(false);
    form.reset();
  };

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "VÉLOURA Luxury Essentials Boutique",
    "description": "Handpicked beauty gear and self-care essentials for professionals and clients.",
    "itemListElement": storeItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": item.name,
        "description": item.description,
        "image": item.image,
        "brand": { "@type": "Brand", "name": "VÉLOURA" },
        "offers": {
          "@type": "Offer",
          "price": item.price,
          "priceCurrency": "USD",
          "availability": item.outOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
          "url": item.link
        }
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>Luxury Beauty Gear & Gifts: Self-Care & Eyelashes</title>
      <meta name="description" content="Shop VÉLOURA’s Etsy boutique for curated beauty gear, lashes, and self-care essentials. Secure checkout, fast shipping—browse the collection now." />
      <link rel="canonical" href="https://velourabeautyondemand.com/store" />
      <Script
        id="store-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2 uppercase tracking-widest">
                <ShoppingBag className="w-4 h-4" />
                <span>Official Etsy Boutique</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
                Luxury Beauty Gear & Gifts
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Browse our collection of curated beauty gear and gifts. All transactions are handled securely through our Etsy shop.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform bg-primary">
                  <a href={ETSY_STORE_LINK} target="_blank" rel="noopener noreferrer">
                    Visit Our Etsy Shop <ExternalLink className="ml-2 w-6 h-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {storeItems.map((item) => (
                <Card key={item.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/5 bg-card group relative">
                  {item.stockStatus && (
                    <Badge variant="destructive" className="absolute top-4 right-4 z-10 px-4 py-1 font-bold animate-pulse">
                      <AlertCircle className="w-3 h-3 mr-1" /> {item.stockStatus}
                    </Badge>
                  )}
                  {item.outOfStock && (
                    <Badge variant="secondary" className="absolute top-4 right-4 z-10 px-4 py-1 font-bold bg-background/90 text-foreground">
                      <Clock className="w-3 h-3 mr-1" /> OUT OF STOCK
                    </Badge>
                  )}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={item.imageHint}
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{item.category}</div>
                    <CardTitle className="font-headline text-xl line-clamp-2">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-xs line-clamp-2 mb-4">{item.description}</CardDescription>
                    <p className="text-2xl font-bold text-primary">${item.price}</p>
                  </CardContent>
                  <CardFooter className="pb-8">
                    {item.outOfStock ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full font-bold" 
                            variant="secondary"
                            onClick={() => handleOpenDialog(item)}
                          >
                            <Bell className="mr-2 h-4 w-4" /> Notify Me
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] rounded-3xl">
                          <DialogHeader className="text-center">
                            <DialogTitle className="font-headline text-2xl">Restock Alert</DialogTitle>
                            <DialogDescription>
                              Get notified the moment {item.name} is back in stock.
                            </DialogDescription>
                          </DialogHeader>
                          
                          {isSubmitted ? (
                            <div className="py-12 text-center space-y-4">
                              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                <PartyPopper className="h-8 w-8 text-primary" />
                              </div>
                              <h3 className="font-bold text-xl">We'll let you know!</h3>
                              <p className="text-muted-foreground">Thank you for your feedback. We've saved your restock request.</p>
                            </div>
                          ) : (
                            <Form {...form}>
                              <form onSubmit={form.handleSubmit(onInquirySubmit)} className="space-y-6 pt-4">
                                <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Email Address</FormLabel>
                                      <FormControl>
                                        <Input placeholder="you@example.com" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                  <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Desired Quantity</FormLabel>
                                        <FormControl>
                                          <Input type="number" min="1" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>

                                <FormField
                                  control={form.control}
                                  name="priceWillingness"
                                  render={({ field }) => (
                                    <FormItem className="space-y-3">
                                      <FormLabel>What price feels fair for this item?</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          onValueChange={field.onChange}
                                          defaultValue={field.value}
                                          className="flex flex-wrap gap-4"
                                        >
                                          {item.priceSuggestions?.map((p: string) => (
                                            <FormItem key={p} className="flex items-center space-x-3 space-y-0">
                                              <FormControl>
                                                <RadioGroupItem value={p} />
                                              </FormControl>
                                              <FormLabel className="font-bold cursor-pointer">
                                                {p}
                                              </FormLabel>
                                            </FormItem>
                                          ))}
                                        </RadioGroup>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={form.formState.isSubmitting}>
                                  {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : "Save My Restock Request"}
                                </Button>
                              </form>
                            </Form>
                          )}
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button asChild className="w-full" variant="outline">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">Shop on Etsy</a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
