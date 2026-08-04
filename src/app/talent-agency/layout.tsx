
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VÉLOURA Talent Agency: Makeup Artists & Hairstylists',
  description: 'VÉLOURA Talent Agency connects brands with licensed, vetted makeup artists, hairstylists, and photographers for productions and events. Inquire about talent today.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/talent-agency',
  },
};

export default function TalentAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
