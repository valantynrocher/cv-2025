import HomeSection from "@/App/ScrollableContent/HomeSection";
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
    title: "Accueil",
    displayTitle: false,
    icon: House, // Optionnel
    visibleInMenu: true, // Affiché dans la sidebar ?
    visibleInSection: true, // Affiché dans la section correspondante ?
    content: HomeSection,
    classes: {
      main: "h-[calc(100vh-80px)]",
      content: "text-center",
    },
  },
  {
    id: "about",
    title: "À propos",
    displayTitle: true,
    icon: SquareUserRound,
    visibleInMenu: true,
    visibleInSection: true,
    content: () => "Je suis développeur web passionné...",
  },
  {
    id: "experience",
    title: "Expérience",
    displayTitle: true,
    icon: Waypoints,
    visibleInMenu: true,
    visibleInSection: true,
    content: () => "Voici mes expériences...",
  },
  {
    id: "formation",
    title: "Formation",
    displayTitle: true,
    icon: GraduationCap,
    visibleInMenu: true,
    visibleInSection: true,
    content: () => "Voici mes formations...",
  },
  {
    id: "contact",
    title: "Contact",
    displayTitle: true,
    icon: Send,
    visibleInMenu: true,
    visibleInSection: true,
    content: () => "Vous pouvez me contacter par email...",
  },
];

export default sectionsData;
