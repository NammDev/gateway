import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-nunito-sans)'],
        display: ['var(--font-nunito)'],
      },
      colors: {
        primary: {
          300: '#D4D4D8',
          400: '#A1A1AA',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        accent: {
          500: '#FFDF64',
          700: '#FFD431',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
export default config
