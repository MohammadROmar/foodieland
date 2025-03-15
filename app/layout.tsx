import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { PropsWithChildren } from 'react';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import './globals.css';

const interFont = localFont({
  src: '../assets/fonts/Inter.ttf',
  variable: '--font-inter',
});

const quicksandFont = localFont({
  src: '../assets/fonts/Quicksand.ttf',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: { default: 'Foodieland', template: '%s - Foodieland' },
  description:
    'The ultimate destination for delicious recipes, cooking tips, and food inspiration!',
  twitter: { card: 'summary_large_image' },
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interFont.variable} ${quicksandFont.variable} antialiased mx-12 max-sm:mx-6 max-lg:mx-8 overflow-x-hidden selection:text-white selection:bg-[#e77719]`}
      >
        <Header />

        <div id="sidebar"></div>

        <main className="mt-20 space-y-32 max-container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
