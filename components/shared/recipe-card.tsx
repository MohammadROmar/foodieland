import Image from 'next/image';

import DurationAndCategory from '../shared/duration-and-category';
import type { Recipe } from '@/models/recipe';

type RecipeCardProps = Recipe & {
  hasBG?: boolean;
};

export default function RecipeCard({
  title,
  image,
  duration,
  category,
  hasBG,
}: RecipeCardProps) {
  const className = `rounded-3xl py-6 space-y-4${
    hasBG ? ' px-4 bg-gradient-to-t from-light-blue to-transparent' : ''
  }`;

  return (
    <li className={className}>
      <Image
        src={image}
        alt={`${title} recipe image.`}
        className="rounded-[inherit] w-full object-center object-cover"
      />

      <h3 className="text-2xl font-semibold line-clamp-2">{title}</h3>

      <DurationAndCategory duration={duration} category={category} />
    </li>
  );
}
