/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  gridFractionUnits: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        t_black: "hsl(var(--clr-t_black) / <alpha-value>)",
        t_black1: "hsl(var(--clr-t_black1) / <alpha-value>)",
        t_grey: "hsl(var(--clr-t_grey) / <alpha-value>)",
        t_cream: "hsl(var(--clr-t_cream) / <alpha-value>)",
        t_white: "hsl(var(--clr-t_white) / <alpha-value>)",
        t_mustard: "hsl(var(--clr-t_mustard) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')
  ]
};
