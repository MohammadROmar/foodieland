import Link from 'next/link';
import Image from 'next/image';

import AnimatedHeader from './header';
import Navigation from '../navigation';
import SocialmediaLinks from '../socialmedia-links';
import Menu from './menu';
import { headerNavigationLinks } from '@/data/navigation-links';
import logoImg from '@/assets/images/logo.png';

export default function Header() {
  return (
    <AnimatedHeader>
      <Link href="/">
        <Image src={logoImg} alt="foodieland logo" height={20} />
      </Link>

      <div className="max-md:hidden">
        <Navigation navigationLinks={headerNavigationLinks} />
      </div>

      <div className="max-md:hidden">
        <SocialmediaLinks />
      </div>

      <Menu />
    </AnimatedHeader>
  );
}
