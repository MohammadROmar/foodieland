import Image from 'next/image';

import chefMissionImg from '@/assets/images/chef-mission.png';

export default function Mission() {
  return (
    <section
      id="mission"
      className="flex max-sm:flex-col-reverse items-center gap-6 max-h-dvh"
    >
      <div className="sm:max-w-[50%] p-8">
        <div className="rounded-3xl overflow-hidden relative before:w-full before:h-full before:absolute before:inset-0 before:bg-linear-to-t before:from-light-blue before:to-transparent before:rounded-3xl before:-z-10">
          <Image src={chefMissionImg} alt="An image of chef cooking." />
        </div>
      </div>

      <div className="space-y-6 max-sm:text-center">
        <h2 className="title">Our Mission</h2>

        <p className="subtext max-w-lg">
          We&apos;re here to make cooking easy, fun, and accessible. Our
          carefully curated recipes come with step-by-step instructions, expert
          tips, and nutritional insights, ensuring that every meal is a success.
        </p>
      </div>
    </section>
  );
}
