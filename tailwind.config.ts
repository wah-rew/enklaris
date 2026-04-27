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
        obsidian: "#1A1A2E",
        celadon: "#7BA7A0",
        ivory: "#D4C5B0",
        cream: "#F8F6F1",
        darkbg: "#0F0F1E",
        sienna: "#C17F5A",
        muted: "#6B7280",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(2deg)" },
          "66%": { transform: "translateY(6px) rotate(-1deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(8px, -6px)" },
          "50%": { transform: "translate(-4px, 10px)" },
          "75%": { transform: "translate(-8px, -4px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(26, 26, 46, 0.08)",
        "card-hover": "0 8px 40px rgba(26, 26, 46, 0.14)",
        glow: "0 0 40px rgba(123, 167, 160, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-celadon":
          "linear-gradient(135deg, #7BA7A0 0%, #a8d5cf 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
