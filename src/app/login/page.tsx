
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuth, useFirestore, useUser, useDoc, useMemoFirebase } from '@/firebase'; // Using the centralized hook
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { NailIcon } from '@/components/shared/logo';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'admin@example.com',
      password: 'password',
    },
  });

  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: userProfile, isLoading: isProfileLoading } = useDoc(userDocRef);

  // Redirect if user is already logged in
  useEffect(() => {
    if (user && userProfile && !isProfileLoading) {
      if (userProfile.role === 'admin') {
        router.push('/admin');
      } else if (userProfile.role === 'technician') {
        router.push('/technician/dashboard');
      } else {
        router.push('/');
      }
    }
  }, [user, userProfile, isProfileLoading, router]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoggingIn(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      // The useEffect will handle the redirect after user and profile are loaded.
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  }
  
  const isLoading = isUserLoading || isLoggingIn || (user && isProfileLoading);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/30">
      <Card className="mx-auto max-w-sm w-full shadow-2xl">
        <CardHeader className="text-center">
          <Link href="/" className="inline-block mb-4">
            <NailIcon className="h-12 w-12 mx-auto" />
          </Link>
          <CardTitle className="text-2xl font-bold font-headline">Member Login</CardTitle>
          <CardDescription>Enter your credentials to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-baseline">
                        <FormLabel>Password</FormLabel>
                        <Link href="/forgot-password" passHref className="text-sm font-medium text-primary hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Login Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'Sign In'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-center text-sm flex-col space-y-2">
            <p>Don't have an account? <Link href="/signup" className="font-semibold text-primary hover:underline">Sign up</Link></p>
            <p className="text-xs text-muted-foreground">Admin: admin@example.com / password</p>
        </CardFooter>
      </Card>
    </div>
  );
}
