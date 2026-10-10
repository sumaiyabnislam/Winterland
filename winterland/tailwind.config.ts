import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#111111",
        foreground: "#FFFFFF",
        neutral: "#F5F5F5",
        muted: "#777777",
        border: "#E5E5E5",
        accent: "#8B5E3C",
      },
    },
  },
  plugins: [],
}

export default config