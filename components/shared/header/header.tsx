'use client';

import { useState, type PropsWithChildren } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header({ children }: PropsWithChildren) {
  const { scrollY } = useScroll();

  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    const isScrollingDown = previous && latest > previous;

    if (isScrollingDown && latest > 100 && isVisible) {
      setIsVisible(false);
    } else if (!isScrollingDown && !isVisible) {
      setIsVisible(true);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: '-100%' },
        visible: { y: 0 },
      }}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, bounce: false, ease: 'easeInOut' }}
      className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 px-12 py-4 border-b-2 border-black/5 backdrop-blur-sm bg-white/25"
    >
      {children}
    </motion.header>
  );
}
