import Image from 'next/image';

import DurationAndCategory from '../shared/duration-and-category';
import type { Recipe as RecipeCardProps } from '@/models/recipe';

function RecipeCard({ title, image, duration, category }: RecipeCardProps) {
  return (
    <li className="rounded-3xl bg-gradient-to-t from-light-blue to-transparent px-4 py-6 space-y-4">
      <Image
        src={image}
        alt={`${title} recipe image.`}
        className="rounded-[inherit] w-full object-center object-cover"
      />

      <h3 className="text-2xl font-semibold">{title}</h3>

      <DurationAndCategory duration={duration} category={category} />
    </li>
  );
}

export default RecipeCard;
