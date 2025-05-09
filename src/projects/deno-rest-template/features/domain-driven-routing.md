# 🏗️ Domain Driven Routing

## 📌 Objectif

La **Domain Driven Routing (DDR)** est une approche architecturale qui organise les routes API non pas par simple regroupement technique (fichiers, endpoints), mais par **domaine métier**.
Elle permet de structurer une API de manière modulaire, évolutive, et alignée avec les concepts métier.

---

## 🚀 Pourquoi l’adopter ?

✅ Facilite la maintenance : chaque domaine est indépendant et auto-contenu.
✅ Clarifie l’organisation : fini les gros fichiers de routes mêlées, chaque domaine porte son sens métier.
✅ Simplifie l’extension : on peut ajouter ou retirer un domaine sans toucher au cœur de l’application.
✅ Renforce la documentation : chaque domaine peut être documenté et exporté individuellement.
✅ Prépare une montée en complexité : permet d’introduire plus tard des middlewares spécifiques, des permissions ou des dépendances locales.

---

## 🏗️ Comment ça fonctionne dans ce projet

| Élément clé         | Rôle                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------- |
| `Domain` (classe)   | Représente un module métier complet : nom, description, liste de routes.                |
| `Route` (classe)    | Représente une route unique, avec son schéma, son handler, ses requêtes/réponses.       |
| `$AppRest` (entrée) | Point d’entrée global qui découvre dynamiquement les domaines et les branche dans Hono. |

---

## 📂 Structure d’un domaine

Un domaine est défini dans un dossier :

```
/src/app/rest/domains/{domaine}/mod.ts
```

Exemple : `/src/app/rest/domains/health/mod.ts`

Contenu type :

```ts
import { Domain } from '@/ext/sloth/apps/rest/domain-factory.ts';

export default async () => {
    const domain = new Domain('💚 Health');
    domain.addRoute('get', '/health', async (c) => { ... })
          .addResponse(200, HealthResponseSchema);
    return domain;
};
```

---

## ⚙️ Fonctionnement global

Dans `$AppRest` :

1. Tous les fichiers `mod.ts` sous `/domains` sont automatiquement importés.
2. Chaque fichier doit retourner une promesse `Promise<Domain>`.
3. Le framework :

   * Enregistre toutes les routes dans `app.openapi()`.
   * Génère les métadonnées OpenAPI à partir des domaines (tags, descriptions).
   * Connecte les middlewares globaux (auth, CORS, sécurité).

---

## 🌟 Bonnes pratiques

✅ Toujours donner un nom et une description clairs au domaine.
✅ Organiser les schémas Zod localement à chaque domaine.
✅ Ne pas mélanger la logique des domaines : un domaine = un métier.
✅ Documenter les endpoints directement dans les métadonnées du domaine.
✅ Prévoir les extensions futures (middlewares spécifiques, permissions).

---

## 🔮 Extensions futures possibles

| Idée                                    | Bénéfice                                       |
| --------------------------------------- | ---------------------------------------------- |
| Génération de docs Markdown par domaine | Documenter chaque domaine en dehors d’OpenAPI. |
| Export complet OpenAPI (JSON/YAML)      | Générer des clients automatiques, CI/CD.       |
| Middlewares locaux par domaine          | Renforcer la sécurité et l’isolation métier.   |
| Gestion d’événements (audit, hooks)     | Ajouter des actions globales ou locales.       |

---

## 🧩 Conclusion

La **Domain Driven Routing** transforme votre API en une architecture modulaire, robuste et extensible, prête à évoluer avec les besoins métier. Elle s’appuie sur des conventions fortes mais simples, tout en restant légère et adaptée à l’univers Deno + Hono.
