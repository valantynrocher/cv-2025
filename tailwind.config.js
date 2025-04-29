// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vertSapin: "#101f17", // Vert plus foncé
        jaune: "#FFD700",
        grisSombre: "#333333",
        grisClair: "#E0E0E0",
        bleuClair: "#A3C8D7",
      },
      fontFamily: {
        sans: ["Quicksand", "Avenir", "Helvetica", "Arial", "sans-serif"], // <-- sans erreur ici
      },
    },
  },
  plugins: [],
};
