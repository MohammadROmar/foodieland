import Image from 'next/image';

import authorImg from '@/assets/images/author.png';
import { getDate } from '@/utils/get-date';

type AuthorProps = {
  name?: string;
  time?: string;
};

export default function Author({
  name = 'John Smith',
  time = '2025-1-26',
}: AuthorProps) {
  const { date, formattedDate } = getDate(time);

  return (
    <div className="flex items-center gap-4">
      <Image src={authorImg} alt="John Smith profile image." />

      <div>
        <p className="font-semibold text-sm">John Smith</p>
        <time dateTime={date.toISOString()} className="text-black/60 text-xs">
          {formattedDate}
        </time>
      </div>
    </div>
  );
}
