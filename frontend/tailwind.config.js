/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'floresta-primaria': '#388E3C',
        'floresta-secundaria': '#E8F5E9',
        'confianca-alta': '#2E7D32',
        'confianca-baixa': '#F57F17',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}