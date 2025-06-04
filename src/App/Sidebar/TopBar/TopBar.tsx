import { useSidebar } from "@/App/Sidebar/SidebarContext";
import SidebarToggler from "@/App/Sidebar/TopBar/SidebarToggler";
import ThemeToggler from "@/App/Sidebar/TopBar/ThemeToggler";
import avatar from "@/assets/avatar.jpeg";
import Avatar from "@/Components/Avatar";
import { CLASSES } from "@/constants";

const TopBar = () => {
  const { isOpen, position, isHorizontalSidebar } = useSidebar();

  return (
    <div
      className={`${
        isOpen
          ? CLASSES.sidebarOpen[position]?.topBarClassname || ""
          : CLASSES.sidebarClose[position]?.topBarClassname || ""
      }
      ${CLASSES.sidebarPosition[position].topBarClassname}`}
    >
      <Avatar
        classes={{
          main: `${
            isOpen
              ? CLASSES.sidebarOpen[position]?.topBarAvatarClassname || ""
              : CLASSES.sidebarClose[position]?.topBarAvatarClassname || ""
          } ${CLASSES.sidebarPosition[position].topBarAvatarClassname}`,
        }}
        src={avatar}
      />
      {isOpen ? null : <div className="h-4" />}
      {isHorizontalSidebar ? <div className="w-4" /> : null}
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
