import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#1A0F14",
          fg: "#F5EDE3",
          muted: "#A89B8C",
          primary: "#7F1D1D",
          accent: "#A16207",
          surface: "#24161C",
          border: "#3F2A32",
          hero: "#120A0E",
        },
      },
      fontFamily: {
        display: ["Libre Baskerville", "Georgia", "serif"],
        body: ["Karla", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(18px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        scrollX: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
        scrollX: "scrollX 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
