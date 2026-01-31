/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'times-new-roman': ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};
