import { notFound } from 'next/navigation';

import { getRecipeById } from '@/utils/get-recipe-by-id';
import RecipeDetailsHeader from '@/components/recipe-details/header';
import RecipeDetailsContextProvider from '@/store/recipe-details/recipe-details-context';

type RecipeDetailsPageProps = { params: Promise<{ recipeId: string }> };

async function RecipeDetailsPage({ params }: RecipeDetailsPageProps) {
  const { recipeId } = await params;
  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    return notFound();
  }

  return (
    <RecipeDetailsContextProvider recipe={recipe}>
      <RecipeDetailsHeader />
    </RecipeDetailsContextProvider>
  );
}

export default RecipeDetailsPage;
