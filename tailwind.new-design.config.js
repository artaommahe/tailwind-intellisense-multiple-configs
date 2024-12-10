/** @type {import('tailwindcss').Config} */
export default {
  important: '.new-design',
  //content: ['./src/new-design/**/*.{js,ts,jsx,tsx}', './src/ui-kit/**/*.{js,ts,jsx,tsx}'],
  content: ['./src/{new-design,ui-kit}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: {
      primary: '#282A2D',
    },
    borderColor: {
      primary: '#CB020C',
      secondary: '#FFC107',
    },
    textColor: {
      primary: '#ffffff',
    },
    fontSize: {
      xl: '3rem',
    },
    spacing: {
      2: '0.5rem',
      4: '3rem',
    },
    extend: {},
  },
  plugins: [],
};
