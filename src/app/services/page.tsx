import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Clock, Phone, FileText, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReviewsSection } from '@/components/features/reviews-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services',
  },
};

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

    const ServiceListItem = ({ service }: { service: typeof services[0] }) => {
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
                    
                    <div className="max-w-5xl mx-auto space-y-16">
                        {serviceCategories.map(category => category.services.length > 0 && (
                            <section key={category.title} id={category.title.toLowerCase().replace(/ /g, '-')} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-2xl font-bold tracking-tight mb-6 font-headline text-primary border-b border-primary/10 pb-2">{category.title}</h2>
                                <div className="space-y-4">
                                    {category.services.map((service) => (
                                        <ServiceListItem key={service.id} service={service} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

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
