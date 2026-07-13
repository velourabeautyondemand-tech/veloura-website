
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, MapPin, Gift, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function OnDemandBeautyAppPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/50 py-16 md:py-24 border-b">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight mb-6">
                                    Top On-Demand Beauty App: <br />
                                    <span className="text-primary">VÉLOURA</span>
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8">
                                    The only app you need for elite beauty, wellness, and creative services. One click brings luxury to your door.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                     <Button asChild size="lg" className="h-14 px-8 text-lg font-bold">
                                        <Link href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank">
                                            <Download className="mr-2 w-5 h-5" />
                                            Download for iOS
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-bold">
                                         <Link href="https://play.google.com/store/apps/details?id=com.veloura.app&pcampaignid=web_share" target="_blank">
                                            <Smartphone className="mr-2 w-5 h-5" />
                                            Download for Android
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-black/5">
                                <Image 
                                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxiZWF1dHklMjBhcHB8ZW58MHx8fHwxNzYwMTI4MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                                    alt="VÉLOURA App Interface"
                                    fill
                                    className="object-cover"
                                    data-ai-hint="beauty app"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                                <h2 className="text-3xl font-bold font-headline text-foreground">Advanced App Features</h2>
                                <p>
                                    The VÉLOURA <strong>on-demand beauty app</strong> is designed with both the client and professional in mind. Our intuitive interface makes it easy to find exactly what you need, when you need it.
                                </p>
                                <ul className="space-y-4 my-8 list-none pl-0">
                                    <li className="flex items-start gap-3 bg-card p-4 rounded-xl border">
                                        <MapPin className="text-primary w-6 h-6 mt-1" />
                                        <div>
                                            <span className="font-bold text-foreground block">Smart Location Matching</span>
                                            Automatically find top-rated professionals within a 6-mile radius of your home, office, or hotel.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 bg-card p-4 rounded-xl border">
                                        <Gift className="text-primary w-6 h-6 mt-1" />
                                        <div>
                                            <span className="font-bold text-foreground block">In-App Rewards & Discounts</span>
                                            Earn points on every booking and access exclusive partner discounts from brands like Byootique and Silent Beacon.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 bg-card p-4 rounded-xl border">
                                        <Star className="text-primary w-6 h-6 mt-1" />
                                        <div>
                                            <span className="font-bold text-foreground block">Verified Reviews & Portfolios</span>
                                            See real work from real pros. Our AI-powered review summaries help you make the best choice in seconds.
                                        </div>
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-bold font-headline text-foreground">Comprehensive Service Menu</h2>
                                <p>Access an elite network of talent across multiple categories:</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold text-foreground">
                                    <div className="p-3 bg-secondary/20 rounded-lg text-center">Nail Artistry</div>
                                    <div className="p-3 bg-secondary/20 rounded-lg text-center">Hair Styling</div>
                                    <div className="p-3 bg-secondary/20 rounded-lg text-center">Glam Makeup</div>
                                    <div className="p-3 bg-secondary/20 rounded-lg text-center">Photography</div>
                                    <div className="p-3 bg-secondary/20 rounded-lg text-center">Skin Wellness</div>
                                    <div className="p-3 bg-secondary/20 rounded-lg text-center">Event Prep</div>
                                </div>

                                <h2 className="text-2xl font-bold font-headline text-foreground mt-12">Coverage Areas</h2>
                                <p>
                                    VÉLOURA is currently available and growing fast in <strong>New York City, Los Angeles, and Miami</strong>. We are constantly expanding to new cities, bringing professional beauty to more doorsteps every day.
                                </p>

                                <h2 className="text-2xl font-bold font-headline text-foreground mt-12">Customer Benefits</h2>
                                <p>
                                    By choosing the VÉLOURA app, you're not just getting a haircut or a manicure; you're gaining control over your time. Our platform supports the modern lifestyle, providing a safe, reliable, and premium solution for all your self-care and event needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
