"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NailIcon } from "./logo";
import { useUser, useAuth } from "@/firebase";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/apply", label: "For Technicians" },
  { href: "/about", label: "Our Story" },
];

export default function Header() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      router.push('/login');
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <NailIcon className="h-6 w-6" />
            <span className="font-bold inline-block font-headline">Beauty on the Go</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
            {!isUserLoading && !user && (
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
            )}
             {!isUserLoading && user && (
              <>
                <Button variant="accent" asChild>
                    <Link href="/admin">Admin Dashboard</Link>
                </Button>
                <Button asChild>
                    <Link href="/technician/dashboard">Technician Dashboard</Link>
                </Button>
                <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
              </>
            )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center border-b pb-4">
                <Link href="/" className="flex items-center space-x-2">
                  <NailIcon className="h-6 w-6" />
                  <span className="font-bold">Beauty on the Go</span>
                </Link>
              </div>
              <div className="flex-1 flex flex-col pt-6 space-y-4">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 pt-6 border-t">
                 {!isUserLoading && !user && (
                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                 )}
                 {!isUserLoading && user && (
                    <>
                        <Button variant="accent" asChild>
                            <Link href="/admin">Admin Dashboard</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/technician/dashboard">Technician Dashboard</Link>
                        </Button>
                        <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
                    </>
                 )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
