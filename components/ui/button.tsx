import Link from 'next/link';
import clsx from 'clsx';

type BaseProps = { text: string; icon?: React.ReactNode };

type ButtonProps = BaseProps & {
  as?: 'button';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = BaseProps &
  ({ as: 'a'; href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>);

function Button({ as, text, icon, ...props }: ButtonProps | AnchorProps) {
  const className =
    'flex items-center gap-4 cursor-pointer text-center bg-black text-white px-8 py-4 rounded-2xl text-sm font-quicksand hover:scale-105 transition-transform duration-300';

  if (as === 'a') {
    const { href, ...rest } = props as AnchorProps;

    return (
      <Link href={href} {...rest} className={clsx(className, rest.className)}>
        <p className="w-full">{text}</p>
        {icon}
      </Link>
    );
  }

  return (
    <button
      {...(props as ButtonProps)}
      className={clsx(className, props.className)}
    >
      <p className="w-full">{text}</p>
      {icon}
    </button>
  );
}

export default Button;
