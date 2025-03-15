import Image from 'next/image';

import img404 from '@/assets/images/404.png';
import Button from '@/components/ui/button';

export default function PageNotFound() {
  return (
    <section className="flex flex-col items-center pt-4 text-center">
      <div className="w-full h-[45vh] max-h-[45vh] relative">
        <Image
          src={img404}
          alt="404 - Not Found."
          priority
          fetchPriority="high"
          fill
          sizes="100vw"
          className="w-full h-full object-contain object-center inset-0"
        />
      </div>

      <p className="sm:text-lg md:text-xl font-medium pb-8">
        Oops! the page you're looking for is not on the menu.
      </p>

      <Button as="a" href="/" text="Back To Home" className="w-fit" />
    </section>
  );
}
