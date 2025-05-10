# 🧪 End-to-End (E2E) Tests

This page documents the **end-to-end tests** used to validate the Example Deno Server.

It explains:
✅ Where the test files are located
✅ How to run them locally or in CI
✅ A concrete test example
✅ Tips for writing your own E2E tests

---

## 📁 Location

E2E tests are located here:

```
tests/e2e/
```

Key files:

| File             | Role                                   |
| ---------------- | -------------------------------------- |
| `server.test.ts` | Verifies access to docs and base pages |
| `helper.ts`      | Starts/stops a test server             |

---

## 🔨 Running the tests

Locally:

```bash
deno task test:dev
```

With coverage report:

```bash
deno task test:dev:coverage
```

In CI:

```bash
deno task test:ci
```

---

## 📦 Example of an existing test

Here’s a simplified snippet from `tests/e2e/server.test.ts`:

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

> 💡 **Note:** Each test launches its own isolated server using the `startTestServer()` helper.

---

## ✨ Writing your own tests

To add a new test:

1️⃣ Create a `.test.ts` file in `tests/e2e/`
2️⃣ Use the `startTestServer()` helper to launch a local server
3️⃣ Make HTTP calls using `fetch()`
4️⃣ Add assertions (`if (...) throw new Error(...)`) to validate responses
5️⃣ Don’t forget to stop the server (`await server.stop()` inside a `finally` block)

---

## 📚 Useful resources

* [Deno Testing](https://deno.land/manual@v1.38.4/testing)
* [Hono Testing Guide](https://hono.dev/guides/testing)
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

✅ **Best practices:**

* Test critical routes (auth, errors, docs)
* Check HTTP status codes and response bodies
* Use clear names for your tests (`Deno.test('...', () => { ... })`)
