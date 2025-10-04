"use client";

import Link from 'next/link';
import { technicians, services as allServices } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, MapPin, Edit, Twitter, Instagram, Facebook } from 'lucide-react';

export default function TechnicianProfilePage() {
    // Mocking the logged-in technician
    const technician = technicians[0];
    const techAvatar = PlaceHolderImages.find(p => p.id === technician.avatarId);
    const techServices = technician.services.map(serviceId => allServices.find(s => s.id === serviceId)).filter(Boolean);

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle className="font-headline text-2xl">My Profile</CardTitle>
                        <CardDescription>This is how your profile appears to customers.</CardDescription>
                    </div>
                    <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                         <Avatar className="w-32 h-32 border-4 border-primary">
                            {techAvatar && <AvatarImage src={techAvatar.imageUrl} alt={technician.name} data-ai-hint={techAvatar.imageHint}/>}
                            <AvatarFallback className="text-4xl">{technician.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold font-headline">{technician.name}</h1>
                            <div className="flex items-center gap-4 text-muted-foreground mt-2">
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-semibold">{technician.rating}</span>
                                    <span>({technician.reviewsCount} reviews)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-5 h-5" />
                                    <span>Based in {technician.baseLocation}</span>
                                </div>
                            </div>
                            <p className="mt-4">{technician.bio}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">My Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     {techServices.map(service => service && (
                     <div key={service.id} className="flex justify-between items-center p-3 rounded-lg bg-background hover:bg-muted/50">
                        <div>
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.duration} mins</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg text-primary">${service.price.toFixed(2)}</p>
                        </div>
                     </div>
                  ))}
                </CardContent>
            </Card>
        </div>
    );
}
