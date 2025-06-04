import ExperienceCard from "@/App/ScrollableContent/ExperienceSection/ExperienceCard";
import { experiencesData } from "@/data";

const ExperienceSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {experiencesData.map((experience) => (
        <ExperienceCard {...experience} />
      ))}
    </div>
  );
};

export default ExperienceSection;
