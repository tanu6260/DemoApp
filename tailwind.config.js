module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#130f0c", "900_cc": "#130f0ccc", "900_e5": "#130f0ce5" },
        white: { A700: "#ffffff", A700_19: "#ffffff19" },
        deep_orange: { 300: "#d29a5a" },
        gray_500: "#a6a6a6",
      },
      boxShadow: {},
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
