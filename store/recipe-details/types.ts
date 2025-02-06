import type { PropsWithChildren, RefObject } from 'react';

import type { Recipe } from '@/models/recipe';

export type RecipeDetailsState = {
  recipe: Recipe;
  ref: RefObject<HTMLElement | null> | undefined;
};

export type RecipeDetailsValue = RecipeDetailsState & {
  setRef(ref: RefObject<HTMLElement | null>): void;
};

export type RecipeDetailsContextProviderProps = PropsWithChildren & {
  recipe: Recipe;
};
