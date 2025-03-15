import Image from 'next/image';

import chefThinkingImg from '@/assets/images/chef-thinking.png';

export default function WhyChooseUs() {
  return (
    <section className="flex max-sm:flex-col max-sm:justify-center justify-between items-center relative overflow-hidden">
      <div className="w-full space-y-6 max-sm:min-h-[50vh] max-sm:backdrop-blur-[1px] max-sm:bg-white/40 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <h2 className="title">Why Choose Us?</h2>

        <p className="text max-w-lg max-sm:text-center max-sm:m-auto">
          We know that food is more than just sustenance — it&apos;s a way to
          <span className="font-medium text-black/85"> celebrate culture</span>,
          <span className="font-medium text-black/85"> create memories</span>,
          and
          <span className="font-medium text-black/85"> express creativity</span>
          . That&apos;s why we&apos;re committed to providing
          <span className="font-medium text-black/85"> high-quality</span>,
          <span className="font-medium text-black/85"> well-tested </span>
          recipes that you can trust.
        </p>
      </div>

      <div className="max-sm:absolute max-sm:inset-0 max-sm:-z-10 sm:max-w-[50%] max-sm:flex max-sm:items-center p-8">
        <div className="rounded-3xl sm:bg-gradient-to-t from-light-blue to-transparent overflow-hidden">
          <Image src={chefThinkingImg} alt="An image of a chef thinking." />
        </div>
      </div>
    </section>
  );
}
