
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VÉLOURA Beauty Events & Exclusive Networking Seminars',
  description: 'Join VÉLOURA for exclusive beauty industry events, networking opportunities, and professional recruitment seminars across major cities.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
