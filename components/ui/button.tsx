import Link from 'next/link';

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
      <Link href={href} className={className} {...rest}>
        <p>{text}</p>
        {icon}
      </Link>
    );
  }

  return (
    <button className={className} {...(props as ButtonProps)}>
      <p>{text}</p>
      {icon}
    </button>
  );
}

export default Button;
