import type { RefObject } from 'react';

import type { RecipeDetailsState } from './types';

export function recipeDetailsReducer(
  state: RecipeDetailsState,
  action: RefObject<HTMLElement | null>
): RecipeDetailsState {
  return { ...state, ref: action };
}
