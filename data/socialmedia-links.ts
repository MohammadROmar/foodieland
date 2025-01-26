import FacebookIcon from '@/assets/icons/socialmedia/facebook';
import InstagramIcon from '@/assets/icons/socialmedia/instagram';
import TwitterIcon from '@/assets/icons/socialmedia/twitter';
import type { NavigationLink } from '@/models/navigation-link';

export const socialmediaLinks: NavigationLink[] = [
  {
    label: 'Facebook',
    icon: FacebookIcon,
    to: 'https://www.facebook.com',
  },
  {
    label: 'Twitter',
    icon: TwitterIcon,
    to: 'https://www.twitter.com',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    to: 'https://www.instagram.com',
  },
];
