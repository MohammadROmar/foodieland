import Image from 'next/image';

import Button from '../ui/button';
import InstagramIcon from '@/assets/icons/socialmedia/instagram';
import { instagramPosts } from '@/data/instagram-posts';

export default function InstagramPosts() {
  return (
    <div className="w-full space-y-8">
      <ul className="flex justify-between gap-2">
        {instagramPosts.map((postImg) => (
          <li key={postImg.src}>
            <Image src={postImg} alt="Instagram post." />
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Button
          as="a"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          text="Visit Our Instagram"
          icon={<InstagramIcon fill="white" />}
        />
      </div>
    </div>
  );
}
