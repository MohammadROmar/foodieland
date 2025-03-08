import SimpleAndTastyRecipes from './recipes';

export default function SimpleAndTasty() {
  return (
    <section
      id="recipes"
      className="w-full flex flex-col items-center gap-6 text-center"
    >
      <h2 className="max-w-md title">Simple and tasty recipes</h2>

      <p className="max-w-xl text pb-8">
        Enjoy effortless cooking with simple, flavorful recipes. From quick
        meals to delightful treats, make every dish delicious with ease!
      </p>

      <SimpleAndTastyRecipes />
    </section>
  );
}
