import { useSidebar } from "@/App/Sidebar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

const SidebarToggler = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const handleOnClick = () => toggleSidebar();

  return (
    <button
      onClick={handleOnClick}
      className="p-2 text-sm rounded bg-primary-dark dark:bg-primary-light text-secondary-dark dark:text-secondary-light"
    >
      <>{isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}</>
    </button>
  );
};

export default SidebarToggler;
