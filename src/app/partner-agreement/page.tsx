
import { NailIcon } from '@/components/shared/logo';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Mail, Phone, Globe } from 'lucide-react';

export default function PartnerAgreementPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose lg:prose-lg max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-md">
                        
                        <div className="text-center mb-12">
                            <NailIcon className="h-16 w-16 mx-auto text-primary" />
                            <h1 className="font-headline text-4xl mt-4">Partner Handbook & Onboarding Policy Agreement</h1>
                            <p className="lead text-muted-foreground">VÉLOURA – Beauty on Demand</p>
                        </div>
                        
                        <h2 className="font-bold">Welcome to VÉLOURA</h2>
                        <p>We’re thrilled to have you as part of the VÉLOURA community. This handbook outlines the policies, standards, and expectations that define our partnership.</p>
                        <p>Our mission is to deliver safe, convenient, and high-quality beauty services directly to clients through our Beauty on Demand model. As a valued partner, you play a vital role in maintaining our brand’s trust, excellence, and professionalism.</p>
                        <div className="bg-primary/10 border-l-4 border-primary p-4 my-6 not-prose">
                          <p className="font-bold">Important:</p>
                          <ul className="list-disc list-inside">
                            <li>All Beauty on Demand appointments must be performed at the client’s chosen location.</li>
                            <li>Referring or redirecting clients to personal salons or external businesses is not permitted under our platform agreement.</li>
                          </ul>
                        </div>

                        <h2><span className="font-bold">1. Core Partner Policies</span></h2>
                        <h3>1.1 Payment Policy</h3>
                        <ul>
                            <li>All payments for services must be processed exclusively through the VÉLOURA platform.</li>
                            <li>Accepting, requesting, or arranging payments outside the app (including cash, personal transfers, or third-party apps) is strictly prohibited.</li>
                            <li>Violation of this policy may result in immediate account suspension or termination.</li>
                        </ul>
                        
                        <h3>1.2 Professional Conduct</h3>
                        <ul>
                            <li>Technicians must maintain a high level of professionalism, punctuality, hygiene, and respect during all client interactions.</li>
                            <li>Failure to meet service standards consistently may lead to review or suspension of account privileges.</li>
                        </ul>

                        <h3>1.3 Complaint &amp; Performance Policy</h3>
                        <ul>
                            <li>Receiving five (5) or more verified customer complaints regarding service quality, conduct, or reliability may result in temporary suspension or permanent removal from the platform.</li>
                            <li>Each report will be carefully reviewed before any action is taken.</li>
                        </ul>

                        <h3>1.4 Brand Representation</h3>
                        <ul>
                            <li>As a VÉLOURA partner, you represent our brand in every client interaction.</li>
                            <li>Use only approved communication channels, respect client confidentiality, and uphold the highest standards of beauty and care excellence.</li>
                        </ul>

                        <h3>1.5 Insurance Requirement</h3>
                        <ul>
                            <li>Professional Cosmetology and Esthetician Liability Insurance is strongly recommended for all VÉLOURA service providers.</li>
                            <li>If a partner declines to carry active liability insurance or performs services without coverage, they are personally responsible for any claims, damages, or errors that occur as a result of their work.</li>
                            <li>VÉLOURA is not liable for incidents arising from uninsured services.</li>
                        </ul>

                        <h2><span className="font-bold">2. Booking &amp; Payment Policies</span></h2>
                        <h3>2.1 Customer Cancellations & Rescheduling</h3>
                        <ul>
                            <li>Clients may reschedule or cancel appointments up to 24 hours before the scheduled time without penalty.</li>
                            <li>Cancellations made within 24 hours are considered a no-show and are non-refundable.</li>
                            <li>All cancellations and rescheduling must be managed through the VÉLOURA app for proper tracking and notification.</li>
                        </ul>

                        <h3>2.2 Technician Cancellations &amp; No-Shows</h3>
                        <ul>
                            <li>Technicians must notify both the client and VÉLOURA at least 24 hours in advance if unable to complete a scheduled appointment.</li>
                            <li>Cancellations with less than 24 hours’ notice may result in temporary suspension or performance review.</li>
                            <li>Failure to appear for a confirmed appointment without notice will be treated as a no-show, and the client will receive a full refund.</li>
                        </ul>

                        <h3>2.3 Refund &amp; Dispute Procedure</h3>
                        <ul>
                            <li>All disputes or refund requests must be submitted within 48 hours of service completion.</li>
                            <li>VÉLOURA will review each case individually.</li>
                            <li>Refunds are issued only if there is verified evidence of service failure, misconduct, or scheduling error.</li>
                            <li>VÉLOURA reserves the right to make the final decision in all dispute cases.</li>
                        </ul>

                        <h2><span className="font-bold">3. Operational Policies</span></h2>
                        <h3>3.1 Dress Code &amp; Hygiene Standards</h3>
                        <p>All VÉLOURA professionals must maintain a clean, polished, and professional appearance while serving clients.</p>
                        <h4>Footwear:</h4>
                        <ul>
                            <li>No slippers or open-toe shoes are permitted during service.</li>
                            <li>Shoes must be clean, closed-toe, and professional.</li>
                        </ul>
                        <h4>Attire &amp; Cleanliness:</h4>
                        <ul>
                            <li>Clothing should be neat, pressed, and presentable.</li>
                            <li>Personal hygiene is essential — arrive well-groomed and fresh.</li>
                        </ul>
                        <h4>Protective Gear:</h4>
                        <ul>
                            <li><strong>Makeup Artists:</strong> Must wear a mask during all services.</li>
                            <li><strong>Nail Technicians:</strong> Gloves are mandatory during every service.</li>
                        </ul>

                        <h3>3.2 Code of Conduct</h3>
                        <p>All partners must:</p>
                        <ul>
                            <li>Treat clients and colleagues with respect, dignity, and professionalism.</li>
                            <li>Maintain a positive and courteous attitude at all times.</li>
                            <li>Follow all sanitation and cleanliness protocols.</li>
                            <li>Never discriminate based on race, gender, age, or background.</li>
                            <li>Be honest about skills, pricing, and services.</li>
                            <li>Never accept or request off-platform payments.</li>
                            <li>Avoid harassment, inappropriate conduct, or solicitation of clients outside VÉLOURA.</li>
                        </ul>

                        <h3>3.3 Confidentiality &amp; Client Privacy</h3>
                        <ul>
                            <li>All client information (contact, address, booking details, preferences) is strictly confidential.</li>
                            <li>Client data may not be copied, stored, or shared outside the app.</li>
                            <li>Photos or videos may only be taken or posted with the client’s written consent.</li>
                            <li>Breaches of privacy will result in review and possible termination.</li>
                        </ul>

                        <h3>3.4 Damage &amp; Incident Reporting</h3>
                        <p>If an injury, damage, or safety issue occurs during service:</p>
                        <ol>
                          <li>Stop the service immediately.</li>
                          <li>Provide first aid if necessary.</li>
                          <li>Report the incident to VÉLOURA within 24 hours using the app or support channel.</li>
                        </ol>
                        <p>Failure to report incidents promptly may result in suspension.</p>

                        <h2><span className="font-bold">4. Legal &amp; Liability Terms</span></h2>
                        <h3>4.1 Insurance &amp; Liability Disclaimer</h3>
                        <ul>
                            <li>All technicians are encouraged to maintain active professional liability insurance.</li>
                            <li>If a technician provides services without coverage, they accept full personal responsibility for any damages, claims, or injuries.</li>
                            <li>VÉLOURA assumes no liability for incidents resulting from uninsured services.</li>
                        </ul>

                        <h3>4.2 Non-Solicitation Clause</h3>
                        <ul>
                            <li>Technicians may not solicit or accept direct bookings or payments from VÉLOURA clients outside the app.</li>
                            <li>Violations will result in immediate and permanent removal and may lead to legal action.</li>
                        </ul>

                        <h3>4.3 Media &amp; Marketing Consent</h3>
                        <ul>
                            <li>VÉLOURA may request permission to use professional photos, testimonials, or event images for promotional or training purposes.</li>
                            <li>No content will be shared without written consent from the technician or client.</li>
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
