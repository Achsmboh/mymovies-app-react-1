/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackOne: "#070A0D",
        blackTwo: "#2E3B40",
        blackThree: "#556773",
        abuTua: "#869AA6",
        abuMuda: "#D0D5D9",
      },
    },
  },
  plugins: [require("daisyui")],
};
