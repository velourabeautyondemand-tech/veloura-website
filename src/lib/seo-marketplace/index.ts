import { SEO_MARKETPLACE_NODES } from './registry';
import { SEONode, SEONodeType } from './types';

export function getSEONodeBySlug(type: SEONodeType, slug: string): SEONode | undefined {
  return SEO_MARKETPLACE_NODES.find(n => n.type === type && n.slug === slug && n.isPublished);
}

export function getAllPublishedSEONodes(): SEONode[] {
  return SEO_MARKETPLACE_NODES.filter(n => n.isPublished);
}

export function getPublishedSEONodesByType(type: SEONodeType): SEONode[] {
  return SEO_MARKETPLACE_NODES.filter(n => n.type === type && n.isPublished);
}
