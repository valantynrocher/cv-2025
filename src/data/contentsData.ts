import AboutSection from "@/App/ScrollableContent/AboutSection";
import ExperienceSection from "@/App/ScrollableContent/ExperienceSection";
import HomeSection from "@/App/ScrollableContent/HomeSection";
import { ContentData } from "@/types";
import {
  GraduationCap,
  House,
  Send,
  SquareUserRound,
  Waypoints,
  DownloadIcon,
} from "lucide-react";

const contentsData: ContentData[] = [
  {
    id: "home",
    title: "Accueil",
    displayTitle: false,
    icon: House, // Optionnel
    navigation: {
      type: "anchor",
      link: "home",
    },
    content: {
      Component: HomeSection,
      classes: {
        main: "h-[calc(100vh-80px)]",
        content: "flex flex-col items-center ",
      },
    },
  },
  {
    id: "about",
    title: "À propos",
    displayTitle: true,
    icon: SquareUserRound,
    navigation: {
      type: "anchor",
      link: "about",
    },
    content: {
      Component: AboutSection,
    },
  },
  {
    id: "experience",
    title: "Expérience",
    displayTitle: true,
    icon: Waypoints,
    navigation: {
      type: "anchor",
      link: "experience",
    },
    content: {
      Component: ExperienceSection,
    },
  },
  {
    id: "formation",
    title: "Formation",
    displayTitle: true,
    icon: GraduationCap,
    navigation: {
      type: "anchor",
      link: "formation",
    },
    content: {
      Component: () => "Voici mes formations...",
    },
  },
  {
    id: "contact",
    title: "Contact",
    displayTitle: true,
    icon: Send,
    navigation: {
      type: "anchor",
      link: "contact",
    },
    content: {
      Component: () => "Vous pouvez me contacter par email...",
    },
  },
  {
    id: "cv",
    title: "Mon CV",
    displayTitle: false,
    icon: DownloadIcon,
    navigation: {
      type: "button",
      link: "/cv.pdf",
      download: true,
    },
    content: null,
  },
];

export default contentsData;
