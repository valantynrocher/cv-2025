import ThemeToggler from "@/App/ThemeToggler";
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
    <div className="fixed top-0 left-0 h-full w-56 p-4 bg-primary-light dark:bg-primary-dark border-secondary-light dark:border-secondary-dark border-solid border-r">
      <div className="flex justify-between items-center">
        <div
          style={{
            lineHeight: "3rem",
            borderRadius: "50%",
          }}
          className="w-12 h-12 text-center border-secondary-light dark:border-secondary-dark border-solid border-r align-middle text-secondary-light dark:text-secondary-dark font-bold"
        >
          V
        </div>
        <div className="">
          <ThemeToggler />
        </div>
      </div>
      <div className="relative text-center top-1/2 -translate-y-1/2">
        {visibleSections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="p-2 cursor-pointer rounded transition block text-secondary-light dark:text-secondary-dark"
            activeClass="bg-jaune text-vertSapin"
          >
            {section.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
