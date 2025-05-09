# Sécurité

Cette page détaille les **mécanismes de sécurité** intégrés au serveur Example Deno Server.

Elle couvre :
✅ Les protections via headers HTTP
✅ L’authentification par token Bearer
✅ Le contrôle du débit avec un rate limiter
✅ Où et comment configurer les middlewares

Vous découvrirez les middlewares utilisés, quand ils s’appliquent, et comment les personnaliser pour renforcer la robustesse de votre API.

---

## 🛡️ Middleware principaux

| Middleware            | Rôle                                  |
| --------------------- | ------------------------------------- |
| `security-headers.ts` | Ajoute les en-têtes HTTP sécurisés    |
| `kv-rate-limiter.ts`  | Limite les requêtes par IP            |
| `bearer-auth.ts`      | Vérifie le token `Bearer` (si activé) |

> **Astuce** : Ces middlewares sont activés uniquement en production (`APP_ENV=production`), sauf l’authentification qui reste active partout.

---

## ⚙️ Où sont configurés les middlewares ?

Tous les middlewares sont appliqués et paramétrés dans :
**`src/app/rest/main.ts`**

Dans ce fichier :
✅ Les middlewares sont ajoutés globalement avec `app.use('*', middleware)`
✅ Ils sont activés ou non selon l’environnement (`APP_ENV`)
✅ Vous pouvez modifier leurs options directement dans ce fichier

---

### 📍 Exemple : changer la limite du rate limiter

Dans `main.ts` :

```ts
app.use('*', kvRateLimiter({
    max: 100,          // ← changez ici (par exemple 200)
    windowMs: 60000,   // ← changez ici pour une autre fenêtre (par exemple 5 min → 300000)
}) as any)
```

---

### 📍 Exemple : modifier les origines autorisées (CORS)

Toujours dans `main.ts` :

```ts
app.use('*', cors({
    origin: ['https://monapp.com', 'https://autre-domaine.com'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
```

---

✅ **Bonnes pratiques :**

* Placez les middlewares sensibles (auth, headers, rate limit) avant vos routes pour garantir une couverture complète.
* Documentez tout changement dans ce fichier et dans la doc projet.
* Testez bien en local avant de déployer en prod.

---

## 📚 Ressources

* [Hono Middleware](https://hono.dev/middleware)
* [Deno KV](https://deno.land/manual@v1.38.4/runtime/kv_api)
* [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS)

---

Voir aussi : [Variables d’environnement](./env.md)
