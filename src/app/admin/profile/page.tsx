
'use client';

import Link from 'next/link';
import { useUser, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2, Edit, Mail } from 'lucide-react';

export default function AdminProfilePage() {
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
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }
    
    if (!userProfile) {
        return <p>No profile found.</p>
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle className="font-headline text-2xl">My Profile</CardTitle>
                        <CardDescription>This is your administrator profile.</CardDescription>
                    </div>
                    <Button asChild variant="outline"><Link href="/admin/profile/edit"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Link></Button>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                         <Avatar className="w-32 h-32 border-4 border-primary">
                            <AvatarImage src="https://picsum.photos/seed/admin-profile/400/400" data-ai-hint="person face" alt="Admin" />
                            <AvatarFallback className="text-4xl">A</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 pt-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-muted-foreground" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-muted-foreground">{userProfile.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
