'use client';

import { useState } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, ArrowRight, CheckCircle2, Wand2 } from 'lucide-react';
import { matchTalent, type MatchTalentOutput } from '@/ai/flows/match-talent-flow';
import Link from 'next/link';

export default function MatchPage() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<MatchTalentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleMatch() {
    if (!description.trim()) return;
    setIsLoading(true);
    try {
      const data = await matchTalent({ description });
      setResult(data);
    } catch (error) {
      console.error('AI Matching Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 fill-primary" />
                <span>AI-Powered Concierge</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Find Your VÉLOURA Match</h1>
              <p className="text-lg text-muted-foreground">
                Tell us about your event, your style, or your vibe. Our AI concierge will recommend the perfect service and professional for you.
              </p>
            </div>

            {!result ? (
              <Card className="shadow-2xl border-primary/10">
                <CardHeader>
                  <CardTitle className="font-headline">What are you looking for?</CardTitle>
                  <CardDescription>
                    e.g., "I'm a bridesmaid for a beach wedding in Miami next week. I need makeup that won't melt and nails that look elegant but natural."
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Textarea
                    placeholder="Describe your needs here..."
                    className="min-h-[150px] text-lg p-6 bg-background/50 focus:bg-background transition-all"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Button 
                    className="w-full h-14 text-xl font-bold gap-3" 
                    onClick={handleMatch}
                    disabled={isLoading || !description.trim()}
                  >
                    {isLoading ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <Wand2 className="w-6 h-6" />
                    )}
                    {isLoading ? 'Analyzing Your Vibe...' : 'Find My Match'}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Card className="shadow-2xl border-2 border-primary/20 overflow-hidden">
                  <div className="bg-primary p-8 text-primary-foreground text-center">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-2 opacity-80">Our Recommendation</h2>
                    <h3 className="text-3xl md:text-4xl font-headline font-bold">{result.suggestedService}</h3>
                  </div>
                  <CardContent className="p-8 space-y-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl flex items-center gap-2">
                        <CheckCircle2 className="text-primary w-6 h-6" />
                        Why it's perfect for you
                      </h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {result.reasoning}
                      </p>
                    </div>

                    <div className="bg-secondary/50 p-6 rounded-2xl border border-primary/10">
                      <h4 className="font-bold text-primary mb-3 uppercase text-sm tracking-widest">Pro Tips</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        {result.proTips}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button asChild size="lg" className="flex-1 h-14 text-lg font-bold shadow-lg">
                        <Link href="/book">
                          Book This Service <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1 h-14 text-lg font-bold"
                        onClick={() => {
                          setResult(null);
                          setDescription('');
                        }}
                      >
                        Try Another Match
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
