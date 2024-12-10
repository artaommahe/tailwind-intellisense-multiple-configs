/** @type {import('tailwindcss').Config} */
export default {
  //content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '!./src/new-design/**/*.{js,ts,jsx,tsx}'],
  content: ['./index.html', './src/!(new-design|ui-kit)/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}'],
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
