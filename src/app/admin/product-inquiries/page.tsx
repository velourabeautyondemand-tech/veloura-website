
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
import { Badge } from '@/components/ui/badge';
import { Loader2, TrendingUp, DollarSign, ShoppingBag } from 'lucide-react';
import { format } from 'date-fns';

export default function ProductInquiriesPage() {
  const firestore = useFirestore();
  
  const inquiriesQuery = useMemoFirebase(() => {
      if (!firestore) return null;
      return query(collection(firestore, 'product_inquiries'), orderBy('submittedAt', 'desc'));
  }, [firestore]);

  const { data: inquiries, isLoading, error } = useCollection(inquiriesQuery);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-headline text-foreground">Restock Intelligence</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interest</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inquiries?.length || 0} Requests</div>
            <p className="text-xs text-muted-foreground">Across all out-of-stock items</p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Requested</CardTitle>
            <ShoppingBag className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold truncate">
                {inquiries && inquiries.length > 0 
                  ? inquiries.reduce((acc: any, curr: any) => {
                      acc[curr.productName] = (acc[curr.productName] || 0) + 1;
                      return acc;
                    }, {})[Object.keys(inquiries.reduce((acc: any, curr: any) => {
                      acc[curr.productName] = (acc[curr.productName] || 0) + 1;
                      return acc;
                    }, {})).reduce((a, b) => inquiries.reduce((acc: any, curr: any) => { acc[curr.productName] = (acc[curr.productName] || 0) + 1; return acc; }, {})[a] > inquiries.reduce((acc: any, curr: any) => { acc[curr.productName] = (acc[curr.productName] || 0) + 1; return acc; }, {})[b] ? a : b)]
                  : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">Product with highest demand</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Pulse</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active Survey</div>
            <p className="text-xs text-muted-foreground">Collecting price willingness data</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Restock Requests</CardTitle>
          <CardDescription>Direct feedback on price willingness and desired quantities.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {error && <p className="text-destructive">Error loading inquiries: {error.message}</p>}
          {!isLoading && !error && inquiries && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer Email</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-center">Price Willingness</TableHead>
                  <TableHead className="text-right">Date Submitted</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map(inquiry => (
                  <TableRow key={inquiry.id}>
                    <TableCell className="font-medium">{inquiry.email}</TableCell>
                    <TableCell>
                        <Badge variant="outline" className="font-bold border-primary/20 text-primary">
                            {inquiry.productName}
                        </Badge>
                    </TableCell>
                    <TableCell className="text-center">{inquiry.quantity}</TableCell>
                    <TableCell className="text-center">
                        <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                            {inquiry.priceWillingness}
                        </span>
                    </TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">
                      {format(new Date(inquiry.submittedAt), "MMM d, yyyy HH:mm")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
           {!isLoading && !error && (!inquiries || inquiries.length === 0) && (
              <div className="text-center py-20 border-2 border-dashed rounded-xl space-y-4">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto opacity-20" />
                  <p className="text-muted-foreground">No restock requests recorded yet. Your market data will appear here.</p>
              </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
