import { headerNavigationLinks } from '@/data/navigation-links';
import Link from 'next/link';

import type { SidebarProps } from './sidebar';

export default function SidebarNavigation({ onClose }: SidebarProps) {
  return (
    <ul className="font-medium text-3xl font-quicksand">
      {headerNavigationLinks.map((link) => (
        <li key={link.label} className="py-4 border-black/40 border-b-2">
          <Link href={link.to} onClick={onClose}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
