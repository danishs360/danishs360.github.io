/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#08080A",
          soft: "#0F0F12",
          card: "#141418",
          line: "#232329",
          muted: "#6B6B76",
          text: "#E8E6E3",
          dim: "#9B9BA6",
        },
        ember: {
          DEFAULT: "#E8632A",
          glow: "#FF7A45",
          dim: "rgba(232, 99, 42, 0.12)",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232, 99, 42, 0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 20%, rgba(99, 102, 241, 0.1), transparent 50%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        signal: {
          primary: "#E8632A",
          "primary-content": "#0A0A0C",
          secondary: "#6366F1",
          accent: "#22D3EE",
          neutral: "#16161A",
          "base-100": "#08080A",
          "base-200": "#0F0F12",
          "base-300": "#1A1A1F",
          "base-content": "#E8E6E3",
          info: "#38BDF8",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
    ],
    logs: false,
  },
};
