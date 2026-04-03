
'use client';

import Link from 'next/link';
import { bookings } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import { useUser } from '@/firebase';

export default function ProfessionalDashboardPage() {
    const { user } = useUser();
    const techId = user?.uid || "1"; 
    
    const upcomingJobs = bookings.filter(b => b.technicianId === techId && b.status === 'upcoming');
    const pastJobs = bookings.filter(b => b.technicianId === techId && b.status !== 'upcoming');

    const JobsTable = ({ jobs }: { jobs: typeof bookings }) => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {jobs.map(job => (
                    <TableRow key={job.id}>
                        <TableCell>
                            <div>{new Date(job.date).toLocaleDateString()}</div>
                            <div className="text-xs text-muted-foreground">{job.time}</div>
                        </TableCell>
                        <TableCell>{job.customerName}</TableCell>
                        <TableCell>{job.serviceName}</TableCell>
                        <TableCell>
                            <Badge variant={job.status === 'completed' ? 'secondary' : job.status === 'cancelled' ? 'destructive' : 'default'}>
                                {job.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                           <Button asChild variant="outline" size="icon">
                                <Link href={`/technician/jobs/${job.id}`}>
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View Job</span>
                                </Link>
                           </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>My Jobs</CardTitle>
                <CardDescription>Manage your upcoming and past appointments.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="upcoming">
                    <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                        <TabsTrigger value="upcoming">Upcoming Jobs</TabsTrigger>
                        <TabsTrigger value="past">Job History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="mt-4">
                        {upcomingJobs.length > 0 ? <JobsTable jobs={upcomingJobs} /> : <p className="text-muted-foreground text-center py-10">No upcoming jobs.</p>}
                    </TabsContent>
                    <TabsContent value="past" className="mt-4">
                        {pastJobs.length > 0 ? <JobsTable jobs={pastJobs} /> : <p className="text-muted-foreground text-center py-10">No past jobs.</p>}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
