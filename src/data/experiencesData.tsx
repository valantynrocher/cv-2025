import { ExperienceData } from "@/types";

const experiencesData: ExperienceData[] = [
  {
    logoFile: "logo-pause_voyage.svg",
    logoAlt: "Pause professionnelle",
    job: "Voyage & Développement personnel",
    company: "Pause professionnelle",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-04-30"),
    description: (
      <>
        Second voyage au long cours en couple en sac à dos, en quête de
        découverte de nouvelles cultures et de nouveaux horizons.
        <br />
        <br />
        Les voyages m'ont apporté beaucoup d'humilité, une grande capacité
        d'adaptation, une patience renforcée, la capacité à relativiser et à se
        décentrer de soi-même. Des qualités humaines que je pourrais mettre au
        service de n'importe quel projet professionnel !
        <br />
        <br />
        Itinéraire :
        <ul>
          <li>Guatemala</li> <li>Costa Rica</li>
          <li>
            Argentine (Buenos Aires, Nord-Ouest) & Chili (Santiago, Désert
            Atacama)
          </li>
          <li>New York</li> <li>[Retour en France]</li>
          <li>Maroc</li> <li>Madagascar</li> <li>Île de la Réunion</li>
          <li>Rwanda</li> <li>Tanzanie</li> <li>Ouganda</li>
        </ul>
      </>
    ),
    tags: ["Développement personnel", "Voyage", "Compétences humaines"],
  },
  {
    logoFile: "logo-innovance.png",
    logoAlt: "Innovance Solutions",
    job: "Développeur web",
    company: "Innovance Solutions - CDI",
    startDate: new Date("2020-08-17"),
    endDate: new Date("2023-12-31"),
    description: (
      <>
        Premier post de développeur, en sortie de formation courte, chez un
        éditeur de logiciel professionnel de gestion de temps et de budget,
        destiné aux associations employeuses. Forte montée en compétences sur
        typescript/react/redux/redux-saga/MUI design system...
        <br />
        <br />
        Travail sur le développement front-end : développement et amélioration
        des interfaces dans le cadre du renouvellement complet de la couche
        front-end des logiciels ou pour l'ajout de nouveaux modules ou de
        nouvelles fonctionnalités. Connexions aux API, manipulation de la data,
        travail sur l'ergonomie (UX) et sur l'interface (UI).
        <br />
        <br />
        Étroite collaboration avec le développement back end pour la
        modélisation des données, la conception des APIS, la structuration des
        réponses, l'implémentation des règles de gestion, etc.
        <br />
        <br />
        Développement des tests unitaires et d’intégration avec Jest et
        react-testing-library, travail sur la couverture de test Intégration
        d'outils et de méthodes Agiles/Scrum, utilisation de Jira pour consigner
        et suivre les tâches de développement, avec prise de leadership sur
        l'outil pour structurer le traitement des développements (évolutions,
        bugs, nouveautés, etc.) au sein de l'équipe.
        <br />
        <br />
        Support utilisateur téléphone et e-mail : prise en compte de remontés de
        bugs, aide à la connexion, investigations de problèmes potentiels de
        data dans les bases de données client, etc.
      </>
    ),
    tags: [
      "Front end",
      "Éditeur de logiciel",
      "Application web",
      "React js",
      "Typescript",
      "Full remote",
    ],
  },
  {
    logoFile: "logo-allovoisins.png",
    logoAlt: "AlloVoisins",
    job: "Développeur web",
    company: "AlloVoisins - Stage",
    startDate: new Date("2020-05-01"),
    endDate: new Date("2020-05-31"),
    description: "",
    tags: ["Application web", "Stage", "jQuery"],
  },
];

export default experiencesData;
