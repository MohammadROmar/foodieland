import Image from 'next/image';

import AnimatedHeader from './header';
import SocialmediaLinks from '../socialmedia-links';
import Navigation from '../navigation';
import { headerNavigationLinks } from '@/data/navigation-links';
import logoImg from '@/assets/images/logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <AnimatedHeader>
      <Link href="/">
        <Image src={logoImg} alt="foodieland logo" height={20} />
      </Link>

      <Navigation navigationLinks={headerNavigationLinks} />

      <SocialmediaLinks />
    </AnimatedHeader>
  );
}
