
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

export default function TermsOfUsePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose lg:prose-lg max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-md">
                        <h1 className="font-headline text-4xl">Terms of Service</h1>
                        
                        <p className="text-muted-foreground">Effective Date: October 1, 2025</p>
                        
                        <p>Welcome to VÉLOURA. By accessing or using our website, app, or services, you agree to these Terms of Service.</p>
                        
                        <h2>1. Services</h2>
                        <ul>
                            <li>VÉLOURA is a platform that connects users with independent, licensed beauty professionals who provide services at customer-selected locations.</li>
                            <li>VÉLOURA does not perform beauty services directly.</li>
                        </ul>

                        <h2>2. Eligibility</h2>
                        <p>You must be at least 18 years old to use the platform.</p>

                        <h2>3. User Responsibilities</h2>
                        <p>You agree to:</p>
                        <ul>
                            <li>Provide accurate information</li>
                            <li>Use the platform for lawful purposes only</li>
                            <li>Respect professionals and other users</li>
                        </ul>

                        <h2>4. Professional Services Disclaimer</h2>
                        <p>Beauty professionals are independent contractors. VÉLOURA does not control how services are performed but verifies licensing where applicable.</p>

                        <h2>5. Payments</h2>
                        <ul>
                            <li>Payments are processed securely through third-party providers</li>
                            <li>Prices are shown before booking</li>
                            <li>Cancellation and refund policies may vary</li>
                        </ul>

                        <h2>6. SMS &amp; Communications Terms</h2>
                        <p>By using VÉLOURA, you agree to receive service-related SMS messages, including:</p>
                        <ul>
                            <li>Booking confirmations</li>
                            <li>Appointment reminders</li>
                            <li>Support notifications</li>
                        </ul>
                        <p>You may opt out anytime by replying STOP.</p>

                        <h2>7. Prohibited Conduct</h2>
                        <p>You may not:</p>
                        <ul>
                            <li>Use the platform for spam, fraud, or scams</li>
                            <li>Harass or abuse professionals or users</li>
                            <li>Attempt unauthorized access to systems</li>
                        </ul>
                        
                        <h2>8. Intellectual Property</h2>
                        <p>All content, logos, and software are the property of VÉLOURA and may not be used without permission.</p>

                        <h2>9. Limitation of Liability</h2>
                        <p>VÉLOURA is not liable for:</p>
                        <ul>
                            <li>Acts or omissions of independent professionals</li>
                            <li>Service outcomes</li>
                            <li>Indirect or consequential damages</li>
                        </ul>
                        
                        <h2>10. Termination</h2>
                        <p>We may suspend or terminate accounts that violate these terms.</p>

                        <h2>11. Governing Law</h2>
                        <p>These Terms are governed by the laws of the United States and the State in which VÉLOURA operates.</p>

                        <h2>12. Contact</h2>
                        <p>Email: <a href="mailto:support@velourabeautyondemand.com">support@velourabeautyondemand.com</a></p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
