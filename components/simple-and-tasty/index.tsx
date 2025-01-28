import Recipes from './recipes';

export default function SimpleAndTasty() {
  return (
    <section className="w-full flex flex-col items-center gap-6 text-center">
      <h2 className="max-w-md text-4xl font-semibold">
        Simple and tasty recipes
      </h2>

      <p className="max-w-xl text-sm text-black/60 pb-8">
        Enjoy effortless cooking with simple, flavorful recipes. From quick
        meals to delightful treats, make every dish delicious with ease!
      </p>

      <Recipes />
    </section>
  );
}
