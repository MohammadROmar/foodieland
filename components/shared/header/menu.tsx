'use client';

import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import MenuIcon from '@/assets/icons/Menu';
import Sidebar from './sidebar';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="w-6 md:hidden"
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <MenuIcon />

      <Suspense>
        <AnimatePresence>
          {isOpen && <Sidebar onClose={() => setIsOpen(false)} />}
        </AnimatePresence>
      </Suspense>
    </button>
  );
}
