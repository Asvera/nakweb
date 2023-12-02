/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        // Colors
        primary: "#0B0C1B",
        secondary: "#000000",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        button : "#ACABED",
        buttond: "#6366f1",
        buttonColor : "#8483ec",
        socialButton : "#8483ec",
        // buttonColor: "#F7F7FD",
      },

      backgroundImage: {
        'herobg': "url('./assets/background/vsvs1.jpg')",
        'herofrnt': "url('./assets/background/vdd1.png')",
        'statBg': "url('./assets/background/cac.jpeg')",
      },
    },
  },
  plugins: [],
}

