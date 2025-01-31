import Image from 'next/image';

import recipeImg from '@/assets/images/recipe.png';

export default function HotRecipes() {
  return (
    <div className="w-fit flex gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
      <Image src={recipeImg} alt="Recipe icon." />

      <p className="text-sm">Hot Recipes</p>
    </div>
  );
}
