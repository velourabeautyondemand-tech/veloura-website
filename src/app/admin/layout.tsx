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
import { Sprout, LayoutDashboard, Users, BookOpen, CreditCard, BarChart3, Settings, LogOut, UserCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const adminNavItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/applications", label: "Applications", icon: Users },
    { href: "/admin/bookings", label: "Bookings", icon: BookOpen },
    { href: "/admin/payments", label: "Payments", icon: CreditCard },
    { href: "/admin/reports", label: "Reports", icon: BarChart3 },
    { href: "/admin/services", label: "Services", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
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
              {adminNavItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href}>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
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
                <h1 className="text-xl font-semibold font-headline">Admin Dashboard</h1>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/admin/200/200" data-ai-hint="person face"/>
                    <AvatarFallback>A</AvatarFallback>
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
