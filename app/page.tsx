import Hero from '@/components/hero';
import Categories from '@/components/categories';
import SimpleAndTasty from '@/components/simple-and-tasty';
import Chef from '@/components/chef';
import Instagram from '@/components/instagram';
import Subscribe from '@/components/subscribe';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <SimpleAndTasty />
      <Chef />
      <Instagram />
      <Subscribe />
    </>
  );
}
