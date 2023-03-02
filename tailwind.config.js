/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    clipPath: {
      hidden: "polygon(0 0, 100% 0, 100% 0, 0 0 )",
      visible: "polygon(0 0, 100% 0, 100% 100%, 0 100% )",
    },
    extend: {
      backgroundImage: {
        "home": "url('/src/assets/table.jpg')",
        "second": "url('/src/assets/table_1.jpg')",
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
}
