import NavigationItem from "@/App/Sidebar/NavigationList/NavigationItem";
import useActiveSection from "@/App/Sidebar/useActiveSection";
import { sectionsData } from "@/data";

const visibleSections = sectionsData.filter((section) => section.visibleInMenu);

const NavigationList = () => {
  const activeSection = useActiveSection(visibleSections);

  return (
    <>
      {visibleSections.map((section, idx, array) => {
        return (
          <>
            <NavigationItem
              key={section.id}
              section={section}
              isActive={activeSection === section.id}
            />
            {idx < array.length - 1 ? <div className="h-2" /> : null}
          </>
        );
      })}
    </>
  );
};

export default NavigationList;
