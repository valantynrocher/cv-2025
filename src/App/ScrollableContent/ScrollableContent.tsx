import Section from "@/Components/Section";
import { sectionsData } from "@/data";

const ScrollableContent = () => {
  const visibleSections = sectionsData.filter((s) => s.visibleInSection);

  return (
    <div className="ml-56 flex-1">
      {visibleSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.label} />
      ))}
    </div>
  );
};

export default ScrollableContent;
