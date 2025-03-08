import Image from 'next/image';

import emptyPlateImg from '@/assets/images/empty-plate.png';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center font-bold text-[14rem] translate-x-10">
      <p>4</p>

      <div className="relative -translate-x-10">
        <Image
          src={emptyPlateImg}
          alt="An image of empty plate."
          fetchPriority="high"
          loading="eager"
        />

        <p
          className="absolute top-1/2 left-1/2 text-sm font-light"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          Page Not Found
        </p>
      </div>

      <p className="-translate-x-28">4</p>
    </div>
  );
}
