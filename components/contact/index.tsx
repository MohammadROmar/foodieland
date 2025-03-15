import Image from 'next/image';

import ContactForm from './contact-form';
import Button from '@/components/ui/button';
import chefImg from '@/assets/images/happy-chef.png';
import './bg.css';

export default function ContactUs() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-8 contact-bg"
      style={{ minHeight: 'calc(100vh - 10rem' }}
    >
      <div className="w-full flex gap-4">
        <Image
          src={chefImg}
          alt="An image of a happy chef."
          className="object-center object-cover rounded-3xl bg-gradient-to-t from-light-blue to-transparent max-lg:hidden"
        />

        <div className="w-full space-y-8">
          <h1 className="title">Contact us</h1>
          <ContactForm />
        </div>
      </div>

      <Button text="Submit" />
    </section>
  );
}
