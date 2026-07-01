import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/partner-press',
  },
};

export default function PartnerPressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
