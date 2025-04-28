# 🧩 Règles d'inférence

`project-tree` utilise des heuristiques basées sur :

- **Le nom du fichier/dossier**
- **Le chemin dans l’arborescence**
- **Le type de contenu**

## Règles simples

- `main.ts` → `ExecutableEntryPoint`
- `mod.ts`, `index.ts` → `Module`
- `types.ts`, `*.schema.ts` → `TypeDefinition` ou `SchemaFile`
- `*.test.ts`, `__tests__/` → `TestFile`

## Exemple

Un fichier `apps/api/controller.ts` sera interprété comme un `Controller`.
