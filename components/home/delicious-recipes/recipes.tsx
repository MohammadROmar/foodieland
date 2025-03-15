import RecipeCard from '@/components/shared/recipe-card';
import { deliciousRecipes } from '@/data/dummy/delicious-recipes';

export default function DeliciousRecipies() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {deliciousRecipes.map((recipe) => (
        <RecipeCard key={recipe.title} {...recipe} />
      ))}
    </ul>
  );
}
