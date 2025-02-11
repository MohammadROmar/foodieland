import localFont from 'next/font/local';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import './globals.css';

const interFont = localFont({
  src: '../assets/fonts/Inter-Regular.ttf',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Foodieland',
  description:
    'The ultimate destination for delicious recipes, cooking tips, and food inspiration!',
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
