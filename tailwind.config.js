/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#5964E0",
        LightViolet: "#939BF4",
        White: "#FFFFFF",
        LightGrey: "#F4F6F8",
        Gray: "#9DAEC2",
        DarkGrey: "#6E8098",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
