/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#f05252',
          600: '#e02424',
          700: '#c81e1e',
          800: '#9b1c1c',
          900: '#771d1d',
          950: '#4c1d1d',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#d4b9b0',
          400: '#a18072',
          500: '#8b5e34',
          600: '#6f4e37',
          700: '#5c4033',
          800: '#4a352f',
          900: '#3d2c2e',
          950: '#2d1b1b',
        }
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}