import Image from 'next/image';

import emptyPlateImg from '@/assets/images/empty-plate.png';
import Button from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center pt-4 text-center">
      <div className="flex justify-center items-center font-bold text-[14rem] translate-x-10">
        <p>4</p>
        <div className="relative -translate-x-10">
          <Image src={emptyPlateImg} alt="An imahe of empty plate." />
          <p
            className="absolute top-1/2 left-1/2 text-sm font-light"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            Page Not Found
          </p>
        </div>
        <p className="-translate-x-28">4</p>
      </div>

      <p className="text-xl font-medium pb-8">
        Oops! the page you're looking for is not on the menu.
      </p>

      <Button as="a" href="/" text="Back To Home" className="w-fit" />
    </section>
  );
}
