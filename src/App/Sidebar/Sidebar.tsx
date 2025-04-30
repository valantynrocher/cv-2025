import NavigationList from "@/App/Sidebar/NavigationList";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import SidebarToggler from "@/App/Sidebar/SidebarToggler";
import ThemeToggler from "@/App/Sidebar/ThemeToggler";
import { SIDEBAR_WIDTH } from "@/constants";

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`w-${
        isOpen ? SIDEBAR_WIDTH.OPEN : SIDEBAR_WIDTH.CLOSED
      } flex flex-col p-4 bg-primary-light dark:bg-primary-dark fixed top-0 left-0  h-full border-secondary-light dark:border-secondary-dark border-solid border-r`}
    >
      <div
        className={`${
          isOpen ? "flex" : "flex-col"
        } justify-between items-center`}
      >
        <div
          style={{
            lineHeight: "3rem",
            borderRadius: "50%",
          }}
          className="w-12 h-12 text-center border-secondary-light dark:border-secondary-dark border-solid border-r align-middle text-secondary-light dark:text-secondary-dark font-bold"
        >
          V
        </div>
        {!isOpen ? <div className="h-6" /> : null}
        <div className={`flex ${!isOpen ? "flex-col" : ""}`}>
          <ThemeToggler />
          <div className={`${isOpen ? "w-2" : "h-2"}`} />
          <SidebarToggler />
        </div>
      </div>
      <div className="relative text-center m-auto">
        <NavigationList />
      </div>
    </div>
  );
};

export default Sidebar;
