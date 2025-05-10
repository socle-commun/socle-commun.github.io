✅ Here’s the **English version**, clean and ready for integration:

---

# 🌿 Environment and Version

This page explains the **management of environment variables** and the project version.

You will find:
✅ Load priorities (`.env`, system, default value)
✅ A table of main variables used
✅ The method for dynamically reading the project version in docs
✅ The recommended way to add typed environment variables

Essential for configuring your environments (dev, prod) and keeping the project aligned.

---

## ⚙️ Value priorities

1️⃣ Local `.env` (in dev)
2️⃣ System `Deno.env` (in prod)
3️⃣ Default value passed into code

---

## 📋 Main variables

| Variable       | Description                               |
| -------------- | ----------------------------------------- |
| `APP_NAME`     | Name displayed in logs                    |
| `ENV`          | Environment (`production`, `development`) |
| `APP_PORT`     | Listening port                            |
| `APP_URL`      | Public URL                                |
| `BEARER_TOKEN` | Bearer authentication token               |
| `DOC_PATH`     | OpenAPI endpoint (default `/doc`)         |
| `UI_PATH`      | Swagger UI endpoint (default `/ui`)       |

---

## 🏷️ Project version

The `deno.jsonc` file contains the `version` field, automatically read and displayed in the documentation.

> **Tip**: See the `getProjectVersion()` function to understand the dynamic loading.

---

## 🛠️ Detailed implementation

Environment variable loading is centralized in:

```
/ext/deno/env/mod.ts
```

### Key points

✅ Uses `std/dotenv` to load local values.
✅ Cleanly ignores missing `.env` files.
✅ The `$ENV` type defines all known keys.
✅ The generic function `getEnv<$ENV>()` applies the priority:
`.env local` → system `Deno.env` → default value.

---

### Usage example

```ts
import getEnv from '@/ext/deno/env/mod.ts'

type ENV = 'APP_NAME' | 'MY_NEW_KEY';

// Read an existing value
const appName = getEnv<ENV>("APP_NAME", "Unknown App")

// Read a newly added key
const newFeatureFlag = getEnv<ENV>("MY_NEW_KEY", "false")
```

✅ **Why use `<ENV>`?**

* Provides strict typing for key names.
* Avoids typos.
* Automatically aligns code with documentation.

---

✅ **Best practices**

* Always use a local `ENV` type in the file to reference your keys.
* Do **not** use `Deno.env.get()` directly.
* Document every new variable in `.env.example` (commented by default if appropriate).

---

If you want, I can package this into a `.md` file for `doc/features/`. Want me to prepare it? 📦
