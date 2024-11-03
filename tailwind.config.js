/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "0px 20px 200px rgba(57, 23, 119, 0.05)",
      },
    },

    screens: {
      xs: "410px",
      sm: "480px",
      xmd: "724px",
      md: "860px",
      lg: "1023px",
      xl: "1280px",
    },

    fontFamily: {
      Rubik: ["Rubik", "system-ui"],
      Inter: ["Inter", "system-ui"],
    },

    colors: {
      primary: "#0D0D2B",
      secondary: "#2B076E",
      dimWhite: "#E0E0E0",
      white: "#FFFFFF",
      blue: "#3671E9",
      darkBlue: "#0D0D2B",
      "dark-blue": "#2B076E",
      "navy-blue": "#0D0D2B",
    },
  },

  plugins: [],
};
