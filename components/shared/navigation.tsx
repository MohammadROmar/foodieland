import Link from 'next/link';

import type { NavigationLink } from '@/models/navigation-link';

export default function Navigation({
  navigationLinks,
}: {
  navigationLinks: NavigationLink[];
}) {
  return (
    <nav>
      <ul className="flex items-center gap-8 text-sm">
        {navigationLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
