import Avatar from "@/App/Sidebar/TopBar/Avatar";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import SidebarToggler from "@/App/Sidebar/TopBar/SidebarToggler";
import ThemeToggler from "@/App/Sidebar/TopBar/ThemeToggler";
import { CLASSES } from "@/constants";

const TopBar = () => {
  const { isOpen, position } = useSidebar();

  return (
    <div
      className={`${
        isOpen
          ? CLASSES.sidebarOpen[position]?.topBarClassname || ""
          : CLASSES.sidebarClose[position]?.topBarClassname || ""
      }
      ${CLASSES.sidebarPosition[position].topBarClassname}`}
    >
      <Avatar />
      {isOpen ? null : <div className="h-4" />}
      {["top", "bottom"].includes(position) ? <div className="w-4" /> : null}
      <div
        className={`flex ${
          isOpen
            ? CLASSES.sidebarOpen[position]?.topBarActionsClassname || ""
            : CLASSES.sidebarClose[position]?.topBarActionsClassname || ""
        }
        ${CLASSES.sidebarPosition[position].topBarActionsClassname}`}
      >
        <ThemeToggler />
        {position === "left" || position === "right" ? (
          <>
            <div className={`${isOpen ? "w-2" : "h-2"}`} />
            <SidebarToggler />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
