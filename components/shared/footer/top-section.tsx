import Link from 'next/link';
import Image from 'next/image';

import Navigation from '../navigation';
import { footerNavigationLinks } from '@/data/navigation-links';
import logoImg from '@/assets/images/logo.png';

export default function FooterTopSection() {
  return (
    <div className="flex items-center justify-between pb-4 border-b-2 border-black/5">
      <div>
        <Link href="/">
          <Image src={logoImg} alt="foodieland logo" height={20} />
        </Link>
        <p className="mt-4 text font-quicksand font-medium">
          Delicious recipes made simple – explore, cook, and enjoy every bite!
        </p>
      </div>

      <Navigation navigationLinks={footerNavigationLinks} />
    </div>
  );
}
