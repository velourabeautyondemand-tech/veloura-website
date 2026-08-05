"use client";

import Link from "next/link";
import { Instagram, Youtube, Briefcase, ShieldCheck, MapPin } from "lucide-react";
import { NailIcon } from "./logo";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <NailIcon className="h-6 w-6" />
              <span className="font-bold text-lg font-headline">VÉLOURA</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              {t('footer.tagline')}
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
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4">{t('footer.marketplace')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations" className="text-primary font-bold hover:underline flex items-center gap-1"><MapPin className="w-3 h-3" /> All Locations</Link></li>
              <li><Link href="/services/senior-care" className="text-muted-foreground hover:text-primary transition-colors font-bold">Senior Care</Link></li>
              <li><Link href="/venues/hotels" className="text-muted-foreground hover:text-primary transition-colors">Hotel Beauty</Link></li>
              <li><Link href="/venues/home-service" className="text-muted-foreground hover:text-primary transition-colors">At-Home Salon</Link></li>
              <li><Link href="/occasions/weddings" className="text-muted-foreground hover:text-primary transition-colors">Wedding Glam</Link></li>
              <li><Link href="/store" className="text-muted-foreground hover:text-primary transition-colors font-bold text-primary">Shop Essentials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4">Top Markets</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/locations/beverly-hills" className="hover:text-primary transition-colors">Beverly Hills, CA</Link></li>
              <li><Link href="/locations/manhattan" className="hover:text-primary transition-colors">Manhattan, NY</Link></li>
              <li><Link href="/locations/miami" className="hover:text-primary transition-colors">Miami, FL</Link></li>
              <li><Link href="/locations/pasadena" className="hover:text-primary transition-colors">Pasadena, CA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/talent-agency" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.talent')}</Link></li>
              <li><Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors font-bold text-primary">{t('nav.apply')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-center sm:text-left">
            <p>&copy; {year} VÉLOURA Beauty on Demand. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 mt-4 sm:mt-0">
            <Link href="/support" className="hover:text-primary transition-colors">{t('footer.support')}</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
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