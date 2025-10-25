
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const serviceCategories = [
        { title: 'Manicures', services: services.filter(s => s.category === 'Manicures') },
        { title: 'Pedicures', services: services.filter(s => s.category === 'Pedicures') },
        { title: 'Nail Enhancements', services: services.filter(s => s.category === 'Nail Enhancements') },
        { title: 'Makeup', services: services.filter(s => s.category === 'Makeup') },
        { title: 'Hair', services: services.filter(s => s.category === 'Hair') },
        { title: 'VIP Packages', services: services.filter(s => s.category === 'VIP Packages') },
        { title: 'Extras', services: services.filter(s => s.category === 'Extras') },
    ];

    const ServiceCard = ({ service }: { service: typeof services[0] }) => {
        return (
            <Card key={service.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                <CardHeader>
                    <CardTitle className="font-headline">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                {(service.duration) && (
                    <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                        </div>
                    </CardFooter>
                )}
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
                            Explore our menu of luxury beauty services, designed to be delivered wherever you are.
                        </p>
                    </div>
                    
                    {serviceCategories.map(category => category.services.length > 0 && (
                         <section key={category.title} id={category.title.toLowerCase().replace(/ /g, '-')} className="mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-center mb-8 font-headline">{category.title}</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                                {category.services.map((service) => (
                                    <ServiceCard key={service.id} service={service} />
                                ))}
                            </div>
                        </section>
                    ))}

                    <section className="text-center mt-16 border-t pt-12">
                        <h2 className="text-2xl font-bold font-headline">Don’t see the service you’re looking for?</h2>
                        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                            Request a custom service by contacting us — we’ll get back to you as soon as possible!
                        </p>
                         <Button asChild size="lg" variant="accent" className="mt-6">
                            <a href="mailto:admin@example.com?subject=Urgent%20Service%20Request">
                                <Phone className="mr-2 h-5 w-5" />
                                Urgent Request
                            </a>
                        </Button>
                    </section>

                     <div className="text-center mt-16">
                        <Button size="lg" variant="default" asChild>
                            <Link href="/apply">Ready to Book? (Coming Soon)</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
