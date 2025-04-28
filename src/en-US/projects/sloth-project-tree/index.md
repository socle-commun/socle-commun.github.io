# 🦥 Sloth Semantics

**Sloth Semantics** is a TypeScript/Deno library that analyzes the structure of a software project to extract a strong semantic layer from its directory structure.

## 📚 Objective

Provide a **semantic view** of a project based on:

- its file structure (`apps/`, `lib/`, `ext/`, etc.)
- its metadata (`deno.json`, `package.json`, `README.md`)
- its dependencies (`import`, `npm:`, `https:`...)
- its tests (`tests/`, `__tests__`, `.test.ts` files)
- its exports (`exports` in `package.json` or `deno.json`)
- its unclassified files (orphans)

All exposed as a unified, typed, and navigable `Project` object.

## ✅ Current Features

| Component                      | Status | Description                                         |
| ------------------------------ | ------ | --------------------------------------------------- |
| `Project` loader               | ✅     | Full loading via `$Project.load()`                  |
| Documentation (`README.md`)    | ✅     | Accessible via `.documentation.readme`              |
| Configurations                 | ✅     | Detects `.gitignore`, `deno.json`, `.vscode/`, etc. |
| Scripts (`deno`, `npm`)        | ✅     | Collects declared scripts                           |
| Dependencies                   | ✅     | Collects external imports (npm, url...)             |
| Exports (`exports`)            | ✅     | From `deno.json` or `package.json`                  |
| Layers (apps, apis, libs, ext) | ✅     | Auto-detection inside or outside `src/`             |
| Tests                          | ✅     | Collects test files                                 |
| Orphan Files                   | ✅     | Lists unintegrated files in a layer                 |
| Git                            | ✅     | Branch, remote, staging state (if Git repo)         |

## 🚀 Usage

```ts
import { $Project } from "mod.ts";

const project = await $Project.load("./my-project");

// Access the structure
console.log("Project name:", project.name);
console.log("Environments:", project.runtimes);
console.log("Exports:", project.exports);
```

---

## 🔍 Running Tests

```bash
deno test --allow-all
```

The tests are organized as follows:

- `xxx.test.ts`: Unit tests, close to the file being tested
- `mod-base.test.ts`: General functional test for `$Project.load`
- `tests/e2e/`: Coming soon for integration tests on real projects

## 🧠 Project Semantics

Welcome to the documentation for the **semantic model** used by `project-tree`.

This module enriches the directory structure of a software project with **roles** and **semantic tags**, making it easier to:

- Analyze the code,
- Auto-generate documentation,
- Provide intelligent navigation,
- Assist with AI-driven tools.

## 📂 Table of Contents

| Section                                                                 | Description                                        |
| ----------------------------------------------------------------------- | -------------------------------------------------- |
| [📊 Diagrams](/projects/sloth-project-tree/diagrams)                    | Class diagrams of the project                      |
| [📖 Glossary](/projects/sloth-project-tree/glossary)                    | Definitions of key concepts used in the semantics  |
| [🧠 Semantic Model](/projects/sloth-project-tree/semantic-model)        | Structure of the `SemanticNode` model, roles, tags |
| [🎭 Semantic Roles](/projects/sloth-project-tree/node-roles)            | List and description of recognized business roles  |
| [🧩 Inference Rules](/projects/sloth-project-tree/role-detection-rules) | Heuristics used to infer roles automatically       |
| [🏷️ Semantic Tags](/projects/sloth-project-tree/semantic-tags)          | Secondary attributes to enrich file understanding  |
| [🔧 Extensibility](/projects/sloth-project-tree/extensibility)          | Add your own roles, rules, or tags                 |
| [📚 Use Cases](/projects/sloth-project-tree/use-cases)                  | What semantic analysis enables in a real project   |
| [⚠️ Limitations](/projects/sloth-project-tree/limitations)              | What the system can’t (yet) do                     |

## ✨ Usage Examples

- Automatically group `utils.ts` files into a reusable functions array.
- Display entry points (`main.ts`, `index.ts`) in a visual table of contents.
- Distinguish business logic (`Service`, `Controller`) from infrastructure (`ToolBox`, `Config`).

::: info
This system is designed to be **simple**, **extensible**, and **interoperable** with tools like VitePress, Comet, or AI assistants.
:::

## 📜 License

Released under the MIT license. Copyright © 2025 [Socle Commun](https://github.com/socle-commun) — Built with care for an accessible world.
