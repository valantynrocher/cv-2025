import { useSidebar } from "@/App/Sidebar";
import ActionIconButton from "@/Components/ActionIconButton";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

const SidebarToggler = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <ActionIconButton
      onClick={toggleSidebar}
      icon={isOpen ? PanelLeftClose : PanelLeftOpen}
    />
  );
};

export default SidebarToggler;
