/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Spartan: ["League Spartan", "sans-serif"],
    },
    screens: {
      xs: "0px",
      sm: "375px",
    },
    backgroundImage: {
      "top-desktop": "url('/images/bg-pattern-top-desktop.svg')",
      "bottom-desktop": "url('/images/bg-pattern-bottom-desktop.svg')",
    },
  },
  plugins: [],
};
