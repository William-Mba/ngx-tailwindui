/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./projects/playground/**/*.{html,ts,js}",
    "./projects/ngx-tailwindui/**/*.{html,ts,js}",
    // "./node_modules/ngx-tailwindui/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}