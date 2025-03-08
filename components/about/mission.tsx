import Image from 'next/image';

import chefMissionImg from '@/assets/images/chef-mission.png';

export default function Mission() {
  return (
    <section id="mission" className="flex items-center gap-6 max-h-dvh">
      <div className="max-w-[50%] p-8">
        <div className="rounded-3xl overflow-hidden relative before:w-full before:h-full before:absolute before:inset-0 before:bg-gradient-to-t before:from-light-blue before:to-transparent before:rounded-3xl before:-z-10">
          <Image src={chefMissionImg} alt="An image of chef cooking." />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="title">Our Mission</h2>

        <p className="text max-w-lg">
          We&apos;re here to make cooking easy, fun, and accessible. Our
          carefully curated recipes come with step-by-step instructions, expert
          tips, and nutritional insights, ensuring that every meal is a success.
        </p>
      </div>
    </section>
  );
}
