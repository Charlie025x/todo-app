/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-desktop-dark": "url('/src/assets/images/bg-desktop-dark.jpg')",
        "bg-desktop-light": "url('/src/assets/images/bg-desktop-light.jpg')",
        "bg-mobile-dark": "url('/src/assets/images/bg-mobile-dark.jpg')",
        "bg-mobile-light": "url('/src/assets/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
