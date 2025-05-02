import { useSidebar } from "@/App/Sidebar/SidebarContext";
import DropdownMenuRenderer from "@/App/Sidebar/SidebarPositionToggler/DropdownMenuRenderer";
import ToggleGroupRenderer from "@/App/Sidebar/SidebarPositionToggler/ToggleGroupRenderer";

const SidebarPositionToggler = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex justify-center h-(32px)">
      {isOpen ? <ToggleGroupRenderer /> : <DropdownMenuRenderer />}
    </div>
  );
};

export default SidebarPositionToggler;
