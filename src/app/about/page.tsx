
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, HandHeart, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import { NailIcon } from '@/components/shared/logo';

const values = [
    {
        icon: Award,
        title: "Uncompromising Quality",
        description: "We partner with only the most talented and licensed nail artists who use premium products to ensure a flawless, long-lasting finish every time."
    },
    {
        icon: HandHeart,
        title: "Convenience & Comfort",
        description: "Your time is precious. We bring the complete salon experience to your home, office, or hotel, on your schedule."
    },
    {
        icon: Users,
        title: "Empowering Professionals",
        description: "We're committed to creating a supportive platform for nail technicians to build their own businesses, control their schedules, and maximize their earnings."
    },
    {
        icon: Sparkles,
        title: "Safety & Trust",
        description: "Your safety is our top priority. We vet all technicians and run background checks for house calls to ensure a secure and comfortable experience for everyone."
    },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50 text-center">
                     <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                                The Art of Beauty, Redefined.
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                We're bringing luxury, convenience, and empowerment to the forefront of the beauty industry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section id="story" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="prose lg:prose-lg max-w-2xl mx-auto text-muted-foreground">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-6 text-center">Our Story</h2>
                            <p>
                                Beauty on the Go was born from a simple realization: in our fast-paced world, finding time for self-care is a challenge. Our founder, a busy professional with a passion for staying fashionable and feeling her best, often struggled to fit beauty appointments into her packed schedule. She dreamt of a service that didn't force a choice between a demanding career and personal pampering.
                            </p>
                            <p>
                                It all started with a simple question: "Why couldn't the luxury and expertise of a high-end salon come to you?" This spark grew into a vision for a comprehensive beauty platform.
                            </p>
                            <p>
                                We're launching with our first love—exquisite nail care—and will soon expand to include talented makeup and hair artists. From this vision, Beauty on the Go was created: a seamless, safe, and sophisticated solution for modern beauty, empowering artists and delivering five-star treatment to your door.
                            </p>
                        </div>
                    </div>
                </section>

                 {/* Our Values Section */}
                <section id="values" className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Core Values</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">These principles guide everything we do, from the technicians we partner with to the experience we provide.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {values.map((value, index) => (
                                <div key={index} className="bg-card p-8 rounded-xl shadow-md flex flex-col">
                                    <div className="mb-4">
                                        <value.icon className="h-12 w-12 text-primary mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground flex-grow">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-primary/10 rounded-xl p-12 text-center">
                             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary-foreground">Ready to Experience the Difference?</h2>
                             <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Whether you're looking for the perfect manicure or the perfect career, your journey starts here.</p>
                             <div className="mt-8 flex justify-center gap-4">
                                 <Button asChild size="lg" variant="accent">
                                     <Link href="/apply">Join Our Team</Link>
                                 </Button>
                             </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
