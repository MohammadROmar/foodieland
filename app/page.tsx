import Hero from '@/components/hero';
import Categories from '@/components/categories';
import SimpleAndTastyRescipes from '@/components/simple-and-tasty';
import Chef from '@/components/chef';
import Instagram from '@/components/instagram';
import DeliciousRecipies from '@/components/delicious-recipes';
import Subscribe from '@/components/subscribe';

export default function Home() {
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
