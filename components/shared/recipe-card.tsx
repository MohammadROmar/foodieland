import Link from 'next/link';
import Image from 'next/image';

import DurationAndCategory from '../shared/duration-and-category';
import type { Recipe } from '@/models/recipe';

type RecipeCardProps = Recipe & {
  hasBG?: boolean;
};

export default function RecipeCard({
  id,
  title,
  image,
  prepareTime,
  cookTime,
  category,
  hasBG,
}: RecipeCardProps) {
  const className = `w-full h-full grid rounded-3xl py-6 space-y-4${
    hasBG ? ' px-4 bg-linear-to-t from-light-blue to-transparent' : ''
  }`;

  return (
    <li className="flex-1 group">
      <Link href={`/${id}`} className={className}>
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={image}
              alt={`${title} recipe image.`}
              className="w-full object-center object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <h3 className="text-2xl max-sm:text-lg max-md:text-xl font-semibold line-clamp-2">
            {title}
          </h3>
        </div>

        <DurationAndCategory
          duration={prepareTime + cookTime}
          category={category}
        />
      </Link>
    </li>
  );
}
