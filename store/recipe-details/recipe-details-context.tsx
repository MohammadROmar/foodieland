'use client';

import { createContext, useReducer } from 'react';

import { recipeDetailsReducer } from './reducers';
import type {
  RecipeDetailsContextProviderProps,
  RecipeDetailsState,
  RecipeDetailsValue,
} from './types';

export const RecipeDetailsContext = createContext<RecipeDetailsValue | null>(
  null
);

export default function RecipeDetailsContextProvider({
  recipe,
  children,
}: RecipeDetailsContextProviderProps) {
  const initialState: RecipeDetailsState = {
    recipe,
    ref: undefined,
  };

  const [recipeDetailsState, dispatch] = useReducer(
    recipeDetailsReducer,
    initialState
  );

  const ctx: RecipeDetailsValue = {
    recipe: recipeDetailsState.recipe,
    ref: recipeDetailsState.ref,
    setRef(ref) {
      dispatch(ref);
    },
  };

  return (
    <RecipeDetailsContext.Provider value={ctx}>
      {children}
    </RecipeDetailsContext.Provider>
  );
}
