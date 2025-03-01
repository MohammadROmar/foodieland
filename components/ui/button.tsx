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
    'flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl text-sm';

  if (as === 'a') {
    console.log('slcm');

    const { href, ...rest } = props as AnchorProps;

    return (
      <Link href={href} {...rest} className={clsx(className, rest.className)}>
        <p>{text}</p>
        {icon}
      </Link>
    );
  }

  return (
    <button
      {...(props as ButtonProps)}
      className={clsx(className, props.className)}
    >
      <p>{text}</p>
      {icon}
    </button>
  );
}

export default Button;
