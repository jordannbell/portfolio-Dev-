# 🚀 Guide de Déploiement

## Déploiement sur Vercel (Recommandé) ⚡

Vercel est la plateforme officielle pour Next.js et offre le meilleur support.

### Méthode 1 : Via GitHub (Recommandée)

1. **Créez un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Jordan BELL"
   git branch -M main
   git remote add origin https://github.com/jordannbell/portfolio.git
   git push -u origin main
   ```

2. **Connectez à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Importez votre repository GitHub
   - Vercel détecte automatiquement Next.js
   - Cliquez sur "Deploy"

3. **Configuration (automatique)**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Domaine personnalisé (Optionnel)**
   - Dans les paramètres du projet
   - Allez dans "Domains"
   - Ajoutez votre domaine personnalisé

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

## Autres plateformes de déploiement 🌐

### Netlify

1. **Via Interface Web**
   - Connectez votre repository GitHub
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Cliquez sur "Deploy"

2. **Via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### AWS Amplify

```bash
# Installer Amplify CLI
npm install -g @aws-amplify/cli

# Initialiser
amplify init

# Ajouter hosting
amplify add hosting

# Publier
amplify publish
```

### Railway

1. Allez sur [railway.app](https://railway.app)
2. Connectez votre repository GitHub
3. Railway détecte Next.js automatiquement
4. Cliquez sur "Deploy"

### Cloudflare Pages

1. Connectez votre repository
2. Build command: `npm run build`
3. Build output directory: `.next`
4. Cliquez sur "Save and Deploy"

## Variables d'environnement 🔐

Si vous utilisez des variables d'environnement, créez un fichier `.env.local` :

```env
# Exemple
NEXT_PUBLIC_SITE_URL=https://votresite.com
FORMSPREE_FORM_ID=votre_form_id
```

⚠️ **Important** : Ne committez JAMAIS vos fichiers `.env.local` !

Sur Vercel/Netlify, ajoutez-les dans les paramètres du projet.

## Optimisations avant déploiement ✨

### 1. Vérifier le build
```bash
npm run build
npm start
```

### 2. Tester en production localement
Le serveur démarre sur `http://localhost:3000`

### 3. Analyser la taille du bundle
Ajoutez dans `next.config.ts` :
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Puis : `ANALYZE=true npm run build`

### 4. Optimiser les images
- Utilisez WebP/AVIF
- Compressez vos images avec [TinyPNG](https://tinypng.com)
- Placez-les dans `public/`

### 5. Vérifier les performances
- Testez avec [PageSpeed Insights](https://pagespeed.web.dev)
- Visez un score > 90

## Après le déploiement 🎯

### 1. Configurer le domaine personnalisé
```
# Exemple avec Vercel
- Allez dans Settings > Domains
- Ajoutez votre domaine
- Configurez les DNS chez votre registrar
```

### 2. Activer HTTPS
- Automatique sur Vercel/Netlify
- Let's Encrypt gratuit

### 3. Configurer les redirections
Dans `next.config.ts` :
```typescript
async redirects() {
  return [
    {
      source: '/old-url',
      destination: '/new-url',
      permanent: true,
    },
  ]
}
```

### 4. Ajouter Google Analytics (Optionnel)
```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

### 5. Soumettre à Google
- Créez un compte [Google Search Console](https://search.google.com/search-console)
- Soumettez votre sitemap : `votresite.com/sitemap.xml`
- Attendez l'indexation (quelques jours)

## Mises à jour continues 🔄

### Workflow automatique avec GitHub + Vercel

1. Faites vos modifications localement
2. Committez et poussez :
   ```bash
   git add .
   git commit -m "Update: description"
   git push
   ```
3. Vercel déploie automatiquement ! ✨

### Branches de preview
```bash
# Créer une branche de feature
git checkout -b nouvelle-feature

# Pousser la branche
git push origin nouvelle-feature
```
Vercel crée automatiquement une URL de preview !

## Monitoring et Analytics 📊

### Vercel Analytics (Gratuit)
- Activez dans les paramètres du projet
- Voir les Core Web Vitals en temps réel

### Alternatives gratuites
- Google Analytics 4
- Plausible Analytics
- Umami
- Simple Analytics

## Troubleshooting 🔧

### Erreur de build
```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

### Site lent
- Vérifiez les images non optimisées
- Analysez le bundle
- Activez la compression

### Erreur 404
- Vérifiez `next.config.ts`
- Assurez-vous que toutes les routes existent

## Checklist finale ✅

Avant de partager votre portfolio :

- [ ] Build réussi localement
- [ ] Toutes les images optimisées
- [ ] Liens GitHub/LinkedIn corrects
- [ ] Email fonctionnel
- [ ] Formulaire de contact testé
- [ ] Responsive sur mobile/tablette
- [ ] Mode sombre/clair fonctionne
- [ ] Traductions FR/EN correctes
- [ ] SEO optimisé (meta tags)
- [ ] Performance > 90 sur PageSpeed
- [ ] HTTPS activé
- [ ] Sitemap accessible
- [ ] Google Search Console configuré

## Bonus : CI/CD avec GitHub Actions 🤖

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

**Votre portfolio est prêt à conquérir le monde ! 🌍**

Besoin d'aide ? Consultez la [documentation Next.js](https://nextjs.org/docs) ou [Vercel](https://vercel.com/docs)


