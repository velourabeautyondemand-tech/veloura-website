
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
                        
                        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                        <h2>Introduction</h2>
                        <p>VÉLOURA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile beauty service platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the service.</p>

                        <h2>1. Collection of Your Information</h2>
                        <p>We may collect information about you in a variety of ways. The information we may collect via the Service includes:</p>
                        <ul>
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Service or when you choose to participate in various activities related to the Service, such as online chat and message boards.</li>
                            <li><strong>Technician Application Data:</strong> If you apply to be a technician, we collect professional information you provide, such as your resume, license number, and service area.</li>
                            <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you book, order, return, or exchange services. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor.</li>
                        </ul>

                        <h2>2. Use of Your Information</h2>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:</p>
                        <ul>
                            <li>Create and manage your account.</li>
                            <li>Facilitate beauty service appointments between you and technicians.</li>
                            <li>Process payments and refunds.</li>
                            <li>Email you regarding your account or appointments.</li>
                            <li>Review and process technician applications.</li>
                            <li>Comply with legal and regulatory requirements.</li>
                        </ul>

                        <h2>3. Disclosure of Your Information</h2>
                        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                        <ul>
                            <li><strong>To Technicians:</strong> We will share your name and appointment location with the technician you have booked to enable them to perform the service.</li>
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
                        </ul>

                        <h2>4. Security of Your Information</h2>
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                        <h2>5. Your Rights</h2>
                        <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information. To make such a request, please contact us using the contact information provided below.</p>
                        
                        <h2>6. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                        <h2>7. Contact Us</h2>
                        <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:info@iamdreammaker.com">info@iamdreammaker.com</a></p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
