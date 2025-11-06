
'use client';

import { useCollection, useMemoFirebase, useFirestore } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
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
import { Loader2 } from 'lucide-react';
import { format } from 'date-fns';

export default function SubscribersPage() {
  const firestore = useFirestore();
  
  const subscribersQuery = useMemoFirebase(() => {
      if (!firestore) return null;
      return query(collection(firestore, 'subscribers'), orderBy('subscribedAt', 'desc'));
  }, [firestore]);

  const { data: subscribers, isLoading, error } = useCollection(subscribersQuery);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscribers</CardTitle>
        <CardDescription>Users who have subscribed for news and updates.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        {error && <p className="text-destructive">Error loading subscribers: {error.message}</p>}
        {!isLoading && !error && subscribers && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Subscription Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.map(sub => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium">{sub.email}</TableCell>
                  <TableCell className="text-right">
                    {format(new Date(sub.subscribedAt), "PPP")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
         {!isLoading && !error && (!subscribers || subscribers.length === 0) && (
            <p className="text-center text-muted-foreground py-10">No subscribers found.</p>
        )}
      </CardContent>
    </Card>
  );
}
