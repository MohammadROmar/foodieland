import Image from 'next/image';

import bakedChickenWingsImg from '@/assets/images/baked-chicken-wings.png';
import badgeImg from '@/assets/images/badge.png';

export default function HeroImagesSection() {
  return (
    <>
      <Image
        src={badgeImg}
        alt="Hand picked recipe."
        loading="eager"
        priority
        fetchPriority="high"
        className="absolute z-10 left-1/2 -translate-x-1/2 top-12 max-lg:-z-10"
      />

      <div className="w-1/2 lg:relative">
        <Image
          src={bakedChickenWingsImg}
          alt="An image of grilled chicken wings."
          fill
          sizes="50vw"
          loading="eager"
          priority
          fetchPriority="high"
          className="object-center object-cover"
        />
      </div>
    </>
  );
}
