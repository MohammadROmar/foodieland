import HotRecipes from './hot-recipes';
import RecipeDescription from './recipe-description';
import DurationAndCategory from '../shared/duration-and-category';
import Author from '../shared/author';
import Button from '../ui/button';
import PlayCircleIcon from '@/assets/icons/play-circle';

export default function HeroTextSection() {
  return (
    <div
      className="flex flex-col justify-between gap-6 w-1/2 p-12"
      style={{ minHeight: 'calc(100vh - 10rem)' }}
    >
      <HotRecipes />

      <div className="space-y-6">
        <h1 className="text-7xl font-bold">Spicy delicious chicken wings</h1>

        <RecipeDescription />

        <DurationAndCategory duration={30} category="Chicken" hasBG />
      </div>

      <div className="max-xl:flex-1 flex justify-between items-end">
        <Author />

        <Button text="View Recipes" icon={PlayCircleIcon} />
      </div>
    </div>
  );
}
