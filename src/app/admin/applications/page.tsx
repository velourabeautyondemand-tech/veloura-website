'use client';

import { useCollection, useMemoFirebase } from '@/firebase';
import { collection, query } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationsPage() {
  const firestore = useFirestore();
  
  const techniciansQuery = useMemoFirebase(() => {
      if (!firestore) return null;
      return query(collection(firestore, 'technicians'));
  }, [firestore]);

  const { data: applications, isLoading, error } = useCollection(techniciansQuery);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Technician Applications</CardTitle>
        <CardDescription>Review and manage technician applications.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        {error && <p className="text-destructive">Error loading applications: {error.message}</p>}
        {!isLoading && !error && applications && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map(app => (
                <TableRow key={app.id}>
                  <TableCell>{app.firstName} {app.lastName}</TableCell>
                  <TableCell>{app.email}</TableCell>
                  <TableCell>
                    <Badge variant={app.applicationStatus === 'approved' ? 'secondary' : app.applicationStatus === 'rejected' ? 'destructive' : 'default'}>
                      {app.applicationStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/applications/${app.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
         {!isLoading && !error && (!applications || applications.length === 0) && (
            <p className="text-center text-muted-foreground py-10">No applications found.</p>
        )}
      </CardContent>
    </Card>
  );
}
