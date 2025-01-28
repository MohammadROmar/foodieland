import { StaticImageData } from 'next/image';

export type Recipe = {
  image: StaticImageData;
  title: string;
  duration: number;
  category: string;
};
