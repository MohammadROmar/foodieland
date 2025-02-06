import { useContext } from 'react';

import { RecipeDetailsContext } from './recipe-details-context';

export function useRecipeContext() {
  const recipeDetailsCtx = useContext(RecipeDetailsContext);

  if (recipeDetailsCtx === null) {
    throw new Error('Context is null!');
  }

  return recipeDetailsCtx;
}
