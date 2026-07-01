import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
