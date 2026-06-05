import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1440px" } },
    extend: {
      colors: {
        luxury: {
          navy: "#06182f",
          ocean: "#006cae",
          sky: "#38bdf8",
          gold: "#f3b33d",
          sand: "#f8efe1",
          ink: "#07111f"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        luxury: "0 28px 90px rgba(6, 24, 47, 0.22)",
        glass: "0 20px 70px rgba(2, 8, 23, 0.20)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(56,189,248,.28), transparent 35%), radial-gradient(circle at 80% 0%, rgba(243,179,61,.22), transparent 35%), linear-gradient(135deg,#06182f 0%,#08284b 45%,#08345f 100%)"
      }
    }
  },
  plugins: []
};

export default config;
