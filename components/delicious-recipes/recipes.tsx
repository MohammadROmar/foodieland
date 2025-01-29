import RecipeCard from '../shared/recipe-card';
import { deliciousRecipes } from '@/data/dummy/delicious-recipes';

export default function DeliciousRecipies() {
  return (
    <ul className="grid grid-cols-4 gap-8">
      {deliciousRecipes.map((recipe) => (
        <RecipeCard key={recipe.title} {...recipe} />
      ))}
    </ul>
  );
}
