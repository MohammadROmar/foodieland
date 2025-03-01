import ContactUs from '@/components/contact/contact-us';
import Subscribe from '@/components/shared/subscribe';
import RecipeSuggestion from '@/components/shared/recipe-suggestion';
import { Metadata } from 'next';

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
