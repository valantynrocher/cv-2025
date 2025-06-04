import { LucideProps } from "lucide-react";

type ContentData = {
  id: string;
  title: string;
  displayTitle: boolean;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >; // Optionnel
  navigation: {
    type: "anchor" | "button";
    link: string;
    download?: boolean;
  } | null;
  content: {
    Component?: React.ComponentType<unknown>;
    classes?: {
      main?: string;
      title?: string;
      content?: string;
    };
  } | null;
};

export default ContentData;
