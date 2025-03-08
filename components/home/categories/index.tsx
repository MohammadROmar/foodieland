import { categories } from '@/data/dummy/categories';
import Category from './category';

export default function Categories() {
  return (
    <section>
      <div className="flex justify-between title">
        <h2>Categories</h2>
        <button className="text-sm font-medium bg-light-blue rounded-lg px-4 py-2">
          View All Categories
        </button>
      </div>

      <ul className="flex flex-wrap gap-4 justify-between items-center  mt-4">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </ul>
    </section>
  );
}
