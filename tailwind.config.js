/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-gray': '#212121',
      'custom-green': '#00a67d'

    }},
  },
  plugins: [],
}

