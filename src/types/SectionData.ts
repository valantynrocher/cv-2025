export default SectionData;

export type SectionData = {
  id: string;
  label: string;
  link: string; // Lien vers la section
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Optionnel
  visibleInMenu: boolean; // Affiché dans la sidebar ?
  visibleInSection: boolean; // Affiché dans la section correspondante ?
  content: unknown; // Contenu de la section
};
