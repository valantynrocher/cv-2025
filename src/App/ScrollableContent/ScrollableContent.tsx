import { useSidebar } from "@/App/Sidebar";
import Section from "@/Components/Section";
import { CLASSES } from "@/constants";
import { contentsData } from "@/data";

const ScrollableContent = () => {
  const { isOpen, position } = useSidebar();
  const sections = contentsData.filter((s) => s.content !== null);

  return (
    <div className="h-screen w-full">
      <div
        id="scrollable-content"
        className={`flex flex-col pl-12 pr-12 bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark
        ${
          isOpen
            ? CLASSES.sidebarOpen[position]?.scrollableContentClassname || ""
            : CLASSES.sidebarClose[position]?.scrollableContentClassname || ""
        } 
      `}
      >
        {position === "top" ? <div className="h-20" /> : null}
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            displayTitle={section.displayTitle}
            content={section.content}
          />
        ))}
        {position === "bottom" ? <div className="h-20" /> : null}
      </div>
    </div>
  );
};

export default ScrollableContent;
