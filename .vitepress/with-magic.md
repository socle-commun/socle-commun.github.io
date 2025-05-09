# 🪄 withMagic — Auto-generated Nav & Sidebar for VitePress

This decorator automatically builds the **navigation (nav)** and **sidebar** configuration for your VitePress site by scanning your Markdown folder structure.

✨ **Features:**
- Automatically generates the top-level nav bar (one item per root folder).
- Recursively generates the sidebar (fully nested structure, matching folders/files).
- Uses the first Markdown title (`# Heading`) as the display name; falls back to the file/folder name.
- Skips `index.md` at the root level (so it doesn't clutter the sidebar).
- Alphabetically sorts folders and files.
- Cleans up titles by removing Markdown formatting (bold, links, code blocks).

---

## 🔧 Installation

Simply copy the `withMagic.js` (or `.ts`) file into your VitePress project, for example:

```

project-root/
├─ .vitepress/
│  ├─ config.js
│  ├─ withMagic.js  ← here!
└─ src/
└─ your docs...

````

---

## 🚀 Usage

In your VitePress `config.js` (or `config.ts`):

```js
import { defineConfig } from 'vitepress';
import { withMagic } from './withMagic';

export default withMagic(
  defineConfig({
    srcDir: './src',
    title: 'My Awesome Docs',
    themeConfig: {
      logo: '/logo.svg',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/yourrepo' }
      ]
    }
  })
);
````

✅ **Tip:**
You can still manually add extra theme configuration — `withMagic` only fills in `nav` and `sidebar` automatically.

---

## 📁 Example Folder Structure

```
src/
├─ index.md
├─ guide/
│  ├─ index.md
│  ├─ getting-started.md
│  └─ advanced/
│     ├─ tips.md
│     └─ tricks.md
├─ api/
│  ├─ index.md
│  └─ reference.md
```

---

## 🛠 What Gets Generated

### 🔹 Nav Bar

* One entry per top-level folder (`guide`, `api`).
* Link points to the first Markdown file found inside.

Example:

```js
nav: [
  { text: 'Guide', link: '/guide/index' },
  { text: 'Api', link: '/api/index' }
]
```

---

### 🔹 Sidebar

* Fully recursive: folders and subfolders become collapsible groups.
* Markdown files become clickable links.
* Skips `index.md` only at the root (keeps subfolder `index.md`).

Example:

```js
sidebar: [
  {
    text: 'Guide',
    collapsed: true,
    items: [
      { text: 'Getting Started', link: '/guide/getting-started' },
      {
        text: 'Advanced',
        collapsed: true,
        items: [
          { text: 'Tips', link: '/guide/advanced/tips' },
          { text: 'Tricks', link: '/guide/advanced/tricks' }
        ]
      }
    ]
  },
  {
    text: 'Api',
    collapsed: true,
    items: [
      { text: 'Reference', link: '/api/reference' }
    ]
  }
]
```

---

## 🏷 Tags / Keywords

```
#vitepress #plugin #decorator #sidebar #navigation #markdown #automation
```

---

## 📌 Notes

* The function reads file content to extract the first Markdown `# Heading` as the title.
* If no heading is found, it falls back to the filename (without `.md`).
* It logs skipped files, detected titles, and generated links in the console for debugging.

---

## ❤️ Contributions

Feel free to fork, improve, or suggest enhancements!
Want custom filters, extra features, or a configurable ignore list? Open an issue or PR.
