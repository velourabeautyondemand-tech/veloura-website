
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { services as legacyServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Clock, Phone, FileText, ShieldCheck, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReviewsSection } from '@/components/features/reviews-section';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query } from 'firebase/firestore';

export default function ServicesPage() {
    const firestore = useFirestore();

    const servicesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'services'));
    }, [firestore]);

    const { data: firestoreServices, isLoading } = useCollection(servicesQuery);

    // Merge static and firestore services, prioritizing firestore
    const allServices = firestoreServices?.length ? firestoreServices : legacyServices;

    const categories = [
        'NAILs', 'Pedicures', 'Nail Enhancements', 'Glow & Skin Wellness', 
        'Makeup', 'Hair', 'Photography', 'Event Coordination', 'VIP Packages'
    ];

    const ServiceListItem = ({ service }: { service: any }) => {
        return (
            <div key={service.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-1">
                    <h3 className="text-xl font-bold font-headline">{service.name}</h3>
                    <p className="text-muted-foreground mt-1 max-w-2xl">{service.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8 flex flex-col items-start md:items-end shrink-0">
                    {service.duration && (
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                            Beauty is Essential. <br />
                            <span className="block mt-2">Lifestyle is Power.</span>
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our curated list of beauty, photography, event planning, and more — all delivered to you.
                        </p>
                    </div>

                    {isLoading && (
                        <div className="flex justify-center py-20">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                        </div>
                    )}
                    
                    {!isLoading && (
                        <div className="max-w-5xl mx-auto space-y-16">
                            {categories.map(catTitle => {
                                const filtered = allServices.filter(s => s.category === catTitle);
                                if (filtered.length === 0) return null;
                                return (
                                    <section key={catTitle} id={catTitle.toLowerCase().replace(/ /g, '-')} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-2xl font-bold tracking-tight mb-6 font-headline text-primary border-b border-primary/10 pb-2">{catTitle}</h2>
                                        <div className="space-y-4">
                                            {filtered.map((service) => (
                                                <ServiceListItem key={service.id} service={service} />
                                            ))}
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    )}

                    <div className="mt-24">
                        <ReviewsSection />
                    </div>

                    <div className="max-w-5xl mx-auto mt-20 grid md:grid-cols-2 gap-8">
                        <section className="text-center p-8 bg-card rounded-2xl border shadow-sm">
                            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h2 className="text-2xl font-bold font-headline">Customer Policy</h2>
                            <p className="mt-2 text-muted-foreground text-sm">
                                Review our reliability standards, cancellation policies, and professional conduct requirements.
                            </p>
                             <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/customer-policy">View Policy Page</Link>
                                </Button>
                                <Button asChild variant="secondary" size="sm">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura_Customer_Policy%20(1).pdf?alt=media&token=89f24616-4796-4ba4-9732-dcbf8e014084" target="_blank" rel="noopener noreferrer">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Download PDF
                                    </a>
                                </Button>
                            </div>
                        </section>

                        <section className="text-center p-8 bg-card rounded-2xl border shadow-sm">
                            <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h2 className="text-2xl font-bold font-headline">Custom Requests</h2>
                            <p className="mt-2 text-muted-foreground text-sm">
                                Don't see the service you're looking for? Request a custom service and we'll get back to you.
                            </p>
                             <Button asChild size="sm" variant="accent" className="mt-6">
                                <a href="mailto:support@velourabeautyondemand.com?subject=Urgent%20Service%20Request" target="_blank" rel="noopener noreferrer">
                                    Urgent Request
                                </a>
                            </Button>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
