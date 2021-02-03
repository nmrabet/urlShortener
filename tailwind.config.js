module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#2ad0d0",
      secondary: "#4b406b",
      third: "#3b2f53",
      fourth: "#232027",
      white: "#fff",
      text: "#b4b3b3",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
