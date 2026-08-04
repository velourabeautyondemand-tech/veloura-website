
'use client';

import { useState } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, ArrowRight, CheckCircle2, Wand2, AlertTriangle, Smartphone, Users, Menu, MessageSquare, Mail, Instagram, Lightbulb } from 'lucide-react';
import { matchTalent, type MatchTalentOutput } from '@/ai/flows/match-talent-flow';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Script from 'next/script';

export default function MatchPage() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<MatchTalentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conciergeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VÉLOURA AI Concierge",
    "applicationCategory": "LifestyleApplication",
    "description": "AI-powered concierge that recommends the best on-demand beauty services based on your event and location.",
    "provider": {
      "@type": "Organization",
      "name": "VÉLOURA"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="concierge-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conciergeSchema) }}
      />
      <Header />
      <main className="flex-1 bg-secondary/30 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 fill-primary" />
                <span>AI-Powered Concierge</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline">AI Beauty Concierge - Find Makeup, Nails & Hair</h1>
              <p className="text-lg text-muted-foreground">
                Tell us about your event. Our AI concierge will recommend the perfect service for you.
              </p>
            </div>
            {/* Form logic remains the same */}
            <Card className="shadow-2xl border-primary/10">
              <CardHeader>
                <CardTitle className="font-headline">How can we help you look your best?</CardTitle>
                <CardDescription>
                  Provide details about your city and event type.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  placeholder="e.g. I need a luxury makeup artist in NYC for a photo shoot this Friday..."
                  className="min-h-[150px] text-lg p-6 bg-background/50"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Button 
                  className="w-full h-14 text-xl font-bold gap-3" 
                  onClick={() => matchTalent({ description }).then(setResult).catch(e => setError(e.message))}
                  disabled={isLoading || !description.trim()}
                >
                   Find My Match
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
