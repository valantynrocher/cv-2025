export type SectionData = {
  id: string;
  label: string;
  link: string; // Lien vers la section
  icon: string; // Optionnel
  visibleInMenu: boolean; // Affiché dans la sidebar ?
  visibleInSection: boolean; // Affiché dans la section correspondante ?
  content: unknown; // Contenu de la section
};
