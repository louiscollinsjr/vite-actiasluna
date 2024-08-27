/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content:{
    files:["./src/**/*.{js,jsx,ts,tsx}", './index.html'],
  extract },
  theme: {
    extend: { 
      aspectRatio: {
      '4/3': '4 / 3',
    },
    width: {
      '170': '42.5rem',
      '245': '61.25rem',
      '420': '105rem',
      '480': '120rem',
    },maxWidth: {
      '420': '105rem',
    },
    height: {
      '115': '28.75rem',
      '170': '42.5rem',
    },},
  }, screens, fontSize,
  plugins: [fluid],
}

