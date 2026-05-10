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
        sand: {
          50: '#FAFAF8',
          100: '#F7F4EF',
          200: '#EDE8DF',
          300: '#DDD5C8',
          400: '#C4B8A6',
          500: '#A89A86',
          600: '#8B7A63',
          700: '#6B6760',
          800: '#4A4541',
          900: '#1C1A17',
        },
        forest: {
          50: '#EEF4F1',
          100: '#D3E6DC',
          200: '#A7CDB9',
          300: '#7AB496',
          400: '#4E9B73',
          500: '#2D5A47',
          600: '#1E3D30',
          700: '#152C22',
          800: '#0D1C16',
          900: '#060E0B',
        },
        gold: {
          50: '#FBF7EC',
          100: '#F5EAC9',
          200: '#EBD593',
          300: '#E0C05D',
          400: '#D4A843',
          500: '#B8860B',
          600: '#8B6914',
          700: '#6B500F',
          800: '#4A380A',
          900: '#2A2005',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
