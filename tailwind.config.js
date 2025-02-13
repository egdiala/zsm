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
          0: "#04242D",
          dark: {
            1: "#021C2F",
            2: "#354959",
            3: "#808D97",
            4: "#F2F4F5"
          }
        },
        semantics: {
          red: "#FF3739",
          amber: "#FE9603"
        },
        blue: {
          1: "#058CEC",
          2: "#82C5F5",
          4: "#F2F9FE"
        }
      },
      fontFamily: {
        "krub": ["Krub", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

