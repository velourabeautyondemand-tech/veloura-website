
'use client';

import { useUser, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CustomerDashboardPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();

    const userDocRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userProfile, isLoading: isProfileLoading } = useDoc(userDocRef);

    const isLoading = isUserLoading || isProfileLoading;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }
    
    if (!userProfile) {
        return <p>No profile found.</p>
    }

    const displayName = userProfile.firstName || userProfile.email;

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Welcome, {displayName}!</CardTitle>
                    <CardDescription>This is your personal dashboard.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                         <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-muted-foreground">{userProfile.email}</p>
                            </div>
                        </div>
                         {(userProfile.firstName || userProfile.lastName) && (
                            <div className="flex items-center gap-3">
                                <User className="w-5 h-5 text-muted-foreground" />
                                <div>
                                    <h3 className="font-semibold">Name</h3>
                                    <p className="text-muted-foreground">{userProfile.firstName} {userProfile.lastName}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>My Bookings</CardTitle>
                    <CardDescription>View your upcoming and past appointments.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Booking history will be shown here.</p>
                    <Button asChild className="mt-4" variant="accent">
                        <Link href="/bookings">View Bookings</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
