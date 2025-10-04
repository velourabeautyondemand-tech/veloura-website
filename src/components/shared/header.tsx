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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#technicians", label: "Find a Technician" },
  { href: "/#services", label: "Services" },
  { href: "/apply", label: "For Technicians" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <NailIcon className="h-6 w-6 text-primary" />
            <span className="font-bold inline-block font-headline">Nails On the Go</span>
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
            
            <Button variant="accent" asChild>
                <Link href="/admin">Admin Dashboard</Link>
            </Button>
            <Button asChild>
                <Link href="/technician/dashboard">Technician Dashboard</Link>
            </Button>
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
                  <NailIcon className="h-6 w-6 text-primary" />
                  <span className="font-bold">Nails On the Go</span>
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
                 
                <Button variant="accent" asChild>
                    <Link href="/admin">Admin Dashboard</Link>
                </Button>
                <Button asChild>
                    <Link href="/technician/dashboard">Technician Dashboard</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
