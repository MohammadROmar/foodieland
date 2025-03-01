import RecipeCard from '../recipe-card';
import { deliciousRecipes } from '@/data/dummy/delicious-recipes';

export default function RecipeSuggestion() {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold">Check out the delicious recipes</h2>

      <ul className="flex gap-8">
        {deliciousRecipes.slice(0, 4).map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </ul>
    </section>
  );
}
