
import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Use the standard source of truth from src/app/lib/placeholder-images.json
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
