# 🦥 Sloth Semantics

**Sloth Semantics** est une bibliothèque TypeScript/Deno qui analyse la
structure d’un projet logiciel pour en extraire une sémantique forte à partir de
son arborescence.

## 📚 Objectif

Fournir une **vue sémantique** d’un projet à partir de :

- la structure de ses fichiers (`apps/`, `lib/`, `ext/`, etc.)
- ses métadonnées (`deno.json`, `package.json`, `README.md`)
- ses dépendances (`import`, `npm:`, `https:`...)
- ses tests (`tests/`, `__tests__`, fichiers `.test.ts`)
- ses exports (`exports` dans `package.json` ou `deno.json`)
- ses fichiers non-classés (orphelins)

Le tout exposé sous forme d’objet `Project` unifié, typé, navigable, enrichi.

## ✅ Fonctionnalités actuelles

| Composant                      | Statut | Description                                        |
| ------------------------------ | ------ | -------------------------------------------------- |
| `Project` loader               | ✅     | Chargement complet via `$Project.load()`           |
| Documentation (`README.md`)    | ✅     | Accessible via `.documentation.readme`             |
| Configurations                 | ✅     | Détecte `.gitignore`, `deno.json`, `.vscode/` etc. |
| Scripts (`deno`, `npm`)        | ✅     | Regroupe les scripts déclarés                      |
| Dépendances                    | ✅     | Collecte les imports externes (npm, url...)        |
| Exports (`exports`)            | ✅     | Depuis `deno.json` ou `package.json`               |
| Layers (apps, apis, libs, ext) | ✅     | Détection automatique dans ou hors `src/`          |
| Tests                          | ✅     | Collecte des fichiers de test                      |
| Fichiers orphelins             | ✅     | Liste des fichiers non intégrés dans un layer      |
| Git                            | ✅     | Branch, remote, état de staging (si repo Git)      |

## 🚀 Utilisation

```ts
import { $Project } from "mod.ts";

const project = await $Project.load("./mon-projet");

// Accès à la structure
console.log("Nom du projet :", project.name);
console.log("Environnements :", project.runtimes);
console.log("Exports :", project.exports);
```

---

## 🔍 Exécution des tests

```bash
deno test --allow-all
```

Les tests sont organisés comme suit :

- `xxx.test.ts` : tests unitaires, proches du fichier testé
- `mod-base.test.ts` : test fonctionnel général de `$Project.load`
- `tests/e2e/` : à venir pour des tests d’intégration sur projet réel

## 🧠 Sémantique de projet

Bienvenue dans la documentation dédiée au **modèle sémantique** utilisé par `project-tree`.

Ce module permet d’enrichir l’arborescence d’un projet logiciel avec des **rôles** et **tags sémantiques**, facilitant ainsi :

- l’analyse du code,
- la documentation automatique,
- la navigation intelligente,
- l’assistance par IA.

## 📂 Table des matières

| Section                                                                    | Description                                                       |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [📊 Diagrammes](/projects/sloth-project-tree/diagrams)                     | Les diagrammes de classes du projet                               |
| [📖 Glossaire](/projects/sloth-project-tree/glossary)                      | Définitions des concepts clés utilisés dans la sémantique         |
| [🧠 Modèle sémantique](/projects/sloth-project-tree/semantic-model)        | Structure du modèle `SemanticNode`, rôles, tags                   |
| [🎭 Rôles sémantiques](/projects/sloth-project-tree/node-roles)            | Liste et description des rôles métiers reconnus                   |
| [🧩 Règles d’inférence](/projects/sloth-project-tree/role-detection-rules) | Heuristiques utilisées pour déduire les rôles automatiquement     |
| [🏷️ Tags sémantiques](/projects/sloth-project-tree/semantic-tags)          | Attributs secondaires pour enrichir la compréhension des fichiers |
| [🔧 Extensibilité](/projects/sloth-project-tree/extensibility)             | Ajouter vos propres rôles, règles ou tags                         |
| [📚 Cas d’usage](/projects/sloth-project-tree/use-cases)                   | Ce que permet l’analyse sémantique dans un projet réel            |
| [⚠️ Limites](/projects/sloth-project-tree/limitations)                     | Ce que le système ne sait pas (encore) faire                      |

## ✨ Exemples d’usage

- Regrouper automatiquement les fichiers `utils.ts` dans un tableau de fonctions réutilisables.
- Afficher les points d’entrée (`main.ts`, `index.ts`) dans un sommaire visuel.
- Distinguer la logique métier (`Service`, `Controller`) de l’infrastructure (`ToolBox`, `Config`).

::: info
Ce système est conçu pour être **simple**, **extensible** et **interopérable** avec des outils comme VitePress, Comet, ou des assistants IA.
:::

## 📜 Licence

Publié sous la licence MIT. Copyright © 2025 [Socle Commun](https://github.com/socle-commun) — Conçu avec soin pour un monde accessible.
