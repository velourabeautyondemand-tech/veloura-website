export type SEONodeType = 'service' | 'venue' | 'occasion' | 'solution';

export interface SEONode {
  id: string;
  type: SEONodeType;
  slug: string;
  displayName: string;
  shortDescription: string;
  displayCategory: string; // Used for UI grouping and filtering
  filterCategory: 'beauty' | 'wedding-event' | 'creative' | 'venue' | 'solution';
  iconName?: string;
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
