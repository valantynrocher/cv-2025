import { SectionData } from "@/types";
import { useEffect, useState } from "react";

const useActiveSection = (sections: SectionData[]) => {
  const [activeSection, setActiveSection] = useState<string>(
    window.location.hash.substring(1) || "home"
  );

  const sectionIds = sections.map((section) => section.id);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const updateActiveSection = () => {
      const middle = window.innerHeight / 2;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          const bottom = top + element.offsetHeight;
          if (top <= middle && bottom > middle) {
            if (activeSection !== id) {
              setActiveSection(id);
              history.replaceState(null, "", `#${id}`);
            }
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateActiveSection, 100);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    // Init on load
    handleHashChange();
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
