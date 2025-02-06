import type { Recipe } from '@/models/recipe';

export function handleRecipeShare(recipe: Recipe) {
  const url = `https://foodieland-two.vercel.app/${recipe.id}`;

  if (navigator.share) {
    navigator.share({
      title: 'Try this great recipe!',
      text: recipe.title,
      url,
    });
  } else {
    navigator.clipboard.writeText(`Try this great recipe!\n${url}`);
  }
}
