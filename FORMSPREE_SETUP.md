# 📧 Configuration Formspree - Formulaire de Contact

## 🎯 Objectif
Configurer le formulaire de contact pour recevoir les emails directement à `jordanbe3721@gmail.com`

## 📋 Étapes à suivre

### 1. Créer un compte Formspree (2 min)

1. **Allez sur** : https://formspree.io
2. **Cliquez sur** "Sign Up" (gratuit)
3. **Utilisez votre email** : `jordanbe3721@gmail.com`
4. **Confirmez votre email** (vérifiez les spams)

### 2. Créer un nouveau formulaire

1. **Cliquez sur** "New Form"
2. **Nom** : "Portfolio Jordan BELL"
3. **Email de destination** : `jordanbe3721@gmail.com`
4. **Cliquez sur** "Create Form"

### 3. Récupérer l'ID du formulaire

1. **Copiez l'ID** (ex: `xpzqkqkq`)
2. **Ouvrez** `components/Contact.tsx`
3. **Trouvez la ligne 27** :
   ```typescript
   const response = await fetch("https://formspree.io/f/xpzqkqkq", {
   ```
4. **Remplacez** `xpzqkqkq` par votre vrai ID

### 4. Tester le formulaire

1. **Sauvegardez** le fichier (Ctrl+S)
2. **Allez sur** http://localhost:3000
3. **Remplissez le formulaire** de contact
4. **Cliquez sur** "Envoyer"
5. **Vérifiez votre email** !

## ✅ Vérification

### Ce qui doit arriver :
- ✅ Le formulaire affiche "Message envoyé avec succès !"
- ✅ Vous recevez un email à `jordanbe3721@gmail.com`
- ✅ L'email contient le nom, email et message du visiteur

### En cas de problème :
- ❌ Vérifiez que l'ID Formspree est correct
- ❌ Vérifiez vos spams
- ❌ Attendez quelques minutes (premier envoi peut être lent)

## 🔧 Configuration avancée (Optionnel)

### Personnaliser l'email reçu

Dans Formspree, vous pouvez :
- **Changer le sujet** de l'email
- **Ajouter des champs** (téléphone, entreprise, etc.)
- **Configurer des réponses automatiques**
- **Ajouter des filtres anti-spam**

### Ajouter des champs supplémentaires

Si vous voulez ajouter un champ "Téléphone" :

1. **Dans Formspree** : Ajoutez le champ "phone"
2. **Dans le code** : Ajoutez dans `formData` et `handleChange`
3. **Dans l'envoi** : Ajoutez `phone: formData.phone`

## 📱 Test sur mobile

N'oubliez pas de tester le formulaire sur mobile :
- **Chrome DevTools** : F12 → Mode appareil
- **Vraie mobile** : Accédez à http://votre-ip:3000

## 🚀 Déploiement

Une fois configuré localement :
1. **Testez** que tout fonctionne
2. **Déployez** sur Vercel
3. **Testez** sur la version en ligne
4. **Partagez** votre portfolio !

## 💡 Conseils

- **Gratuit** : Formspree permet 50 envois/mois gratuitement
- **Fiable** : Service utilisé par des milliers de développeurs
- **Sécurisé** : Protection anti-spam intégrée
- **Simple** : Aucun code serveur nécessaire

---

**Votre formulaire sera opérationnel en 5 minutes ! 🎉**
