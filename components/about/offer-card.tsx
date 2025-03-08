import Image, { StaticImageData } from 'next/image';

type OfferCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

export default function OfferCard({
  image,
  title,
  description,
}: OfferCardProps) {
  return (
    <li className="flex flex-col items-center gap-1 rounded-3xl p-4 text-center bg-gradient-to-t from-light-blue to-transparent">
      <Image src={image} alt={title} className="w-40 h-w-40" />

      <h3 className="font-semibold text-2xl">{title}</h3>

      <p className="text">{description}</p>
    </li>
  );
}
