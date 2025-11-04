
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createShortLink } from '@/ai/flows/create-short-link';
import { useFirestore, setDocumentNonBlocking } from '@/firebase';
import { doc } from 'firebase/firestore';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link as LinkIcon, Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  url: z.string().url('Please enter a valid URL.'),
});

export default function ShortenUrlPage() {
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>>) {
    if (!firestore) {
      setError('Firestore is not available. Please try again later.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setShortUrl(null);

    try {
      // 1. Call the AI flow to just get the unique ID
      const { shortId } = await createShortLink({ originalUrl: values.url });

      if (!shortId) {
        throw new Error('Could not generate a short ID.');
      }

      // 2. Use the client-side SDK to write to Firestore
      const shortLinkRef = doc(firestore, 'shortlinks', shortId);
      setDocumentNonBlocking(shortLinkRef, {
        originalUrl: values.url,
        createdAt: new Date().toISOString(),
      }, {});

      // 3. Construct the final URL for the user
      const fullShortUrl = `${window.location.origin}/s/${shortId}`;
      setShortUrl(fullShortUrl);

    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      toast({
        title: 'Copied!',
        description: 'The shortened URL has been copied to your clipboard.',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl flex items-center gap-2">
                <LinkIcon className="w-7 h-7 text-primary" />
                URL Shortener
              </CardTitle>
              <CardDescription>
                Create a short link for any URL.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Original URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://example.com/very/long/url/to/shorten"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Shortening...
                      </>
                    ) : (
                      'Create Short Link'
                    )}
                  </Button>
                </form>
              </Form>

              {error && (
                <Alert variant="destructive" className="mt-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {shortUrl && (
                <div className="mt-6 space-y-4">
                  <p className="text-sm text-muted-foreground">Your shortened URL:</p>
                  <div className="flex items-center gap-2 p-3 border rounded-md bg-muted">
                    <a
                      href={shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-primary hover:underline flex-1 truncate"
                    >
                      {shortUrl}
                    </a>
                    <Button variant="ghost" size="icon" onClick={handleCopy}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
