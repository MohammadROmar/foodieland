import localFont from 'next/font/local';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
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
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout;
