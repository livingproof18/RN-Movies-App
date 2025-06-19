/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014", // Indigo 600
        secondary: "#151312", // Amber 500
        light: {
          100: "#D6C6FF", // Gray 100
          200: "#A8B5DB", // Gray 200
          300: "#9CA4AB", // Gray 300
        }, // Gray 200
        dark: {
          100: "#221f3d", // Gray 800
          200: "#0f0d23", // Gray 900
          300: "#0F172A", // Gray 950
        }, // Gray 900]
        text: "#fff", // Gray 900
        accent: "#AB8BFF", // Amber 400
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}