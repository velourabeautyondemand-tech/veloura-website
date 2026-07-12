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
import { BookOpen, User, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NailIcon } from "@/components/shared/logo";
import { useAuth, useUser, useDoc, useFirestore, useMemoFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { AuthRequired } from "@/components/auth-required";
import { doc } from 'firebase/firestore';

const customerNavItems = [
    { href: "/customer", label: "Dashboard", icon: User },
    { href: "/bookings", label: "My Bookings", icon: BookOpen },
];

function CustomerLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const auth = useAuth();
  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: userProfile } = useDoc(userDocRef);

  const handleLogout = () => {
    auth.signOut().then(() => {
      router.push('/login');
    });
  };
  
  const fallbackInitial = userProfile?.firstName ? userProfile.firstName.charAt(0) : userProfile?.email?.charAt(0) || 'C';
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar>
          <SidebarHeader>
             <Link href="/" className="flex items-center gap-2">
                <NailIcon className="w-6 h-6" />
                <span className="font-semibold font-headline text-lg tracking-tight">VÉLOURA Beauty on Demand</span>
             </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {customerNavItems.map((item) => (
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
                    <Link href="/customer/profile">
                        <SidebarMenuButton tooltip="Profile" isActive={pathname.startsWith('/customer/profile')}>
                            <User className="w-5 h-5" />
                            <span>Profile</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Logout" onClick={handleLogout}>
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
                <h1 className="text-xl font-semibold font-headline">Customer Dashboard</h1>
                <Avatar>
                    <AvatarImage src={userProfile?.profileImageUrl || `https://picsum.photos/seed/${user?.uid}/200/200`} data-ai-hint="person face"/>
                    <AvatarFallback>{fallbackInitial}</AvatarFallback>
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


export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthRequired>
      <CustomerLayoutContent>{children}</CustomerLayoutContent>
    </AuthRequired>
  )
}
