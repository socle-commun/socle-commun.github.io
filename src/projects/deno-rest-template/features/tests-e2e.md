# 🧪 Tests End-to-End (E2E)

Cette page documente les **tests end-to-end** réalisés pour valider le serveur Example Deno Server.

Elle explique :
✅ Où se trouvent les fichiers de test  
✅ Comment les lancer en local ou en CI  
✅ Donne un exemple concret de test  
✅ Propose des pistes pour écrire vos propres tests E2E

---

## 📁 Emplacement

Les tests E2E sont situés ici :
```

tests/e2e/

````

Fichiers clés :
| Fichier                   | Rôle                              |
| ------------------------- | -------------------------------- |
| `server.test.ts`          | Vérifie l'accès à la doc et aux pages de base |
| `helper.ts`               | Démarre/arrête un serveur de test |

---

## 🔨 Lancer les tests

En local :
```bash
deno task test:dev
````

Avec rapport de couverture :

```bash
deno task test:dev:coverage
```

En CI :

```bash
deno task test:ci
```

---

## 📦 Exemple de test existant

Voici un extrait simplifié de `tests/e2e/server.test.ts` :

```ts
import { startTestServer } from './helper.ts'

Deno.test('GET / responds with 404', async () => {
	const server = await startTestServer()
	try {
		const response = await fetch(server.url)
		if (response.status !== 404) {
			throw new Error(`Expected 404, got ${response.status}`)
		}
	} finally {
		await server.stop()
	}
})
```

> 💡 **Remarque :** Chaque test démarre son propre serveur isolé grâce au helper `startTestServer()`.

---

## ✨ Écrire vos propres tests

Pour ajouter un nouveau test :

1️⃣ Créez un fichier `.test.ts` dans `tests/e2e/`
2️⃣ Utilisez le helper `startTestServer()` pour lancer le serveur local
3️⃣ Effectuez vos appels HTTP avec `fetch()`
4️⃣ Ajoutez des assertions (`if (...) throw new Error(...)`) pour valider les réponses
5️⃣ N’oubliez pas d’arrêter le serveur (`await server.stop()` dans un bloc `finally`)

---

## 📚 Ressources utiles

* [Deno Testing](https://deno.land/manual@v1.38.4/testing)
* [Hono Testing Guide](https://hono.dev/guides/testing)
* [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

---

✅ **Bonnes pratiques :**

* Testez les routes critiques (auth, erreurs, docs)
* Vérifiez les statuts HTTP et les corps de réponse
* Utilisez des noms clairs pour vos tests (`Deno.test('...', () => { ... })`)

```

---