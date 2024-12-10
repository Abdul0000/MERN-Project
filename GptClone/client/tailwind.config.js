/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {}
  },
  plugins: [
    tailwindScrollbar,
    // other plugins...
  ],
  variants: {
    scrollbar: ['rounded'] // optional: to use rounded scrollbars
  }
};
