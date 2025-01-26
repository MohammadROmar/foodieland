import type { Category as CategoryProps } from '@/models/category';

export default function Category({ image, name, color }: CategoryProps) {
  return (
    <li
      style={{ background: `linear-gradient(transparent, ${color})` }}
      className="flex flex-col justify-center gap-4 p-4 rounded-lg"
    >
      <img src={image} alt={`${name} category image.`} />

      <p className="text-center font-medium">{name}</p>
    </li>
  );
}
