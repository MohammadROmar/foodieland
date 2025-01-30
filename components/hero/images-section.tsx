import Image from 'next/image';

import bakedChickenWingsImg from '@/assets/images/baked-chicken-wings.png';
import badgeImg from '@/assets/images/badge.png';

export default function HeroImagesSection() {
  return (
    <>
      <Image
        src={badgeImg}
        alt="Hand picked recipe."
        className="absolute z-10 left-1/2 -translate-x-1/2 top-12"
      />

      <div className="w-1/2 relative">
        <Image
          src={bakedChickenWingsImg}
          alt="An image of grilled chicken wings."
          priority
          fill
          sizes="50vw"
          className="object-center object-cover"
        />
      </div>
    </>
  );
}
