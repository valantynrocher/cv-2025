import { Element } from "react-scroll";
import SectionProps from "./SectionProps";

const Section = (props: SectionProps) => {
  const { id, title } = props;

  return (
    <Element
      name={id}
      id={id}
      className="element min-h-screen flex w-full items-center justify-center p-8 bg-primary-light dark:bg-primary-dark"
    >
      <h2 className="text-3xl text-secondary-light dark:text-secondary-dark font-bold">
        {title}
      </h2>
    </Element>
  );
};

export default Section;
