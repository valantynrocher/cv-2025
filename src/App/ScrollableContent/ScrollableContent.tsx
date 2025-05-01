import { useSidebar } from "@/App/Sidebar";
import Section from "@/Components/Section";
import { SIZES } from "@/constants";
import { sectionsData } from "@/data";
import { clsx } from "clsx";

const ScrollableContent = () => {
  const { isOpen, position } = useSidebar();
  const visibleSections = sectionsData.filter((s) => s.visibleInSection);

  return (
    <div
      className={clsx(
        "flex-1",
        isOpen
          ? SIZES.sidebarOpen.contentMargin[position]
          : SIZES.sidebarClose.contentMargin[position]
      )}
    >
      {visibleSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.label} />
      ))}
    </div>
  );
};

export default ScrollableContent;
