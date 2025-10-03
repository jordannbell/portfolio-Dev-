# 🚀 Déploiement Vercel - Version Simple

## 🎯 **Objectif : URL `portfolio-jordanb.vercel.app`**

---

## 📋 **ÉTAPES RAPIDES (15 minutes total)**

### **1️⃣ Créer GitHub Repository (3 min)**
1. **Allez sur** : https://github.com
2. **Cliquez** "New repository"
3. **Nom** : `portfolio-jordan-bell`
4. **Public** ✅
5. **Create repository**

### **2️⃣ Pousser le code (2 min)**
**Dans PowerShell, dans le dossier `portfolio-dev` :**

```powershell
# Option A : Script automatique
.\deploy.ps1

# Option B : Commandes manuelles
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-jordan-bell.git
git branch -M main
git push -u origin main
```

**Remplacez `VOTRE_USERNAME`** par votre nom GitHub !

### **3️⃣ Déployer sur Vercel (5 min)**
1. **Allez sur** : https://vercel.com
2. **Sign up** avec GitHub
3. **Import** → `portfolio-jordan-bell`
4. **Deploy** → Attendre 2-3 min
5. **Settings** → Changez le nom en `portfolio-jordanb`

### **4️⃣ Finaliser (5 min)**
1. **Testez** votre site
2. **Partagez** l'URL partout !

---

## ✅ **Résultat Final**

- **URL** : https://portfolio-jordanb.vercel.app
- **Formulaire** : Fonctionne (emails à jordanbe3721@gmail.com)
- **Responsive** : ✅ Mobile/Desktop
- **Bilingue** : ✅ FR/EN
- **Thème** : ✅ Clair/Sombre

---

## 🆘 **Si problème**

### Erreur Git :
```bash
git status
git add .
git commit -m "Fix"
git push
```

### Erreur Vercel :
- Vérifiez les logs dans Vercel Dashboard
- `npm run build` doit fonctionner localement

### URL ne change pas :
- Attendez 5-10 minutes
- Videz le cache navigateur

---

## 🎉 **C'est tout !**

**Votre portfolio sera en ligne en 15 minutes !**

**Guide détaillé** : `GUIDE_VERCEL.md`

