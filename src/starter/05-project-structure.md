# 🗂️ Chapter 5 — Structuring a TypeScript Project

Now that you know how to use TypeScript, it’s time to organize your code like a real developer.  
A good structure helps you:

- stay focused,
- avoid messy folders,
- and work in teams more easily.

Let’s build a clean mini-project structure.

---

## 🏗️ Folder structure (basic version)

```bash
my-app/
├── main.ts
├── utils/
│   └── math.ts
├── types/
│   └── index.ts
├── README.md
````

You’ll use:

* `main.ts`: your entry point
* `utils/`: for reusable logic
* `types/`: for interfaces and types
* `README.md`: to describe your project

Let’s build it step by step.

---

## 📁 Step 1 — Create the project folder

```bash
mkdir my-app
cd my-app
code .
```

---

## 📄 Step 2 — Create a simple `main.ts`

```ts
// main.ts
import { add } from "./utils/math.ts";

console.log(add(2, 3));
```

---

## 🔧 Step 3 — Create a `utils/math.ts` file

```ts
// utils/math.ts
export function add(a: number, b: number): number {
  return a + b;
}
```

> 🧠 `export` makes the function available in other files.

---

## 🧱 Step 4 — Add some types

Create `types/index.ts`:

```ts
// types/index.ts
export interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}
```

Then use it in `main.ts`:

```ts
import type { User } from "./types/index.ts";

const bob: User = {
  name: "Bob",
  age: 42,
};

console.log(bob);
```

> 🧠 `import type` is optional, but helps with clarity.

---

## 💡 Naming conventions (recap)

| File / Folder | Purpose                   |
| ------------- | ------------------------- |
| `main.ts`     | Entry point of the app    |
| `utils/`      | Reusable functions        |
| `types/`      | All your interfaces/types |
| `README.md`   | Project description       |

📘 Learn more: [TypeScript Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

---

## 🧪 Try it out

If you used `tsx`:

```bash
tsx main.ts
```

With Deno:

```bash
deno run --allow-read main.ts
```

✅ You should see the result of the addition and the user object.

---

## 📦 Going further

In larger projects, you will see:

* `lib/` — for technical tools
* `api/` — for business logic
* `config/`, `tests/`, `bin/` — for configuration, testing, or scripts

These folders help split your code by **function**, not just by type.

📘 Check out:

* [Official Project References Guide](https://www.typescriptlang.org/docs/handbook/project-references.html)
* [Node.js Module Resolution](https://nodejs.org/api/modules.html)

---

## ✅ What’s next?

In the next chapter, we’ll learn how to use **Git and GitHub** to save your work, collaborate with others, and share your code online.

👉 [Go to Chapter 6: Introduction to Git and GitHub](./06-git-github.md)
