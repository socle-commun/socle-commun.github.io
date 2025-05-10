# 🏗️ Domain Driven Routing

## 📌 Objective

**Domain Driven Routing (DDR)** is an architectural approach that organizes API routes not just by technical grouping (files, endpoints) but by **business domain**.
It enables structuring an API in a modular, scalable way, aligned with business concepts.

---

## 🚀 Why adopt it?

✅ Eases maintenance: each domain is independent and self-contained.
✅ Clarifies organization: no more giant mixed route files — each domain carries clear business meaning.
✅ Simplifies extension: you can add or remove a domain without touching the application core.
✅ Strengthens documentation: each domain can be documented and exported individually.
✅ Prepares for future complexity: allows later introduction of domain-specific middlewares, permissions, or local dependencies.

---

## 🏗️ How it works in this project

| Key element        | Role                                                                            |
| ------------------ | ------------------------------------------------------------------------------- |
| `Domain` (class)   | Represents a complete business module: name, description, list of routes.       |
| `Route` (class)    | Represents a single route, with schema, handler, requests/responses.            |
| `$AppRest` (entry) | Global entry point that dynamically discovers domains and plugs them into Hono. |

---

## 📂 Domain structure

A domain is defined in a folder:

```
/src/app/rest/domains/{domain}/mod.ts
```

Example: `/src/app/rest/domains/health/mod.ts`

Typical content:

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

## ⚙️ Global operation

In `$AppRest`:

1. All `mod.ts` files under `/domains` are automatically imported.
2. Each file must return a `Promise<Domain>`.
3. The framework:

   * Registers all routes into `app.openapi()`.
   * Generates OpenAPI metadata from domains (tags, descriptions).
   * Connects global middlewares (auth, CORS, security).

---

## 🌟 Best practices

✅ Always provide a clear name and description for the domain.
✅ Organize Zod schemas locally within each domain.
✅ Do not mix domain logic: one domain = one business unit.
✅ Document endpoints directly in the domain’s metadata.
✅ Plan for future extensions (specific middlewares, permissions).

---

## 🔮 Possible future extensions

| Idea                              | Benefit                                        |
| --------------------------------- | ---------------------------------------------- |
| Generate Markdown docs per domain | Document each domain outside OpenAPI.          |
| Full OpenAPI export (JSON/YAML)   | Generate automatic clients, CI/CD integration. |
| Local middlewares per domain      | Strengthen security and business isolation.    |
| Event management (audit, hooks)   | Add global or local actions.                   |

---

## 🧩 Conclusion

**Domain Driven Routing** transforms your API into a modular, robust, and extensible architecture, ready to evolve with business needs. It relies on strong yet simple conventions while staying lightweight and tailored for the Deno + Hono ecosystem.
