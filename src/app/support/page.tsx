
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';

export default function SupportPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-2xl mx-auto">
                        <Card className="shadow-lg">
                            <CardHeader className="text-center">
                                <CardTitle className="text-4xl font-bold font-headline">Support Center</CardTitle>
                                <CardDescription className="text-lg pt-2 text-muted-foreground">We're here to help!</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold font-headline mb-4 text-center">Contact Us</h2>
                                    <p className="text-center text-muted-foreground mb-6">For any questions, issues, or feedback, please don't hesitate to reach out. Our team will get back to you as soon as possible.</p>
                                    <div className="space-y-4">
                                        <a href="mailto:support@velourabeautyondemand.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors">
                                            <Mail className="w-6 h-6 text-primary" />
                                            <div>
                                                <h3 className="font-semibold">Email Support</h3>
                                                <p className="text-sm text-muted-foreground">support@velourabeautyondemand.com</p>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-4 p-4 rounded-lg bg-background border border-dashed">
                                            <MessageSquare className="w-6 h-6 text-primary" />
                                            <div>
                                                <h3 className="font-semibold">Text Us</h3>
                                                <p className="text-sm font-medium font-mono">(305) 317-2759</p>
                                                <p className="text-xs text-muted-foreground italic">Text messages only — this number does not receive calls.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
