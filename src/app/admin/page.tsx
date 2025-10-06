
"use client";

import Link from "next/link";
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
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartContainer,
  ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, DollarSign, Loader2, Bell } from "lucide-react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { cn } from "@/lib/utils";

const chartData = [
  { month: "January", revenue: 0, bookings: 0 },
  { month: "February", revenue: 0, bookings: 0 },
  { month: "March", revenue: 0, bookings: 0 },
  { month: "April", revenue: 0, bookings: 0 },
  { month: "May", revenue: 0, bookings: 0 },
  { month: "June", revenue: 0, bookings: 0 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  bookings: {
    label: "Bookings",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export default function AdminDashboardPage() {
  const firestore = useFirestore();

  const techniciansQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'technicians'));
  }, [firestore]);

  const bookingsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    // This is a placeholder as bookings collection does not exist yet
    return query(collection(firestore, 'bookings'));
  }, [firestore]);

  const pendingApplicationsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'technician_applications'), where('applicationStatus', '==', 'pending'));
  }, [firestore]);

  const { data: technicians, isLoading: techniciansLoading } = useCollection(techniciansQuery);
  const { data: bookings, isLoading: bookingsLoading } = useCollection(bookingsQuery);
  const { data: pendingApplicationsData, isLoading: pendingApplicationsLoading } = useCollection(pendingApplicationsQuery);

  const isLoading = techniciansLoading || bookingsLoading || pendingApplicationsLoading;

  const totalRevenue = bookings?.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.totalAmount, 0) || 0;
  const totalBookings = bookings?.length || 0;
  const totalTechnicians = technicians?.length || 0;
  const pendingApplications = pendingApplicationsData?.length || 0;

  // Note: Chart data is still static for this version.
  // A more complex implementation would be needed to aggregate Firestore data by month.

  return (
    <div className="space-y-6">
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
            <CardTitle className="text-sm font-medium">Active Technicians</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalTechnicians}</div>
             <p className="text-xs text-muted-foreground">Total registered technicians</p>
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

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the last 6 months (Static Data).</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <LineChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line dataKey="revenue" type="monotone" stroke="var(--color-revenue)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bookings Overview</CardTitle>
            <CardDescription>Monthly bookings for the last 6 months (Static Data).</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="bookings" fill="var(--color-bookings)" radius={4} />
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
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
                <TableHead>Technician ID</TableHead>
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
                  <TableCell className="text-right">${booking.totalAmount.toFixed(2)}</TableCell>
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
