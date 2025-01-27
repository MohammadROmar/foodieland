import type { ComponentPropsWithoutRef, ElementType } from 'react';

type ButtonProps = {
  text: string;
  icon?: ElementType;
} & ComponentPropsWithoutRef<'button'>;

export default function Button({ text, icon: Icon }: ButtonProps) {
  return (
    <button className="flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl text-sm">
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
}
