/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#501DFF",
        'secondary': "#13044F",
        'text': "#32363E"
      },
    },
  },
  plugins: [require("daisyui")],
}

