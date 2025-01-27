import localFont from 'next/font/local';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';
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
    <html lang="en">
      <body className={`${interFont.variable} antialiased mx-12`}>
        <Header />
        <main className="mt-0 space-y-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
