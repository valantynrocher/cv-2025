// tailwind.config.js
const vertSapin = "#004f3b";
const jauneClair = "#fef9c2";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: jauneClair,
          dark: vertSapin,
        },
        secondary: {
          light: vertSapin,
          dark: jauneClair,
        },
        typo: {
          light: "#E0E0E0",
          dark: "#333333",
        },
        // vertSapin: "#101f17", // Vert plus foncé
        // jaune: "#FFD700",
        // grisSombre: "#333333",
        // grisClair: "#E0E0E0",
        // bleuClair: "#A3C8D7",
      },
      fontFamily: {
        sans: ["Quicksand", "Avenir", "Helvetica", "Arial", "sans-serif"], // <-- sans erreur ici
      },
    },
  },
  plugins: [],
};
