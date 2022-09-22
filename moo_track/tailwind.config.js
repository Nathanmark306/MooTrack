/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#292F2D',
        secondary: '#6D6D6D',
        neutral: '#F2F2F2',
      },
      gridTemplateRows: {
        user: 'min-content 1fr min-content',
        uuser: 'min-content 1fr ',
      },
      gridTemplateColumns: {
        user2: '50px 1fr',
      },
    },
  },
  plugins: [],
};
