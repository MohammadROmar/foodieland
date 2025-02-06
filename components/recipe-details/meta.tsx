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
      <h1 className="max-w-4xl text-5xl font-bold">{recipe.title}</h1>
      <div className="flex items-center divide-x-2">
        <div className="pr-8">
          <Author name={recipe.authorName} time={recipe.date} />
        </div>

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
  );
}
