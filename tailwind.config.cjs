/** @type {import('tailwindcss').Config} */
// Palette and type borrowed from TallyReel's "idea wall": white paper with a
// dot grid, sticky-note tints, Figtree for type and Shantell Sans for the hand.
// The `ink` and `ember` token names are kept so every page flips at once.
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // note tints are picked from data (`note-${tint}`), so the scanner can't see them
  safelist: [{ pattern: /^note-(peach|butter|mint|sky|lilac|white)$/ }],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Figtree"', "system-ui", "sans-serif"],
        sans: ['"Figtree"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        hand: ['"Shantell Sans"', '"Figtree"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#FFFFFF",
          soft: "#F6F5F3",
          card: "#FFFFFF",
          line: "#EBE7E2",
          line2: "#DCD7D0",
          muted: "#6F6962",
          text: "#1C1917",
          dim: "#4F4A45",
        },
        ember: {
          DEFAULT: "#C7450C",
          bright: "#F06A1D",
          glow: "#AD3A09",
          ink: "#A93A0A",
          dim: "rgba(240, 106, 29, 0.12)",
        },
        note: {
          peach: "#FFE2CC",
          butter: "#FFF0B0",
          mint: "#D7F1E0",
          sky: "#DDE8FF",
          lilac: "#EBE1FF",
        },
        leaf: { DEFAULT: "#16703C", bg: "#E3F4EA" },
      },
      boxShadow: {
        note: "0 1px 1px rgba(28,25,23,.06), 0 16px 26px -14px rgba(28,25,23,.32)",
        print: "0 2px 3px rgba(28,25,23,.08), 0 26px 44px -22px rgba(28,25,23,.45)",
        soft: "0 1px 2px rgba(28,25,23,.05), 0 3px 8px -3px rgba(28,25,23,.08)",
      },
      transitionTimingFunction: {
        paper: "cubic-bezier(.16, 1, .3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(.16,1,.3,1) forwards",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        wall: {
          primary: "#C7450C",
          "primary-content": "#FFFFFF",
          secondary: "#DDE8FF",
          accent: "#FFF0B0",
          neutral: "#1C1917",
          "base-100": "#FFFFFF",
          "base-200": "#F6F5F3",
          "base-300": "#EBE7E2",
          "base-content": "#1C1917",
          info: "#2563EB",
          success: "#16703C",
          warning: "#B45309",
          error: "#B91C1C",
        },
      },
    ],
    logs: false,
  },
};
