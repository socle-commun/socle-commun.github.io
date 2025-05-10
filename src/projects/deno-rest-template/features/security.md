# 🔒 Security

This page details the **security mechanisms** integrated into the Example Deno Server.

It covers:
✅ Protections via HTTP headers
✅ Bearer token authentication
✅ Request throttling with a rate limiter
✅ Where and how to configure the middlewares

You will learn which middlewares are used, when they apply, and how to customize them to strengthen your API’s robustness.

---

## 🛡️ Main middlewares

| Middleware            | Role                                     |
| --------------------- | ---------------------------------------- |
| `security-headers.ts` | Adds secure HTTP headers                 |
| `kv-rate-limiter.ts`  | Limits requests per IP                   |
| `bearer-auth.ts`      | Verifies the `Bearer` token (if enabled) |

> **Tip**: These middlewares are only active in production (`APP_ENV=production`), except for authentication, which remains active everywhere.

---

## ⚙️ Where are the middlewares configured?

All middlewares are applied and configured in:
**`src/app/rest/main.ts`**

In this file:
✅ Middlewares are globally added using `app.use('*', middleware)`
✅ They are activated or deactivated depending on the environment (`APP_ENV`)
✅ You can modify their options directly in this file

---

### 📍 Example: Change the rate limiter limit

In `main.ts`:

```ts
app.use('*', kvRateLimiter({
    max: 100,          // ← change here (e.g., to 200)
    windowMs: 60000,   // ← change here for a different window (e.g., 5 min → 300000)
}) as any)
```

---

### 📍 Example: Modify allowed origins (CORS)

Also in `main.ts`:

```ts
app.use('*', cors({
    origin: ['https://myapp.com', 'https://other-domain.com'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
```

---

✅ **Best practices:**

* Place sensitive middlewares (auth, headers, rate limit) before your routes to ensure full coverage.
* Document any changes in this file and in the project docs.
* Always test locally before deploying to production.

---

## 📚 Resources

* [Hono Middleware](https://hono.dev/middleware)
* [Deno KV](https://deno.land/manual@v1.38.4/runtime/kv_api)
* [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

See also: [Environment Variables](./env.md)
