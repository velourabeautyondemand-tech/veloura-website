
import { NailIcon } from '@/components/shared/logo';
import { Mail, Phone, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PartnerAgreementPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-3xl">Partner Handbook</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="prose lg:prose-lg max-w-none">
                    
                    <div className="text-center mb-12">
                        <NailIcon className="h-16 w-16 mx-auto text-primary" />
                        <h1 className="font-headline text-4xl mt-4">Partner Handbook & Onboarding Policy Agreement</h1>
                        <p className="lead text-muted-foreground">VÉLOURA – Beauty on Demand</p>
                        <p className="text-sm text-muted-foreground">Powered by iAmDreamMaker Production Group</p>
                    </div>

                    <div className="not-prose bg-muted/50 rounded-lg p-6 mb-8 text-sm">
                        <h3 className="font-bold text-lg mb-4 text-center">Contact Information</h3>
                        <div className="flex flex-col md:flex-row justify-around items-center gap-4 text-muted-foreground">
                            <a href="mailto:info@iamdreammaker.com" className="flex items-center gap-2 hover:text-primary">
                                <Mail className="w-5 h-5" />
                                <span>info@iamdreammaker.com</span>
                            </a>
                            <a href="tel:+13239897788" className="flex items-center gap-2 hover:text-primary">
                                <Phone className="w-5 h-5" />
                                <span>(323) 989-7788</span>
                            </a>
                            <a href="https://studio.firebase.google.com/project/studio-8096841563-8bcb9/overview" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                                <Globe className="w-5 h-5" />
                                <span>VÉLOURA Platform</span>
                            </a>
                        </div>
                    </div>

                    <h2>Introduction & Mission</h2>
                    <p>Welcome to VÉLOURA. This handbook outlines the policies and standards that define our partnership. Our mission is to provide safe, convenient, and high-quality beauty services, and as a partner, you are a crucial part of that mission. All Beauty on Demand appointments must be performed at the client’s chosen location. Referring or redirecting clients to personal salons or external businesses is not permitted under our platform agreement.</p>

                    <h2>Core Partner Policies</h2>
                    <ol>
                        <li><strong>Payment Policy:</strong> All payments for services must be processed exclusively through the VÉLOURA platform. Accepting, requesting, or arranging payments outside the app (including cash, personal transfers, or third-party apps) is strictly prohibited. Violation of this policy may result in immediate account suspension or termination.</li>
                        <li><strong>Professional Conduct:</strong> Technicians are expected to maintain a high level of professionalism, punctuality, hygiene, and respect during all client interactions. Consistent failure to meet service standards may lead to review or suspension of account privileges.</li>
                        <li><strong>Complaint & Performance Policy:</strong> Receiving five (5) or more verified customer complaints regarding service quality, conduct, or reliability may result in temporary suspension or permanent removal from the platform. Each report will be reviewed carefully before any action is taken.</li>
                        <li><strong>Brand Representation:</strong> As a VÉLOURA partner, you represent our brand in every client interaction. Please use only approved communication channels, respect confidentiality, and uphold our standards of beauty and care excellence.</li>
                        <li><strong>Insurance Requirement:</strong> Professional Cosmetology and Esthetician Liability Insurance is strongly recommended for all VÉLOURA service providers. If a partner declines to carry active liability insurance or chooses to perform services without coverage, they will be personally responsible for any claims, damages, or errors that occur as a result of their work. VÉLOURA is not liable for incidents arising from uninsured services.</li>
                    </ol>

                    <h2>Booking & Payment Policies</h2>
                    <h4>Customer Cancellations & Rescheduling</h4>
                    <ul>
                        <li>Clients may reschedule or cancel appointments up to 24 hours before the scheduled time without penalty.</li>
                        <li>Cancellations made within 24 hours of the appointment are considered a no-show and non-refundable.</li>
                        <li>All cancellations and rescheduling must be done through the VÉLOURA app to ensure tracking and proper notification.</li>
                    </ul>
                    <h4>Technician Cancellations & No-Show</h4>
                    <ul>
                        <li>Technicians must notify both the client and VÉLOURA at least 24 hours in advance if they are unable to complete a scheduled appointment.</li>
                        <li>Cancellations with less than 24 hours’ notice may result in a temporary suspension or performance review.</li>
                        <li>If a technician fails to appear for a confirmed appointment without valid notice, it will be treated as a no-show, and the client will receive a full refund.</li>
                    </ul>
                    
                    <h2>Refund & Dispute Procedure</h2>
                    <ul>
                        <li>All payment disputes or refund requests must be submitted within 48 hours of service completion.</li>
                        <li>VÉLOURA will investigate each case individually.</li>
                        <li>Refunds are only issued if there is verified evidence of service failure, misconduct, or a legitimate scheduling error.</li>
                        <li>VÉLOURA reserves the right to make the final decision in all dispute cases.</li>
                    </ul>

                    <h2>Operational Policies</h2>
                    <h4>Dress Code</h4>
                    <p>All VÉLOURA beauty professionals are expected to maintain a clean, polished, and professional appearance at all times when serving clients.</p>
                    <ul>
                        <li><strong>Footwear:</strong> No slippers or open-toe shoes are permitted during service. Shoes must be clean and professional.</li>
                        <li><strong>Attire & Cleanliness:</strong> Clothing should be neat and presentable. Personal hygiene is essential.</li>
                        <li><strong>Protective Gear:</strong> Makeup Artists must wear a mask during all services. Nail Technicians must wear gloves during every service.</li>
                    </ul>

                    <h2>Code of Conduct</h2>
                    <p>All partners are expected to:</p>
                    <ul>
                        <li>Treat every client and colleague with respect, dignity, and professionalism.</li>
                        <li>Maintain a positive, respectful attitude.</li>
                        <li>Follow all sanitation and cleanliness protocols.</li>
                        <li>Never discriminate based on race, gender, age, or background.</li>
                        <li>Be honest about skills, prices, and services.</li>
                        <li>Never accept or request payments outside the VÉLOURA platform.</li>
                        <li>Avoid any form of harassment, discrimination, or inappropriate behavior.</li>
                        <li>Refrain from using personal contact information or social media to solicit clients outside of the VÉLOURA platform.</li>
                    </ul>
                    
                    <h2>Confidentiality & Client Privacy</h2>
                    <ul>
                        <li>All client information (contact, address, booking details, preferences) is strictly confidential. Partners may not share, copy, or retain client data outside the app.</li>
                        <li>Photos or videos of clients may only be taken or shared with explicit written consent from the client.</li>
                        <li>Any breach of privacy will result in immediate review and potential termination from the platform.</li>
                    </ul>

                    <h2>Damage & Incident Reporting</h2>
                    <p>If any injury, damage, or safety concern occurs during a service, the technician must stop the service immediately, provide basic first aid if necessary, and report the incident to VÉLOURA within 24 hours. Failure to report incidents in a timely manner may result in account suspension.</p>
                    
                    <h2>Legal & Liability Terms</h2>
                    <h4>Insurance & Liability Disclaimer</h4>
                    <p>All VÉLOURA technicians are strongly encouraged to maintain active professional liability insurance. If a technician provides a service without coverage, they accept full personal responsibility for any damage, claim, or client injury arising from their work. VÉLOURA is not liable for any incident, injury, or property damage resulting from uninsured services.</p>
                    <h4>Non-Solicitation Clause</h4>
                    <p>Technicians may not solicit or accept direct bookings or payments from VÉLOURA clients outside of the app. Violating this rule may result in immediate and permanent removal from the platform and possible legal action.</p>
                    <h4>Media & Marketing Consent</h4>
                    <p>VÉLOURA may request permission to use professional photos, testimonials, or event images for marketing or training purposes. No content will be published without written consent from the technician or client involved.</p>

                </div>
            </CardContent>
        </Card>
    );
}
