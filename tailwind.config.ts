import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#f8f4ec',
          dark: '#1e1b16'
        },
        stoneWarm: {
          100: '#efe8d8',
          200: '#e2d6be',
          300: '#d2c1a0',
          400: '#b79f79',
          500: '#998360'
        },
        oliveMuted: {
          400: '#798066',
          500: '#646b54',
          600: '#525845'
        },
        bronze: {
          400: '#b58b5d',
          500: '#9d7548'
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(55, 43, 30, 0.12)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out forwards'
      }
    }
  },
  plugins: []
};

export default config;
