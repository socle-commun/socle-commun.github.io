# 🧩 Emoji Commit Convention

This document defines the official **Emoji Commit Convention** used by the Socle-Commun ecosystem.

---

## 📚 Table of Contents

- [🧩 Emoji Commit Convention](#-emoji-commit-convention)
  - [📚 Table of Contents](#-table-of-contents)
  - [🎯 Goal](#-goal)
  - [📝 Format](#-format)
  - [✅ Examples](#-examples)
  - [📋 Allowed Emojis](#-allowed-emojis)
  - [🧠 Good Practices](#-good-practices)
  - [❓ Why Emoji Commits?](#-why-emoji-commits)
  - [📌 Related](#-related)

---

## 🎯 Goal

Unify commit messages in all repositories using a **clear, visual, and minimal format** — especially suitable for small teams and open-source projects.

---

## 📝 Format

```plaintext
<emoji> (#issue-id) commit message
````

| Element          | Required | Description                                 |
| ---------------- | -------- | ------------------------------------------- |
| `emoji`          | ✅        | Type of change (see list below)             |
| `(#issue-id)`    | 🔶       | Reference to GitHub/GitLab issue (optional) |
| `commit message` | ✅        | Short and direct description (in English)   |

> 🚫 **No text prefixes** like `feat:`, `fix:`, etc. — the emoji replaces it.

---

## ✅ Examples

```plaintext
✨ (#12) add new endpoint for fragment creation
🐛 (#45) fix path encoding issue on Windows
📝 update contributing guidelines
🎨 clean up CSS formatting
```

---

## 📋 Allowed Emojis

| Emoji | Name                 | Meaning                           |
| ----- | -------------------- | --------------------------------- |
| ✨     | `:sparkles:`         | New feature                       |
| 🐛    | `:bug:`              | Bug fix                           |
| ♻️    | `:recycle:`          | Refactor / code cleanup           |
| 🔥    | `:fire:`             | Remove code / files               |
| ✅     | `:white_check_mark:` | Tests                             |
| 🚨    | `:rotating_light:`   | Fix lint / build / warnings       |
| 📝    | `:memo:`             | Documentation update              |
| 💄    | `:lipstick:`         | UI styles / cosmetic changes      |
| 🎨    | `:art:`              | Code formatting                   |
| 🚀    | `:rocket:`           | Deploy or performance improvement |
| 🔧    | `:wrench:`           | Config or tooling                 |
| 🔁    | `:repeat:`           | Workflow / automation             |
| 📦    | `:package:`          | Dependency / release related      |
| ➕     | `:heavy_plus_sign:`  | Add dependency / file             |
| ➖     | `:heavy_minus_sign:` | Remove dependency / file          |

> 🧩 You can extend this list — but keep it **small and consistent**.

---

## 🧠 Good Practices

* ✅ Always start your commit with **one emoji**
* 🧾 Use simple, **clear English messages**
* 🔢 Reference issues with `(#id)` if possible
* 🚫 Never use `feat:`, `fix:`, etc.
* 🔁 Squash before merging to keep a clean history

---

## ❓ Why Emoji Commits?

* 🔍 Easier to scan commit history
* 👥 Better async communication
* ✨ Emphasizes change type visually
* 🚀 Works well in mono-repos and open source

---

## 📌 Related

* [gitmoji.dev](https://gitmoji.dev/)
* [Conventional Commits (as reference)](https://www.conventionalcommits.org/)
