import { NavigationItemProps } from "@/App/Sidebar/NavigationList/NavigationItem/NavigationItemProps";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import { DEFAULT_SCROLL_PROPS } from "@/constants";
import { Link } from "react-scroll";

const NavigationItem = (props: NavigationItemProps) => {
  const {
    section: { id, icon: Icon, label },
    isActive,
  } = props;

  const { isOpen } = useSidebar();

  return (
    <Link
      key={id}
      to={id}
      className={`${
        isActive
          ? "bg-primary-dark dark:bg-primary-light text-secondary-dark dark:text-secondary-light"
          : "text-secondary-light dark:text-secondary-dark"
      } p-2 cursor-pointer rounded transition block `}
      {...DEFAULT_SCROLL_PROPS}
    >
      {isOpen ? label : <Icon />}
    </Link>
  );
};

export default NavigationItem;
