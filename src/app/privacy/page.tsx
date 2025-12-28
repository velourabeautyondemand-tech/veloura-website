
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose lg:prose-lg max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-md">
                        <h1 className="font-headline text-4xl">Privacy Policy</h1>
                        
                        <p className="text-muted-foreground">Effective Date: October 1, 2025</p>

                        <p>VÉLOURA (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application and services.</p>

                        <h2>1. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <h3>a. Personal Information</h3>
                        <ul>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Location (for service availability within a defined radius)</li>
                            <li>Payment information (processed securely by third-party providers)</li>
                        </ul>
                        <h3>b. Usage Information</h3>
                        <ul>
                            <li>App interactions</li>
                            <li>Booking activity</li>
                            <li>Device and browser information</li>
                            <li>IP address</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Provide and manage on-demand beauty services</li>
                            <li>Communicate booking confirmations, updates, and support messages</li>
                            <li>Send service-related SMS or email notifications</li>
                            <li>Improve our platform and user experience</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>

                        <h2>3. SMS &amp; Text Message Communications (A2P 10DLC Compliance)</h2>
                        <p>By providing your phone number, you consent to receive transactional and service-related text messages from VÉLOURA.</p>
                        <ul>
                            <li>Message frequency varies</li>
                            <li>Message and data rates may apply</li>
                            <li>No spam or unsolicited marketing messages</li>
                            <li>You may opt out at any time by replying STOP</li>
                            <li>Reply HELP for support</li>
                        </ul>
                        <p>We do not sell or share phone numbers for third-party marketing.</p>
                        
                        <h2>4. Sharing Your Information</h2>
                        <p>We may share information only with:</p>
                        <ul>
                            <li>Licensed beauty professionals for service fulfillment</li>
                            <li>Payment processors (e.g., Stripe)</li>
                            <li>SMS/email providers (e.g., Twilio)</li>
                            <li>Legal authorities if required by law</li>
                        </ul>

                        <h2>5. Data Security</h2>
                        <p>We implement administrative, technical, and physical safeguards to protect your data. However, no method of transmission over the Internet is 100% secure.</p>

                        <h2>6. Your Rights</h2>
                        <p>You may:</p>
                        <ul>
                            <li>Access, update, or delete your information</li>
                            <li>Opt out of marketing communications</li>
                            <li>Request data deletion by contacting us</li>
                        </ul>

                        <h2>7. Children’s Privacy</h2>
                        <p>VÉLOURA does not knowingly collect data from individuals under 13 years old.</p>

                        <h2>8. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Updates will be posted with a revised effective date.</p>

                        <h2>9. Contact Us</h2>
                        <p>For questions or concerns:
                        <br />
                        Email: <a href="mailto:support@velourabeautyondemand.com">support@velourabeautyondemand.com</a></p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
