import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import RecipeDetailsContextProvider from '@/store/recipe-details/recipe-details-context';
import RecipeDetailsHeader from '@/components/recipe-details/header';
import { getRecipeById } from '@/utils/get-recipe-by-id';

export type RecipeDetailsPageProps = { params: Promise<{ recipeId: string }> };

export async function generateMetadata({
  params,
}: RecipeDetailsPageProps): Promise<Metadata> {
  const { recipeId } = await params;
  const recipe = getRecipeById(recipeId);

  return { title: recipe?.title };
}

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
