/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#EFFFE1",
        green: "#4EA507",
        grey: {
          dark: {
            1: "#021C2F",
            2: "#354959",
            3: "#808D97",
            4: "#F2F4F5"
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

