import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
      },

      fontFamily: {
        inter: 'var(--font-inter)',
        quicksand: 'var(--font-quicksand)',
      },

      colors: {
        'light-blue': '#e7f9fd',
      },
    },
  },
  plugins: [],
} satisfies Config;
