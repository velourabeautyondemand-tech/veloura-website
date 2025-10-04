"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Sprout, Briefcase, Calendar, DollarSign, User, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { technicians } from "@/lib/data";

const techNavItems = [
    { href: "/technician/dashboard", label: "Jobs", icon: Briefcase },
    { href: "/technician/schedule", label: "Availability", icon: Calendar },
    { href: "/technician/earnings", label: "Earnings", icon: DollarSign },
    { href: "/technician/profile", label: "Profile", icon: User },
];

export default function TechnicianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentTech = technicians[0]; // mock current technician
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar>
          <SidebarHeader>
             <Link href="/" className="flex items-center gap-2">
                <Sprout className="w-6 h-6 text-primary" />
                <span className="font-semibold font-headline text-lg">Nails On the Go</span>
             </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {techNavItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href}>
                    <SidebarMenuButton
                      isActive={pathname.startsWith(item.href)}
                      tooltip={item.label}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
             <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Logout">
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
             </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1 flex flex-col">
            <header className="flex h-16 items-center justify-between border-b px-6">
                <div className="md:hidden">
                    <SidebarTrigger />
                </div>
                <h1 className="text-xl font-semibold font-headline">Technician Dashboard</h1>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/tech1/200/200" data-ai-hint="woman portrait" />
                    <AvatarFallback>{currentTech.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </header>
            <main className="flex-1 overflow-y-auto p-6 bg-secondary/30">
              {children}
            </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
