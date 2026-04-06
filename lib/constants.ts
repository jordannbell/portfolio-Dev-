export const PERSONAL_INFO = {
  name: "Jordan BELL",
  title: "Développeur Full Stack",
  email: "jordanbe3721@gmail.com",
  location: "Mobilité : Territoire français",
  github: "https://github.com/jordannbell",
  linkedin: "https://www.linkedin.com/in/jordanbell3721/",
};

export const SKILLS = {
  languages: [
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "TypeScript",
    "Python",
  ],
  mobile: ["React Native", "Flutter"],
  frameworks: [
    "Next.js",
    "React",
    "Angular 18",
    "Vue.js",
    "Node.js",
    "Express",
    "TailwindCSS",
    "Bootstrap",
    "Django",
  ],
  database: ["PostgreSQL", "MongoDB", "Supabase"],
  tools: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "GitLab",
    "Docker",
    "CI/CD",
    "Jest",
    "Vitest",
    "Postman",
    "API REST",
    "Agile/Scrum",
    "Jira",
    "Trello",
  ],
  design: ["Figma", "Photoshop", "Illustrator"],
  cms: ["WordPress", "Drupal", "Prestashop"],
  automation: ["n8n"],
};

export const PROJECTS = [
  {
    id: 1,
    title: "LT ENR - Solutions Solaires",
    description:
      "Site web professionnel pour LT ENR, expert en solutions solaires photovoltaïques. Développement et maintenance des composants, gestion de base de données MongoDB et interface moderne.",
    descriptionEn:
      "Professional website for LT ENR, expert in photovoltaic solar solutions. Component development and maintenance, MongoDB database management and modern interface.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS", "API REST", "Maintenance"],
    liveUrl: "https://ltenr81.vercel.app/",
    githubUrl: "https://github.com/jordannbell",
  },
  {
    id: 2,
    title: "2V177 - Site École",
    description:
      "Site web institutionnel complet pour une école, conçu avec une interface moderne et responsive. Gestion du contenu, actualités, et système de contact intégré.",
    descriptionEn:
      "Complete institutional website for a school, designed with modern and responsive interface. Content management, news, and integrated contact system.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "TailwindCSS", "API REST", "CMS"],
    liveUrl: "https://2v177.com/home/",
    githubUrl: "https://github.com/jordannbell",
  },
  {
    id: 3,
    title: "H2 Tracker",
    description:
      "Application web de suivi et de visualisation des données, interface moderne et responsive pour le pilotage des indicateurs en temps réel.",
    descriptionEn:
      "Web application for tracking and visualizing data, with a modern responsive interface for real-time indicator monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "API REST", "Data viz"],
    liveUrl: "https://h2-tracker.com/",
    githubUrl: "https://github.com/jordannbell",
  },
  {
    id: 4,
    title: "Long Exchange",
    description:
      "Plateforme web pour Long Exchange (environnement de test), mise en place de l'interface et des flux métiers associés.",
    descriptionEn:
      "Web platform for Long Exchange (test environment), implementing the interface and related business flows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "API REST"],
    liveUrl: "https://test.long-exchange.com/",
    githubUrl: "https://github.com/jordannbell",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Mastère 2 Data Engineering",
    school: "Digital School of Paris",
    period: "2025",
    description:
      "Formation spécialisée en ingénierie des données, avec focus sur le traitement, le stockage et l'analyse de grandes quantités de données. Conception et développement de pipelines de données, architectures Big Data et solutions d'analyse avancées.",
    skills: ["Data Engineering", "Big Data", "Data Pipelines", "Analytics"],
  },
  {
    id: 2,
    degree: "Mastère 2 Architecture Web",
    school: "Digital School of Paris",
    period: "2024",
    description:
      "Formation spécialisée en architecture web moderne, avec focus sur les technologies cloud, microservices et DevOps. Conception et développement d'applications web scalables et performantes.",
    skills: ["Architecture Web", "Cloud", "Microservices", "DevOps", "CI/CD"],
  },
  {
    id: 3,
    degree: "Licence en Génie Logiciel",
    school: "IUT de Douala",
    period: "2022",
    description:
      "Formation complète en développement logiciel avec une solide base en programmation, algorithmique et gestion de projet. Acquisition des fondamentaux du génie logiciel et des méthodologies de développement.",
    skills: ["Programmation", "Algorithmique", "Base de données", "UML", "Gestion de projet"],
  },
];
