import { NailIcon } from '@/components/shared/logo';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Mail, Phone, Globe, MessageSquare } from 'lucide-react';

export default function PartnerAgreementPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose lg:prose-lg max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-md">
                        
                        <div className="text-center mb-12 not-prose">
                            <NailIcon className="h-16 w-16 mx-auto text-primary" />
                            <h1 className="font-headline text-4xl mt-4">Partner Handbook & Onboarding Policy Agreement</h1>
                            <p className="lead text-muted-foreground">VÉLOURA - Beauty on Demand</p>
                            <p className="text-sm text-muted-foreground">Powered by iAmDreamMaker Production Group</p>
                        </div>

                        <div className="not-prose bg-muted/50 rounded-lg p-6 mb-8 text-sm">
                            <h3 className="font-bold text-lg mb-4 text-center">Contact Information</h3>
                            <div className="flex flex-col md:flex-row justify-around items-center gap-6 text-muted-foreground">
                                <a href="mailto:support@velourabeautyondemand.com" className="flex items-center gap-2 hover:text-primary">
                                    <Mail className="w-5 h-5" />
                                    <span>support@velourabeautyondemand.com</span>
                                </a>
                                <div className="flex flex-col items-center md:items-start gap-1">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5 text-primary" />
                                        <span className="font-semibold">Text Us: (305) 317-2759</span>
                                    </div>
                                    <span className="text-[10px] italic">Text messages only — no calls</span>
                                </div>
                            </div>
                        </div>

                        <h2>Introduction & Mission</h2>
                        <p>Welcome to VÉLOURA. This handbook outlines the policies, standards, and expectations that define our partnership. Our mission is to deliver safe, convenient, and high-quality beauty services directly to clients through our Beauty on Demand model.</p>
                        <div className="bg-primary/10 border-l-4 border-primary p-4 my-6 not-prose">
                          <p className="font-bold">All Beauty on Demand appointments must be performed at the client’s chosen location. Referring or redirecting clients to personal salons or external businesses is not permitted under our platform agreement. This ensures consistent quality, safety, and service standards for all users.</p>
                        </div>
                        
                        <h2>Core Partner Policies</h2>
                        <h3>1. Payment Policy</h3>
                        <ul>
                            <li>All payments for services must be processed exclusively through the VÉLOURA platform.</li>
                            <li>Accepting, requesting, or arranging payments outside the app (including cash, personal transfers, or third-party apps) is strictly prohibited.</li>
                            <li>Violations of this policy will not lead to immediate account suspension without prior warning. A warning will be issued at least 7 days prior to any suspension of your account.</li>
                        </ul>
                        
                        <h3>2. Professional Conduct</h3>
                        <ul>
                            <li>Technicians are expected to maintain a high level of professionalism, punctuality, hygiene, and respect during all client interactions.</li>
                            <li>Consistent failure to meet service standards may lead to review or suspension of account privileges.</li>
                        </ul>

                        <h3>3. Complaint & Performance Policy</h3>
                        <ul>
                            <li>Receiving five (5) or more verified customer complaints regarding service quality, conduct, or reliability may result in temporary suspension or permanent removal from the platform.</li>
                            <li>Each report will be reviewed carefully before any action is taken.</li>
                        </ul>

                        <h3>4. Brand Representation</h3>
                        <ul>
                            <li>As a VÉLOURA partner, you represent our brand in every client interaction. Please use only approved communication channels, respect confidentiality, and uphold our standards of beauty and care excellence.</li>
                        </ul>

                        <h3>5. Insurance Requirement</h3>
                        <ul>
                            <li>Professional Cosmetology and Esthetician Liability Insurance is strongly recommended for all VÉLOURA service providers.</li>
                            <li>If a partner declines to carry active liability insurance or chooses to perform services without coverage, they will be personally responsible for any claims, damages, or errors that occur as a result of their work.</li>
                            <li>VÉLOURA is not liable for incidents arising from uninsured services.</li>
                        </ul>

                        <h2>Booking & Payment Policies</h2>
                        <h3>Customer Cancellations & Rescheduling</h3>
                        <ul>
                            <li>Clients may reschedule or cancel appointments up to 24 hours before the scheduled time without penalty.</li>
                            <li>Cancellations made within 24 hours of the appointment are considered a no-show and non-refundable.</li>
                            <li>All cancellations and rescheduling must be done through the VÉLOURA app to ensure tracking and proper notification.</li>
                        </ul>

                        <h3>Technician Cancellations & No-Show</h3>
                        <ul>
                            <li>Technicians must notify both the client and VÉLOURA at least 24 hours in advance if they are unable to complete a scheduled appointment.</li>
                            <li>Cancellations with less than 24 hours’ notice may result in a temporary suspension or performance review.</li>
                            <li>If a technician fails to appear for a confirmed appointment without valid notice, it will be treated as a no-show, and the client will receive a full refund.</li>
                        </ul>

                        <h3>Refund & Dispute Procedure</h3>
                        <ul>
                            <li>All payment disputes or refund requests must be submitted within 48 hours of service completion.</li>
                            <li>VÉLOURA will investigate each case individually.</li>
                            <li>Refunds are only issued if there is verified evidence of service failure, misconduct, or a legitimate scheduling error.</li>
                            <li>Refunds for dissatisfaction without documented service issues are not guaranteed but will be reviewed in good faith.</li>
                            <li>Refunds, if approved, will be issued through the VÉLOURA platform only.</li>
                            <li>VÉLOURA reserves the right to make the final decision in all dispute cases.</li>
                        </ul>

                        <h2>Operational Policies</h2>
                        <h3>Dress Code</h3>
                        <p>All VÉLOURA beauty professionals are expected to maintain a clean, polished, and professional appearance at all times when serving clients.</p>
                        <h4>Footwear:</h4>
                        <ul>
                            <li>No slippers or open-toe shoes are permitted during service.</li>
                            <li>Shoes must be clean and professional in appearance.</li>
                        </ul>
                        <h4>Attire & Cleanliness:</h4>
                        <ul>
                            <li>Clothing should be neat and presentable.</li>
                            <li>Personal hygiene is essential — please arrive well-groomed and fresh.</li>
                        </ul>
                        <h4>Protective Gear:</h4>
                        <ul>
                            <li><strong>Makeup Artists:</strong> Must wear a mask during all services. This protects both the artist and the client, as makeup application involves close facial contact.</li>
                            <li><strong>Nail Technicians:</strong> Gloves are mandatory during every service for sanitation and client safety.</li>
                        </ul>

                        <h3>Code of Conduct</h3>
                        <p>All partners are expected to:</p>
                        <ul>
                            <li>Treat every client and colleague with respect, dignity, and professionalism.</li>
                            <li>Maintain a positive, respectful attitude toward clients and colleagues.</li>
                            <li>Follow all sanitation and cleanliness protocols.</li>
                             <li>Follow all state, local, and VÉLOURA safety and hygiene standards.</li>
                            <li>Never discriminate based on race, gender, age, or background.</li>
                            <li>Be honest about skills, prices, and services.</li>
                            <li>Never accept or request payments outside the platform.</li>
                            <li>Avoid any form of harassment, discrimination, or inappropriate behavior.</li>
                            <li>Refrain from using personal contact information or social media to solicit clients outside of the VÉLOURA platform.</li>
                             <li>Follow company policies at all times.</li>
                            <li>Receiving 5 or more verified complaints may result in suspension.</li>
                        </ul>

                        <h3>Confidentiality & Client Privacy</h3>
                        <ul>
                            <li>All client information (contact, address, booking details, preferences) is strictly confidential.</li>
                            <li>Partners may not share, copy, or retain client data outside the app.</li>
                            <li>Photos or videos of clients may only be taken or shared with explicit written consent from the client.</li>
                            <li>Any breach of privacy will result in immediate review and potential termination from the platform.</li>
                        </ul>

                        <h3>Damage & Incident Reporting</h3>
                        <p>If any injury, damage, or safety concern occurs during a service, the technician must:</p>
                        <ol>
                          <li>Stop the service immediately.</li>
                          <li>Provide basic first aid if necessary.</li>
                          <li>Report the incident to VÉLOURA within 24 hours using the in-app report or support channel.</li>
                        </ol>
                        <p>Failure to report incidents in a timely manner may result in account suspension.</p>

                        <h2>Legal & Liability Terms</h2>
                        <h3>Insurance & Liability Disclaimer</h3>
                        <ul>
                            <li>All VÉLOURA technicians are strongly encouraged to maintain active professional liability insurance (Cosmetology / Esthetician).</li>
                            <li>If a technician provides a service without coverage, they accept full personal responsibility for any damage, claim, or client injury arising from their work.</li>
                            <li>VÉLOURA is not liable for any incident, injury, or property damage resulting from uninsured services.</li>
                        </ul>

                        <h3>Non-Solicitation Clause</h3>
                        <ul>
                            <li>Technicians may not solicit or accept direct bookings or payments from VÉLOURA clients outside of the app.</li>
                            <li>Violating this rule may result in immediate and permanent removal from the platform and possible legal action.</li>
                        </ul>

                        <h3>Media & Marketing Consent</h3>
                        <ul>
                            <li>VÉLOURA may request permission to use professional photos, testimonials, or event images for marketing or training purposes.</li>
                            <li>No content will be published without written consent from the technician or client involved.</li>
                        </ul>
                        
                        <div className="bg-muted/50 rounded-lg p-6 my-8 text-center not-prose">
                          <h3 className="font-bold text-lg mb-2">Acknowledgment</h3>
                          <p className="text-sm">By joining the VÉLOURA platform, you acknowledge that you have read, understood, and agreed to comply with all the policies and procedures outlined in this handbook.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
