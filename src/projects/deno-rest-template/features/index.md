# 🌟 Features

Bienvenue dans la section **Features** de ce projet.

Cette section regroupe toute la documentation des fonctionnalités principales du serveur Example Deno Server.  
Vous trouverez ici une vue d’ensemble et des guides pour :

✅ Comprendre chaque feature technique  
✅ Savoir comment ajouter une nouvelle feature documentée  
✅ Maintenir une documentation claire et cohérente sur le long terme


---

## 🛠️ Ajouter une nouvelle feature

Pour documenter une nouvelle fonctionnalité, suivez ce modèle :

1️⃣ Créez un fichier Markdown dédié sous `docs/features/`  
   → Exemple : `docs/features/ma-nouvelle-feature.md`

2️⃣ Structurez la page selon le format suivant :

```markdown
# Nom de la Feature

## 📖 Description

Expliquez en une phrase ce que fait cette feature.

---

## ⚙️ Implémentation

Détaillez :
- Les modules/fichiers concernés
- Les choix techniques effectués
- Les contraintes éventuelles

---

## 🧩 Personnalisation

Indiquez comment adapter cette feature selon les besoins (variables, options, extensions).

---

## 📚 Ressources

[Liens utiles, documentation externe, références]
````

3️⃣ Ajoutez un lien dans la sidebar :

Dans votre fichier de configuration `vite.config.ts` :

```js
sidebar: {
  '/features/': [
    { text: 'Introduction', link: '/features/' },
    // ...
    { text: 'Ma Nouvelle Feature', link: '/features/ma-nouvelle-feature' },
  ]
}
```

---

## 🚀 Bonnes pratiques

✅ Restez synthétique mais précis
✅ Utilisez des tableaux pour les paramètres/options
✅ Ajoutez des exemples de code si nécessaire
✅ Reliez toujours aux modules/fichiers concrets dans le projet

---

> 💡 **Astuce** : Si la feature est complexe, créez un sous-dossier dédié (`/features/ma-nouvelle-feature/`) avec plusieurs pages.
