
import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Award, HandHeart, Sparkles, Users, Linkedin, Heart, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const values = [
    {
        icon: Award,
        title: "Uncompromising Quality",
        description: "We partner with only the most talented and licensed beauty professionals who use premium products to ensure a flawless, long-lasting finish every time."
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
        description: "Your safety is our top priority. We vet all professionals and equip them with emergency panic buttons for every job. We also offer background checks to customers for a small fee to ensure a secure and comfortable experience for everyone."
    },
]

const founderImageUrl = PlaceHolderImages.find(p => p.id === 'founder_photo')?.imageUrl || "https://i.imgur.com/wjTMG9D.png";
const teamGroupImageUrl = PlaceHolderImages.find(p => p.id === 'team_group_photo')?.imageUrl || "";
const magazineFeatureImage = PlaceHolderImages.find(p => p.id === 'magazine_feature');
const roxanneImageUrl = PlaceHolderImages.find(p => p.id === 'team_roxanne')?.imageUrl || "";
const riniImageUrl = PlaceHolderImages.find(p => p.id === 'team_rini')?.imageUrl || "";

const teamMembers = [
    {
        name: "Huiyu \"Cherry\" Cheng",
        role: "Founder & Visionary",
        description: "She didn't just build VÉLOURA — she built it from real-life experience. Seeing how outdated systems limited both clients and independent professionals, she set out to create something better — a platform where services move with your life, not the other way around. Today, VÉLOURA empowers professionals and delivers beauty and lifestyle services on demand — where and when they’re needed.",
        imageUrl: founderImageUrl,
        hint: "woman portrait"
    },
    {
        name: "Roxanne Resma",
        role: "Operations Director",
        description: "Roxanne oversees operations at VÉLOURA, ensuring everything runs efficiently as we grow. She manages onboarding, systems, and day-to-day execution — keeping both professionals and clients supported every step of the way.",
        imageUrl: roxanneImageUrl,
        hint: "operations director"
    },
    {
        name: "Rini Sugianto",
        role: "Media Lead",
        description: "Dedicated to capturing the beauty and artistry of the VÉLOURA experience through compelling visual storytelling and brand production.",
        imageUrl: riniImageUrl,
        hint: "media professional"
    }
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Our Story Section */}
                <section id="story" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="prose lg:prose-lg max-w-3xl mx-auto text-muted-foreground">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-6 text-center">It Started With a Simple Problem</h2>
                            <p className="text-xl font-semibold text-foreground text-center mb-8">
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
                                This is where beauty becomes a service, not a performance. This is where caring professionals like our team make a real difference. And this is what our founder wants to transform the beauty industry into.
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
                                        src={founderImageUrl}
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
                                        "Between meetings, traffic, and everything else life throws at you, self-care started to feel less like a priority… and more like something I kept pushing to ‘next week.’ So I thought — why is this so hard?"
                                    </p>
                                    <p>
                                        "But this wasn’t just about me. Coming from a background closely connected to the beauty industry, I saw how talented professionals were often limited — tied to traditional setups, high costs, and a lack of flexibility to truly grow on their own terms."
                                    </p>
                                    <p>
                                        "That’s where VÉLOURA began. A platform designed not only to make services more accessible, but to empower professionals — giving them more freedom, more control, and more opportunity."
                                    </p>
                                    <p>
                                        "A place where services come to you — simple, flexible, and built for real life."
                                    </p>
                                    <p>
                                        "As we continue to grow, we’re excited to expand beyond beauty — onboarding photographers, event coordinators, wedding planners, florists, and more into our network. <strong className="text-primary underline">We’re just getting started.</strong>"
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
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">These principles guide everything we do, from the professionals we partner with to the experience we provide.</p>
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
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">The passionate individuals dedicated to redefining the beauty experience.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center text-center space-y-4 transition-all duration-300"
                                >
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 bg-background">
                                        <Image
                                            src={member.imageUrl || `https://picsum.photos/seed/${member.name}/200/200`}
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
                        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/10">
                            <h3 className="text-2xl font-bold font-headline mb-4 flex items-center justify-center gap-2">
                                <Heart className="text-primary fill-primary w-6 h-6" /> Join Our Team
                            </h3>
                            
                            <p className="text-lg text-muted-foreground mb-8">
                                Are you a licensed beauty professional looking for freedom, higher earnings, and a supportive community? We are always looking for talented artists to join the VÉLOURA family.
                            </p>
                            <Button asChild size="lg">
                                <Link href="/apply">Apply to Join</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Team Group Image Section */}
                {teamGroupImageUrl && (
                    <section className="pb-16 sm:py-24 bg-secondary/50">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="relative w-full max-w-lg mx-auto aspect-[502/800] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
                                <Image
                                    src={teamGroupImageUrl}
                                    alt="VÉLOURA Team Photo"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="team group"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-primary/10 rounded-xl p-12 text-center">
                             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary mb-4">Ready to Experience the Difference?</h2>
                             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">Download our app to explore more services and book your next appointment instantly.</p>
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
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
