export type SEONodeType = 'service' | 'venue' | 'occasion' | 'solution';

export interface SEONode {
  id: string;
  type: SEONodeType;
  slug: string;
  isPublished: boolean;
  metadata: {
    title: string;
    description: string;
  };
  content: {
    h1: string;
    intro: string;
    howItWorks: { title: string; text: string }[];
    faqs: { q: string; a: string }[];
  };
  cta: {
    label: string;
    href: string;
  };
}
