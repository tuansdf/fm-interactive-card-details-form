/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "hsl(0, 0%, 100%)",
      red: "hsl(0, 100%, 66%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
      "linear-gradient-1": "hsl(249, 99%, 64%)",
      "linear-gradient-2": "hsl(278, 94%, 30%)",
    },
  },
  plugins: [],
};
