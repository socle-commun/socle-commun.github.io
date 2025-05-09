# 🌿 Environnement et Version

Cette page présente la **gestion des variables d’environnement** et de la version du projet.

Vous y trouverez :
✅ Les priorités de chargement (`.env`, système, valeur par défaut)
✅ Un tableau des variables principales utilisées
✅ La méthode pour lire dynamiquement la version dans la documentation
✅ La méthode recommandée pour ajouter des variables d’environnement avec typage

Indispensable pour configurer vos environnements (dev, prod) et garder un projet bien aligné.

---

## ⚙️ Priorité des valeurs

1️⃣ `.env` local (en dev)
2️⃣ `Deno.env` système (en prod)
3️⃣ Valeur par défaut passée au code

---

## 📋 Variables principales

| Variable       | Description                                 |
| -------------- | ------------------------------------------- |
| `APP_NAME`     | Nom affiché dans les logs                   |
| `ENV`          | Environnement (`production`, `development`) |
| `APP_PORT`     | Port d’écoute                               |
| `APP_URL`      | URL publique                                |
| `BEARER_TOKEN` | Token pour l’auth Bearer                    |
| `DOC_PATH`     | Endpoint OpenAPI (par défaut `/doc`)        |
| `UI_PATH`      | Endpoint Swagger UI (par défaut `/ui`)      |

---

## 🏷️ Version projet

Le fichier `deno.jsonc` contient le champ `version`, lu automatiquement pour l’afficher dans la documentation.

> **Astuce** : Voir la fonction `getProjectVersion()` pour comprendre le chargement dynamique.

---

## 🛠️ Implémentation détaillée

Le chargement des variables d’environnement est centralisé dans :

```
/ext/deno/env/mod.ts
```

### Points clés

✅ On utilise `std/dotenv` pour charger les valeurs locales.
✅ Le système ignore proprement l’absence d’un fichier `.env`.
✅ Le type `$ENV` définit toutes les clés connues.
✅ La fonction générique `getEnv<$ENV>()` applique la priorité :
`.env local` → `Deno.env` système → valeur par défaut.

---

### Exemple d’utilisation

```ts
import getEnv from '@/ext/deno/env/mod.ts'

type ENV = 'APP_NAME' | 'MY_NEW_KEY';

// Lire une valeur existante
const appName = getEnv<ENV>("APP_NAME", "Unknown App")

// Lire une nouvelle clé ajoutée
const newFeatureFlag = getEnv<ENV>("MY_NEW_KEY", "false")
```

✅ **Pourquoi utiliser `<ENV>` ?**

* Fournit un typage strict pour les noms de clé.
* Évite les erreurs de frappe.
* Rapproche automatiquement le code et la documentation.

---

✅ **Bonnes pratiques**

* Toujours utiliser un type `ENV` local au fichier pour référencer vos clés.
* Ne pas utiliser `Deno.env.get()` directement.
* Documenter chaque nouvelle variable dans `.env.example` (commentée par défaut si pertinent).
