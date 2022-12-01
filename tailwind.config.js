/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./public/**/*.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],

   theme: {
      extend: {},
   },

   corePlugins: {
      aspectRatio: false,
   },

   plugins: [
      require("daisyui"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
   ],

   daisyui: {
      styled: true,
      themes: ['light'],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: false,
   },
}
