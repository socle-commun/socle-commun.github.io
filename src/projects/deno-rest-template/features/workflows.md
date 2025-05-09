Voici une version enrichie et mieux structurée pour le fichier `workflows.md` :

---

# Workflows CI/CD

Cette page documente les **workflows d’automatisation** utilisés dans GitHub Actions pour ce projet.

Elle décrit :
✅ Les workflows disponibles (`ci.yml`, `deploy.yml`)
✅ Les étapes clés exécutées (tests, lint, déploiement)
✅ Comment configurer et étendre ces workflows selon vos besoins

👉 Indispensable pour comprendre comment votre projet passe automatiquement du **code local** à la **production**.

---

## 📦 Workflows disponibles

| Fichier                        | Rôle                                                     |
| ------------------------------ | -------------------------------------------------------- |
| `.github/workflows/ci.yml`     | Exécute les tests, lint et vérifications sur chaque push |
| `.github/workflows/deploy.yml` | Déploie automatiquement sur Deno Deploy à chaque release |

---

## 🔨 `ci.yml`

Ce workflow est déclenché :
✅ Sur chaque `pull_request` vers la branche `main`

Il réalise automatiquement :

* **Installation** des dépendances
* **Linting** du projet (`deno lint`)
* **Formatage** du code (`deno fmt`)
* **Tests unitaires** (`deno test`)
* **Génération d’un rapport JUnit** pour les outils CI/CD (si configuré)

---

## 🚀 `deploy.yml`

Ce workflow prend le relais pour **mettre en ligne** le projet.

✅ Déclenché uniquement lors des **releases GitHub** (`published`)
✅ Déploie le projet sur [Deno Deploy](https://deno.com/deploy)
✅ Utilise `deno deployctl` pour transférer le code

> **Astuce** :
> Assurez-vous que la variable `project` dans `deploy.yml` correspond exactement au nom configuré sur Deno Deploy.

---

## ⚙️ Comment personnaliser ces workflows

Si vous souhaitez :
🔧 Ajouter des étapes (par exemple, analyser les vulnérabilités) → éditez les fichiers YAML.
🔧 Modifier les déclencheurs (par exemple, sur d’autres branches) → changez les blocs `on:`.
🔧 Intégrer d’autres services (par exemple, Docker, Slack) → ajoutez des actions GitHub adaptées.

> **Bonnes pratiques** :
> ✅ Commitez vos changements dans `.github/workflows/`
> ✅ Documentez ici toute nouvelle automatisation ajoutée
> ✅ Vérifiez bien les secrets et permissions utilisés

---

## 📚 Ressources

* [GitHub Actions](https://docs.github.com/actions)
* [Deno Deploy](https://deno.com/deploy)
* [deno deployctl](https://deno.com/deploy/docs/deployctl)

---

Si tu veux, je peux aussi te générer un squelette prêt pour un nouveau workflow, déjà commenté, à intégrer dans `.github/workflows/`. Veux-tu que je le prépare ?
