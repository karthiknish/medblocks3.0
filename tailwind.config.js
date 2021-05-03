const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      primary: "#9ae266",
      secondary: "#666666",
      transparent: "transparent",
      head: "#1A202C",
      hoverbg: "#ccffa5",
      current: "currentColor",
      link: "#008AFF",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
    },
    screens: {
      xxs: "10px",
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      source: ["Source Sans Pro", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      fontFamily: { display: ["Roboto"] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
