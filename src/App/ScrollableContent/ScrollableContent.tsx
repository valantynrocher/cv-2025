import { useSidebar } from "@/App/Sidebar";
import Section from "@/Components/Section";
import { SIDEBAR_WIDTH } from "@/constants";
import { sectionsData } from "@/data";

const ScrollableContent = () => {
  const { isOpen } = useSidebar();
  const visibleSections = sectionsData.filter((s) => s.visibleInSection);

  return (
    <div
      className={`flex-1 ml-${
        isOpen ? SIDEBAR_WIDTH.OPEN : SIDEBAR_WIDTH.CLOSED
      }`}
    >
      {visibleSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.label} />
      ))}
    </div>
  );
};

export default ScrollableContent;
