import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 3px 50px -10px rgba(0, 0, 0, 0.3)',
        '1xl': '0 1px 20px 1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [daisyui],
}

