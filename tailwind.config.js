/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  gridFractionUnits: true,
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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

        t_yellow_cc: "hsl(var(--clr-t_yellow_cc) / <alpha-value>)",
        t_red_cc: "hsl(var(--clr-t_red_cc) / <alpha-value>)",
        t_green_cc: "hsl(var(--clr-t_green_cc) / <alpha-value>)",
        t_purple_cc: "hsl(var(--clr-t_purple_cc) / <alpha-value>)",
        t_white_cc: "hsl(var(--clr-t_white_cc) / <alpha-value>)",
        t_black_cc: "hsl(var(--clr-t_black_cc) / <alpha-value>)",
        t_blue_cc: "hsl(var(--clr-t_blue_cc) / <alpha-value>)",
        t_pink_cc: "hsl(var(--clr-t_pink_cc) / <alpha-value>)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
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
}
