import type { ComponentPropsWithoutRef } from 'react';

type Input = {
  as?: 'input';
  label: string;
} & ComponentPropsWithoutRef<'input'>;

type Textarea = {
  as: 'textarea';
  label: string;
} & ComponentPropsWithoutRef<'textarea'>;

export default function Input({ as, label, ...props }: Input | Textarea) {
  const className =
    'p-4 border border-black/10 rounded-xl focus:outline-none ' +
    (props.className ?? '');

  let element = (
    <input id={label} {...(props as Input)} className={className} />
  );

  if (as === 'textarea') {
    element = (
      <textarea id={label} {...(props as Textarea)} className={className} />
    );
  }

  return (
    <p className="flex flex-col gap-2 text-sm last:col-start-[inherit] last:col-end-[inherit]">
      <label htmlFor={label} className="uppercase text-black/60 font-medium">
        {label}
      </label>

      {element}
    </p>
  );
}
