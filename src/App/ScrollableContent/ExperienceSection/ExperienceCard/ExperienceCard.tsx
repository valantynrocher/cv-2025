import { ExperienceCardProps } from "./ExperienceCardProps";

const logoClassName = "rounded-full bg-white";

const getPeriodDisplay = (startDate: Date, endDate: Date): string => {
  const locale = new Intl.Locale("fr");
  const periodFormater = Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  });
  const startPeriod = periodFormater.format(startDate);
  const endPeriod = periodFormater.format(endDate);

  return startPeriod + " à " + endPeriod;
};

const getDurationDisplay = (startDate: Date, endDate: Date): string => {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  const yearDiff = endYear - startYear;
  const monthDiff = endMonth - startMonth;

  return (
    (yearDiff > 0 ? yearDiff + " an" : "") +
    (yearDiff > 1 ? "s " : " ") +
    (monthDiff > 0 ? " et " + monthDiff + " mois" : "< 1 mois")
  );
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const {
    logoAlt,
    logoFile,
    job,
    company,
    startDate,
    endDate,
    description,
    tags,
  } = props;

  const periodDisplay = getPeriodDisplay(startDate, endDate);
  const durationDisplay = getDurationDisplay(startDate, endDate);

  return (
    <div className="max-h-[415px] flex flex-col p-5 border border-solid rounded-[11px] border-secondary-light dark:border-secondary-dark">
      {/* Card header */}
      <div className="flex items-center mb-5">
        <img
          src={`src/assets/${logoFile}`}
          width="60"
          height="60"
          alt={logoAlt || logoFile}
          className={`logo ${logoClassName} w-[60px] h-[60px]`}
        />

        <div className="w-3" />

        <div className="flex flex-col">
          <h2 className="font-bold">{job}</h2>
          <h3 className="text-sm">{company}</h3>
          <h4 className="text-xs">
            {periodDisplay} - {durationDisplay}
          </h4>
        </div>
      </div>

      {/* Card content */}
      <div className="text-sm overflow-auto mb-5">{description}</div>

      {/* Card footer */}
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <div className="p-1 mr-1 mb-1 rounded-sm text-xs whitespace-nowrap border-solid  border-secondary-light dark:border-secondary-dark bg-secondary-light dark:bg-secondary-dark bg-opacity-30 hover:bg-opacity-50 dark:bg-opacity-30 dark:hover:bg-opacity-50 cursor-pointer">
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
