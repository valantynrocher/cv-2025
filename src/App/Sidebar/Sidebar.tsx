import NavigationList from "@/App/Sidebar/NavigationList";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import SidebarToggler from "@/App/Sidebar/SidebarToggler";
import ThemeToggler from "@/App/Sidebar/ThemeToggler";
import { SIZES } from "@/constants";
import avatar from "@/assets/avatar.jpeg";

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`${
        isOpen ? SIZES.sidebarOpen.width : SIZES.sidebarClose.width
      } flex flex-col p-2 bg-primary-light dark:bg-primary-dark fixed top-0 left-0  h-full border-secondary-light dark:border-secondary-dark border-solid border-r`}
    >
      <div className={`${isOpen ? "flex items-center justify-between" : ""}`}>
        <div
          className={`${
            isOpen ? "w-16 h-16" : "w-full h-auto m-auto"
          }  rounded-full overflow-hidden border border-secondary-light dark:border-secondary-dark flex items-center justify-center bg-secondary-dark text-white font-bold`}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar Valentin Rocher"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="absolute">V</span>
          )}
        </div>
        {!isOpen ? <div className="h-4" /> : null}
        <div className={`flex ${!isOpen ? "flex-col items-center" : ""}`}>
          <ThemeToggler />
          <div className={`${isOpen ? "w-2" : "h-2"}`} />
          <SidebarToggler />
          <div className={`${isOpen ? "w-2" : "h-2"}`} />
        </div>
      </div>
      <div className="relative text-center m-auto">
        <NavigationList />
      </div>
    </div>
  );
};

export default Sidebar;
