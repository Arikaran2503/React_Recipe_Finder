/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        beige: "#F3EBDD",
        brown: {
          950: "#2A1B12",
          900: "#3B2A1E",
          800: "#4E3A29",
          600: "#7A5C42",
          400: "#A98A6B",
        },
        orange: {
          50: "#FFF3EA",
          100: "#FFE3CC",
          400: "#FF9F4D",
          500: "#F97B23",
          600: "#E7620C",
          700: "#C24E07",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Fraunces'", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(59, 42, 30, 0.18)",
        lift: "0 18px 40px -14px rgba(231, 98, 12, 0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heartPop: {
          "0%": { transform: "scale(1)" },
          "35%": { transform: "scale(1.35)" },
          "60%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        heartPop: "heartPop 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
