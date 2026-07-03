
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, DollarSign, Loader2, Bell, Database, RefreshCw, CheckCircle } from "lucide-react";
import { useCollection, useFirestore, useMemoFirebase, setDocumentNonBlocking } from "@/firebase";
import { collection, query, where, doc } from "firebase/firestore";
import { cn } from "@/lib/utils";
import { services as staticServices, technicians as staticTechs } from "@/lib/data";

export default function AdminDashboardPage() {
  const firestore = useFirestore();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);

  const professionalsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'technicians'));
  }, [firestore]);

  const bookingsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'bookings'));
  }, [firestore]);

  const pendingApplicationsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'technician_applications'), where('applicationStatus', '==', 'pending'));
  }, [firestore]);

  const { data: professionals, isLoading: professionalsLoading } = useCollection(professionalsQuery);
  const { data: bookings, isLoading: bookingsLoading } = useCollection(bookingsQuery);
  const { data: pendingApplicationsData, isLoading: pendingApplicationsLoading } = useCollection(pendingApplicationsQuery);

  const isLoading = professionalsLoading || bookingsLoading || pendingApplicationsLoading;

  const totalRevenue = bookings?.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.totalAmount, 0) || 0;
  const totalBookings = bookings?.length || 0;
  const totalProfessionals = professionals?.length || 0;
  const pendingApplications = pendingApplicationsData?.length || 0;

  const handleSyncData = async () => {
    if (!firestore) return;
    setIsSyncing(true);
    try {
      // Sync Services
      staticServices.forEach((service) => {
        const serviceRef = doc(firestore, 'services', service.id);
        setDocumentNonBlocking(serviceRef, service, { merge: true });
      });

      // Sync Technicians (Approved)
      staticTechs.forEach((tech) => {
        const techRef = doc(firestore, 'technicians', tech.id);
        setDocumentNonBlocking(techRef, {
          ...tech,
          applicationStatus: 'approved'
        }, { merge: true });
      });

      setSyncDone(true);
      setTimeout(() => setSyncDone(false), 3000);
    } catch (e) {
      console.error("Sync Error:", e);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-headline">Overview</h2>
        <Button 
          variant="outline" 
          onClick={handleSyncData} 
          disabled={isSyncing}
          className={cn(syncDone && "border-green-500 text-green-600")}
        >
          {isSyncing ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : syncDone ? <CheckCircle className="mr-2 h-4 w-4" /> : <Database className="mr-2 h-4 w-4" />}
          {isSyncing ? "Syncing..." : syncDone ? "System Synced" : "Sync Static Data"}
        </Button>
      </div>

       {isLoading && (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4">Loading dashboard data...</p>
          </div>
        )}

      {!isLoading && (
      <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Based on completed bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalBookings}</div>
            <p className="text-xs text-muted-foreground">All time bookings</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Professionals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalProfessionals}</div>
             <p className="text-xs text-muted-foreground">Total registered professionals</p>
          </CardContent>
        </Card>
        <Link href="/admin/applications">
          <Card className={cn(
            "transition-all hover:shadow-lg",
            pendingApplications > 0 && "bg-primary/10 border-primary animate-pulse"
            )}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Applications</CardTitle>
              <Bell className={cn("h-4 w-4 text-muted-foreground", pendingApplications > 0 && "text-primary")} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{pendingApplications}</div>
              <p className="text-xs text-muted-foreground">Pending review</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>An overview of the most recent bookings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer ID</TableHead>
                <TableHead>Professional ID</TableHead>
                <TableHead>Service ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings?.slice(0, 5).map(booking => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs">{booking.customerId}</TableCell>
                  <TableCell className="font-mono text-xs">{booking.technicianId}</TableCell>
                  <TableCell className="font-mono text-xs">{booking.serviceId}</TableCell>
                  <TableCell>
                    <Badge variant={booking.status === 'completed' ? 'secondary' : booking.status === 'cancelled' ? 'destructive' : 'default'}>{booking.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">${booking.totalAmount?.toFixed(2) || '0.00'}</TableCell>
                </TableRow>
              ))}
               {(!bookings || bookings.length === 0) && (
                <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-10">No bookings found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </>
      )}
    </div>
  );
}
