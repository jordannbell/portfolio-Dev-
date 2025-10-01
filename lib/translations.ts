export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: "Développeur Full Stack",
      subtitle: "Passionné par la création de solutions web innovantes et performantes",
      cta: "Voir mes projets",
      contact: "Me contacter",
    },
    about: {
      title: "À propos de moi",
      description: "Développeur web full stack passionné, je crée des applications web modernes et performantes. Spécialisé dans l'écosystème JavaScript/TypeScript, je maîtrise aussi bien le front-end avec React, Next.js, Angular et Vue.js, que le back-end avec Node.js, Express, et diverses bases de données. Mon expérience s'étend également aux outils DevOps, à l'automatisation avec n8n, et au design avec Figma et la suite Adobe.",
      downloadCV: "Télécharger mon CV",
      location: "Mobilité : Territoire français",
    },
    skills: {
      title: "Mes Compétences",
      frontend: "Front-end",
      backend: "Back-end",
      database: "Base de données",
      tools: "Outils & DevOps",
      design: "Design & CMS",
      automation: "Automatisation",
    },
    projects: {
      title: "Mes Projets",
      viewProject: "Voir le projet",
      viewCode: "Voir le code",
      technologies: "Technologies",
      project1: {
        title: "Campus Pass",
        description: "Plateforme de gestion pour campus avec authentification et dashboard interactif",
      },
      project2: {
        title: "Architecture DSP5",
        description: "Application web d'architecture avancée avec système de gestion complexe",
      },
      project3: {
        title: "2V177 Platform",
        description: "Plateforme web moderne avec interface utilisateur intuitive et performante",
      },
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Vous avez un projet en tête ? Discutons-en !",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi. Veuillez réessayer.",
      or: "Ou contactez-moi directement",
    },
    footer: {
      rights: "Tous droits réservés.",
      madeWith: "Fait avec",
      using: "avec Next.js, TypeScript & Tailwind CSS",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Full Stack Developer",
      subtitle: "Passionate about creating innovative and high-performance web solutions",
      cta: "View my projects",
      contact: "Contact me",
    },
    about: {
      title: "About Me",
      description: "Passionate full stack web developer, I create modern and high-performance web applications. Specialized in the JavaScript/TypeScript ecosystem, I master both front-end with React, Next.js, Angular and Vue.js, and back-end with Node.js, Express, and various databases. My experience also extends to DevOps tools, automation with n8n, and design with Figma and Adobe Suite.",
      downloadCV: "Download my CV",
      location: "Location: Available across France",
    },
    skills: {
      title: "My Skills",
      frontend: "Front-end",
      backend: "Back-end",
      database: "Database",
      tools: "Tools & DevOps",
      design: "Design & CMS",
      automation: "Automation",
    },
    projects: {
      title: "My Projects",
      viewProject: "View project",
      viewCode: "View code",
      technologies: "Technologies",
      project1: {
        title: "Campus Pass",
        description: "Campus management platform with authentication and interactive dashboard",
      },
      project2: {
        title: "Architecture DSP5",
        description: "Advanced architecture web application with complex management system",
      },
      project3: {
        title: "2V177 Platform",
        description: "Modern web platform with intuitive and high-performance user interface",
      },
    },
    contact: {
      title: "Contact Me",
      subtitle: "Have a project in mind? Let's talk about it!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending. Please try again.",
      or: "Or contact me directly",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      using: "with Next.js, TypeScript & Tailwind CSS",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.fr;

