import Image from 'next/image';
import Navigation from '../navigation';
import { footerNavigationLinks } from '@/data/navigation-links';
import logoImg from '@/assets/images/logo.png';

export default function FooterTopSection() {
  return (
    <div className="flex items-center justify-between pb-4 border-b-2 border-black/5">
      <div>
        <Image src={logoImg} alt="foodieland logo" height={20} />
        <p className="text-md mt-4 text-black/60">
          Delicious recipes made simple – explore, cook, and enjoy every bite!
        </p>
      </div>

      <Navigation navigationLinks={footerNavigationLinks} />
    </div>
  );
}
