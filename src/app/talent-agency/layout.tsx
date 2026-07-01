import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/talent-agency',
  },
};

export default function TalentAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
