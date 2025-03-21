import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-raleway)', ...defaultTheme.fontFamily.sans],
        Audiowide: ["Audiowide", "cursive"],
        Mono: ["Syne Mono", "monospace"],
      },
      colors: {
        "dark-color": {
          "1": "#060221",
          "2": "#021129",
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower': 'spin 4s linear infinite',
      },
      
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, require('@tailwindcss/typography')],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
