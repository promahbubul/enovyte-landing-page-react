/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(100%)",
          },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        orange: "#FF693B",
        sky: "#0C89FF",
        blue: { 800: "#0A2C8C", 900: "#001246" },
        "black-gray": "474747",
      },
    },
  },
  plugins: [],
};
