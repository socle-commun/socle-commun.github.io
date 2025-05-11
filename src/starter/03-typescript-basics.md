# ✍️ Chapter 3 — Writing and Running TypeScript

You’ve installed TypeScript, Node.js, and Deno — awesome!  
Now let’s **write your first TypeScript file** and **run it**, step by step.

---

## 🧠 What is TypeScript?

TypeScript is a language that builds on JavaScript by **adding types**.  
This helps you:

- catch bugs early 🐛
- understand code better 🧠
- work in teams more safely 🤝

You write `.ts` files, then run them using **Deno**, or **Node.js** + a tool like `tsx`.

📘 Official doc: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)

---

## ✨ Your first TypeScript file

### Step 1 — Create a new folder

```bash
mkdir ts-demo
cd ts-demo
````

### Step 2 — Create a file

```bash
touch hello.ts
```

Open it in VS Code:

```bash
code .
```

Paste this code in `hello.ts`:

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

---

## ▶️ Option 1: Run it with Deno (no config)

📘 Official Deno site: [https://deno.land](https://deno.land)

Deno runs `.ts` files directly.

```bash
deno run hello.ts
```

If Deno asks for permission, use:

```bash
deno run --allow-read hello.ts
```

Expected output:

```
Hello, World!
```

---

## ▶️ Option 2: Run it with Node.js + tsx

📘 TSX (by esbuild): [https://github.com/esbuild-kit/tsx](https://github.com/esbuild-kit/tsx)

By default, Node.js can’t run `.ts` files. But with `tsx`, you can run TypeScript **without compiling manually**.

### 🔧 Step 1 — Install `tsx`

```bash
npm install -g tsx
```

> This installs it globally for your system or your current Node version (if using `nvm`).

### ▶️ Step 2 — Run your file

```bash
tsx hello.ts
```

🎉 That’s it! You’re running TypeScript directly in Node.

---

## ⛔ Option 3: Using `tsc` + `node` (classic way)

📘 TypeScript CLI docs: [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

To compile and run manually:

```bash
tsc hello.ts     # creates hello.js
node hello.js    # runs the compiled JS file
```

This approach is more common in **large projects**, but for now, `tsx` is easier.

---

## 🧠 Summary

| Tool           | Description                                  |
| -------------- | -------------------------------------------- |
| `deno run`     | Run `.ts` files directly (built-in support)  |
| `tsx`          | Run `.ts` files with Node.js (no build step) |
| `tsc` + `node` | Manual build & run (less practical)          |

---

## 🛠 More docs (optional reading)

* TypeScript Handbook: [https://www.typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html)
* Deno Manual: [https://deno.land/manual](https://deno.land/manual)
* TSX project on GitHub: [https://github.com/esbuild-kit/tsx](https://github.com/esbuild-kit/tsx)

---

## ✅ You’re ready for the next step

Now let’s learn how TypeScript’s type system works, and why it makes your code more robust and easier to maintain.

👉 [Go to Chapter 4: Understanding TypeScript Types](./04-typescript-types.md)
