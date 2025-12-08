
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, HandHeart, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import { NailIcon } from '@/components/shared/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
        description: "We're committed to creating a supportive platform for beauty professionals to build their own businesses, control their schedules, and maximize their earnings."
    },
    {
        icon: Sparkles,
        title: "Safety & Trust",
        description: "Your safety is our top priority. We vet all technicians and equip them with emergency panic buttons for every job. We also offer background checks to customers for a small fee to ensure a secure and comfortable experience for everyone."
    },
]

export default function AboutPage() {
    const founderImage = PlaceHolderImages.find(p => p.id === 'founder_photo');
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50 text-center">
                     <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                                Where beauty meets your schedule
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                From nails to hair to makeup, our professionals come to you so you can feel your best - no traffic, no waiting, no rushing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section id="story" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="prose lg:prose-lg max-w-3xl mx-auto text-muted-foreground">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-6 text-center">Our Story</h2>
                            <p>
                                VÉLOURA was born from a simple realization: in our fast-paced world, finding time for self-care is a challenge. Our founder, a busy professional with a passion for staying fashionable and feeling her best, often struggled to fit beauty appointments into her packed schedule. She dreamt of a service that didn't force a choice between a demanding career and personal pampering.
                            </p>
                            <p>
                                It all started with a simple question: "Why couldn't the luxury and expertise of a high-end salon come to you?" This spark grew into a vision for a comprehensive beauty platform. From this vision, VÉLOURA was created: a seamless, safe, and sophisticated solution for modern beauty, empowering artists and delivering five-star treatment to your door.
                            </p>
                             <p className="font-semibold text-foreground text-xl text-center my-8">
                                VÉLOURA isn’t just about beauty on demand — it’s about connection, trust, and community.
                            </p>
                             <p>
                                Beauty isn’t just high fashion, perfect hair, and salon trends. There are so many people who genuinely need beauty services in a way that makes them happy, not for aesthetics, but for confidence, and human connection.
                            </p>
                             <p>
                                Think about the people who can’t easily walk into a salon: New mothers recovering and adjusting, Seniors who no longer drive, Young adults with disabilities, People with chronic illness or anxiety, Busy parents and professionals who are drowning in schedules, and clients who value privacy, safety, and trust in their own space.
                            </p>
                            <p className="font-semibold text-primary text-xl text-center my-8">
                                This is where beauty becomes a service, not a performance. This is where caring professionals like our technicians make a real difference. And this is what our founder wants to transform the beauty industry into.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section id="founder" className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
                            <div className="md:col-span-1 flex justify-center">
                                {founderImage && (
                                    <Image
                                        src={founderImage.imageUrl}
                                        alt={founderImage.description}
                                        width={200}
                                        height={200}
                                        className="rounded-full shadow-lg object-cover w-[200px] h-[200px] aspect-square"
                                        data-ai-hint={founderImage.imageHint}
                                    />
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-2xl font-bold font-headline mb-4">A Note from Our Founder</h3>
                                <div className="prose lg:prose-lg text-muted-foreground space-y-4">
                                    <p>
                                        "As a busy professional, I constantly felt torn between my demanding schedule and the desire to feel polished and confident. I dreamed of a world where self-care wasn't another item on a stressful to-do list, but a moment of accessible luxury. That dream became VÉLOURA."
                                    </p>
                                    <p>
                                        "I built this platform not just for convenience, but for connection. It’s for the new mothers, the dedicated professionals, the wellness seekers, and everyone who deserves to feel their best without sacrificing their time or peace of mind. VÉLOURA is my commitment to empowering both our clients and our incredible beauty professionals, creating a community built on trust, talent, and care."
                                    </p>
                                     <p className="font-semibold">
                                        "Thank you for being part of this journey."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* Our Values Section */}
                <section id="values" className="py-16 sm:py-24">
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
                <section className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-primary/10 rounded-xl p-12 text-center">
                             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Ready to Experience the Difference?</h2>
                             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Indulge in a moment of luxury. Your journey to relaxation and beauty starts here.</p>
                             <div className="mt-8 flex justify-center gap-4">
                                 <Button asChild size="lg" variant="accent">
                                     <Link href="/book">Book Your Service</Link>
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

    