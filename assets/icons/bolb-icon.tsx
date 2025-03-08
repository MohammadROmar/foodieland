import type { ComponentPropsWithoutRef } from 'react';

export default function BolbIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
      <defs>
        <linearGradient id="svg-linear-gradient">
          <stop stopColor="#e71989" offset="0" />
          <stop stopColor="#e77719" offset="1" />
        </linearGradient>
      </defs>

      <path
        fill="url(#svg-linear-gradient)"
        d="M20.7-31.2c4.4 5.8 5 14.2 6.2 21.6 1.3 7.4 3.2 13.7 1.2 18.4s-7.9 7.8-13.2 11.1c-5.4 3.3-10.1 6.9-16.2 8.7s-13.5 1.8-19.7-1.2c-6.3-3-11.4-9.1-14.8-16.5S-41-5.2-37.1-10.5c3.9-5.2 13.5-7 20.6-12 7.1-4.9 11.8-13 18.2-15.4 6.5-2.4 14.7.9 19 6.7Z"
        style={{ transition: 'all .3s ease 0s' }}
        transform="translate(50 50)"
      ></path>
    </svg>
  );
}
