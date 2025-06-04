type ExperienceData = {
  logoFile: string;
  logoAlt?: string;
  job: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string | React.ReactNode;
  tags: string[];
};

export default ExperienceData;
