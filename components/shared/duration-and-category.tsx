import ForkKnifeIcon from '@/assets/icons/fork-knife';
import TimerIcon from '@/assets/icons/timer';

type DurationAndCategoryProps = {
  duration: number;
  category: string;
  hasBG?: boolean;
};

export default function DurationAndCategory({
  duration,
  category,
  hasBG,
}: DurationAndCategoryProps) {
  const backgroundStyle = ' px-4 py-2 bg-gray-400/15 rounded-full';

  return (
    <div className="flex gap-6 items-center text-sm text-black/65">
      <div className={'flex items-center gap-3' + (hasBG && backgroundStyle)}>
        <TimerIcon />
        <p>{duration} Minutes</p>
      </div>

      <div className={'flex items-center gap-3' + (hasBG && backgroundStyle)}>
        <ForkKnifeIcon />
        <p>{category}</p>
      </div>
    </div>
  );
}
