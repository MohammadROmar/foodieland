import Button from '@/components/ui/button';
import Category from './category';
import { categories } from '@/data/dummy/categories';

export default function Categories() {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="title">Categories</h2>

        <Button text="View All Categories" className="max-md:hidden" />
      </div>

      <ul className="flex flex-wrap gap-4 justify-between max-lg:justify-center items-center  mt-4">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </ul>

      <Button text="View All Categories" className="mx-auto md:hidden mt-6" />
    </section>
  );
}
