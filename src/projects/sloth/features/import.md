# $Import 🦥 – Importation Dynamique Puissante pour Deno

![Deno](https://img.shields.io/badge/Deno-🦕-000?logo=deno)

![Type de Module](https://img.shields.io/badge/Type-Bibliothèque-informational)

> ⚡ Une solution flexible et performante pour charger dynamiquement vos modules Deno — qu’il s’agisse d’un fichier unique, de plusieurs fichiers ou de dossiers entiers.

## ✨ Points Forts

- 📄 Import dynamique d’un fichier
- 📁 Import de tous les fichiers `.ts`, `.js`, etc. d’un dossier
- 🔍 Détection automatique de `main.ts` (ou d’une entrée personnalisée) dans les sous-dossiers
- 🔁 Prise en charge de chemins multiples
- 🚀 Chargement parallèle pour des performances optimales
- 🧩 Callback après import
- 📜 Filtrage des extensions autorisées
- 🔍 Journalisation optionnelle
- 🧯 Gestion de secours en cas d’erreur

## 📦 Installation

Ajoutez simplement :

```ts
import { $Import } from "https://raw.githubusercontent.com/socle-commun/lib-core-deno/main/libs/import/mod.ts";
```

## 🧪 Exemples d’Utilisation

Importer un fichier unique :

```ts
const meta = import.meta.url;
const mod = await $Import(meta, "./services/foo.ts");
```

Importer plusieurs fichiers et/ou dossiers :

```ts
const all = await $Import(meta, ["./services/foo.ts", "./modules/"]);
```

Utiliser un callback après import :

```ts
await $Import(meta, "./config.ts", {
  callback: async (mod) => {
    console.log("Module chargé :", mod);
  },
});
```

## 🔧 API

```ts
$Import<T>(
  metaUrl: string,
  path: string | string[],
  options?: SlothImportOptions<T>
): Promise<T>;
```

### Paramètres disponibles (`options`)

```ts
interface SlothImportOptions<T> {
  callback?: (mod: T) => Promise<void>;
  entryFileName?: string; // par défaut : "main.ts"
  allow?: SlothImportAllowedExtension[]; // par défaut : ["ts"]
}
```

## ⚙️ Configuration Globale

Personnalisez le comportement global de `$Import` :

```ts
$Import.logging = true; // ou une fonction personnalisée
$Import.fallback = (path, err) => ({ error: true });

$Import.config = {
  logging: false,
  entryFileName: "entry.ts",
  allow: ["ts"],
};
```

## 🗂 Import automatique de `main.ts` dans les dossiers

Structure d'exemple :

```text
features/
├─ feature-a/
│  └─ main.ts
├─ feature-b/
│  └─ main.ts
```

Import automatique :

```ts
await $Import(import.meta.url, "./features/");
```

Chaque fichier `main.ts` sera détecté et chargé automatiquement.

## 🔤 Extensions supportées

Par défaut :

```text
["ts", "js"]
```

Extensions personnalisables parmi :

```text
["ts", "js", "jsx", "tsx", "mts", "cts"]
```

## 🧱 Organisation du projet

```text
libs/import/
├─ mod.ts                  # Entrée principale
├─ config.ts               # Configuration runtime
├─ types.ts                # Types TypeScript
├─ constants.ts            # Constantes
├─ processes/              # Processus internes
│  ├─ import-file/
│  ├─ import-directory/
│  ├─ resolve-path/
│  ├─ handle-error/
│  └─ log/
└─ _fixtures/              # Modules de test
```

## ✅ Tests

Lancez les tests unitaires :

```bash
deno task test
```

Chaque processus est couvert par des tests indépendants.

## 🐢 À propos de Sloth

`$Import` fait partie de la suite **Sloth 🦥**, un ensemble d’utilitaires minimalistes, paresseux mais puissants, dédiés aux développeurs Deno.

## 📜 Licence

Publié sous la licence MIT. Copyright © 2025 [Socle Commun](https://github.com/socle-commun) — Conçu avec soin pour un monde accessible.
