'use client';

import Image from 'next/image';

import { useRecipeContext } from '@/store/recipe-details/hooks';
import NutritionInformation from './nutrition-information';

export default function RecipeInfo() {
  const { recipe } = useRecipeContext();

  return (
    <div className="grid grid-cols-3 gap-8">
      <Image
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-full col-span-2 object-cover object-center rounded-3xl"
      />

      <NutritionInformation />
    </div>
  );
}
