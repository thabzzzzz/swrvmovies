/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.vue',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {

      colors: {
        F05E24: '#F05E24'

    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}}