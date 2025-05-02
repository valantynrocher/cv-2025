import NavigationList from "@/App/Sidebar/NavigationList";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import SidebarPositionToggler from "@/App/Sidebar/SidebarPositionToggler";
import TopBar from "@/App/Sidebar/TopBar";
import { CLASSES } from "@/constants";

const Sidebar = () => {
  const { isOpen, position } = useSidebar();

  return (
    <div
      className={`flex fixed p-2 bg-primary-light dark:bg-primary-dark border-secondary-light dark:border-secondary-dark border-solid
        ${
          isOpen
            ? CLASSES.sidebarOpen[position]?.sidebarClassname || ""
            : CLASSES.sidebarClose[position]?.sidebarClassname || ""
        }
        ${CLASSES.sidebarPosition[position].sidebarClassname}
       `}
    >
      <TopBar />

      <NavigationList />

      <SidebarPositionToggler />
    </div>
  );
};

export default Sidebar;
