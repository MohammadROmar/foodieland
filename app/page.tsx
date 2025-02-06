import Hero from '@/components/home/hero';
import Categories from '@/components/home/categories';
import SimpleAndTastyRescipes from '@/components/home/simple-and-tasty';
import Chef from '@/components/home/chef';
import Instagram from '@/components/home/instagram';
import DeliciousRecipies from '@/components/home/delicious-recipes';
import Subscribe from '@/components/shared/subscribe';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <SimpleAndTastyRescipes />
      <Chef />
      <Instagram />
      <DeliciousRecipies />
      <Subscribe />
    </>
  );
}
