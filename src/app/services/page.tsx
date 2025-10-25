
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const manicures = services.filter(s => s.category === 'Manicures');
    const addons = services.filter(s => s.category === 'Add Ons');

    const ServiceCard = ({ service }: { service: typeof services[0] }) => {
        const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
        return (
            <Card key={service.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                {serviceImage && (
                    <div className="relative w-full h-48">
                        <Image
                            src={serviceImage.imageUrl}
                            alt={service.name}
                            fill
                            className="object-cover"
                            data-ai-hint={serviceImage.imageHint}
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="font-headline">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                    </div>
                </CardFooter>
            </Card>
        );
    }


    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                            Our Services
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our menu of luxury nail care services, designed to be delivered wherever you are.
                        </p>
                    </div>

                    <section id="manicures" className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 font-headline">Manicures</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                            {manicures.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </section>
                    
                    <section id="addons" className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 font-headline">Add Ons</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                            {addons.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </section>

                     <div className="text-center mt-16">
                        <Button size="lg" variant="accent" asChild>
                            <Link href="/apply">Ready to Book? (Coming Soon)</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
