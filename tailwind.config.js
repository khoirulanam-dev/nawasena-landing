/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nawasena-dark": "#3e2723", // Warna cokelat tua kopi
        "nawasena-light": "#8d6e63",
        "nawasena-green": "#2e7d32", // Warna hijau untuk button WA/Accent
        "nawasena-bg": "#f8f6f0", // Warna krem background
      },
    },
  },
  plugins: [],
};
