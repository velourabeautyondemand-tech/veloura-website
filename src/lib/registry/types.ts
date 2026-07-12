
export type NodeType = 'service' | 'venue' | 'occasion' | 'solution' | 'location';

export interface MarketNode {
  id: string;
  type: NodeType;
  slug: string;
  isPublished: boolean;
  score: number;
  metadata: {
    title: string;
    description: string;
    ogImage?: string;
  };
  content: {
    h1: string;
    intro: string;
    howItWorks: { title: string; text: string }[];
    faqs: { q: string; a: string }[];
  };
  relationships: {
    relatedServiceIds: string[];
    relatedVenueIds: string[];
    relatedOccasionIds: string[];
    relatedSolutionIds: string[];
  };
}
