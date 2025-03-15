'use client';

import Image, { StaticImageData } from 'next/image';
import Tilt from 'react-parallax-tilt';

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
    <li className="w-full h-full text-center">
      <Tilt
        transitionSpeed={1000}
        className="w-full h-full flex flex-col items-center gap-1 rounded-3xl p-4 bg-linear-to-t from-light-blue to-transparent shadow-md"
      >
        <Image src={image} alt={title} className="w-40 h-w-40" />

        <h3 className="font-semibold text-2xl">{title}</h3>

        <p className="subtext">{description}</p>
      </Tilt>
    </li>
  );
}
