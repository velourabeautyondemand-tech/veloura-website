
'use client';

import Link from 'next/link';
import { useUser, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2, Edit, Mail, User as UserIcon } from 'lucide-react';

export default function CustomerProfilePage() {
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

    const fallbackInitial = userProfile.firstName ? userProfile.firstName.charAt(0) : userProfile.email.charAt(0);

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle className="font-headline text-2xl">My Profile</CardTitle>
                        <CardDescription>Your personal information.</CardDescription>
                    </div>
                    {/* <Button asChild variant="outline"><Link href="/customer/profile/edit"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Link></Button> */}
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                         <Avatar className="w-32 h-32 border-4 border-primary">
                            <AvatarImage src={userProfile.profileImageUrl || `https://picsum.photos/seed/${user?.uid}/400/400`} data-ai-hint="person face" alt="Customer" />
                            <AvatarFallback className="text-4xl">{fallbackInitial}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 pt-4 space-y-4">
                            {(userProfile.firstName || userProfile.lastName) && (
                                <div className="flex items-center gap-3">
                                    <UserIcon className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <h3 className="font-semibold">Name</h3>
                                        <p className="text-muted-foreground">{userProfile.firstName} {userProfile.lastName}</p>
                                    </div>
                                </div>
                            )}
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
