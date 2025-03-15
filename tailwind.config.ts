import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-baskerville)", ...fontFamily.sans],
        serif: ["var(--font-playfair)", ...fontFamily.serif],
        display: ["var(--font-playfair)", ...fontFamily.serif],
      },
      colors: {
        sepia: {
          50: '#fcf9f3',
          100: '#f7f0e1',
          200: '#efe0c4',
          300: '#e3cca1',
          400: '#d7b77e',
          500: '#c9a355',
          600: '#b68c48',
          700: '#96703b',
          800: '#7a5a35',
          900: '#634a30',
          950: '#362616',
        },
        antique: {
          light: '#f5e8c9',
          DEFAULT: '#d3be91',
          dark: '#9c7a4b',
        },
      },
      backgroundImage: {
        'sepia-gradient': 'linear-gradient(to bottom, #f5e8c9, #d3be91)',
      },
    },
  },
  plugins: [],
} satisfies Config;
