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

export const metadata: Metadata = {
  title: { default: 'Foodieland', template: '%s - Foodieland' },
  description:
    'The ultimate destination for delicious recipes, cooking tips, and food inspiration!',
  twitter: { card: 'summary_large_image' },
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth scroll-mt-12">
      <body
        className={`${interFont.variable} antialiased mx-12 overflow-x-hidden`}
      >
        <Header />

        <main className="mt-20 space-y-32 max-container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
