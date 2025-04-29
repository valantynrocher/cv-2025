import { SectionData } from "@/types";

const sectionsData: SectionData[] = [
  {
    id: "home",
    label: "Accueil",
    link: "#home", // Lien vers la section
    icon: "home-icon", // Optionnel
    visibleInMenu: true, // Affiché dans la sidebar ?
    visibleInSection: true, // Affiché dans la section correspondante ?
    content: "Bienvenue sur mon portfolio !", // Contenu de la section
  },
  {
    id: "about",
    label: "À propos",
    link: "#about",
    icon: "about-icon",
    visibleInMenu: true,
    visibleInSection: true,
    content: "Je suis développeur web passionné...",
  },
  {
    id: "experience",
    label: "Expérience",
    link: "#experience",
    icon: "experience-icon",
    visibleInMenu: true,
    visibleInSection: true,
    content: "Voici mes expériences...",
  },
  {
    id: "formation",
    label: "Formation",
    link: "#formation",
    icon: "formation-icon",
    visibleInMenu: true,
    visibleInSection: true,
    content: "Voici mes formations...",
  },
  {
    id: "contact",
    label: "Contactez-moi",
    link: "#contact",
    icon: "contact-icon",
    visibleInMenu: true,
    visibleInSection: true,
    content: "Vous pouvez me contacter par email...",
  },
];

export default sectionsData;
