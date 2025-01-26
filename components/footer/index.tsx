import Image from 'next/image';

import Copyright from './copyright';
import Navigation from '../shared/navigation';
import SocialmediaLinks from '../shared/socialmedia-links';
import { footerNavigationLinks } from '@/data/navigation-links';
import logoImg from '@/assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="max-container max-[1440px]:mx-12">
      <div className="flex items-center justify-between pb-4 border-b-2 border-black/5">
        <div>
          <Image src={logoImg} alt="foodieland logo" height={20} priority />
          <p className="text-md mt-4 text-black/60">
            The ultimate destination for delicious recipes, cooking tips, and
            food inspiration!
          </p>
        </div>

        <Navigation navigationLinks={footerNavigationLinks} />
      </div>

      <div className="relative my-4">
        <div className="absolute right-0 ">
          <SocialmediaLinks />
        </div>

        <Copyright />
      </div>
    </footer>
  );
}
