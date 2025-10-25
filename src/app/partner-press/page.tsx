
'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Handshake, Megaphone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { PressInquiryForm } from '@/components/features/press-inquiry-form';

export default function PartnerPressPage() {

    const handlePartnershipClick = () => {
        const subject = "Partnership Inquiry";
        window.location.href = `mailto:joinus@iamdreammaker.com?subject=${encodeURIComponent(subject)}`;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-lg">
                        
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                                Partner & Press
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Join us in redefining the future of beauty.
                            </p>
                        </div>
                        
                        <Separator className="my-12" />

                        {/* Partner Section */}
                        <section id="partner" className="mb-16">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0">
                                    <Handshake className="h-20 w-20 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold font-headline mb-4">Partner With Us</h2>
                                    <p className="text-muted-foreground mb-4">
                                        VÉLOURA is building a curated community of elite beauty professionals and discerning clients who value premium products and exceptional service. We are actively seeking to partner with innovative beauty brands that align with our commitment to quality, luxury, and convenience.
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        If your company offers high-quality beauty products and you're interested in placing them in the hands of our skilled technicians and loyal customers, we would love to hear from you.
                                    </p>
                                    <Button onClick={handlePartnershipClick} variant="accent">
                                        <Mail className="mr-2 h-5 w-5" />
                                        Contact for Partnerships
                                    </Button>
                                </div>
                            </div>
                        </section>

                        <Separator className="my-12" />

                        {/* Press Section */}
                        <section id="press">
                             <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0 md:order-2">
                                    <Megaphone className="h-20 w-20 text-primary" />
                                </div>
                                <div className="flex-1 md:order-1">
                                    <h2 className="text-3xl font-bold font-headline mb-4">Press Inquiries</h2>
                                    <p className="text-muted-foreground mb-2">
                                        VÉLOURA is more than a mobile beauty service; it's a movement. We're revolutionizing the industry by empowering independent beauty professionals and delivering unparalleled luxury and convenience directly to our clients' doors.
                                    </p>
                                     <p className="text-muted-foreground font-semibold mb-4">Possible story angles include:</p>
                                    <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                                        <li>The intersection of technology and luxury beauty services.</li>
                                        <li>Empowering entrepreneurs in the gig economy.</li>
                                        <li>The future of at-home, on-demand personal care.</li>
                                        <li>A new model for work-life balance for beauty professionals.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8">
                                <PressInquiryForm />
                            </div>
                        </section>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
