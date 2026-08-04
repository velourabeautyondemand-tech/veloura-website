'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CITIES, PAGE_COMBINATIONS, SERVICES } from '@/data/locationSeo';
import { 
  MapPin, 
  Search, 
  ChevronRight, 
  Home as HomeIcon, 
  Building2, 
  Hotel,
  Sparkles,
  Smartphone
} from 'lucide-react';

export default function LocationsDirectoryPage() {
  const [search, setSearch] = useState('');

  const stateGroups = useMemo(() => {
    const groups: Record<string, typeof CITIES> = {};
    
    CITIES.forEach(city => {
      const state = city.stateName;
      if (!groups[state]) groups[state] = [];
      groups[state].push(city);
    });

    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, []);

  const filteredStates = useMemo(() => {
    if (!search) return stateGroups;

    return stateGroups.map(([state, cities]) => {
      const filteredCities = cities.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.stateName.toLowerCase().includes(search.toLowerCase())
      );
      return [state, filteredCities] as [string, typeof CITIES];
    }).filter(([_, cities]) => cities.length > 0);
  }, [stateGroups, search]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velourabeautyondemand.com/" },
      { "@type": "ListItem", "position": 2, "name": "Locations" }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2 uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                <span>Marketplace Directory</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
                VÉLOURA <span className="text-primary italic">City Hubs</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                VÉLOURA is a mobile-first beauty platform. Our elite professionals travel directly to your home, hotel suite, or office in the cities listed below.
              </p>
              
              <div className="max-w-md mx-auto relative pt-4">
                <Search className="absolute left-3 top-1/2 translate-y-2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search by city or state..." 
                  className="pl-10 h-14 rounded-full text-lg shadow-xl"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Directory */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-16">
              {filteredStates.map(([state, cities]) => (
                <div key={state} className="space-y-8">
                  <h2 className="text-2xl font-bold font-headline text-primary border-b border-primary/10 pb-2 uppercase tracking-widest">
                    {state}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cities.map(city => {
                      const cityCombos = PAGE_COMBINATIONS.filter(p => p.citySlug === city.slug && p.enabled);
                      return (
                        <Card key={city.slug} className="hover:shadow-xl transition-all border-primary/5 group">
                          <CardHeader className="bg-primary/5 pb-4 transition-colors group-hover:bg-primary/10">
                            <CardTitle className="font-headline text-xl flex items-center justify-between">
                              {city.name}
                              <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-6 space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {cityCombos.map(combo => {
                                const s = SERVICES.find(sv => sv.slug === combo.serviceSlug);
                                return s ? (
                                  <Link 
                                    key={s.slug} 
                                    href={`/locations/${city.slug}/${s.slug}`}
                                    className="text-[10px] font-bold uppercase tracking-tighter bg-secondary text-secondary-foreground px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors"
                                  >
                                    {s.name}
                                  </Link>
                                ) : null;
                              })}
                            </div>
                            <div className="pt-2 border-t border-dashed">
                               <Button asChild variant="link" className="p-0 h-auto text-xs font-bold uppercase tracking-widest text-primary">
                                  <Link href={`/locations/${city.slug}`}>View City Hub Hub</Link>
                               </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filteredStates.length === 0 && (
                <div className="text-center py-24 bg-secondary/10 rounded-3xl border border-dashed border-primary/20">
                  <Search className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">No markets found</h3>
                  <p className="text-muted-foreground mt-2">Try a different city or state.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Venue Trust Bar */}
        <section className="py-20 bg-secondary/20 border-y border-primary/5">
           <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-12 text-primary">Where We Deliver Luxury</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div className="space-y-2">
                    <HomeIcon className="w-6 h-6 mx-auto text-muted-foreground" />
                    <p className="text-xs font-bold uppercase">Homes</p>
                 </div>
                 <div className="space-y-2">
                    <Hotel className="w-6 h-6 mx-auto text-muted-foreground" />
                    <p className="text-xs font-bold uppercase">Hotels</p>
                 </div>
                 <div className="space-y-2">
                    <Building2 className="w-6 h-6 mx-auto text-muted-foreground" />
                    <p className="text-xs font-bold uppercase">Offices</p>
                 </div>
                 <div className="space-y-2">
                    <Sparkles className="w-6 h-6 mx-auto text-muted-foreground" />
                    <p className="text-xs font-bold uppercase">Events</p>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
