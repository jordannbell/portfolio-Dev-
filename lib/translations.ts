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
      languages: "Langages",
      mobile: "Développement mobile",
      frameworks: "Frameworks",
      database: "Base de données",
      tools: "Outils & DevOps",
      design: "Design & CMS",
      automation: "Automatisation",
      taglineBold: "Plus de 30 technologies",
      taglineRest: "maîtrisées pour créer des solutions web complètes",
    },
    projects: {
      title: "Mes Projets",
      viewProject: "Voir le projet",
      viewCode: "Voir le code",
      technologies: "Technologies",
      project1: {
        title: "Campus Pass",
        description: "Plateforme SaaS innovante pour les jeunes Africains, facilitant l'accès aux admissions universitaires",
      },
      project2: {
        title: "LT ENR - Solutions Solaires",
        description: "Site web professionnel pour expert en solutions solaires photovoltaïques avec maintenance continue",
      },
      project3: {
        title: "2V177 - Site École",
        description: "Site web institutionnel complet pour une école, conçu avec une interface moderne et responsive",
      },
      project4: {
        title: "The Tip Top - Jeu Concours",
        description: "Plateforme de jeu concours pour une entreprise de vente de thé avec interface interactive",
      },
    },
    education: {
      title: "Parcours Scolaire",
      subtitle: "Formation et diplômes",
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
      languages: "Languages",
      mobile: "Mobile development",
      frameworks: "Frameworks",
      database: "Database",
      tools: "Tools & DevOps",
      design: "Design & CMS",
      automation: "Automation",
      taglineBold: "30+ technologies",
      taglineRest: "mastered to build complete web solutions",
    },
    projects: {
      title: "My Projects",
      viewProject: "View project",
      viewCode: "View code",
      technologies: "Technologies",
      project1: {
        title: "Campus Pass",
        description: "Innovative SaaS platform for young Africans, facilitating access to university admissions",
      },
      project2: {
        title: "LT ENR - Solar Solutions",
        description: "Professional website for photovoltaic solar solutions expert with continuous maintenance",
      },
      project3: {
        title: "2V177 - School Website",
        description: "Complete institutional website for a school, designed with modern and responsive interface",
      },
      project4: {
        title: "The Tip Top - Contest Game",
        description: "Contest game platform for a tea sales company with interactive interface",
      },
    },
    education: {
      title: "Education",
      subtitle: "Academic background and degrees",
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
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.fr;

