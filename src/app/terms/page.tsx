
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

export default function TermsOfUsePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose lg:prose-lg max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-md">
                        <h1 className="font-headline text-4xl">Terms of Use</h1>
                        
                        <div className="bg-destructive/10 border-l-4 border-destructive text-destructive-foreground p-4 rounded-md my-6">
                            <h3 className="font-bold">Important Disclaimer</h3>
                            <p>This is a template and not legal advice. You should consult with a legal professional to ensure this document is complete and appropriate for your specific business needs and jurisdiction.</p>
                        </div>

                        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                        <h2>1. Agreement to Terms</h2>
                        <p>By accessing or using our services, you agree to be bound by these Terms of Use ("Terms"). If you disagree with any part of the terms, then you may not access the service.</p>
                        
                        <h2>2. Services</h2>
                        <p>VÉLOURA provides a platform to connect users seeking mobile beauty services with professional beauty technicians. We facilitate booking, payment, and communication between users and technicians.</p>

                        <h2>3. User Accounts</h2>
                        <p>To access certain features of the service, you must create an account. You are responsible for safeguarding your password and for any activities or actions under your password. You agree to notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

                        <h2>4. Bookings, Payments, and Cancellations</h2>
                        <p>When you book an appointment, you agree to pay the listed price for the service. All payments are processed through our secure payment gateway. Our cancellation and refund policy will be detailed at the time of booking and is incorporated into these Terms.</p>

                        <h2>5. Technician & User Conduct</h2>
                        <p>All users, including customers and technicians, are expected to act professionally and respectfully. We reserve the right to terminate accounts for any conduct that we deem inappropriate, unsafe, or in violation of these terms.</p>

                        <h2>6. Intellectual Property</h2>
                        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of VÉLOURA and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of VÉLOURA.</p>

                        <h2>7. Links To Other Web Sites</h2>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by VÉLOURA. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>

                        <h2>8. Limitation of Liability</h2>
                        <p>In no event shall VÉLOURA, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                        <h2>9. Disclaimer</h2>
                        <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

                        <h2>10. Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.</p>

                        <h2>11. Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

                        <h2>12. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at <a href="mailto:admin@example.com">admin@example.com</a>.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
