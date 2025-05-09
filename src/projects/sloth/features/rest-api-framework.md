## 🌐 REST API Feature

The **REST API stack** in Sloth provides a modular, domain-driven architecture for building scalable and well-typed REST APIs using [Hono](https://hono.dev/) and OpenAPI.

Key points:
✅ Modular domains, each owning their own routes and logic
✅ Strongly typed routes using [Zod](https://zod.dev/)
✅ Automatic OpenAPI documentation
✅ Middleware-friendly, with built-in support for auth, rate-limiting, and security headers

---

### 🏛️ Domain

A **Domain** is a logical grouping of related routes.
It provides:

* A name (`string`) → used as tag in OpenAPI
* A base path (`string`) → derived from the domain’s folder location
* A list of registered routes

```ts
import { Domain } from 'https://deno.land/x/sloth/src/deno/apps/rest/domain.class.ts'

const userDomain = new Domain('users', '/users')
```

> 💡 Domains self-register their routes by scanning a `routes/` subfolder using the `$Import` system.

---

### 🛣️ Route

A **Route** represents a single REST endpoint:

* HTTP method (`get`, `post`, `put`, `delete`)
* Path (relative to the domain’s base path)
* Handler (Hono-compatible function)
* Optional Zod schemas for params, query, body, and responses
* OpenAPI metadata generation

Example:

```ts
userDomain.addRoute('get', '/profile', (c) => {
    return c.json({ id: '123', name: 'Alice' })
})
.addResponse(200, z.object({
    id: z.string(),
    name: z.string()
}))
```

---

### ⚙️ How It Works

✅ **File structure-driven**:
Each domain lives in its own directory under `domains/`.
Routes are loaded automatically from the `routes/` subfolder.

✅ **Extensible routes**:
Each `route` file can export a function that attaches multiple routes to the domain.

✅ **Built-in middleware**:
Out of the box, the REST API stack includes:

* Bearer token authentication (`Authorization: Bearer <token>`)
* Rate limiting via Deno KV
* Production-ready security headers

✅ **Swagger UI and OpenAPI**:
Documentation is generated and served at configurable endpoints (`/doc` for JSON, `/ui` for Swagger UI).

---

### 🏗 Example Project Structure

```
src/
  apps/
    rest/
      domains/
        users/
          mod.ts           → exports Domain
          routes/
            profile.ts     → defines /profile route
            settings.ts    → defines /settings route
        system/
          mod.ts
          routes/
            status.ts
```

---

### 🏃 Quickstart

```ts
import $AppRest from 'https://deno.land/x/sloth/src/deno/apps/rest/mod.ts'

const { app, meta } = await $AppRest(import.meta.url)

console.log(`🚀 ${meta.appName} running on ${meta.version}`)
```

---

### 📚 Recommended Enhancements

* Add Zod schemas for request validation
* Provide meaningful descriptions for OpenAPI
* Use modular middlewares per domain if needed
* Extend the auth system for role-based or scoped permissions
