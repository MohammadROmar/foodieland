import Image from 'next/image';

import foodImg from '@/assets/images/food-bg.png';
import SocialmediaLinks from '../shared/socialmedia-links';

export default function StartCooking() {
  return (
    <section className="text-center space-y-6 p-8 bg-light-blue rounded-3xl relative z-0 overflow-hidden">
      <h2 className="title">Start Cooking Today!</h2>

      <p className="text flex flex-col">
        <span>Join our community and discover the joy of cooking.</span>
        <span>Let&apos;s make every meal delicious and memorable!</span>
      </p>

      <div className="flex justify-center text-black/60">
        <SocialmediaLinks />
      </div>

      <img
        src={foodImg.src}
        alt="An image of various vegetables."
        className="w-full h-full absolute inset-0 -z-10 opacity-25 object-center object-cover mt-[0_!important] selection:bg-transparent"
        loading="lazy"
      />
    </section>
  );
}
