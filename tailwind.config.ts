import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'foreground-light': "var(--foreground-light)",
        accent: "var(--accent)",
        'accent-light': "var(--accent-light)",
        surface: "var(--surface)",
        'surface-elevated': "var(--surface-elevated)",
        border: "var(--border)",
        heading: "var(--heading)",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#181818",
        },
        pink: {
          DEFAULT: "#F44E5C",
          200: "#B73A45"
        },
        green: {
          DEFAULT: "#05f0f0",
          200: "#1e293b",
          500: "#5eeabf"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;