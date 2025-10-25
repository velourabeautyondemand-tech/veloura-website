
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, KeyRound } from 'lucide-react';

const formSchema = z.object({
  pin: z.string().min(1, 'PIN is required.'),
});

export default function PolicyLoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.pin === '1439') {
      setError(null);
      router.push(`/technician/handbook?pin=${values.pin}`);
    } else {
      setError('Invalid PIN. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md">
        <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
            <KeyRound className="w-6 h-6 text-primary" />
            Policy Access
            </CardTitle>
            <CardDescription>
            Please enter the PIN to view the policy agreement.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>PIN Code</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="****" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                {error && (
                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Access Denied</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
                )}
                <Button type="submit" className="w-full">
                View Policy
                </Button>
            </form>
            </Form>
        </CardContent>
        </Card>
    </div>
  );
}

