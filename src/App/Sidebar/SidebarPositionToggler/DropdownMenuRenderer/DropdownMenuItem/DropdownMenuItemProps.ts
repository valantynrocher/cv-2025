import { SidebarPosition } from "@/App/Sidebar/SidebarContext";
import { LucideProps } from "lucide-react";

export type DropdownMenuItemProps = {
  label: string;
  value: SidebarPosition;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
