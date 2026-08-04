
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On-Demand Photography Jobs for Pros | VÉLOURA',
  description: 'Join VÉLOURA\'s Creative Network for on-demand photography gigs—from glam sessions to corporate events. Apply today to start earning.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/join-as-photographer',
  },
};

export default function JoinAsPhotographerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
