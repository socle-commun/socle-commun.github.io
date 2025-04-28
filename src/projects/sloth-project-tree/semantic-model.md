# 🧠 Modèle sémantique

Le modèle sémantique permet de structurer un projet logiciel en identifiant les rôles métiers de chaque fichier ou dossier à partir de conventions.

## Objectif

- Apporter une signification métier à la structure technique.
- Enrichir les fichiers avec des rôles (`Module`, `Service`, etc.).
- Permettre des usages avancés (tri, documentation, IA...).

## Composants principaux

- `SemanticNode`
- `SemanticRole`
- `SemanticTag`
- `Tree` (structure physique)

## Exemple

Un fichier `main.ts` dans `apps/cli/` sera détecté comme :

```json
{
  "path": "apps/cli/main.ts",
  "role": "ExecutableEntryPoint",
  "tags": ["entrypoint", "runnable"]
}
```
