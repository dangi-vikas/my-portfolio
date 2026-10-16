/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        /* Deep, green-cast charcoal — the cinematic "night forest" canvas. */
        ink: {
          950: "#060907",
          900: "#0a1210",
          800: "#0f1a15",
          700: "#16241d",
          600: "#1e3128",
        },
        /* Warm ivory hairline, used for every border in the system. */
        line: "rgba(242,239,230,0.10)",
        /* Brass — used sparingly, the way the reference film uses warm light. */
        accent: {
          DEFAULT: "#c9a86a",
          soft: "#e2cb96",
          deep: "#9a7a3f",
        },
        /* Muted foliage green — secondary accent for diagrams and glyphs. */
        jade: {
          400: "#a5cbb4",
          500: "#7fae92",
          600: "#5d8a72",
        },
        paper: "#f2efe6",
        muted: "#a3b0a6",
      },
      fontFamily: {
        /* Editorial high-contrast serif for every display heading. */
        display: ['Fraunces', '"Playfair Display"', 'Georgia', "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
        "8xl": ["5.5rem", { lineHeight: "0.95" }],
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.32em",
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(242,239,230,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,239,230,0.05) 1px, transparent 1px)",
        "accent-sheen":
          "linear-gradient(90deg, #f2efe6 0%, #e2cb96 42%, #c9a86a 72%, #7fae92 100%)",
        "ivory-sheen": "linear-gradient(180deg, #f8f5ed 0%, #e4ddca 100%)",
        "glass": "linear-gradient(180deg, rgba(242,239,230,0.07) 0%, rgba(242,239,230,0.02) 100%)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201,168,106,0.30), 0 22px 60px -28px rgba(201,168,106,0.55)",
        card: "0 1px 0 0 rgba(242,239,230,0.06) inset, 0 34px 70px -46px rgba(0,0,0,0.95)",
        curtain: "0 -1px 0 0 rgba(242,239,230,0.07) inset, 0 -50px 90px -70px rgba(0,0,0,1)",
        lift: "0 40px 90px -60px rgba(0,0,0,1)",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 6s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-node": "pulse-node 3.4s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
