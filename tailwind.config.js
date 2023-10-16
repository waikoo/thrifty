/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  gridFractionUnits: true,
  darkMode: '[data-mode="dark"]',
  theme: {
    extend: {
      colors: {
        bkg: "hsl(var(--clr-bkg) / <alpha-value>)",
        content: "hsl(var(--clr-content) / <alpha-value>)",
        grey: "hsl(var(--clr-grey) / <alpha-value>)",
        darkgrey: "hsl(var(--clr-darkgrey) / <alpha-value>)",
        faded: "hsl(var(--clr-faded) / <alpha-value>)",
        pink: "hsl(var(--clr-pink) / <alpha-value>)",
        black: "hsl(var(--clr-black) / <alpha-value>)",
        blue: "hsl(var(--clr-blue) / <alpha-value>)",
        white: "hsl(var(--clr-white) / <alpha-value>)",
        yellow: "hsl(var(--clr-yellow) / <alpha-value>)",
        red: "hsl(var(--clr-red) / <alpha-value>)",
        green: "hsl(var(--clr-green) / <alpha-value>)",
        purple: "hsl(var(--clr-purple) / <alpha-value>)",
      },
    },
  },
};
