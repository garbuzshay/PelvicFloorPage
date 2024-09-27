module.exports = {
  darkMode: 'class', // Enable Tailwind's dark mode but use it for high contrast
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dyslexic: ['OpenDyslexic', 'sans-serif'],
      },
      colors: {
        'contrast-bg': '#000000', // Black background
        'contrast-text': '#FFFFFF', // White text
        'contrast-link': '#FFFF00', // Yellow links
        'contrast-button-bg': '#FFFFFF', // White button background
        'contrast-button-text': '#000000', // Black button text
      },
    },
  },
  plugins: [],
};
