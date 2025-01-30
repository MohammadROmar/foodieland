import type { NavigationLink } from '@/models/navigation-link';

export const footerNavigationLinks: NavigationLink[] = [
  {
    label: 'Recipes',
    to: '#recipes',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
  {
    label: 'About us',
    to: '#about',
  },
];

export const headerNavigationLinks: NavigationLink[] = [
  {
    label: 'Home',
    to: '/',
  },
  ...footerNavigationLinks,
];
