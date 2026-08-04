
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Beauty Gear & Gifts: Self-Care & Eyelashes',
  description: 'Shop VÉLOURA’s Etsy boutique for curated beauty gear, lashes, and self-care essentials. Secure checkout, fast shipping—browse the collection now.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/store',
  },
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
