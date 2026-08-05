'use client';

import React, { useState, useMemo } from 'react';
import { SEONode } from '@/lib/seo-marketplace/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Scissors, HandHeart, Camera, Hotel, Home, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
  Sparkles,
  Scissors,
  HandHeart,
  Camera,
  Hotel,
  Home,
  Heart
};

const filterOptions = [
  { label: 'All Services', value: 'all' },
  { label: 'Beauty', value: 'beauty' },
  { label: 'Weddings & Events', value: 'wedding-event' },
  { label: 'Creative', value: 'creative' },
  { label: 'At Home & Hotel', value: 'venue' },
  { label: 'Senior Care', value: 'solution' },
];

interface ServicesFilterProps {
  nodes: SEONode[];
}

export function ServicesFilter({ nodes }: ServicesFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredNodes = useMemo(() => {
    return activeFilter === 'all' 
      ? nodes 
      : nodes.filter(n => n.filterCategory === activeFilter);
  }, [nodes, activeFilter]);

  return (
    <div className="space-y-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {filterOptions.map((opt) => (
          <Button
            key={opt.value}
            variant={activeFilter === opt.value ? 'default' : 'outline'}
            onClick={() => setActiveFilter(opt.value)}
            className={cn(
              "rounded-full px-6 transition-all duration-300",
              activeFilter === opt.value ? "shadow-lg scale-105" : "hover:border-primary/40"
            )}
            aria-label={`Filter by ${opt.label}`}
          >
            {opt.label}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNodes.map((node) => {
          const Icon = iconMap[node.iconName || 'Sparkles'] || Sparkles;
          return (
            <Card key={node.id} className="flex flex-col group hover:shadow-2xl transition-all duration-500 border-primary/5 bg-card overflow-hidden">
              <CardHeader className="bg-primary/5 pb-4 group-hover:bg-primary/10 transition-colors">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{node.displayCategory}</div>
                <CardTitle className="font-headline text-2xl">{node.displayName}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {node.shortDescription}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-8 px-6">
                <Button asChild variant="link" className="p-0 h-auto font-bold text-primary group/btn">
                  <Link href={node.cta.href} className="flex items-center gap-2">
                    {node.cta.label} <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {filteredNodes.length === 0 && (
        <div className="text-center py-20 text-muted-foreground italic">
          No services found in this category.
        </div>
      )}
    </div>
  );
}