
'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { VÉLOURA_PROFESSIONALS, type PublicProfessional } from '@/lib/talent-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Award, Camera, Sparkles, ChevronRight, Smartphone, Filter, Loader2 } from 'lucide-react';
import Link from 'next/link';

const ITEMS_PER_PAGE = 12;

function DirectoryContent() {
  const searchParams = useSearchParams();
  const initialSpecialty = searchParams.get('specialty') || 'All Specialties';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [currentPage, setCurrentPage] = useState(1);

  // Sync state if URL changes
  useEffect(() => {
    const spec = searchParams.get('specialty');
    if (spec) setSelectedSpecialty(spec);
  }, [searchParams]);

  const states = useMemo(() => {
    const s = new Set(VÉLOURA_PROFESSIONALS.map(p => p.state));
    return ['All States', ...Array.from(s).sort()];
  }, []);

  const specialties = ['All Specialties', 'Beauty', 'Photography'];

  const filteredProfessionals = useMemo(() => {
    return VÉLOURA_PROFESSIONALS.filter(p => {
      const matchesSearch = `${p.firstName} ${p.lastInitial}`.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesState = selectedState === 'All States' || p.state === selectedState;
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || p.specialty === selectedSpecialty;
      return matchesSearch && matchesState && matchesSpecialty;
    });
  }, [searchQuery, selectedState, selectedSpecialty]);

  const totalPages = Math.ceil(filteredProfessionals.length / ITEMS_PER_PAGE);
  const paginatedProfessionals = filteredProfessionals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Explore VÉLOURA Professionals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find elite, vetted talent in your city. Browse portfolios and book directly through the VÉLOURA app.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-2xl border border-primary/10 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by name or city..." 
                className="pl-10 h-11"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <select 
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setCurrentPage(1);
              }}
            >
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select 
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={selectedSpecialty}
              onChange={(e) => {
                setSelectedSpecialty(e.target.value);
                setCurrentPage(1);
              }}
            >
              {specialties.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProfessionals.map((pro) => (
            <Card key={pro.id} className="group overflow-hidden border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl bg-card">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20 border-2 border-primary/20 bg-secondary/30">
                    <AvatarFallback className="text-2xl font-bold font-headline text-primary">
                      {pro.firstName[0]}{pro.lastInitial[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="font-headline text-xl">{pro.firstName} {pro.lastInitial}</CardTitle>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">{pro.title}</p>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{pro.city}, {pro.state}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-sm font-medium">
                  {pro.specialty === 'Photography' ? <Camera className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                  <span>Specialty: {pro.specialty}</span>
                </div>
                <div className="flex flex-col items-center gap-2 pt-2">
                   <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 py-1">
                      <Award className="h-3 w-3 mr-1" />
                      VÉLOURA Approved
                   </Badge>
                   <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                      Credential on file: {pro.maskedCredential}
                   </p>
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-1 gap-2 p-6 pt-0">
                <Button asChild variant="outline" className="w-full group-hover:border-primary/40 group-hover:text-primary">
                   <Link href={`/talent-agency/professionals/${pro.slug}`}>View Profile</Link>
                </Button>
                <Button asChild className="w-full">
                   <Link href="/book" className="flex items-center gap-2">
                      <Smartphone className="h-3.5 w-3.5" />
                      Book on VÉLOURA
                   </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProfessionals.length === 0 && (
          <div className="text-center py-24 bg-secondary/10 rounded-3xl border border-dashed border-primary/20">
            <Filter className="h-12 w-12 text-primary/40 mx-auto mb-4" />
            <h3 className="text-xl font-bold">No professionals found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search query.</p>
            <Button 
              variant="link" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedState('All States');
                setSelectedSpecialty('All Specialties');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <Button 
              variant="outline" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Previous
            </Button>
            <span className="text-sm font-medium">Page {currentPage} of {totalPages}</span>
            <Button 
              variant="outline" 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        )}
    </div>
  );
}

export function ProfessionalDirectory() {
  return (
    <section id="directory" className="py-24 bg-background">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading Professionals...</p>
        </div>
      }>
        <DirectoryContent />
      </Suspense>
    </section>
  );
}
