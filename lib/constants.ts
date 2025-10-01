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
      "Plateforme de gestion pour campus avec authentification et dashboard interactif",
    descriptionEn:
      "Campus management platform with authentication and interactive dashboard",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://campuspass.vercel.app/",
    githubUrl: "https://github.com/jordannbell",
  },
  {
    id: 2,
    title: "Architecture DSP5",
    description:
      "Application web d'architecture avancée avec système de gestion complexe",
    descriptionEn:
      "Advanced architecture web application with complex management system",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Docker"],
    liveUrl: "https://dsp5-archi-o23b-4-5-g5.online/",
    githubUrl: "https://github.com/jordannbell",
  },
  {
    id: 3,
    title: "2V177 Platform",
    description:
      "Plateforme web moderne avec interface utilisateur intuitive et performante",
    descriptionEn:
      "Modern web platform with intuitive and high-performance user interface",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "TailwindCSS", "API REST"],
    liveUrl: "https://2v177.com/home/",
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
