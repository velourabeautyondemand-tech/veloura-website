
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VÉLOURA Beauty On-Demand — Flexible Careers & Earnings',
  description: 'Join VÉLOURA\'s on-demand beauty network. Flexible careers for licensed stylists, nail techs, MUAs—set your schedule, earn more. Apply today.',
  alternates: {
    canonical: 'https://velourabeautyondemand.com/beauty-professional-jobs',
  },
};

export default function BeautyProfessionalJobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
