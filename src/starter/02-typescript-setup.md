# 🧰 Chapter 2 — Installing Node.js, Deno and TypeScript

Now that you're comfortable using the terminal, it's time to **install the tools** you'll use to write and run TypeScript code.

In this chapter, you'll learn how to install:

- ✅ **Node.js** – a JavaScript/TypeScript runtime
- ✅ **TypeScript** – a language that makes your code safer and easier to read
- ✅ **Deno** – a modern alternative to Node.js

---

## 📦 What are these tools?

| Tool       | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| Node.js    | Runs JavaScript or TypeScript on your machine (outside the browser)         |
| TypeScript | A safer version of JavaScript that helps catch bugs before running your code|
| Deno       | A secure and modern runtime for JavaScript & TypeScript                    |

---

## 1️⃣ Installing Node.js 

To install Node.js **correctly and easily**, we recommend using a **version manager**.

> A version manager lets you easily switch between different versions of Node.js, which is super useful later when working on multiple projects.

---

### 🔧 Step-by-step installation using `nvm`

#### 🟢 Mac / Linux

1. Open your terminal
2. Run this command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

3. Restart your terminal (important!)
4. Then install the latest stable version of Node.js:

```bash
nvm install --lts
nvm use --lts
```

This will install both `node` and `npm` automatically.

---

#### 🟦 Windows

Use [**nvm-windows**](https://github.com/coreybutler/nvm-windows):

1. Download the `.exe` from the “Releases” page
2. Install it
3. In a new terminal window:

```bash
nvm install lts
nvm use lts
```

---

### 🧪 Test your installation

In any terminal:

```bash
node -v
npm -v
```

You should see something like:

```bash
v20.12.2
10.7.0
```

If yes — you’re good to go 🎉

---

### 🔄 How to update Node.js later

Just run:

```bash
nvm install --lts
nvm use --lts
```

You can even switch between versions:

```bash
nvm list
nvm use 18
```

---

## 2️⃣ Installing TypeScript

You can install TypeScript globally using `npm` (which came with Node.js):

```bash
npm install -g typescript
```

This gives you the `tsc` (TypeScript Compiler) command.

### 🧪 Test your installation

```bash
tsc -v
```

You should see something like:

```bash
Version 5.4.5
```

---

### 🔄 How to update TypeScript

To always have the latest version:

```bash
npm install -g typescript
```

You can check it worked by running:

```bash
tsc -v
```

If you want a **specific version**, use:

```bash
npm install -g typescript@5.3.3
```

---

## 3️⃣ Installing Deno

Deno is a newer, secure runtime made by the original creator of Node.js. It runs TypeScript **natively** (no compiler setup needed).

### 🔧 Install it

#### On Mac/Linux:

```bash
curl -fsSL https://deno.land/install.sh | sh
```

#### On Windows (PowerShell):

```powershell
iwr https://deno.land/install.ps1 -useb | iex
```

> You may need to restart your terminal after install.

### 🧪 Test your installation

```bash
deno --version
```

You should see:

```bash
deno 1.43.1
typescript 5.x.x
v8 12.x.x
```

---

### 🔄 How to update Deno

Deno has a built-in upgrade command:

```bash
deno upgrade
```

That's it — it will fetch and install the latest version automatically.

You can re-run `deno --version` to confirm the update.

---

## ✅ Recap

Here are the commands you now have:

| Command    | Purpose                          |
| ---------- | -------------------------------- |
| `node`     | Run JavaScript or `.js` files    |
| `npm`      | Install libraries and tools      |
| `tsc`      | Compile TypeScript to JavaScript |
| `deno run` | Run TypeScript files directly    |

---

## 🧠 Tip: Why both Node and Deno?

Most projects today use **Node.js** — it’s the industry standard.
But **Deno** is growing fast and is **used heavily in Socle Commun**.
Learning both gives you more flexibility and confidence.

---

## ▶️ What’s next?

Let’s use all this and actually **write and run your first TypeScript file** — the fun part!

👉 [Go to Chapter 3: Writing and Running TypeScript](./03-typescript-basics.md)
