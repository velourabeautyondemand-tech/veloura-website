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
            <NailIcon className="h-6 w-6" />
            <span className="font-bold text-lg font-headline">Beauty on the Go</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
             <Link href="https://www.instagram.com/beauty_on_the_go_group/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </nav>
          
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2">
            <p>&copy; {year} Beauty on the Go. All rights reserved.</p>
            <p className="text-xs">powered by iAmDreamMaker Production Group</p>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
