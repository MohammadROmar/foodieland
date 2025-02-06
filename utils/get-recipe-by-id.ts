import { recipes } from '@/data/dummy/recipes';

export function getRecipeById(recipeId: string) {
  return recipes.find((recipe) => recipe.id === recipeId);
}
