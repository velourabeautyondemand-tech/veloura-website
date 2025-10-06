
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { technicians } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Upload } from 'lucide-react';

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  bio: z.string().max(300, {
    message: 'Bio must not be longer than 300 characters.',
  }),
  profileImage: z.any(),
});

export default function EditTechnicianProfilePage() {
  const technician = technicians[0];
  const techAvatar = PlaceHolderImages.find(p => p.id === technician.avatarId);

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: technician.name,
      bio: technician.bio,
    },
  });

  const profileImageRef = form.register("profileImage");

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
    // Here you would handle form submission, e.g., to a backend or state management
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>
          Make changes to your profile here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24">
                  {techAvatar && <AvatarImage src={techAvatar.imageUrl} alt={technician.name} data-ai-hint={techAvatar.imageHint}/>}
                  <AvatarFallback className="text-3xl">{technician.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <FormField
                  control={form.control}
                  name="profileImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Update Profile Photo</FormLabel>
                      <FormControl>
                        <div className="relative">
                            <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input type="file" {...profileImageRef} className="pl-10 file:text-primary file:font-medium" />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Upload a new photo for your profile.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your bio will be displayed on your public profile.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save Changes</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
