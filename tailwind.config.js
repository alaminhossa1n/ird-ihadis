/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      SolaimanLipi: ["SolaimanLipi"],
    },
    extend: {
      colors: {
        "primary-color": "#2B9E76",
      },
    },
  },
  plugins: [],
};
