/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        bkg: "hsl(var(--clr-bkg) / <alpha-value>)",
        content: "hsl(var(--clr-content) / <alpha-value>)",
        grey: "hsl(var(--clr-grey) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
