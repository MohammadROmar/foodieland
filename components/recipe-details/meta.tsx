'use client';

import { useRecipeContext } from '@/store/recipe-details/hooks';
import Author from '../shared/author';
import RecipeInfo from './info';
import TimerIcon from '@/assets/icons/timer';
import ForkKnifeIcon from '@/assets/icons/fork-knife';

export default function RecipeMeta() {
  const { recipe } = useRecipeContext();

  return (
    <div className="space-y-8">
      <h1 className="max-w-4xl title">{recipe.title}</h1>

      <div className="flex max-md:flex-col max-md:gap-4 md:items-center md:divide-x-2">
        <div className="pr-8">
          <Author name={recipe.authorName} time={recipe.date} />
        </div>

        <div className="flex flex-wrap items-center gap-y-2 sm:divide-x-2 max-md:-translate-x-8">
          <RecipeInfo
            icon={TimerIcon}
            label="prep time"
            value={`${recipe.prepareTime} Minutes`}
          />
          <RecipeInfo
            icon={TimerIcon}
            label="cook time"
            value={`${recipe.cookTime} Minutes`}
          />
          <RecipeInfo icon={ForkKnifeIcon} value={recipe.category} />
        </div>
      </div>
    </div>
  );
}
