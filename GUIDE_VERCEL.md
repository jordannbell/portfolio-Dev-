# 🚀 Guide Vercel - Déploiement Portfolio Jordan BELL

## 🎯 Objectif
Déployer votre portfolio sur Vercel avec l'URL `portfolio-jordanb.vercel.app`

---

## 📋 **ÉTAPE 1 : Créer un compte GitHub (5 minutes)**

### 1.1 Aller sur GitHub
- **Ouvrez** : https://github.com
- **Cliquez** sur "Sign up" (si vous n'avez pas de compte)

### 1.2 Créer le repository
1. **Cliquez** sur le "+" en haut à droite
2. **Sélectionnez** "New repository"
3. **Nom du repository** : `portfolio-jordan-bell`
4. **Description** : "Portfolio professionnel de Jordan BELL - Développeur Full Stack"
5. **Visibilité** : Public (gratuit)
6. **Ne cochez PAS** "Add a README file" (on en a déjà un)
7. **Cliquez** sur "Create repository"

---

## 📋 **ÉTAPE 2 : Pousser le code sur GitHub (3 minutes)**

### 2.1 Dans votre terminal (PowerShell)
```bash
cd portfolio-dev

# Ajouter le repository distant
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-jordan-bell.git

# Pousser le code
git branch -M main
git push -u origin main
```

**Remplacez `VOTRE_USERNAME`** par votre nom d'utilisateur GitHub !

### 2.2 Vérification
- **Allez sur** https://github.com/VOTRE_USERNAME/portfolio-jordan-bell
- **Vérifiez** que tous vos fichiers sont là

---

## 📋 **ÉTAPE 3 : Créer un compte Vercel (2 minutes)**

### 3.1 Aller sur Vercel
- **Ouvrez** : https://vercel.com
- **Cliquez** sur "Sign Up"

### 3.2 Se connecter avec GitHub
1. **Choisissez** "Continue with GitHub"
2. **Autorisez** Vercel à accéder à vos repositories
3. **Attendez** la redirection

---

## 📋 **ÉTAPE 4 : Déployer le portfolio (3 minutes)**

### 4.1 Importer le projet
1. **Cliquez** sur "Add New Project"
2. **Trouvez** "portfolio-jordan-bell" dans la liste
3. **Cliquez** sur "Import"

### 4.2 Configuration du projet
1. **Project Name** : `portfolio-jordan-bell` (ou changez si vous voulez)
2. **Framework Preset** : Next.js (détecté automatiquement)
3. **Root Directory** : `./` (laissez par défaut)
4. **Build Command** : `npm run build` (automatique)
5. **Output Directory** : `.next` (automatique)
6. **Install Command** : `npm install` (automatique)

### 4.3 Déploiement
1. **Cliquez** sur "Deploy"
2. **Attendez** 2-3 minutes (premier déploiement)
3. **Votre site est en ligne !** 🎉

---

## 📋 **ÉTAPE 5 : Personnaliser l'URL (2 minutes)**

### 5.1 Changer le nom du projet
1. **Allez** dans les paramètres du projet sur Vercel
2. **Cliquez** sur "Settings"
3. **Allez** dans "General"
4. **Changez** le "Project Name" en `portfolio-jordanb`
5. **Sauvegardez**

### 5.2 Votre nouvelle URL
- **Ancienne** : `portfolio-jordan-bell-xxx.vercel.app`
- **Nouvelle** : `portfolio-jordanb.vercel.app` ✨

---

## 📋 **ÉTAPE 6 : Configuration finale (5 minutes)**

### 6.1 Mettre à jour les métadonnées
Ouvrez `app/layout.tsx` et changez :

```typescript
export const metadata: Metadata = {
  title: "Jordan BELL - Développeur Full Stack",
  description: "Portfolio de Jordan BELL, développeur full stack...",
  // ...
  metadataBase: new URL("https://portfolio-jordanb.vercel.app"), // ← Changez ici
  openGraph: {
    // ...
    url: "https://portfolio-jordanb.vercel.app", // ← Changez ici
  },
};
```

### 6.2 Redéployer
1. **Commitez** les changements :
   ```bash
   git add .
   git commit -m "Update URL for production"
   git push
   ```
2. **Vercel redéploie automatiquement !** ✨

---

## ✅ **Vérification finale**

### Testez votre site :
1. **Allez sur** https://portfolio-jordanb.vercel.app
2. **Testez** toutes les sections
3. **Testez** le formulaire de contact
4. **Testez** le mode sombre/clair
5. **Testez** le changement de langue

### Vérifiez sur mobile :
1. **Ouvrez** Chrome DevTools (F12)
2. **Cliquez** sur l'icône mobile
3. **Testez** la navigation mobile

---

## 🎯 **URLs finales**

- **Site principal** : https://portfolio-jordanb.vercel.app
- **GitHub** : https://github.com/VOTRE_USERNAME/portfolio-jordan-bell
- **Vercel Dashboard** : https://vercel.com/dashboard

---

## 🔧 **Mises à jour futures**

### Pour modifier votre site :
1. **Modifiez** les fichiers localement
2. **Commitez** :
   ```bash
   git add .
   git commit -m "Description du changement"
   git push
   ```
3. **Vercel redéploie automatiquement !** 🚀

### Pour ajouter un domaine personnalisé :
1. **Allez** dans Vercel → Settings → Domains
2. **Ajoutez** votre domaine (ex: jordanbell.dev)
3. **Configurez** les DNS chez votre registrar

---

## 🆘 **Problèmes courants**

### Erreur de build :
- **Vérifiez** que `npm run build` fonctionne localement
- **Regardez** les logs dans Vercel Dashboard

### URL ne change pas :
- **Attendez** 5-10 minutes
- **Videz** le cache de votre navigateur

### Formulaire ne fonctionne pas :
- **Vérifiez** que Formspree est configuré
- **Testez** en local d'abord

---

## 🎉 **Félicitations !**

Votre portfolio est maintenant en ligne avec une URL professionnelle !

**Partagez-le partout :**
- LinkedIn
- GitHub
- CV
- Email signature
- Réseaux sociaux

---

**Votre portfolio est prêt à conquérir le monde ! 🌍**

