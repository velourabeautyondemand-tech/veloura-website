'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CITIES, SERVICES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { MapPin, Search, ChevronRight, Home, Building2, Hotel } from 'lucide-react';

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
              VÉLOURA City Hubs
            </h1>
            <p className="text-xl text-muted-foreground mt-4 mb-8">
              Explore professional beauty and lifestyle services delivered to your door.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search by city or state..." 
                className="pl-10 h-12 rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

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
                        <Card key={city.slug} className="hover:shadow-xl transition-all group">
                          <CardHeader className="bg-primary/5 pb-4">
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
                                    className="text-[10px] font-bold uppercase bg-secondary px-2 py-1 rounded hover:bg-primary hover:text-white"
                                  >
                                    {s.name}
                                  </Link>
                                ) : null;
                              })}
                            </div>
                            <div className="pt-4 border-t border-dashed flex justify-between items-center">
                               <Link href={`/locations/${city.slug}`} className="text-xs font-bold text-primary hover:underline uppercase">View Hub</Link>
                               <div className="flex gap-2">
                                 <Home className="w-3 h-3 text-muted-foreground" />
                                 <Hotel className="w-3 h-3 text-muted-foreground" />
                                 <Building2 className="w-3 h-3 text-muted-foreground" />
                               </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
