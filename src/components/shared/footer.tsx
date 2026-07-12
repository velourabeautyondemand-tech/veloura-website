
import Link from "next/link";
import { Instagram, Youtube, Briefcase, ShieldCheck } from "lucide-react";
import { NailIcon } from "./logo";
import { ACTIVE_SERVICES, ACTIVE_LOCATIONS } from "@/lib/marketplace-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <NailIcon className="h-6 w-6" />
              <span className="font-bold text-lg font-headline">VÉLOURA Beauty on Demand</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              The on-demand marketplace connecting you with elite beauty and lifestyle professionals for appointments wherever you are.
            </p>
            <div className="flex items-center gap-4">
               <Link href="https://www.instagram.com/veloura_beauty_x?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.youtube.com/@V%C3%89LOURABeautyonDemand" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.indeed.com/cmp/Veloura-Beauty-On-Demand" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Briefcase className="h-5 w-5" />
                  <span className="sr-only">Indeed</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/venues/hotels" className="text-muted-foreground hover:text-primary transition-colors">Hotel Beauty</Link></li>
              <li><Link href="/venues/home-service" className="text-muted-foreground hover:text-primary transition-colors">At-Home Salon</Link></li>
              <li><Link href="/occasions/weddings" className="text-muted-foreground hover:text-primary transition-colors">Wedding Glam</Link></li>
              <li><Link href="/solutions/seniors" className="text-muted-foreground hover:text-primary transition-colors">Senior Care</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors font-bold">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4">Our Markets</h3>
            <ul className="space-y-2 text-sm">
              {ACTIVE_LOCATIONS.map(l => (
                <li key={l.slug}><Link href={`/locations/${l.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/talent-agency" className="text-muted-foreground hover:text-primary transition-colors">Talent Agency</Link></li>
              <li><Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors font-bold text-primary">Join Our Team</Link></li>
              <li><Link href="/partner-press" className="text-muted-foreground hover:text-primary transition-colors">Partner / Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-center sm:text-left">
            <p>&copy; {year} VÉLOURA Beauty on Demand. All rights reserved.</p>
            <p className="text-xs">powered by iAmDreamMaker Production Group</p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 mt-4 sm:mt-0">
            <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <a href="https://www.dnb.com/business-directory/company-profiles.iamdreammaker_production_group_llc.f54604e6691278f60393f51e1c9ef37e.html?referrer=DRS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <ShieldCheck className="h-4 w-4" />
              <span>D&B Verified</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
