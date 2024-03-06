/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./projects/**/*.{html,ts,js}",
    "./ngx-tailwind.config.ts",
    // "./node_modules/ngx-tailwindui/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}