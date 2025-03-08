import Button from '../ui/button';
import FoodDishes from '@/assets/images/food-dishes';
import BolbIcon from '@/assets/icons/bolb-icon';
import Background from '@/assets/icons/background';

export default function AboutUsHero() {
  return (
    <section
      className="w-full flex items-center relative"
      style={{ height: 'calc(100vh - 10rem)' }}
    >
      <div className="flex-1 space-y-6">
        <h1 className="title max-w-lg leading-[3.25rem]">
          Bringing Flavor to Your Kitchen
        </h1>

        <p className="max-w-lg text">
          At Foodieland, we believe that great food brings people together.
          Whether you're a home cook, a food enthusiast, or a beginner in the
          kitchen, our platform is designed to inspire, educate, and simplify
          cooking for everyone.
        </p>

        <Button
          as="a"
          href="/about#mission"
          text="Learn More"
          className="w-fit"
        />
      </div>

      <div className="w-[35%] pr-12 box-content relative">
        <FoodDishes />

        <BolbIcon className="w-full h-full absolute inset-0 -translate-x-12 translate-y-8 -z-10" />
      </div>

      <div className="absolute -inset-x-12 -z-10">
        <Background />
      </div>
    </section>
  );
}
