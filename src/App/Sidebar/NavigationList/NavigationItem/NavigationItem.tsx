import { NavigationItemProps } from "@/App/Sidebar/NavigationList/NavigationItem/NavigationItemProps";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import { DEFAULT_SCROLL_PROPS } from "@/constants";
import { Link } from "react-scroll";

const NavigationItem = (props: NavigationItemProps) => {
  const {
    section: { id, icon: Icon, label },
    isActive,
  } = props;

  const { isOpen, position } = useSidebar();

  const displayLabel = ["top", "bottom"].includes(position) || isOpen;

  return (
    <Link
      key={id}
      to={id}
      className={`p-2 cursor-pointer rounded transition block
        ${
          isActive
            ? "bg-primary-dark dark:bg-primary-light text-secondary-dark dark:text-secondary-light"
            : "text-secondary-light dark:text-secondary-dark"
        }`}
      {...DEFAULT_SCROLL_PROPS}
    >
      {displayLabel ? label : <Icon />}
    </Link>
  );
};

export default NavigationItem;
