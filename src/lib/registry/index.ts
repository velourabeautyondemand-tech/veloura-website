
import { MARKETPLACE_NODES } from './nodes';
import { MarketNode, NodeType } from './types';

export * from './types';
export * from './nodes';

export function getNodeBySlug(type: NodeType, slug: string): MarketNode | undefined {
  return MARKETPLACE_NODES.find(n => n.type === type && n.slug === slug && n.isPublished);
}

export function getPublishedNodesByType(type: NodeType): MarketNode[] {
  return MARKETPLACE_NODES.filter(n => n.type === type && n.isPublished && n.score >= 70);
}

export function getAllPublishedNodes(): MarketNode[] {
  return MARKETPLACE_NODES.filter(n => n.isPublished && n.score >= 70);
}
