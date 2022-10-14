/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        violet: "#5964E0",
        LightViolet: "#939BF4",
        White: "#FFFFFF",
        LightGrey: "#F4F6F8",
        Gray: "#9DAEC2",
        DarkGrey: "#6E8098",
        midNight: "#121721",
        Company3: "hsl(235, 10%, 23%)",
      },
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
