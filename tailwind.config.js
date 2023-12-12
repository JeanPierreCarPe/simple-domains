/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "rgba(0,0,0,0)",
        green: "#979B3C"
      },
      backgroundImage: {
        home: "url(/assets/images/background-image.jpg)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas"],
        poppins: ["var(--font-poppins)"]
      }
    },
  },
  plugins: [],
};
