import NavigationItem from "@/App/Sidebar/NavigationList/NavigationItem";
import { useSidebar } from "@/App/Sidebar/SidebarContext";
import useActiveSection from "@/App/Sidebar/useActiveSection";
import { CLASSES } from "@/constants";
import { sectionsData } from "@/data";

const visibleSections = sectionsData.filter((section) => section.visibleInMenu);

const NavigationList = () => {
  const { position } = useSidebar();
  const activeSection = useActiveSection(visibleSections);

  return (
    <div
      className={`flex text-center m-auto
      ${CLASSES.sidebarPosition[position].navigationListClassname}
    `}
    >
      {visibleSections.map((section, idx, array) => {
        return (
          <div key={section.id}>
            <NavigationItem
              section={section}
              isActive={activeSection === section.id}
            />
            {idx < array.length - 1 ? <div className="h-2" /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default NavigationList;
