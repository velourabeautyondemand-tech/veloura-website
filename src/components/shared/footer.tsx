import Link from "next/link";
import { Instagram, Youtube, Briefcase, ShieldCheck } from "lucide-react";
import { NailIcon } from "./logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <NailIcon className="h-6 w-6" />
            <span className="font-bold text-lg font-headline">VÉLOURA Beauty on Demand</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center space-x-6 text-sm font-medium">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link>
            <Link href="/talent-agency" className="text-muted-foreground hover:text-primary transition-colors">Talent Agency</Link>
            <Link href="/pro-discounts" className="text-muted-foreground hover:text-primary transition-colors">Our Partners</Link>
            <Link href="/hotel-partners" className="text-muted-foreground hover:text-primary transition-colors">Hotel Partnerships</Link>
            <Link href="/vendor-partners" className="text-muted-foreground hover:text-primary transition-colors">Vendor Partners</Link>
            <Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
            <Link href="/partner-press" className="text-muted-foreground hover:text-primary transition-colors">Partner / Press</Link>
            
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
          </nav>
          
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-center sm:text-left">
            <p>&copy; {year} VÉLOURA Beauty on Demand. All rights reserved.</p>
            <p className="text-xs">powered by iAmDreamMaker Production Group</p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 mt-4 sm:mt-0">
            <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/partner-agreement" className="hover:text-primary transition-colors">Partner Agreement</Link>
            <a href="https://www.dnb.com/business-directory/company-profiles.iamdreammaker_production_group_llc.f54604e6691278f60393f51e1c9ef37e.html?referrer=DRS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <ShieldCheck className="h-4 w-4" />
              <span>Dun & Bradstreet</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
