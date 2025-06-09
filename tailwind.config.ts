import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        serif: ["var(--font-playfair)", ...fontFamily.serif],
        display: ["var(--font-playfair)", ...fontFamily.serif],
      },
      colors: {
        logo: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c0d6ff',
          300: '#91b7fe',
          400: '#5d8efc',
          500: '#3b6ef7',
          600: '#2554eb',
          700: '#1e42d7',
          800: '#1e37af',
          900: '#1e338a',
          950: '#142057',
        },
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
        vintage: {
          light: '#e6d7b8',
          DEFAULT: '#c4b080',
          dark: '#8c7853',
        },
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(to bottom, #ffffff, #f0f5ff)',
        'blue-gradient': 'linear-gradient(to bottom, #e0ebff, #c0d6ff)',
        'sepia-gradient': 'linear-gradient(to bottom, #f5e8c9, #d3be91)',
        'vintage-paper': 'linear-gradient(to bottom, #f7f0e1, #e6d7b8)',
        'antique-wood': 'linear-gradient(45deg, #8c7853, #9c7a4b)',
      },
      boxShadow: {
        'logo': '0 4px 6px -1px rgba(30, 66, 215, 0.1), 0 2px 4px -1px rgba(30, 66, 215, 0.06)',
        'antique': '0 4px 6px -1px rgba(99, 74, 48, 0.1), 0 2px 4px -1px rgba(99, 74, 48, 0.06)',
        'vintage': '0 10px 15px -3px rgba(99, 74, 48, 0.1), 0 4px 6px -2px rgba(99, 74, 48, 0.05)',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
} satisfies Config;
