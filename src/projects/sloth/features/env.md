# 📄 `getEnv`

A lightweight utility for retrieving environment variables in Deno, supporting both local `.env` files (for development) and system environment variables (for production).

---

## ✨ Features

✅ Loads `.env` variables using `deno_std/dotenv`
✅ Falls back to `Deno.env.get()` for system environment
✅ Supports default fallback values
✅ Safe to use even if `.env` is missing (no crashes)
✅ Designed for Deno projects

---

## 📦 Installation

```ts
import getEnv from './get-env.ts';
```

---

## 🔧 How it works

* **Priority order:**
  1️⃣ `.env` file (loaded at startup, dev mode)
  2️⃣ `Deno.env.get()` (system environment, prod mode)
  3️⃣ Supplied default value (if provided)
  4️⃣ `undefined` (if not found anywhere)

* Uses the Deno standard library’s `dotenv` module to parse `.env`.

* Automatically ignores `MissingEnvVarsError` if no `.env` file exists.

---

## 🚀 Usage

```ts
const port = getEnv('PORT', '3000');
console.log(`Server running on port ${port}`);
```

Without default:

```ts
const token = getEnv('API_TOKEN');
if (!token) throw new Error('Missing API_TOKEN!');
```

---

## 🔍 Example

Given a `.env` file:

```
PORT=8080
MODE=development
```

Code:

```ts
const port = getEnv('PORT', '3000');  // ➔ '8080'
const mode = getEnv('MODE');          // ➔ 'development'
const missing = getEnv('UNKNOWN', 'default');  // ➔ 'default'
```

In production (without `.env`), it checks system environment:

```bash
$ DENO_ENV=production deno run app.ts
```

---

## ⚠️ Notes

* Only string values are supported.
* `undefined` is returned if the key is missing and no default is provided.
* This module **does not mutate** `Deno.env` — it only reads.
* For secure environments, avoid hardcoding sensitive values.

---

Bien sûr ! Voici un exemple **plus simple et clair** d’utilisation avancée avec l’opérateur diamant (`<T>`) :

---

## 💎 Advanced Example with Type Parameter

```ts
import getEnv from './get-env.ts';

// Define allowed keys using a union type
type MyEnvKeys = 'APP_NAME' | 'APP_PORT' | 'ENV';

// Use the diamond operator <MyEnvKeys> to hint TypeScript
const appName = getEnv<MyEnvKeys>('APP_NAME', 'DefaultApp');
const port = getEnv<MyEnvKeys>('APP_PORT', '8000');
const environment = getEnv<MyEnvKeys>('ENV', 'development');

console.log(`🚀 ${appName} | Port: ${port} | Mode: ${environment}`);
```

---

### What this does

✅ **Type safety** → You can’t accidentally pass a wrong key.
✅ **Better autocomplete** → Your editor will suggest only `'APP_NAME'`, `'APP_PORT'`, or `'ENV'`.
✅ **Clean fallback** → Defaults are still supported.

---

### Example Output

If `.env` contains:

```
APP_NAME=MyAdvancedApp
APP_PORT=4000
ENV=production
```

You’ll get:

```
🚀 MyAdvancedApp | Port: 4000 | Mode: production
```

If some keys are missing:

```
🚀 DefaultApp | Port: 8000 | Mode: development
```

---

### Why use `<MyEnvKeys>`?

✅ Helps **document** which environment variables your app uses.
✅ Reduces **typos** and **runtime errors**.
✅ Makes your code **self-explanatory**.
