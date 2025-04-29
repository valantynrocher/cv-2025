import { sectionsData } from "@/data";
import { useEffect } from "react";
import { Link, scrollSpy } from "react-scroll";

const Sidebar = () => {
  const visibleSections = sectionsData.filter(
    (section) => section.visibleInMenu
  );

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-vertSapin text-white p-4">
      {visibleSections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
          className="p-2 cursor-pointer rounded transition block text-grisClair"
          activeClass="bg-jaune text-vertSapin"
        >
          {section.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
