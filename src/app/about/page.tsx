
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
                            <NailIcon className="w-16 h-16 text-primary mx-auto mb-4" />
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                                The Art of Nail Care, Redefined.
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
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-6">Our Story</h2>
                                <p>
                                    Nails On the Go was born from a simple realization: in our fast-paced world, finding time for self-care is a challenge. Our founder, a busy professional with a passion for beautifully crafted nails, often struggled to fit salon appointments into her packed schedule. She dreamt of a service that didn't force a choice between a demanding career and personal pampering.
                                </p>
                                <p>
                                    Why couldn't the luxury and expertise of a high-end nail salon come to you?
                                </p>
                                <p>
                                    This question sparked an idea. What if there was a platform that connected talented, independent nail technicians with clients seeking convenience without sacrificing quality? A service that would empower artists to be their own bosses and allow clients to receive five-star treatment in the comfort of their own space. From this vision, Nails On the Go was created—a seamless, safe, and sophisticated solution for modern nail care.
                                </p>
                            </div>
                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtZWV0aW5nJTIwdGVhbXxlbnwwfHx8fDE3NTk3NTAyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Team planning session"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg w-full"
                                    data-ai-hint="meeting team"
                                />
                            </div>
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
