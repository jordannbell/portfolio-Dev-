export const PERSONAL_INFO = {
  name: "Jordan BELL",
  title: "Développeur Full Stack",
  email: "jordanbe3721@gmail.com",
  location: "Mobilité : Territoire français",
  github: "https://github.com/jordannbell",
  linkedin: "https://www.linkedin.com/in/jordanbell3721/",
};

export const SKILLS = {
  frontend: [
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "JavaScript ES6+",
    "TypeScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express",
    "PHP",
    "Symfony",
    "Java",
    "Spring Boot",
  ],
  database: ["PostgreSQL", "MongoDB"],
  tools: [
    "Git",
    "GitHub",
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
    title: "Campus Pass",
    description:
      "Plateforme SaaS innovante pour les jeunes Africains, facilitant l'accès aux admissions universitaires. Solution complète de gestion des candidatures et des bourses d'études.",
    descriptionEn:
      "Innovative SaaS platform for young Africans, facilitating access to university admissions. Complete solution for managing applications and scholarships.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://campuspass.vercel.app/",
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
    title: "The Tip Top - Jeu Concours",
    description:
      "Plateforme de jeu concours pour une entreprise de vente de thé. Interface interactive avec système de participation, gestion des lots et suivi des participants en temps réel.",
    descriptionEn:
      "Contest game platform for a tea sales company. Interactive interface with participation system, prize management and real-time participant tracking.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "API REST", "Real-time"],
    liveUrl: "https://dsp5-archi-o23b-4-5-g5.online/",
    githubUrl: "https://github.com/jordannbell",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Mastère 2 Architecture Web",
    school: "Digital School of Paris",
    period: "2024",
    description:
      "Formation spécialisée en architecture web moderne, avec focus sur les technologies cloud, microservices et DevOps. Conception et développement d'applications web scalables et performantes.",
    skills: ["Architecture Web", "Cloud", "Microservices", "DevOps", "CI/CD"],
  },
  {
    id: 2,
    degree: "Licence en Génie Logiciel",
    school: "IUT de Douala",
    period: "2022",
    description:
      "Formation complète en développement logiciel avec une solide base en programmation, algorithmique et gestion de projet. Acquisition des fondamentaux du génie logiciel et des méthodologies de développement.",
    skills: ["Programmation", "Algorithmique", "Base de données", "UML", "Gestion de projet"],
  },
];
