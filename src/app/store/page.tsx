
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Star, ArrowRight, ShieldCheck, Zap, ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Script from 'next/script';

const ETSY_STORE_LINK = 'https://www.etsy.com/shop/iAmDreamMakerGroup?ref=profile_header&section_id=49528058'; 

const storeItems = [
  {
    id: 'eye-mask-bliss',
    name: 'Luxury Steam Eye Mask - Moment of Bliss',
    description: 'Wrap your eyes in a little moment of peace. This self-heating mask is designed for deep relaxation and pure tranquility.',
    price: 2.99,
    category: 'Self-Care',
    image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/il_fullxfull.8372618205_fd1v.jpg?alt=media&token=45607840-ba57-4ffc-ac6f-9006f791e924",
    imageHint: 'relaxation eye mask',
    link: 'https://www.etsy.com/listing/4547869516/wrap-your-eyes-in-a-little-moment-of'
  },
  {
    id: 'eye-mask-glow',
    name: 'Glow starts before the makeup Deep Moisture Eye Mask',
    description: 'The ultimate pre-makeup essential. Deeply hydrates and refreshes the delicate eye area for a radiant, prepared glow.',
    price: 2.99,
    category: 'Self-Care',
    image: "https://images.unsplash.com/photo-1596495944321-4d3f27477611?q=80&w=1080",
    imageHint: 'lavender',
    link: 'https://www.etsy.com/your/shops/me/listing-editor/edit/4547862207'
  },
  {
    id: 'eye-mask-rose',
    name: 'Japanese Steam Eye Mask - Rose Scent',
    description: 'A self-heating steam eye mask that releases warm, rose-scented steam to soothe tired eyes and promote relaxation. Perfect for after a long day or travel.',
    price: 2.99,
    category: 'Self-Care',
    image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/2c23697c-e405-4d34-9d08-2e39b29ca362.png?alt=media&token=a420a44c-3793-4292-a39b-116c040c1405",
    imageHint: 'eye mask',
    link: 'https://www.etsy.com/listing/4547845649/japanese-steam-eye-mask-rose-scent'
  }
];

export default function StorePage() {
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
          "availability": "https://schema.org/InStock",
          "url": item.link
        }
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
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
                Luxury Beauty Gear & Gifts: Self-Care & Eyelashes
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {storeItems.map((item) => (
                <Card key={item.id} className="flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary/5 bg-card group">
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
                    <CardTitle className="font-headline text-xl line-clamp-2">{item.name}</CardTitle>
                    <CardDescription className="text-xs line-clamp-2">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-2xl font-bold text-primary">${item.price}</p>
                  </CardContent>
                  <CardFooter className="pb-8">
                    <Button asChild className="w-full" variant="outline">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">Shop on Etsy</a>
                    </Button>
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
