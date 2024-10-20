/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  gridFractionUnits: true,
  darkMode: ["class", '[data-theme="dark"]'],
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
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
      rotate: {
        '17': '17deg',
      },
      colors: {
        bkg: "hsl(var(--clr-bkg) / <alpha-value>)",
        content: "hsl(var(--clr-content) / <alpha-value>)",

        t_black: "hsl(var(--clr-t_black) / <alpha-value>)",
        t_admin_black: "hsl(var(--clr-t_admin-black) / <alpha-value>)",
        t_black1: "hsl(var(--clr-t_black1) / <alpha-value>)",
        t_grey: "hsl(var(--clr-t_grey) / <alpha-value>)",
        t_cream: "hsl(var(--clr-t_cream) / <alpha-value>)",
        t_grey_300: "hsl(var(--clr-t_grey_300) / <alpha-value>)",
        t_grey_400: "hsl(var(--clr-t_grey_400) / <alpha-value>)",
        t_grey_500: "hsl(var(--clr-t_grey_500) / <alpha-value>)",
        t_grey_600: "#616161",
        t_white: "hsl(var(--clr-t_white) / <alpha-value>)",
        t_yellow: "hsl(var(--clr-t_yellow) / <alpha-value>)",
        t_mustard: "hsl(var(--clr-t_mustard) / <alpha-value>)",
        t_purple: "hsl(var(--clr-t_purple) / <alpha-value>)",
        t_red: "hsl(var(--clr-t_red) / <alpha-value>)",
        t_green: "hsl(var(--clr-t_green) / <alpha-value>)",
        t_green_ll: "hsl(var(--clr-t_green_ll) / <alpha-value>)",
        t_green_hh: "hsl(var(--clr-t_green_hh) / <alpha-value>)",
        t_green_blr: "hsl(var(--clr-t_green_blr) / <alpha-value>)",

        t_yellow_cc: "hsl(var(--clr-t_yellow_cc) / <alpha-value>)",
        t_red_cc: "hsl(var(--clr-t_red_cc) / <alpha-value>)",
        t_green_cc: "hsl(var(--clr-t_green_cc) / <alpha-value>)",
        t_purple_cc: "hsl(var(--clr-t_purple_cc) / <alpha-value>)",
        t_white_cc: "hsl(var(--clr-t_white_cc) / <alpha-value>)",
        t_black_cc: "hsl(var(--clr-t_black_cc) / <alpha-value>)",
        t_blue_cc: "hsl(var(--clr-t_blue_cc) / <alpha-value>)",
        t_pink_cc: "hsl(var(--clr-t_pink_cc) / <alpha-value>)",

        t_fil_men: "hsl(var(--clr-t_fil_men) / <alpha-value>)",
        t_fil_women: "hsl(var(--clr-t_fil_women) / <alpha-value>)",
        t_fil_kids: "hsl(var(--clr-t_fil_kids) / <alpha-value>)",

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
        futura_bold: ["var(--font-futura_bold)"],
        avant_garde: ["var(--font-avant_garde)"],
        noir_pro: ["var(--font-noir_pro)"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 8px 6px var(--tw-shadow-color)",
        lg: "0 0px 100px var(--tw-shadow-color)",
        lg2: "0 0px 50px var(--tw-shadow-color)",
        pr: "1px 4px 1px var(--tw-shadow-color)",
        ne: "6px 5px 0px var(--tw-shadow-color)",
        nm: "0px 0px 20px var(--tw-shadow-color)",
        off: "3px 3px 10px var(--tw-shadow-color)",
        fil: "0px 3px 6px var(--tw-shadow-color)",
        tra: "0px 0px 10px var(--tw-shadow-color)",
      },
      boxShadow: {
        card: '0px 15px 10px #000',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
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
        'bouncy': 'bouncy 1s infinite',
        'mutate': 'mutate 1s infinite',
        'slide-out': 'slide-out 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-in',
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
