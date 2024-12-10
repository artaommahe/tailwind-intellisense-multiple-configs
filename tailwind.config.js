/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: {
      primary: '#FFFFFF',
    },
    borderColor: {
      primary: '#000000',
    },
    textColor: {
      primary: '#000000',
    },
    fontSize: {
      xl: '1.5rem',
    },
    spacing: {
      4: '1rem',
    },
    extend: {},
  },
  plugins: [],
};
