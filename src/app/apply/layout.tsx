import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/apply',
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
