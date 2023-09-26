/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FE5048",
        secundary: "#FD2C72",
        blue: "#4EA8DE",
        "blue-dark": "#1E6F9F",
        "linear-1": "#C8FF9C",
        "linear-2": "#FFDA7A",
        "linear-3": "#78DFFF",

        "warning-dark": "#977204",
        warning: "#FCBE07",
        "warning-light": "#FDD86A",

        "error-dark": "#831218",
        error: "#DA1E28",
        "error-light": "#E9787E",

        fire: "#FF9D55",

        "gray-65": "#161616d3",
        "gray-60": "#161616",
        "gray-55": "#222222",
        "gray-50": "#393939",
        "gray-40": "#6F6F6F",
        "gray-30": "#A8A8A8",
        "gray-20": "#E0E0E0",
        "gray-10": "#F4F4F4",
        "gray-0": "#FFFFFF",
      },
      keyframes: {
        transferAnime: {
          "0%": { transform: "translateY(-50px) translate(100px) scaleY(0.4)" },
          "50%": { transform: "translateY(0) translate(-10px)" },
          "100%": { transform: "origin:100% 0%" },
        },
        left: {
          from: {
            opacity: "0",
            transform: "translate(-5px)",
            animation: "animeLeft 0.6s forwards",
          },
          to: { opacity: "1", transform: "initial" },
        },
        top: {
          from: {
            opacity: "0",
            transform: "translateY(-5px)",
            animation: "animeLeft 0.6s forwards",
          },
          to: { opacity: "1", transform: "initial" },
        },
        modalOpenCenter: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        loadingButton: {
          "0%": {
            transform: "scale(1) translateY(1)",
            opacity: 1,
          },

          "50%": {
            transform: "scale(1.5) translateY(-1px)",
            opacity: 0.5,
          },

          "100%": {
            transform: "scale(1) translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        left: "left 0.6s forwards",
        form: "left 2s forwards",
        top: "top 0.3s forwards",
        modalOpenCenter: "modalOpenCenter 0.6s forwards ",
        loadingButton: "loadingButton",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
