export default SectionData;

export type SectionData = {
  id: string;
  title: string;
  displayTitle: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Optionnel
  visibleInMenu: boolean; // Affiché dans la sidebar ?
  visibleInSection: boolean; // Affiché dans la section correspondante ?
  content?: React.ComponentType<unknown>;
  classes?: {
    main?: string;
    title?: string;
    content?: string;
  };
};
