/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav_purple: "#2c4cca",
        darkpurple: "#1f3e72",
        lightishgpurple: "##506ddb",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      screens: {
        xsm: "405px",
      },
    },
  },
  plugins: [],
};
