import type { Category as CategoryProps } from '@/models/category';

export default function Category({ image, name, color }: CategoryProps) {
  return (
    <li
      style={{ background: `linear-gradient(transparent 40%, ${color})` }}
      className="flex flex-col justify-center gap-4 p-6 rounded-2xl"
    >
      <img src={image} alt={`${name} category image.`} loading="lazy" />

      <p className="text-center font-medium">{name}</p>
    </li>
  );
}
