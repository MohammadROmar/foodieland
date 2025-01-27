import Image from 'next/image';

import authorImg from '@/assets/images/author.png';

export default function Author() {
  return (
    <div className="flex items-center gap-4">
      <Image src={authorImg} alt="John Smith profile image." />

      <div className="font-semibold text-sm">
        <p>John Smith</p>
        <time dateTime="2025-1-26">January 26, 2025</time>
      </div>
    </div>
  );
}
