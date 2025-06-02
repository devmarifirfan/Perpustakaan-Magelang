/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{html,js}",
    "./public/js/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "forest-dark": "#002818",
      },
      screens: {
        hp: { min: "360px", max: "639px" },
        tablet: { min: "640px", max: "1279px" },
        laptop: { min: "1280px", max: "1919px" },
        pc: { min: "1920px" },
      },
    },
  },
  plugins: [],
};
