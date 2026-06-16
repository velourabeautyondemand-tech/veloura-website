
'use client';

import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

export function EarningsCalculator() {
  const [servicesPerDay, setServicesPerDay] = useState([4]);
  const [daysPerWeek, setDaysPerWeek] = useState([5]);
  const [avgPrice, setAvgPrice] = useState([135]);

  // VÉLOURA pros keep 80% of the booking fee
  const weekly = servicesPerDay[0] * daysPerWeek[0] * avgPrice[0] * 0.8;
  const monthly = weekly * 4.33; // Average weeks per month
  const yearly = weekly * 52;

  return (
    <Card className="max-w-2xl mx-auto shadow-xl border-primary/10">
      <CardContent className="pt-10 pb-10 px-8 space-y-10">
        <div className="space-y-8">
          {/* Services Per Day */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-bold text-lg">Services Per Day</label>
              <span className="text-2xl font-bold text-primary">{servicesPerDay[0]}</span>
            </div>
            <Slider 
              value={servicesPerDay} 
              onValueChange={setServicesPerDay} 
              max={10} 
              min={1}
              step={1} 
              className="py-2"
            />
          </div>

          {/* Days Per Week */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-bold text-lg">Days Per Week</label>
              <span className="text-2xl font-bold text-primary">{daysPerWeek[0]}</span>
            </div>
            <Slider 
              value={daysPerWeek} 
              onValueChange={setDaysPerWeek} 
              max={7} 
              min={1}
              step={1} 
              className="py-2"
            />
          </div>

          {/* Average Price */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-bold text-lg">Average Service Price</label>
              <span className="text-2xl font-bold text-primary">${avgPrice[0]}</span>
            </div>
            <Slider 
              value={avgPrice} 
              onValueChange={setAvgPrice} 
              max={500} 
              min={50}
              step={5} 
              className="py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-primary/10">
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-widest">Weekly Estimated</p>
            <p className="text-2xl font-black font-headline text-foreground">${Math.round(weekly).toLocaleString()}</p>
          </div>
          <div className="text-center bg-secondary/50 rounded-2xl p-4 border border-primary/10 shadow-sm scale-110 md:scale-125 z-10">
            <p className="text-[10px] uppercase font-bold text-primary mb-1 tracking-widest">Monthly Take-Home</p>
            <p className="text-3xl font-black font-headline text-primary">${Math.round(monthly).toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-widest">Yearly Potential</p>
            <p className="text-2xl font-black font-headline text-foreground">${Math.round(yearly).toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
            <p className="text-lg font-bold text-foreground">
                VÉLOURA providers earn average <span className="text-primary font-black">${Math.round(monthly).toLocaleString()}</span>/month
            </p>
            <p className="text-[10px] text-muted-foreground mt-2 italic">
                *Estimated payout after VÉLOURA's 20% platform fee. Pros keep 100% of tips.
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
