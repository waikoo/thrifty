/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  gridFractionUnits: true,
  darkMode: 'class',
  theme: {
    extend: {
      rotate: {
        '17': '17deg',
      },
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
        t_green: "hsl(var(--clr-t_green) / <alpha-value>)",
      },
      fontFamily: {
        allenoire: ["var(--font-allenoire)"],
        alokary: ["var(--font-alokary)"],
        futura: ["var(--font-futura)"],
        avant_garde: ["var(--font-avant_garde)"],
        noir_pro: ["var(--font-noir_pro)"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 8px 6px var(--tw-shadow-color)",
        lg: "0 0px 36px var(--tw-shadow-color)",
        pr: "1px 4px 1px var(--tw-shadow-color)",
        ne: "1px 2px 28px var(--tw-shadow-color)",
        nm: "5px 5px 3px var(--tw-shadow-color)",
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
