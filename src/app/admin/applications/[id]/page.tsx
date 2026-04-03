'use client';

import { notFound, useRouter } from 'next/navigation';
import { useDoc, useFirestore, useMemoFirebase, updateDocumentNonBlocking, setDocumentNonBlocking } from '@/firebase';
import { doc } from 'firebase/firestore';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, Check, X, User, Mail, Phone, MapPin, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const applicationDocRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, 'technician_applications', params.id);
  }, [firestore, params.id]);

  const { data: application, isLoading, error } = useDoc(applicationDocRef);

  const handleUpdateStatus = (status: 'approved' | 'rejected') => {
    if (!applicationDocRef || !application || !firestore) return;

    if (status === 'approved') {
        const newTechnicianRef = doc(firestore, 'technicians', params.id);
        const { ...technicianData } = application;
        
        // Add to main technicians collection
        setDocumentNonBlocking(newTechnicianRef, {
            ...technicianData,
            applicationStatus: 'approved',
            id: params.id,
        }, {});
    }

    // Update the original application status
    updateDocumentNonBlocking(applicationDocRef, { applicationStatus: status });

    toast({
        title: `Application ${status}`,
        description: `The professional's application has been ${status}.`
    });

    router.push('/admin/applications');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (error) {
    return <p className="text-destructive">Error: {error.message}</p>;
  }

  if (!application) {
    return notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center justify-between">
          <span>Professional Application</span>
           <Badge variant={application.applicationStatus === 'approved' ? 'secondary' : application.applicationStatus === 'rejected' ? 'destructive' : 'default'}>
            {application.applicationStatus}
          </Badge>
        </CardTitle>
        <CardDescription>
          Review the details for {application.firstName} {application.lastName}.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
                <User className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h3 className="font-semibold">Full Name</h3>
                    <p className="text-muted-foreground">{application.firstName} {application.lastName}</p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">{application.email}</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h3 className="font-semibold">Phone Number</h3>
                    <p className="text-muted-foreground">{application.phone}</p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="text-muted-foreground">{application.serviceArea}</p>
                </div>
            </div>
            {application.socialMediaLink && (
              <div className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 mt-1 text-primary"/>
                  <div>
                      <h3 className="font-semibold">Social Media</h3>
                      <Link href={application.socialMediaLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                        {application.socialMediaLink}
                      </Link>
                  </div>
              </div>
            )}
        </div>
        <Separator/>
        <div>
            <h3 className="font-semibold mb-2">Uploaded Documents</h3>
            <p className="text-muted-foreground text-sm">
                Functionality to view uploaded license and resume files is not yet implemented.
            </p>
        </div>
      </CardContent>
      {application.applicationStatus === 'pending' && (
        <CardFooter className="flex justify-end gap-4">
            <Button variant="destructive" onClick={() => handleUpdateStatus('rejected')}>
                <X className="mr-2 h-4 w-4" />
                Reject
            </Button>
            <Button variant="accent" onClick={() => handleUpdateStatus('approved')}>
                <Check className="mr-2 h-4 w-4" />
                Approve
            </Button>
        </CardFooter>
      )}
    </Card>
  );
}
