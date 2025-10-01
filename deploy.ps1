# 🚀 Script de déploiement automatique pour Vercel
# Exécutez ce script après avoir créé votre repository GitHub

Write-Host "🚀 Déploiement du Portfolio Jordan BELL sur Vercel" -ForegroundColor Green
Write-Host ""

# Vérifier si Git est initialisé
if (-not (Test-Path ".git")) {
    Write-Host "❌ Git n'est pas initialisé. Exécutez d'abord : git init" -ForegroundColor Red
    exit 1
}

# Ajouter tous les fichiers
Write-Host "📁 Ajout des fichiers..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "💾 Création du commit..." -ForegroundColor Yellow
git commit -m "Deploy: Portfolio Jordan BELL - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

# Demander l'URL GitHub
Write-Host ""
Write-Host "🔗 Entrez l'URL de votre repository GitHub :" -ForegroundColor Cyan
Write-Host "   Exemple: https://github.com/VOTRE_USERNAME/portfolio-jordan-bell.git" -ForegroundColor Gray
$githubUrl = Read-Host "URL GitHub"

# Ajouter le remote (si pas déjà fait)
Write-Host "🔗 Configuration du repository distant..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin $githubUrl

# Pousser vers GitHub
Write-Host "⬆️  Envoi vers GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "✅ Code envoyé sur GitHub !" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "1. Allez sur https://vercel.com" -ForegroundColor White
Write-Host "2. Connectez-vous avec GitHub" -ForegroundColor White
Write-Host "3. Importez le repository 'portfolio-jordan-bell'" -ForegroundColor White
Write-Host "4. Déployez !" -ForegroundColor White
Write-Host ""
Write-Host "📖 Guide complet : GUIDE_VERCEL.md" -ForegroundColor Yellow
Write-Host ""
Write-Host "🎉 Votre portfolio sera bientôt en ligne !" -ForegroundColor Green
