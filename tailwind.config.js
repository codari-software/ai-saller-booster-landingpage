export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#6366f1",
          DEFAULT: "#4f46e5",
          dark: "#312e81",
        },
        action: {
          DEFAULT: "#10b981", // Emerald 500
          hover: "#059669", // Emerald 600
        },
      },
      animation: {
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
