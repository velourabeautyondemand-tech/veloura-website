
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VÉLOURA Brand Partnerships For Pros — Exclusive Discounts',
  description: 'VÉLOURA Pros unlock exclusive discounts, tools, and safety gear from top beauty brands for on-demand mobile services and partner collaborations.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/pro-discounts',
  },
};

export default function ProDiscountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
