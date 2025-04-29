import { Element } from "react-scroll";
import SectionProps from "./SectionProps";

const Section = (props: SectionProps) => {
  const { id, title } = props;

  return (
    <Element
      name={id}
      id={id}
      className="element min-h-screen flex w-full items-center justify-center bg-gray-100 text-black p-8"
    >
      <h2 className="text-3xl font-bold">{title}</h2>
    </Element>
  );
};

export default Section;
