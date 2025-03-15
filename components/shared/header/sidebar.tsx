import Link from 'next/link';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import SidebarNavigation from './sidebar-navigation';
import logoImg from '@/assets/images/logo.png';
import SocialmediaLinks from '../socialmedia-links';

export type SidebarProps = { onClose(): void };

export default function Sidebar({ onClose }: SidebarProps) {
  return createPortal(
    <>
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex flex-col justify-between gap-6 p-6 fixed top-0 left-0 bottom-0 z-50 backdrop-blur bg-white/75 w-[80vw]"
      >
        <Link href="/">
          <Image src={logoImg} alt="foodieland logo" height={20} />
        </Link>

        <SidebarNavigation onClose={onClose} />

        <div className="mx-auto">
          <SocialmediaLinks />
        </div>
      </motion.aside>

      <div onClick={onClose} className="fixed inset-0 bg-black/25 z-20" />
    </>,
    document.getElementById('sidebar')!
  );
}
