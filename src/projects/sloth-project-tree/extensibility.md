# 🔧 Extensibilité

Vous pouvez ajouter vos propres règles pour détecter des rôles ou des tags personnalisés.

## Étapes

1. Créer un fichier dans `lib/semantic-rules/custom.ts`
2. Exporter une fonction `applyCustomRules(node)`
3. L'intégrer dans le pipeline `loadSemanticTrees()`

## Exemple

Détecter tous les fichiers finissant par `.hook.ts` comme `Hook` :

```ts
if (node.name.endsWith(".hook.ts")) {
  node.role = "Hook";
}
```
