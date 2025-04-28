# ⚠️ Limites

## Ambiguïté des conventions

Un fichier peut correspondre à plusieurs rôles. Ex : `index.ts` peut être `Module` ou `Executable`.

## Faux positifs

Certains fichiers peuvent être mal catégorisés si leur nom est trompeur.

## Limitations techniques

- Non compatible avec les projets monolithiques désorganisés
- Ne lit pas encore le contenu des fichiers (juste noms + structure)
