'use client';

import { useState } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, ArrowRight, CheckCircle2, Wand2, AlertTriangle, Smartphone, Users, Menu, MessageSquare, Mail, Instagram } from 'lucide-react';
import { matchTalent, type MatchTalentOutput } from '@/ai/flows/match-talent-flow';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function MatchPage() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<MatchTalentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleMatch() {
    if (!description.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await matchTalent({ description });
      setResult(data);
    } catch (err: any) {
      console.error('AI Matching Error:', err);
      setError(err.message || 'The AI Concierge is currently unavailable. Please browse our services manually or contact our support team.');
    } finally {
      setIsLoading(false);
    }
  }

  // Determine specialty based on suggestion for pre-filtering talent agency
  const suggestedSpecialty = result?.suggestedService?.toLowerCase().includes('photograph') ? 'Photography' : 'Beauty';

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
                Tell us about your event, your style, or your vibe. Our AI concierge will recommend the perfect service for you.
              </p>
            </div>

            {error && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                <Alert variant="destructive" className="shadow-lg border-2">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle className="font-bold">Concierge Support Required</AlertTitle>
                  <AlertDescription>
                    {error}
                  </AlertDescription>
                </Alert>
                
                <Card className="border-primary/20 bg-background shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">Speak with a Human Expert</CardTitle>
                    <CardDescription>Our concierge team is standing by to help you find the perfect pro and location.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4">
                    <Button asChild variant="outline" className="h-14 justify-start px-6 gap-4 border-primary/20 hover:bg-primary/5">
                      <a href="sms:+13053172759">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <div className="text-left">
                          <p className="text-xs font-bold uppercase opacity-60">Text Us</p>
                          <p className="font-semibold">(305) 317-2759</p>
                        </div>
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-14 justify-start px-6 gap-4 border-primary/20 hover:bg-primary/5">
                      <a href="mailto:support@velourabeautyondemand.com">
                        <Mail className="w-5 h-5 text-primary" />
                        <div className="text-left">
                          <p className="text-xs font-bold uppercase opacity-60">Email Us</p>
                          <p className="font-semibold">Support Team</p>
                        </div>
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-14 justify-start px-6 gap-4 border-primary/20 hover:bg-primary/5">
                      <a href="https://www.instagram.com/veloura_beauty_x/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-5 h-5 text-primary" />
                        <div className="text-left">
                          <p className="text-xs font-bold uppercase opacity-60">Instagram</p>
                          <p className="font-semibold">DM @veloura_beauty_x</p>
                        </div>
                      </a>
                    </Button>
                    <Button asChild variant="default" className="h-14 justify-start px-6 gap-4">
                      <Link href="/services">
                        <Menu className="w-5 h-5" />
                        <div className="text-left">
                          <p className="text-xs font-bold uppercase opacity-80">Manual Search</p>
                          <p className="font-semibold">Browse All Services</p>
                        </div>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {!result && !error ? (
              <Card className="shadow-2xl border-primary/10">
                <CardHeader>
                  <CardTitle className="font-headline">What are you looking for?</CardTitle>
                  <CardDescription>
                    e.g., "I'm looking for a nail tech in Miami who does luxury nail art," or "I need a photographer for a red carpet event in NYC."
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Textarea
                    placeholder="Describe your needs, city, or style here..."
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
                    {isLoading ? 'Searching Our Network...' : 'Find My Match'}
                  </Button>
                  
                  <div className="pt-4 text-center">
                    <Link href="/talent-agency" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline group">
                      <Users className="w-4 h-4" />
                      Browse our professional directory manually <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : result && (
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

                    <div className="grid grid-cols-1 gap-4">
                      <Button asChild size="lg" className="h-14 text-lg font-bold shadow-lg">
                        <Link href="/book" className="flex items-center gap-2">
                           <Smartphone className="w-5 h-5" />
                           Download the App to Book
                        </Link>
                      </Button>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Button asChild variant="outline" size="lg" className="h-14 text-lg font-bold">
                           <Link href={`/talent-agency?specialty=${suggestedSpecialty}#directory`} className="flex items-center gap-2">
                              <Users className="w-5 h-5" />
                              Meet Our {suggestedSpecialty} Pros
                           </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="lg" 
                          className="h-14 text-lg font-bold hover:bg-primary/5"
                          onClick={() => {
                            setResult(null);
                            setDescription('');
                          }}
                        >
                          Try Another Match
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12 text-center p-8 bg-background rounded-3xl border border-dashed border-primary/20">
                   <h4 className="font-bold text-xl mb-4">Can't find a pro in your area?</h4>
                   <p className="text-muted-foreground mb-6">Our human concierge team can source elite talent specifically for your location.</p>
                   <div className="flex flex-wrap justify-center gap-4">
                      <Button asChild variant="secondary" className="gap-2">
                        <a href="sms:+13053172759">
                          <MessageSquare className="w-4 h-4" /> Text Concierge
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <a href="mailto:support@velourabeautyondemand.com">
                          <Mail className="w-4 h-4" /> Email Support
                        </a>
                      </Button>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
