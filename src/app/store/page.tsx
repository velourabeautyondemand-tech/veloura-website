
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, ExternalLink, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';

const ETSY_STORE_LINK = 'https://www.etsy.com/shop/iAmDreamMakerGroup?ref=profile_header&section_id=49528058'; 

const storeItems = [
  {
    id: 'eye-mask-glow',
    name: 'Glow starts before the makeup Deep Moisture Eye Mask',
    description: 'The ultimate pre-makeup essential. Deeply hydrates and refreshes the delicate eye area for a radiant, prepared glow.',
    price: 2.99,
    category: 'Self-Care',
    image: "https://images.unsplash.com/photo-1596496057842-5363e75f5b59?q=80&w=1080",
    imageHint: 'lavender mask',
    link: 'https://www.etsy.com/your/shops/me/listing-editor/edit/4547862207'
  },
  {
    id: 'eye-mask-bliss',
    name: 'Luxury Steam Eye Mask - Moment of Bliss',
    description: 'Wrap your eyes in a little moment of peace. This self-heating mask is designed for deep relaxation and pure tranquility.',
    price: 2.99,
    category: 'Self-Care',
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1080",
    imageHint: 'relaxation mask',
    link: 'https://www.etsy.com/listing/4547869516/wrap-your-eyes-in-a-little-moment-of'
  },
  {
    id: 'eye-mask-rose',
    name: 'Japanese Steam Eye Mask - Rose Scent',
    description: 'A self-heating steam eye mask that releases warm, rose-scented steam to soothe tired eyes. Perfect for travel.',
    price: 2.99,
    category: 'Self-Care',
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1080",
    imageHint: 'rose skincare',
    link: 'https://www.etsy.com/listing/4547845649/japanese-steam-eye-mask-rose-scent'
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
    isLastOne: true
  },
  {
    id: 'lashes-a13',
    name: 'A13 Wispy Cat Eye Fake Eyelashes',
    description: 'Soft, wispy cat eye fake eyelashes for a natural yet dramatic look. High-quality synthetic fibers.',
    price: 19.99,
    category: 'Beauty',
    image: "https://images.unsplash.com/photo-1583006290544-824f6068a44b?q=80&w=1080",
    imageHint: 'cat eye lashes',
    link: 'https://www.etsy.com/listing/4547862207'
  },
  {
    id: 'lashes-a03',
    name: 'A03 Soft Band Cat Eye False Lashes',
    description: 'Ultra-soft band lashes with a sophisticated cat eye sweep. Perfect for a seamless, comfortable all-day wear.',
    price: 19.99,
    category: 'Beauty',
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1080",
    imageHint: 'soft lashes',
    link: 'https://www.etsy.com/listing/4547862207'
  },
  {
    id: 'wax-heater',
    name: 'Mini Pink Professional Wax Heater',
    description: 'The ultimate travel companion for beauty professionals. Precise temperature control in a stylish pink finish.',
    price: 39.99,
    category: 'Equipment',
    image: "https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/AI%20image%20ad%20for%20Mini-Travel%20Wax%20Heater%20(1).png?alt=media&token=e7237c20-2630-4e54-96f9-badedf6ba93c",
    imageHint: 'pink wax heater',
    link: 'https://www.etsy.com/listing/4547862207'
  },
  {
    id: 'wax-bar',
    name: 'Popsicle Hard Wax Bar (100g)',
    description: 'High-quality popsicle hard wax bar for precise and comfortable hair removal. Perfect for on-the-go appointments.',
    price: 19.99,
    category: 'Supplies',
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1080",
    imageHint: 'beauty wax',
    link: 'https://www.etsy.com/listing/4547862207'
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
                <Card key={item.id} className="flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary/5 bg-card group relative">
                  {item.isLastOne && (
                    <Badge variant="destructive" className="absolute top-4 right-4 z-10 px-4 py-1 font-bold animate-pulse">
                      <AlertCircle className="w-3 h-3 mr-1" /> LAST ONE
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
