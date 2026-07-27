
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { VÉLOURA_PROFESSIONALS } from '@/lib/talent-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Award, 
  ChevronRight, 
  Smartphone, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VÉLOURA_PROFESSIONALS.map((pro) => ({
    slug: pro.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pro = VÉLOURA_PROFESSIONALS.find((p) => p.slug === slug);

  if (!pro) return { title: 'Professional Not Found | VÉLOURA' };

  return {
    title: `${pro.firstName} ${pro.lastInitial} — ${pro.title} in ${pro.city} | VÉLOURA`,
    description: pro.description,
    alternates: {
      canonical: `https://velourabeautyondemand.com/talent-agency/professionals/${pro.slug}`,
    },
    openGraph: {
      title: `${pro.firstName} ${pro.lastInitial} | VÉLOURA Talent`,
      description: pro.description,
      type: 'profile',
      url: `https://velourabeautyondemand.com/talent-agency/professionals/${pro.slug}`,
    }
  };
}

export default async function ProfessionalProfilePage({ params }: Props) {
  const { slug } = await params;
  const pro = VÉLOURA_PROFESSIONALS.find((p) => p.slug === slug);

  if (!pro) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": `${pro.firstName} ${pro.lastInitial}`,
      "jobTitle": pro.title,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": pro.city,
        "addressRegion": pro.state
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-secondary/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-bold mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/talent-agency" className="hover:text-primary transition-colors">Talent Agency</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary">{pro.firstName} {pro.lastInitial}</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6 -ml-4 hover:bg-transparent text-muted-foreground hover:text-primary">
              <Link href="/talent-agency" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Directory
              </Link>
            </Button>

            <Card className="shadow-2xl border-primary/10 overflow-hidden">
              <div className="bg-primary h-32 md:h-48 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10">
                    <Sparkles className="h-full w-full p-8" />
                 </div>
              </div>
              <CardHeader className="relative -mt-16 flex flex-col md:flex-row md:items-end gap-6 px-8">
                <div className="flex justify-center md:justify-start">
                  <Avatar className="h-32 w-32 md:h-40 md:w-40 border-8 border-background shadow-xl bg-secondary/30">
                    <AvatarFallback className="text-4xl md:text-5xl font-bold font-headline text-primary">
                      {pro.firstName[0]}{pro.lastInitial[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center md:text-left flex-1 pb-4">
                  <h1 className="text-3xl md:text-4xl font-bold font-headline">{pro.firstName} {pro.lastInitial}</h1>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1">
                       <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
                       VÉLOURA Approved
                    </Badge>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">{pro.title}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-8 py-8 space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold font-headline border-b pb-2 flex items-center gap-2">
                         About {pro.firstName}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {pro.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                       <h2 className="text-xl font-bold font-headline border-b pb-2 flex items-center gap-2">
                         Market Details
                      </h2>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                           <div className="bg-primary/10 p-2 rounded-lg">
                              <MapPin className="h-5 w-5 text-primary" />
                           </div>
                           <div>
                              <p className="text-[10px] uppercase font-bold text-muted-foreground">Primary Service Area</p>
                              <p className="font-semibold">{pro.city}, {pro.state}</p>
                           </div>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="bg-primary/10 p-2 rounded-lg">
                              {pro.specialty === 'Photography' ? <Camera className="h-5 w-5 text-primary" /> : <Sparkles className="h-5 w-5 text-primary" />}
                           </div>
                           <div>
                              <p className="text-[10px] uppercase font-bold text-muted-foreground">Expertise</p>
                              <p className="font-semibold">{pro.specialty}</p>
                           </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <div className="bg-secondary/20 p-8 rounded-3xl border border-primary/10 text-center">
                      <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold font-headline mb-2">Verified Professional</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        This professional has completed VÉLOURA's identity and credential verification process.
                      </p>
                      <div className="bg-white/80 py-3 rounded-xl border border-dashed border-primary/20">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">On-File ID</p>
                         <p className="font-mono font-bold text-primary">{pro.maskedCredential}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                        <Button asChild className="w-full h-14 text-lg font-bold shadow-lg" size="lg">
                           <Link href="/book">Book on VÉLOURA</Link>
                        </Button>
                        <div className="flex flex-col items-center gap-3 pt-2">
                           <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Get the App</p>
                           <div className="flex justify-center items-center gap-4">
                              <a href="https://apps.apple.com/us/app/veloura-beauty-on-demand/id6757140381" target="_blank" rel="noopener noreferrer">
                                 <Smartphone className="h-6 w-6 text-primary hover:scale-110 transition-transform" />
                              </a>
                              <a href="https://play.google.com/store/apps/details?id=com.veloura.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                                 <Smartphone className="h-6 w-6 text-primary hover:scale-110 transition-transform" />
                              </a>
                           </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-2xl text-center">
                   <p className="text-xs text-muted-foreground italic">
                      Disclaimer: Professional services are performed at the location requested by the client. VÉLOURA ensures all pros are licensed and background-checked for your safety and satisfaction.
                   </p>
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
