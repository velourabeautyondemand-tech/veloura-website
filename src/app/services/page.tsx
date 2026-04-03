
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { services } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Phone } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
    const serviceCategories = [
        { title: 'NAILs', services: services.filter(s => s.category === 'NAILs') },
        { title: 'Pedicures', services: services.filter(s => s.category === 'Pedicures') },
        { title: 'Nail Enhancements', services: services.filter(s => s.category === 'Nail Enhancements') },
        { title: 'Glow & Skin Wellness', services: services.filter(s => s.category === 'Glow & Skin Wellness') },
        { title: 'Makeup', services: services.filter(s => s.category === 'Makeup') },
        { title: 'Hair', services: services.filter(s => s.category === 'Hair') },
        { title: 'Photography', services: services.filter(s => s.category === 'Photography') },
        { title: 'Event Coordination', services: services.filter(s => s.category === 'Event Coordination') },
        { title: 'VIP Packages', services: services.filter(s => s.category === 'VIP Packages') },
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
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                            Beauty is Essential. <br />
                            <span className="block mt-2">Lifestyle is Power.</span>
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore our curated list of beauty, photography, event planning, and more — all delivered to you.
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
                        <h2 className="text-2xl font-bold font-headline">Don't see the service you're looking for?</h2>
                        <p className="mt-2 text-muted-foreground max-xl mx-auto">
                            Request a custom service by contacting us - we'll get back to you as soon as possible!
                        </p>
                         <Button asChild size="lg" variant="accent" className="mt-6">
                            <a href="mailto:support@velourabeautyondemand.com?subject=Urgent%20Service%20Request" target="_blank" rel="noopener noreferrer">
                                <Phone className="mr-2 h-5 w-5" />
                                Urgent Request
                            </a>
                        </Button>
                    </section>

                     <section className="text-center mt-24 bg-primary/5 rounded-2xl p-12 max-w-4xl mx-auto border border-primary/10">
                        <h2 className="text-3xl font-bold font-headline mb-4">Download Our App</h2>
                        <p className="text-lg text-muted-foreground mb-8">Ready to book? Download our app to explore more services and schedule your next luxury experience instantly.</p>
                        <div className="flex justify-center items-center gap-6 flex-wrap">
                            <a href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    width={150}
                                    height={50}
                                    className="h-12 w-auto transition-transform hover:scale-105"
                                />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pli=1" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    width={170}
                                    height={50}
                                    className="h-14 w-auto transition-transform hover:scale-105"
                                />
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
