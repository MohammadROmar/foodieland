import { Metadata } from 'next';

import ContactUs from '@/components/contact';
import Subscribe from '@/components/shared/subscribe';
import RecipeSuggestion from '@/components/shared/recipe-suggestion';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <ContactUs />
      <Subscribe />
      <RecipeSuggestion />
    </>
  );
}
