module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        60: "60vh",
      },
      width: {
        half: "50%",
      },
      minWidth: {
        half: "50%",
        75: "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
