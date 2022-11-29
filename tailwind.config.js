/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubikDistressed: ["Rubik Distressed"],
        RobotoSlab: ["Roboto Slab"],
      },
      colors: {
        blackOne: "#070A0D",
        blackTwo: "#2E3B40",
        blackThree: "#556773",
        abuTua: "#869AA6",
        abuMuda: "#D0D5D9",
        glass: "#1e1e2d80",
      },
    },
  },
  plugins: [require("daisyui")],
};
