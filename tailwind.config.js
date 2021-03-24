module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-lightest": "#F6FAF0",
        "primary-lighter": "#D4E4B4",
        "primary-light": "#B2CF77",
        primary: "#8EB540",
        "primary-darkest": "#181F0A",
        "primary-dark": "#5F792A",
        "secondary-lightest": "#B1AFD4",
        "secondary-lighter": "#7D7AB8",
        "secondary-light": "#524F92",
        secondary: "#35335E",
        "secondary-dark": "#1E1D35",
        "secondary-darker": "#0C0A2D",
        warning: "#FF8800",
        danger: "#CC0000",
        "tip-bulb": "#EED91F",
        dark: "#191919",
        light: "#F5F6FA",
        "primary-darker": "#2F3C15",
        "secondary-darkest": "#0F0E1A",
        positive: "#007E33",
      },
      gridTemplateRows: {
        challenge: "auto auto auto",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
