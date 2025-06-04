import { SectionData } from "@/types";

type SectionProps = Pick<
  SectionData,
  "id" | "title" | "displayTitle" | "content"
>;

export default SectionProps;
