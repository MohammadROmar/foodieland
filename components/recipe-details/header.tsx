import Article from './article';
import RecipeMeta from './meta';
import RecipeActions from './actions';
import RecipeInfo from './recipe-info';

export default function RecipeDetailsHeader() {
  return (
    <Article>
      <section className="space-y-8">
        <div className="flex max-lg:flex-wrap justify-between items-center gap-8">
          <RecipeMeta />

          <RecipeActions />
        </div>

        <RecipeInfo />
      </section>
    </Article>
  );
}
