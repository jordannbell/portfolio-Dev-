# 🚀 Portfolio Jordan BELL - Développeur Full Stack

Portfolio moderne et professionnel conçu avec Next.js, TypeScript et Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Fonctionnalités

- 🎨 **Design moderne et épuré** - Interface professionnelle avec animations fluides
- 🌓 **Mode sombre/clair** - Thème adaptatif avec palette de couleurs moderne
- 🌐 **Bilingue (FR/EN)** - Internationalisation complète avec sélecteur de langue
- 📱 **Responsive** - Design mobile-first optimisé pour tous les écrans
- ⚡ **Performance optimisée** - SSR, lazy loading, et optimisations Next.js
- ♿ **Accessible** - Respect des normes WCAG avec aria-labels et navigation clavier
- 🎭 **Animations** - Framer Motion pour des transitions élégantes
- 🎠 **Carrousel moderne** - Présentation interactive des projets
- 📧 **Formulaire de contact** - Interface de contact professionnelle
- 🔍 **SEO optimisé** - Balises meta, sitemap, et structure sémantique

## 🛠️ Technologies utilisées

### Core
- **Next.js 15.5** - Framework React avec SSR
- **TypeScript** - Typage statique pour un code robuste
- **React 19** - Bibliothèque UI

### Styling
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations et transitions

### Outils
- **next-themes** - Gestion du thème sombre/clair
- **react-icons** - Bibliothèque d'icônes
- **lucide-react** - Icônes modernes
- **embla-carousel-react** - Carrousel performant

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/jordannbell/portfolio.git

# Aller dans le dossier
cd portfolio-dev

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🚀 Déploiement

### Vercel (Recommandé)

Le moyen le plus simple de déployer ce portfolio est d'utiliser [Vercel](https://vercel.com):

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres plateformes

Ce projet peut aussi être déployé sur :
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**
- **Railway**

## 📁 Structure du projet

```
portfolio-dev/
├── app/
│   ├── layout.tsx          # Layout principal avec SEO
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   └── sitemap.ts          # Sitemap pour SEO
├── components/
│   ├── Header.tsx          # Navigation principale
│   ├── Hero.tsx            # Section héros
│   ├── About.tsx           # Section à propos
│   ├── Skills.tsx          # Section compétences
│   ├── Projects.tsx        # Carrousel de projets
│   ├── Contact.tsx         # Formulaire de contact
│   ├── Footer.tsx          # Pied de page
│   ├── ThemeProvider.tsx   # Provider de thème
│   ├── ThemeToggle.tsx     # Bouton de thème
│   └── LanguageToggle.tsx  # Sélecteur de langue
├── contexts/
│   └── LanguageContext.tsx # Contexte de langue
├── lib/
│   ├── constants.ts        # Constantes (infos perso, projets)
│   └── translations.ts     # Traductions FR/EN
├── public/
│   └── robots.txt          # Configuration robots
└── tailwind.config.ts      # Configuration Tailwind
```

## 🎨 Personnalisation

### Informations personnelles

Modifiez `lib/constants.ts` pour mettre à jour :
- Nom et coordonnées
- Compétences techniques
- Projets

### Traductions

Modifiez `lib/translations.ts` pour personnaliser les textes en français et en anglais.

### Thème et couleurs

Modifiez `tailwind.config.ts` pour changer :
- Palette de couleurs
- Animations
- Ombres

## 📧 Contact

Jordan BELL - [jordanbe3721@gmail.com](mailto:jordanbe3721@gmail.com)

GitHub: [@jordannbell](https://github.com/jordannbell)
LinkedIn: [Jordan Bell](https://www.linkedin.com/in/jordanbell3721/)

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier pour votre propre portfolio.

---

**Fait avec ❤️ par Jordan BELL**
