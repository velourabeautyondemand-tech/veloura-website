
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Award, HandHeart, Sparkles, Users, Linkedin, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
    const values = [
        {
            title: "Empowerment",
            description: "Giving professionals the freedom to build their own brand and schedule.",
            icon: Sparkles
        },
        {
            title: "Reliability",
            description: "Consistently delivering high-quality, vetted services wherever you are.",
            icon: Award
        },
        {
            title: "Community",
            description: "Building a supportive network of professionals and a loyal client base.",
            icon: Users
        },
        {
            title: "Convenience",
            description: "Making self-care accessible and efficient for the modern, busy life.",
            icon: HandHeart
        }
    ];

    const founderImage = PlaceHolderImages.find(p => p.id === 'founder_photo');
    const roxanneImage = PlaceHolderImages.find(p => p.id === 'team_roxanne');
    const riniImage = PlaceHolderImages.find(p => p.id === 'team_rini');
    const teamGroupImage = PlaceHolderImages.find(p => p.id === 'team_group_photo');
    const magazineFeatureImage = PlaceHolderImages.find(p => p.id === 'magazine_feature');

    const teamMembers = [
        {
            name: "Huiyu \"Cherry\" Cheng",
            role: "Founder & Visionary",
            description: "She didn't just build VÉLOURA — she built it from real-life experience. Seeing how outdated systems limited both clients and independent professionals, she set out to create something better — a platform where services move with your life, not the other way around. Today, VÉLOURA empowers professionals and delivers beauty and lifestyle services on demand — where and when they’re needed.",
            imageUrl: founderImage?.imageUrl || "https://picsum.photos/seed/founder/400/400",
            hint: "woman portrait"
        },
        {
            name: "Roxanne Resma",
            role: "Operations Director",
            description: "Roxanne oversees operations at VÉLOURA, ensuring everything runs efficiently as we grow. She manages onboarding, systems, and day-to-day execution — keeping both professionals and clients supported every step of the way.",
            imageUrl: roxanneImage?.imageUrl || "https://picsum.photos/seed/roxanne/400/400",
            hint: "operations director"
        },
        {
            name: "Rini Sugianto",
            role: "Media Lead",
            description: "Dedicated to capturing the beauty and artistry of the VÉLOURA experience through compelling visual storytelling and brand production.",
            imageUrl: riniImage?.imageUrl || "https://picsum.photos/seed/rini/400/400",
            hint: "media professional"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Our Story Section */}
                <section id="story" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="prose lg:prose-lg max-w-3xl mx-auto text-muted-foreground text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-6">It Started With a Simple Problem</h2>
                            <p className="text-xl font-semibold text-foreground mb-8">
                                Why is something so essential so inefficient?
                            </p>
                            <p>
                                Balancing work, life, and everything in between, we kept running into the same issue — there just wasn’t an easy way to access reliable beauty and lifestyle services when we needed them.
                            </p>
                            <p>
                                At the same time, we saw so many talented professionals struggling to grow without being tied to traditional setups.
                            </p>
                            <p>
                                VÉLOURA was built to solve both — creating a better way for people to connect, work, and live.
                            </p>
                             <p className="font-semibold text-foreground text-xl my-8">
                                VÉLOURA isn’t just about beauty on demand — it’s about connection, trust, and community.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Founder Note Section */}
                <section id="founder" className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
                            <div className="md:col-span-1 flex justify-center">
                                 <div className="relative w-48 h-48">
                                    <Image
                                        src={founderImage?.imageUrl || "https://picsum.photos/seed/founder/400/400"}
                                        alt="Huiyu Cherry Cheng"
                                        fill
                                        className="rounded-full object-contain shadow-lg"
                                        data-ai-hint="woman portrait"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <h3 className="text-2xl font-bold font-headline">A Note from Our Founder</h3>
                                    <Link href="https://www.linkedin.com/in/huiyu-cheng" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                        <Linkedin className="h-6 w-6" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </div>
                                <div className="prose lg:prose-lg text-muted-foreground space-y-4">
                                    <p>
                                        "As a busy professional, I was constantly choosing between my schedule and feeling put together — and somehow, my schedule always won."
                                    </p>
                                    <p>
                                        "That’s where VÉLOURA began. A platform designed not only to make services more accessible, but to empower professionals — giving them more freedom, more control, and more opportunity."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured In Section */}
                <section className="py-16 bg-background border-y border-primary/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
                            <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={magazineFeatureImage?.imageUrl || "https://picsum.photos/seed/magazine/600/800"}
                                    alt="Global Woman Magazine Feature"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="magazine cover"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                                    <Newspaper className="w-3.5 h-3.5" />
                                    <span>IN THE PRESS</span>
                                </div>
                                <h3 className="text-3xl font-bold font-headline">Featured in Global Woman Magazine</h3>
                                <p className="text-lg text-muted-foreground">
                                    Read about Huiyu "Cherry" Cheng's vision for VÉLOURA and how she is redefining the beauty industry through technology and empowerment.
                                </p>
                                <Button asChild variant="accent" size="lg">
                                    <Link href="https://globalwomanmagazine.com/huiyu-cherry-cheng/" target="_blank" rel="noopener noreferrer">
                                        Read the Full Story
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section id="values" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Core Values</h2>
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

                {/* Our Team Section */}
                <section id="team" className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Team</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center text-center space-y-4"
                                >
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 bg-background">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            className="object-contain"
                                            data-ai-hint={member.hint}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold font-headline">{member.name}</h3>
                                        <p className="text-primary font-semibold uppercase tracking-wider text-sm">{member.role}</p>
                                        <p className="text-muted-foreground text-sm">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Team Group Image Section */}
                        {teamGroupImage && (
                            <div className="mt-16 text-center">
                                <div className="relative w-full max-w-lg mx-auto aspect-[502/800] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
                                    <Image
                                        src={teamGroupImage.imageUrl}
                                        alt="VÉLOURA Team Photo"
                                        fill
                                        className="object-cover"
                                        data-ai-hint="team group"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
