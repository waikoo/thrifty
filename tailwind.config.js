/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  // worked with class:
  // darkMode: 'class',
  // darkMode: ["class"],
  darkMode: '[data-mode="dark"]',
  // darkMode: ['[data-mode="dark"]'],
  // darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        bb: "hsl(var(--body-bg) / <alpha-value>)",
        bt: "hsl(var(--body-text) / <alpha-value>)",
      }
    },
  },
  plugins: [],
};
