import Image from 'next/image';

import SocialmediaLinks from '../shared/socialmedia-links';
import Navigation from '../shared/navigation';
import { headerNavigationLinks } from '@/data/navigation-links';
import logoImg from '@/assets/images/logo.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 px-12 py-4 border-b-2 border-black/5">
      <Image src={logoImg} alt="foodieland logo" height={20} priority />

      <Navigation navigationLinks={headerNavigationLinks} />

      <SocialmediaLinks />
    </header>
  );
}
