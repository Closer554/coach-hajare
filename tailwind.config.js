/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["Allura", "cursive"],
      },
      boxShadow: {
        paper: "0 14px 34px rgba(31, 26, 23, 0.08)",
      },
      borderRadius: {
        organic: "42% 58% 61% 39% / 38% 38% 62% 62%",
      },
    },
  },
  plugins: [],
};
