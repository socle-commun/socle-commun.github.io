# 🌟 Features

Welcome to the **Features** section of this project.

This section groups all documentation for the core features of the Example Deno Server.
Here you’ll find an overview and guides for:

✅ Understanding each technical feature
✅ Knowing how to add a new documented feature
✅ Maintaining clear, consistent documentation over time

---

## 🛠️ Adding a new feature

To document a new feature, follow this model:

1️⃣ Create a dedicated Markdown file under `docs/features/`
→ Example: `docs/features/my-new-feature.md`

2️⃣ Structure the page using the following format:

```markdown
# Feature Name

## 📖 Description

Briefly explain what this feature does.

---

## ⚙️ Implementation

Detail:
- The involved modules/files
- The technical decisions made
- Any relevant constraints

---

## 🧩 Customization

Explain how to adapt this feature (variables, options, extensions).

---

## 📚 Resources

[Useful links, external docs, references]
```

3️⃣ Add a link in the sidebar:

In your `vite.config.ts` config file:

```js
sidebar: {
  '/features/': [
    { text: 'Introduction', link: '/features/' },
    // ...
    { text: 'My New Feature', link: '/features/my-new-feature' },
  ]
}
```

---

## 🚀 Best practices

✅ Stay concise but precise
✅ Use tables for parameters/options
✅ Add code examples if needed
✅ Always reference concrete modules/files in the project
