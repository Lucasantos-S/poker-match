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
    },
  },
  plugins: [],
};
