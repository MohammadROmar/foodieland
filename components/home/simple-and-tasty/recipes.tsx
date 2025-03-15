import RecipeCard from '@/components/shared/recipe-card';
import { simpleAndTastyRecipes } from '@/data/dummy/simple-and-tasty-recipes';

export default function SimpleAndTastyRecipes() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
      {simpleAndTastyRecipes.map((recipe) => (
        <RecipeCard key={recipe.title} {...recipe} hasBG />
      ))}
    </ul>
  );
}
