import Image from 'next/image';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Award, HandHeart, Sparkles, Users, Linkedin, Heart } from 'lucide-react';
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

const teamMembers = [
    {
        name: "Huiyu Cheng",
        role: "Founder & Visionary",
        description: "Huiyu built VÉLOURA to empower independent professionals and create a better way for people to access beauty and lifestyle services — on demand, without the limitations of traditional salons.",
        imageUrl: "https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2F6b3be7ac-d92b-48f5-9692-21595f2eb35d/watermark:F/width:600?csig=AAAAAAAAAAAAAAAAAAAAALyoADXv0luBMGgljVPJwZ2vCP7UofMsRccOQbh1YJeb&exp=1775273316&osig=AAAAAAAAAAAAAAAAAAAAADs-226RT-ZGFyWlDl33B1P7-e6n1hdaVRi9j0b1nDLX&signer=media-rpc&x-canva-quality=screen",
        hint: "woman portrait"
    },
    {
        name: "Rini Sugianto",
        role: "Media Lead",
        description: "Dedicated to capturing the beauty and artistry of the VÉLOURA experience through compelling visual storytelling and brand production.",
        imageUrl: "https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2F702e2bfd-68a3-43a5-8dcf-a328d607b5c7/watermark:F/width:600?csig=AAAAAAAAAAAAAAAAAAAAAIIszOyz8JgjgojMGmnIvDe3yJMk4Qy3K5QssiG4LMxQ&exp=1775275556&osig=AAAAAAAAAAAAAAAAAAAAAEQBmuFqEj8h-YY3wlpILmZk5M5INLqCofjvWfsNFO5N&signer=media-rpc&x-canva-quality=screen",
        hint: "media professional"
    }
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
                                VÉLOURA was born from a simple realization: in our fast-paced world, findiing time for self-care is a challenge. Our founder, a busy professional with a passion for staying fashionable and feeling her best, often struggled to fit beauty appointments into her packed schedule. She dreamt of a service that didn't force a choice between a demanding career and personal pampering.
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
                                This is where beauty becomes a service, not a performance. This is where caring professionals like our team make a real difference. And this is what our founder wants to transform the beauty industry into.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section id="founder" className="py-16 sm:py-24 bg-secondary/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
                            <div className="md:col-span-1 flex justify-center md:pt-8">
                                {founderImage && (
                                     <div className="relative w-48 h-48">
                                        <Image
                                            src={founderImage.imageUrl}
                                            alt={founderImage.description}
                                            fill
                                            className="rounded-full object-contain shadow-lg"
                                            data-ai-hint={founderImage.imageHint}
                                        />
                                    </div>
                                )}
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
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center text-center space-y-4 transition-all duration-300"
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
                                        <p className="text-muted-foreground max-md">{member.description}</p>
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
