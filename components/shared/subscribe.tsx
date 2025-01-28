import Image from 'next/image';

import eggsImg from '@/assets/images/eggs.png';
import vegetablesImg from '@/assets/images/vegetables.png';

export default function Subscribe() {
  return (
    <section className="relative flex flex-col justify-center items-center rounded-3xl bg-light-blue p-8 overflow-hidden text-center">
      <h2 className="font-semibold text-4xl">Deliciousness to your inbox</h2>

      <p className="max-w-md text-sm m-4 text-black/50">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        mollitia dignissimos! Voluptatibus aliquam, placeat reprehenderit.
      </p>

      <div className="bg-white rounded-2xl p-1 text-xs mt-4">
        <input placeholder="Your email address..." className="px-4" />
        <button className="bg-black text-white px-8 py-4 rounded-[inherit]">
          Subscribe
        </button>
      </div>

      <img
        src={eggsImg.src}
        alt="Eggs in a dish with some vegetables."
        className="absolute right-0 bottom-0 h-1/2"
      />

      <img
        src={vegetablesImg.src}
        alt="Some vegetables."
        className="absolute left-0 bottom-0 h-1/2"
      />
    </section>
  );
}
