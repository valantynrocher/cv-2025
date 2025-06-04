import { NavigationItemProps } from "@/App/Sidebar/NavigationList/NavigationItem/NavigationItemProps";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import { DEFAULT_SCROLL_PROPS } from "@/constants";
import { Link } from "react-scroll";

const globalClassName =
  "p-2 cursor-pointer rounded transition block border-solid border";

const NavigationItem = (props: NavigationItemProps) => {
  const {
    section: { icon: Icon, title, navigation },
    isActive,
  } = props;
  const { link, type, download } = navigation;

  const { isOpen, isHorizontalSidebar } = useSidebar();

  const isLargeRenderer = isHorizontalSidebar || isOpen;

  const renderTypeMatcher: Record<typeof type, React.JSX.Element> = {
    anchor: (
      <Link
        to={link}
        className={`${globalClassName}
        ${
          isActive
            ? "bg-secondary-light text-primary-light hover:text-primary-light dark:bg-secondary-dark dark:text-primary-dark dark:hover:text-primary-dark border-none"
            : "text-secondary-light hover:text-secondary-light dark:text-secondary-dark dark:hover:text-secondary-dark border-transparent hover:border-secondary-light dark:hover:border-secondary-dark"
        }`}
        {...DEFAULT_SCROLL_PROPS}
      >
        {isLargeRenderer ? title : <Icon />}
      </Link>
    ),
    button: (
      <a
        className={`${globalClassName} flex items-center border-stone-500 text-stone-500 hover:border-secondary-light hover:text-secondary-light dark:border-stone-200 dark:text-stone-200 dark:hover:border-secondary-dark dark:hover:text-secondary-dark`}
        href={link}
        download={download}
      >
        <Icon className={`m-auto `} size={18} />
        {isLargeRenderer ? (
          <>
            <div className="w-2" />
            {title}
          </>
        ) : null}
      </a>
    ),
  };

  return renderTypeMatcher[type];
};

export default NavigationItem;
