import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gold accent colors
        gold: {
          50: "#FFF9E6",
          100: "#FFF3CC",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#FFD700", // Primary gold
          600: "#D4AF37", // Rich gold
          700: "#C9A961", // Bronze gold
          800: "#B8860B", // Dark gold
          900: "#8B6914",
        },
        // Dark theme colors
        dark: {
          DEFAULT: "#000000",
          light: "#0a0a0a",
          lighter: "#1a1a1a",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
