import { Metadata } from 'next';

import AboutUsHero from '@/components/about/hero';
import Mission from '@/components/about/mission';
import Offer from '@/components/about/offer';
import WhyChooseUs from '@/components/about/choose-us';
import StartCooking from '@/components/about/start-cooking';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <AboutUsHero />
      <Mission />
      <Offer />
      <WhyChooseUs />
      <StartCooking />
    </>
  );
}
