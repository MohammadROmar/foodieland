import { StaticImageData } from 'next/image';

export type Recipe = {
  id: string;
  title: string;
  image: StaticImageData;
  authorName: string;
  date?: string;
  cookTime: number;
  prepareTime: number;
  category: string;
};
