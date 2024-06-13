/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dullWhite: "#A6ADBA",
        cardColor: "#2A323C",
        darkColor: "#181E24",
        lightColor: "#1D232A",
        cyanColor: "#38BDF8",
        yellowColor: "#EAB308",
        redColor: "#EF413A",
        greenColor: "#28A745",
        hoverColor: "#334155",
        blueColor: "#0B3860",
        hoverColorBlue: "#092A46",
        lightWhite: "#d9d9d9",
      },
      screens: {
        xs: {max : "430px"},
      },
    },
  },
  plugins: [],
};