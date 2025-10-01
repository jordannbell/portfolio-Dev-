# 🎨 Guide de Personnalisation Rapide

Ce guide vous permet de personnaliser facilement votre portfolio sans toucher au code complexe.

## 📝 Informations Personnelles

### Fichier : `lib/constants.ts`

```typescript
export const PERSONAL_INFO = {
  name: "Jordan BELL",              // ✏️ Votre nom
  title: "Développeur Full Stack",  // ✏️ Votre titre
  email: "jordanbe3721@gmail.com",  // ✏️ Votre email
  location: "Mobilité : Territoire français", // ✏️ Votre localisation
  github: "https://github.com/jordannbell",   // ✏️ Votre GitHub
  linkedin: "https://www.linkedin.com/in/jordanbell3721/", // ✏️ Votre LinkedIn
};
```

---

## 💼 Vos Compétences

### Fichier : `lib/constants.ts`

Ajoutez ou supprimez des compétences :

```typescript
export const SKILLS = {
  frontend: [
    "React",
    "Next.js",
    // ✏️ Ajoutez vos compétences front-end ici
  ],
  backend: [
    "Node.js",
    "Express",
    // ✏️ Ajoutez vos compétences back-end ici
  ],
  database: [
    "PostgreSQL",
    "MongoDB",
    // ✏️ Ajoutez vos bases de données ici
  ],
  // ... etc
};
```

---

## 🚀 Vos Projets

### Fichier : `lib/constants.ts`

Modifiez ou ajoutez des projets :

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Campus Pass",                    // ✏️ Titre du projet
    description: "Description en français",  // ✏️ Description FR
    descriptionEn: "English description",    // ✏️ Description EN
    image: "/projects/campuspass.png",       // ✏️ Chemin de l'image
    technologies: ["React", "Next.js"],      // ✏️ Technologies
    liveUrl: "https://campuspass.vercel.app/", // ✏️ URL du projet
    githubUrl: "https://github.com/...",     // ✏️ URL GitHub
  },
  // ✏️ Ajoutez plus de projets en copiant cette structure
];
```

**💡 Astuce** : Pour ajouter un nouveau projet, copiez tout le bloc d'un projet existant et changez l'`id` !

---

## 🌐 Traductions (FR/EN)

### Fichier : `lib/translations.ts`

Modifiez tous les textes du site :

```typescript
export const translations = {
  fr: {
    hero: {
      greeting: "Bonjour, je suis",     // ✏️ Modifiez ici
      title: "Développeur Full Stack",  // ✏️ Modifiez ici
      subtitle: "Passionné par...",     // ✏️ Modifiez ici
    },
    about: {
      description: "Développeur web...", // ✏️ Modifiez votre bio ici
    },
    // ... etc
  },
  en: {
    // ✏️ Même chose en anglais
  },
};
```

---

## 🎨 Couleurs et Thème

### Fichier : `tailwind.config.ts`

Pour changer les couleurs principales :

```typescript
// Actuellement :
// - Thème clair : Gris cassé (#F5F5F7)
// - Thème sombre : Bleu sombre (#0A1628)
// - Accent : Bleu (#3B82F6) et Violet (#8B5CF6)

// Pour changer, cherchez ces valeurs dans le fichier
```

### Fichier : `app/globals.css`

Pour des couleurs plus simples :

```css
/* Thème clair */
body {
  background-color: #F5F5F7; /* ✏️ Changez la couleur de fond */
}

/* Boutons principaux */
.btn-primary {
  background-color: #3B82F6; /* ✏️ Changez la couleur du bouton */
}
```

---

## 📸 Ajouter votre Photo

### Fichier : `components/About.tsx`

Remplacez la section avatar (ligne ~40-60) :

**Option 1 : Utiliser une image**
```tsx
// 1. Ajoutez votre photo dans public/photo-profil.jpg
// 2. Remplacez le code par :

<div className="relative w-full aspect-square max-w-md mx-auto">
  <img
    src="/photo-profil.jpg"
    alt="Jordan BELL"
    className="rounded-3xl object-cover w-full h-full shadow-2xl"
  />
</div>
```

**Option 2 : Garder les initiales** (aucun changement nécessaire)

---

## 🖼️ Ajouter des Images de Projets

### 1. Ajoutez vos images

Placez vos captures d'écran dans `public/projects/` :
```
public/
  └── projects/
      ├── campuspass.png
      ├── dsp5.png
      └── 2v177.png
```

### 2. Mettez à jour les chemins

Dans `lib/constants.ts` :
```typescript
image: "/projects/campuspass.png", // ✏️ Changez le chemin
```

### 3. Activez l'affichage d'images

Dans `components/Projects.tsx`, décommentez la section image (ligne ~80-90).

---

## 📄 Ajouter votre CV

### 1. Ajoutez votre fichier CV

Placez votre CV dans `public/cv-jordan-bell.pdf`

### 2. Le lien fonctionne automatiquement !

Le bouton "Télécharger mon CV" dans la section À propos pointe déjà vers ce fichier.

---

## 📧 Configurer le Formulaire de Contact

### Option 1 : Formspree (Gratuit, Recommandé)

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Copiez l'ID du formulaire
4. Dans `components/Contact.tsx`, ligne ~26 :

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Remplacez par :
  const response = await fetch("https://formspree.io/f/VOTRE_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setStatus("success");
  } else {
    setStatus("error");
  }
};
```

### Option 2 : Netlify Forms

Si vous déployez sur Netlify, ajoutez simplement `data-netlify="true"` au formulaire.

---

## 🎯 Modifications Fréquentes

### Changer le logo "JB"

**Fichier** : `components/Header.tsx` (ligne ~52)

```tsx
<motion.a href="#home" className="text-2xl font-bold gradient-text">
  JB  {/* ✏️ Changez par vos initiales ou votre nom */}
</motion.a>
```

### Modifier les liens sociaux

**Fichier** : `components/Footer.tsx` (ligne ~14-18)

Ajoutez/supprimez des liens :
```typescript
const socialLinks = [
  { icon: FiGithub, href: PERSONAL_INFO.github, label: "GitHub" },
  { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
  // ✏️ Ajoutez Twitter, Instagram, etc.
];
```

### Changer les statistiques de la section À propos

**Fichier** : `components/About.tsx` (ligne ~85-115)

```tsx
<div className="text-3xl font-bold gradient-text mb-2">
  20+  {/* ✏️ Changez le nombre */}
</div>
```

---

## 🔧 Outils Utiles

### Compresser des images
- [TinyPNG](https://tinypng.com) - Gratuit
- [Squoosh](https://squoosh.app) - Google

### Générer des gradients
- [CSS Gradient](https://cssgradient.io)

### Choisir des couleurs
- [Coolors](https://coolors.co) - Palettes de couleurs
- [Adobe Color](https://color.adobe.com)

### Tester la responsive
- Chrome DevTools (F12 → Mode appareil)
- [Responsively App](https://responsively.app)

---

## ✅ Checklist de Personnalisation

Avant de déployer, vérifiez que vous avez :

- [ ] Changé votre nom et vos coordonnées
- [ ] Mis à jour vos compétences
- [ ] Ajouté vos vrais projets avec descriptions
- [ ] Traduit en anglais (si besoin)
- [ ] Ajouté votre photo (optionnel)
- [ ] Ajouté des images de projets (optionnel)
- [ ] Ajouté votre CV PDF
- [ ] Configuré le formulaire de contact
- [ ] Testé tous les liens
- [ ] Vérifié sur mobile

---

## 🆘 Besoin d'aide ?

- **Erreur lors du build** : Lisez le message d'erreur, souvent c'est une virgule manquante !
- **Le site ne démarre pas** : `npm install` puis `npm run dev`
- **Changement non visible** : Rafraîchissez le navigateur (Ctrl+Shift+R)

---

**N'ayez pas peur d'expérimenter ! Vous pouvez toujours revenir en arrière avec Git.**

```bash
# Voir l'historique
git log

# Revenir en arrière
git checkout COMMIT_ID
```

**Bon courage ! 🚀**

