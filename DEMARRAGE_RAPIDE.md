# ⚡ Démarrage Rapide - 5 Minutes

## 🎯 Objectif

Lancer votre portfolio en 5 minutes chrono !

---

## ✅ Étape 1 : Lancer le site (30 secondes)

Ouvrez un terminal dans le dossier `portfolio-dev` et exécutez :

```bash
npm run dev
```

🎉 **C'est tout !** Votre site est accessible sur : **http://localhost:3000**

---

## ✅ Étape 2 : Première personnalisation (2 minutes)

Ouvrez le fichier `lib/constants.ts` et modifiez :

```typescript
export const PERSONAL_INFO = {
  name: "VOTRE NOM",           // ← Changez ici
  email: "votre@email.com",    // ← Changez ici
  // ... reste identique
};
```

Sauvegardez (Ctrl+S). Le site se recharge automatiquement ! ✨

---

## ✅ Étape 3 : Testez le thème (30 secondes)

1. Allez sur http://localhost:3000
2. Cliquez sur l'icône 🌙 (en haut à droite)
3. Le thème sombre s'active !
4. Cliquez sur FR/EN pour changer de langue

---

## ✅ Étape 4 : Explorez les sections (1 minute)

Scrollez pour voir toutes les sections :
- ✨ **Hero** : Grande présentation avec votre nom
- 👤 **À propos** : Votre bio avec avatar
- 💻 **Compétences** : Vos 33 technologies
- 🚀 **Projets** : Carrousel avec vos 3 projets
- 📧 **Contact** : Formulaire et liens sociaux
- 🔗 **Footer** : Liens sociaux et copyright

---

## ✅ Étape 5 : Prochaines actions (1 minute)

Maintenant que tout fonctionne, consultez :

1. **PERSONNALISATION.md** → Guide complet pour tout personnaliser
2. **DEPLOIEMENT.md** → Pour mettre en ligne sur Vercel
3. **README.md** → Documentation technique complète

---

## 🎨 Modifications Rapides Courantes

### Changer votre bio

**Fichier** : `lib/translations.ts`
```typescript
about: {
  description: "VOTRE NOUVELLE BIO ICI...",
}
```

### Ajouter un projet

**Fichier** : `lib/constants.ts`
```typescript
export const PROJECTS = [
  // ... projets existants
  {
    id: 4,  // Nouveau ID
    title: "Mon Nouveau Projet",
    description: "Description...",
    // ... etc
  },
];
```

### Changer les couleurs

**Fichier** : `app/globals.css`
```css
.btn-primary {
  background-color: #FF6B6B; /* Rouge au lieu de bleu */
}
```

---

## 🚀 Commandes Essentielles

```bash
# Développement (avec rechargement auto)
npm run dev

# Build de production (pour tester avant déploiement)
npm run build

# Démarrer en mode production
npm start

# Vérifier le code
npm run lint
```

---

## 🔧 Problèmes Courants

### Le site ne démarre pas ?
```bash
# Solution 1 : Réinstaller les dépendances
rm -rf node_modules
npm install
npm run dev
```

### Changements non visibles ?
- Rafraîchissez : **Ctrl + Shift + R** (Windows) ou **Cmd + Shift + R** (Mac)
- Redémarrez le serveur : Ctrl+C puis `npm run dev`

### Port 3000 déjà utilisé ?
```bash
# Utilisez un autre port
npm run dev -- -p 3001
```

---

## 📚 Ressources

### Documentation
- `README.md` - Documentation complète
- `PERSONNALISATION.md` - Guide de personnalisation
- `DEPLOIEMENT.md` - Guide de déploiement
- `RECAP.md` - Récapitulatif du projet

### Liens Externes
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✨ Conseils pour Débuter

1. **Ne changez pas tout d'un coup** - Faites des modifications progressives
2. **Testez après chaque changement** - Plus facile de trouver les erreurs
3. **Sauvegardez avec Git** - Permet de revenir en arrière si besoin
4. **Consultez la doc** - Chaque fichier .md a des infos utiles

---

## 🎯 Feuille de Route Suggérée

### Jour 1 : Contenu
- [ ] Personnalisez vos infos dans `lib/constants.ts`
- [ ] Modifiez vos textes dans `lib/translations.ts`
- [ ] Ajoutez votre CV dans `public/cv-jordan-bell.pdf`

### Jour 2 : Projets
- [ ] Remplacez par vos vrais projets
- [ ] Ajoutez des captures d'écran
- [ ] Vérifiez tous les liens

### Jour 3 : Design
- [ ] Ajoutez votre photo (optionnel)
- [ ] Personnalisez les couleurs (optionnel)
- [ ] Testez sur mobile/tablette

### Jour 4 : Déploiement
- [ ] Créez un repository GitHub
- [ ] Déployez sur Vercel
- [ ] Configurez un domaine (optionnel)

### Jour 5 : Promotion
- [ ] Partagez sur LinkedIn
- [ ] Ajoutez à votre CV
- [ ] Envoyez aux recruteurs

---

## 🎉 Vous êtes Prêt !

**Votre portfolio fonctionne !** 

Maintenant, prenez le temps de le personnaliser à votre image. Consultez `PERSONNALISATION.md` pour un guide détaillé de toutes les modifications possibles.

**Besoin d'aide ?** Tous les fichiers de documentation sont là pour vous guider !

---

**Bon développement ! 🚀**

*Made with ❤️ for Jordan BELL*


