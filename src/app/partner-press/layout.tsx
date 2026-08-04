
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner With VÉLOURA: Luxury Beauty Suppliers',
  description: 'Collaborate with VÉLOURA. We partner with elite brands and suppliers to bring the best products to our on-demand beauty network. Contact our press team.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/partner-press',
  },
};

export default function PartnerPressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
