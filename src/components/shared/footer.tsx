import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";
import { NailIcon } from "./logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <NailIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Nails On the Go</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {year} Nails On the Go. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
