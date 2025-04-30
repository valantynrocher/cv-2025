import { SectionData } from "@/types";
import {
  GraduationCap,
  House,
  Send,
  SquareUserRound,
  Waypoints,
} from "lucide-react";

const sectionsData: SectionData[] = [
  {
    id: "home",
    label: "Accueil",
    link: "#home", // Lien vers la section
    icon: House, // Optionnel
    visibleInMenu: true, // Affiché dans la sidebar ?
    visibleInSection: true, // Affiché dans la section correspondante ?
    content: "Bienvenue sur mon portfolio !", // Contenu de la section
  },
  {
    id: "about",
    label: "À propos",
    link: "#about",
    icon: SquareUserRound,
    visibleInMenu: true,
    visibleInSection: true,
    content: "Je suis développeur web passionné...",
  },
  {
    id: "experience",
    label: "Expérience",
    link: "#experience",
    icon: Waypoints,
    visibleInMenu: true,
    visibleInSection: true,
    content: "Voici mes expériences...",
  },
  {
    id: "formation",
    label: "Formation",
    link: "#formation",
    icon: GraduationCap,
    visibleInMenu: true,
    visibleInSection: true,
    content: "Voici mes formations...",
  },
  {
    id: "contact",
    label: "Contactez-moi",
    link: "#contact",
    icon: Send,
    visibleInMenu: true,
    visibleInSection: true,
    content: "Vous pouvez me contacter par email...",
  },
];

export default sectionsData;
