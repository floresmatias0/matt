import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-transparent': '#0000007a',
        'merli-black' : '#1A1A1A',
        'merli-white' : '#F9F9F9',
        'merli-gray-dark' : '#555555',
        'merli-gray-light' : '#CCCCCC',
        'merli-purple' : '#0077CC',
        'merli-purple-dark' : '#336699',
        'merli-purple-light' : '#66A3FF',
        'merli-cyan' : '#33CCCC',
      },
      backgroundImage: {
        'merli-gradient': 'linear-gradient(107deg, #1A1A1A 0%, #0077CC 100%)',
        'text-gradient': 'linear-gradient(98deg, #F9F9F9 -4.09%, #33CCCC 96.07%)',
        'text-gradient-dark': 'linear-gradient(123deg, #33CCCC 25.97%, #66A3FF 93.27%)',
        'gradient-radial': 'radial-gradient(104.59% 91.52% at 50% -19.25%, #0077CC 0%, #1A1A1A 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
