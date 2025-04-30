import NavigationItem from "@/App/Sidebar/NavigationList/NavigationItem";
import useActiveSection from "@/App/Sidebar/useActiveSection";
import { sectionsData } from "@/data";

const visibleSections = sectionsData.filter((section) => section.visibleInMenu);

const NavigationList = () => {
  const activeSection = useActiveSection(visibleSections);

  return (
    <>
      {visibleSections.map((section) => (
        <NavigationItem
          key={section.id}
          section={section}
          isActive={activeSection === section.id}
        />
      ))}
    </>
  );
};

export default NavigationList;
