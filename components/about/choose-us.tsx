import Image from 'next/image';

import chefThinkingImg from '@/assets/images/chef-thinking.png';

export default function WhyChooseUs() {
  return (
    <section className="flex justify-between items-center">
      <div className="space-y-6">
        <h2 className="title">Why Choose Us?</h2>

        <p className="text max-w-lg">
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

      <div className="max-w-[50%] p-8">
        <div className="rounded-3xl bg-gradient-to-t from-light-blue to-transparent overflow-hidden">
          <Image src={chefThinkingImg} alt="An image of a chef thinking." />
        </div>
      </div>
    </section>
  );
}
