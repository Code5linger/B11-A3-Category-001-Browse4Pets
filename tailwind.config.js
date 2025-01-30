const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
    },
  },
  plugins: [],
};
