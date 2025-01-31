import Image from 'next/image';

import Button from '@/components/ui/button';
import chefImg from '@/assets/images/chef.png';

export default function Chef() {
  return (
    <section className="flex items-center gap-6">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-semibold max-w-md">
          Everyone can be a chef in their own kitchen
        </h2>

        <p className="text-sm text-black/60 pb-8">
          With simple recipes, step-by-step guides, and expert tips, cooking
          delicious meals at home has never been easier. Whether you're a
          beginner or a seasoned cook, you have everything you need to create
          amazing dishes with confidence!
        </p>

        <Button text="Learn More" />
      </div>

      <div className="flex-1">
        <Image src={chefImg} alt="An image of a chef." />
      </div>
    </section>
  );
}
