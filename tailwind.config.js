/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
        t_yellow: "hsl(var(--clr-t_yellow) / <alpha-value>)",
        t_mustard: "hsl(var(--clr-t_mustard) / <alpha-value>)",
        t_purple: "hsl(var(--clr-t_purple) / <alpha-value>)",
        t_red: "hsl(var(--clr-t_red) / <alpha-value>)",
      },
      fontFamily: {
        allenoire: ["var(--font-allenoire)"],
        alokary: ["var(--font-alokary)"],
        futura: ["var(--font-futura)"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 8px 6px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms'),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
