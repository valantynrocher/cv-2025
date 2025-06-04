import NavigationItem from "@/App/Sidebar/NavigationList/NavigationItem";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import useActiveSection from "@/App/Sidebar/useActiveSection";
import { CLASSES } from "@/constants";
import { contentsData } from "@/data";

const sections = contentsData.filter((section) => Boolean(section.navigation));

const NavigationList = () => {
  const { position, isVerticalSidebar, isHorizontalSidebar } = useSidebar();
  const activeSection = useActiveSection(sections);

  return (
    <div
      className={`flex text-center m-auto
      ${CLASSES.sidebarPosition[position].navigationListClassname}
    `}
    >
      {sections.map((section, idx, array) => (
        <div
          className={`flex ${isVerticalSidebar ? "flex-col" : ""}`}
          key={section.id}
        >
          <NavigationItem
            section={section}
            isActive={activeSection === section.id}
          />
          {idx < array.length - 1 ? (
            <div className={isHorizontalSidebar ? "w-2" : "h-2"} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default NavigationList;
