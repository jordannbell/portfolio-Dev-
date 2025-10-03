# 🎯 Guide de Démarrage Rapide

Bienvenue dans votre nouveau portfolio ! Suivez ces étapes simples pour lancer votre site.

## ⚡ Démarrage en 3 étapes

### 1️⃣ Lancer le serveur de développement

```bash
cd portfolio-dev
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) - Votre portfolio est en ligne localement ! 🎉

### 2️⃣ Personnaliser votre contenu

#### Informations personnelles
Éditez `lib/constants.ts` pour modifier :
- ✍️ Votre nom et titre
- 📧 Votre email
- 🔗 Vos liens GitHub et LinkedIn
- 💼 Vos compétences
- 🚀 Vos projets

#### Traductions
Éditez `lib/translations.ts` pour personnaliser tous les textes en français et anglais.

### 3️⃣ Déployer sur Vercel

#### Option A : Via GitHub
1. Créez un repository GitHub
2. Poussez votre code
3. Allez sur [vercel.com](https://vercel.com)
4. Connectez votre repository
5. Cliquez sur "Deploy" 🚀

#### Option B : Via CLI
```bash
npm i -g vercel
vercel
```

## 🎨 Personnalisation avancée

### Changer les couleurs
Dans `tailwind.config.ts`, modifiez les couleurs du thème clair et sombre.

### Ajouter votre photo
Remplacez l'avatar initiales dans `components/About.tsx` par une vraie image :
```tsx
<Image
  src="/photo-profil.jpg"
  alt="Jordan BELL"
  fill
  className="object-cover rounded-3xl"
/>
```

### Ajouter des images de projets
1. Ajoutez vos images dans `public/projects/`
2. Mettez à jour les chemins dans `lib/constants.ts`
3. Dans `components/Projects.tsx`, décommentez la balise `Image`

### Configurer le formulaire de contact
Le formulaire est actuellement en mode simulation. Pour le rendre fonctionnel :

**Option 1 : Formspree (Gratuit)**
```tsx
// Dans components/Contact.tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2 : Netlify Forms**
```tsx
<form name="contact" method="POST" data-netlify="true">
```

**Option 3 : API Route Next.js**
Créez `app/api/contact/route.ts` avec votre logique d'envoi d'email.

## 📱 Tester en responsive

Le site est déjà responsive ! Testez-le sur différents appareils :
- 📱 Mobile : Outils de développement → Mode appareil
- 💻 Tablette : Testez en redimensionnant le navigateur
- 🖥️ Desktop : Vue par défaut

## 🔍 SEO et Performance

### Sitemap
Votre sitemap est généré automatiquement à `/sitemap.xml`

### Métadonnées
Les meta tags sont dans `app/layout.tsx` - personnalisez-les !

### Performance
- ✅ Images optimisées avec `next/image`
- ✅ Code splitting automatique
- ✅ SSR activé
- ✅ Compression gzip

## 🚨 Problèmes courants

### Le serveur ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
npm run dev
```

### Erreur de build
```bash
# Vérifiez les erreurs TypeScript
npm run lint
```

### Le thème ne fonctionne pas
Vérifiez que vous avez bien le `ThemeProvider` dans `app/layout.tsx`

## 📚 Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion/)
- [Déploiement Vercel](https://vercel.com/docs)

## 💡 Conseils pro

1. **Optimisez vos images** - Utilisez des formats WebP/AVIF
2. **Testez l'accessibilité** - Utilisez un lecteur d'écran
3. **Vérifiez sur mobile** - La plupart des visiteurs sont sur mobile
4. **Mettez à jour régulièrement** - Ajoutez vos nouveaux projets
5. **Partagez !** - Mettez le lien dans votre bio LinkedIn/GitHub

## 🎉 C'est tout !

Vous avez maintenant un portfolio moderne et professionnel. Bonne chance pour vos recherches ! 💼

---

**Besoin d'aide ?** Consultez le README.md pour plus de détails.


