import { Element } from "react-scroll";
import SectionProps from "./SectionProps";

const Section = (props: SectionProps) => {
  const { id, title, displayTitle, content } = props;
  const { Component, classes } = content;

  return (
    <Element
      name={id}
      id={id}
      className={`${
        classes?.main || ""
      } element flex flex-col w-full items-center justify-center pt-12 pb-12 `}
    >
      {displayTitle ? (
        <h2 className={`${classes?.title || ""} text-3xl  font-bold mb-5`}>
          {title}
        </h2>
      ) : null}
      <div className={`${classes?.content || ""} w-full pt-5 pb-5`}>
        {Component ? <Component /> : null}
      </div>
    </Element>
  );
};

export default Section;
