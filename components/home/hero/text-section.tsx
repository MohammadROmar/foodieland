import HotRecipes from './hot-recipes';
import RecipeDescription from './recipe-description';
import DurationAndCategory from '@/components/shared/duration-and-category';
import Author from '@/components/shared/author';
import Button from '@/components/ui/button';
import PlayCircleIcon from '@/assets/icons/play-circle';

export default function HeroTextSection() {
  return (
    <div className="relative z-10 flex flex-col justify-between gap-6 lg:w-1/2 p-12 max-lg:bg-light-blue/75 max-lg:backdrop-blur-[1px] md:min-h-[calc(100vh_-_10rem)]">
      <HotRecipes />

      <div className="space-y-6">
        <h1 className="text-7xl max-md:text-5xl max-sm:text-4xl max-w-lg font-bold font-quicksand">
          Spicy delicious chicken wings
        </h1>

        <RecipeDescription />

        <DurationAndCategory duration={30} category="Chicken" hasBG />
      </div>

      <div className="max-xl:flex-1 flex max-md:flex-col max-md:justify-start justify-between items-center md:items-end gap-4">
        <Author />

        <Button
          as="a"
          href="/#recipes"
          text="View Recipes"
          icon={<PlayCircleIcon />}
          className="w-fit"
        />
      </div>
    </div>
  );
}
