/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16423C',
        secondary: '#6A9C89',
        tertiary: '#C4DAD2',
        quaternary: '#E9EFEC',
      },
    },
  },
  plugins: [],
}

