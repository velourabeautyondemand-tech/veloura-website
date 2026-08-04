
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Beauty Concierge - Find Makeup, Nails & Hair Services',
  description: 'Use the VÉLOURA AI Concierge to find the perfect professional for your event. Personalized recommendations for on-demand beauty services.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/match',
  },
};

export default function MatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
