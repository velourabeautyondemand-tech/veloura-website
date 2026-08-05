"use client"

import Link from "next/link"
import { Menu, Sparkles, ChevronDown, Scissors, Wand2, Hotel, Home, Heart, ShoppingBag } from "lucide-react"
import { useUser, useAuth, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { ACTIVE_SERVICES } from "@/lib/marketplace-data";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "./language-switcher";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NailIcon } from "./logo";

function UserNavButtons() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const { t } = useLanguage();
  const router = useRouter();

  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);
  
  const { data: userProfile } = useDoc<{role: string}>(userDocRef);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      router.push('/');
    });
  };

  if (isUserLoading) {
    return null;
  }

  if (!user) {
    return (
       <Button asChild variant="ghost">
          <Link href="/login">{t('nav.signIn')}</Link>
       </Button>
    )
  }

  return (
    <>
      {userProfile?.role === 'admin' && (
        <Button variant="accent" asChild>
          <Link href="/admin">Admin</Link>
        </Button>
      )}
      {userProfile?.role === 'technician' && (
        <Button asChild>
          <Link href="/technician/dashboard">Pro</Link>
        </Button>
      )}
      {userProfile?.role === 'customer' && (
         <Button asChild>
            <Link href="/customer">Me</Link>
        </Button>
      )}
      <Button onClick={handleSignOut} variant="outline" size="sm">Out</Button>
    </>
  )
}

export default function Header() {
  const { t } = useLanguage();
  
  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/services", label: t('nav.services'), hasDropdown: true },
    { href: "/match", label: t('nav.match'), icon: Sparkles },
    { href: "/store", label: t('nav.store'), icon: ShoppingBag },
    { href: "/talent-agency", label: t('nav.talent') },
    { href: "/apply", label: t('nav.apply') },
    { href: "/pro-discounts", label: t('nav.partners') },
    { href: "/blog", label: t('nav.blog') },
    { href: "/about", label: t('nav.about') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <NailIcon className="h-6 w-6" />
            <span className="font-bold inline-block font-headline text-lg">VÉLOURA</span>
          </Link>
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              link.hasDropdown ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1">
                    {link.label} <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[640px] p-6">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                                <Scissors className="w-3 h-3" /> Beauty Hubs
                            </h4>
                            <div className="flex flex-col gap-2">
                                <Link href="/services" className="hover:text-primary transition-colors font-bold">Overview</Link>
                                {ACTIVE_SERVICES.filter(s => s.slug !== 'senior-care').slice(0, 4).map(s => (
                                    <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-primary transition-colors text-foreground/70">{s.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                                <Wand2 className="w-3 h-3" /> Occasions & Venues
                            </h4>
                            <div className="flex flex-col gap-2 text-foreground/70">
                                <Link href="/occasions/weddings" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <Sparkles className="w-3 h-3" /> Wedding Glam
                                </Link>
                                <Link href="/venues/hotels" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <Hotel className="w-3 h-3" /> Hotel Service
                                </Link>
                                <Link href="/venues/home-service" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <Home className="w-3 h-3" /> At-Home Salon
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                                <Heart className="w-3 h-3" /> Personalized
                            </h4>
                            <div className="flex flex-col gap-2 text-foreground/70">
                                <Link href="/services/senior-care" className="hover:text-primary transition-colors font-bold">Senior Care</Link>
                                <Link href="/match" className="hover:text-primary transition-colors font-bold text-primary">AI Concierge</Link>
                            </div>
                        </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1.5"
                >
                  {link.icon && <link.icon className="w-3.5 h-3.5 text-primary" />}
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <LanguageSwitcher />
          <div className="hidden md:flex items-center space-x-4">
            <UserNavButtons />
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden ml-2"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center border-b pb-4">
                <Link href="/" className="flex items-center space-x-2">
                  <NailIcon className="h-6 w-6" />
                  <span className="font-bold font-headline">VÉLOURA</span>
                </Link>
              </div>
              <div className="flex-1 flex flex-col pt-6 space-y-4">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4 text-primary" />}
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 pt-6 border-t">
                 <UserNavButtons />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}