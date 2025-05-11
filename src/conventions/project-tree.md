# 📁 Naming Conventions — `project-tree`

This document defines the **naming conventions** used to assign **semantic meaning** to files and folders during `project-tree` analysis.

These conventions support:
- Static code analysis
- Code navigation and documentation
- Consistent onboarding and architecture

---

## 📚 Table of Contents

- [� Naming Conventions — `project-tree`](#-naming-conventions--project-tree)
  - [📚 Table of Contents](#-table-of-contents)
  - [📄 File Naming Conventions](#-file-naming-conventions)
  - [📁 Folder Naming Conventions](#-folder-naming-conventions)
  - [🔁 Variants and Aliases](#-variants-and-aliases)
  - [❗ Special Cases and Rules](#-special-cases-and-rules)
    - [✅ Flat file naming](#-flat-file-naming)
    - [⛔ Ambiguity fallback](#-ambiguity-fallback)
  - [🧪 Supported Additional Files](#-supported-additional-files)
  - [📌 Example Project Tree](#-example-project-tree)
  - [✅ Conclusion](#-conclusion)

---

## 📄 File Naming Conventions

| File Name / Suffix         | Semantic Meaning                   | Role Type                 |
|----------------------------|------------------------------------|---------------------------|
| `mod.ts`                   | Module entry point                 | `Module`                  |
| `main.ts`                  | Primary executable script          | `ExecutableEntryPoint`    |
| `index.ts`                 | Node/React-style module entry      | `Module`                  |
| `types.ts`                 | Type and interface definitions     | `TypeDefinition`          |
| `constants.ts`             | Global constants                   | `ConstantDefinition`      |
| `config.ts`                | Module or app configuration        | `ModuleConfig`            |
| `deps.ts`                  | External dependencies (Deno)       | `ExternalDependencies`    |
| `dev_deps.ts`              | Dev-only dependencies (Deno)       | `DevDependencies`         |
| `*.test.ts`, `*.spec.ts`   | Unit or integration test           | `TestFile`                |
| `*.mock.ts`                | Mocked data / fake implementations | `MockFile`                |
| `controller.ts`            | API / CLI / UI controller logic    | `Controller`              |
| `service.ts`               | Business logic                     | `Service`                 |
| `router.ts`                | HTTP route definitions             | `Router`                  |
| `utils.ts`, `helpers.ts`   | Generic helper functions           | `ToolBox`                 |
| `setup.ts`                 | One-time init or seed script       | `SetupScript`             |
| `template.ts`              | Template content (non-executable)  | `TemplateFile`            |
| `.schema`                  | JSON schema definition             | `SchemaFile`              |
| `README.md`                | Project readme                     | `ProjectReadme`           |
| `LICENSE`                  | Legal notice                       | `LegalNotice`             |

---

## 📁 Folder Naming Conventions

| Folder Name     | Semantic Meaning                                  | Role Type                     |
|------------------|--------------------------------------------------|-------------------------------|
| `lib/`           | Technical utilities / abstractions               | `TechFolder`                  |
| `api/`           | Business logic (application layer)               | `BusinessFolder`              |
| `apps/`, `app/`  | Executable applications                          | `AppsFolder`                  |
| `cli/`           | Command-line interface implementation            | `CommandLineInterfaceFolder`  |
| `ext/`           | External modules or plugins                      | `ExternalModulesFolder`       |
| `tests/`         | Manual or automated tests                        | `TestFolder`                  |
| `mocks/`         | Shared mocks (test/dev)                          | `MockFolder`                  |
| `scenarios/`     | Usage or test scenarios                          | `TestScenarioFolder`          |
| `examples/`      | Usage examples / code snippets                   | `DocumentationExampleFolder`  |
| `config/`        | Project or module configuration                  | `ConfigurationFolder`         |
| `bin/`           | CLI executables or tools                         | `CommandsFolder`              |
| `processes/`     | Modular business/technical processes             | `ProcessesFolder`             |
| `domains/`       | DDD-style domain folders                         | `DomainFoldersCollection`     |
| `doc/`, `docs/`  | Markdown documentation and diagrams              | `DocumentationFolder`         |
| `src/`           | Source root if no higher-level folders are used  | `SourceRoot` or `--ignored--` |

> ℹ️ `src/` is only treated as `SourceRoot` when folders like `apps/`, `lib/`, `domains/` are missing.

---

## 🔁 Variants and Aliases

These are **recognized equivalences** across projects:

| Alias A        | Treated as       |
|----------------|------------------|
| `utils/`       | `helpers/`       |
| `domain/`      | `domains/`       |
| `app/`         | `apps/`          |
| `doc/`         | `docs/`          |
| `mocks/`       | `__mocks__/`     |

---

## ❗ Special Cases and Rules

### ✅ Flat file naming

Files like:

```txt
user.controller.ts
auth.router.ts
utils/math.ts
````

…are interpreted by their **suffix** (`.controller.ts`, `.router.ts`), not their prefix.

This allows scalable flat layouts without ambiguity.

---

### ⛔ Ambiguity fallback

If a file or folder **doesn’t match any convention**, it will be treated as `--untyped--` or ignored by semantic tools. Always prefer naming explicitly.

---

## 🧪 Supported Additional Files

| File or Folder | Semantic Meaning                    | Role Type                    |
| -------------- | ----------------------------------- | ---------------------------- |
| `*.mock.ts`    | Test or development mock file       | `MockFile`                   |
| `mocks/`       | Directory for reusable mocks        | `MockFolder`                 |
| `scenarios/`   | End-to-end or testing scenario data | `TestScenarioFolder`         |
| `examples/`    | Usage documentation by code         | `DocumentationExampleFolder` |

---

## 📌 Example Project Tree

```
project-root/
├── apps/
│   └── web/
│       ├── main.ts
│       ├── web.controller.ts
│       └── web.service.ts
├── lib/
│   ├── constants.ts
│   ├── config.ts
│   └── helpers.ts
├── domains/
│   └── user/
│       ├── types.ts
│       └── user.service.ts
├── tests/
│   └── user.test.ts
├── mocks/
│   └── user.mock.ts
├── examples/
│   └── user.example.ts
├── deps.ts
├── dev_deps.ts
├── README.md
└── LICENSE
```

---

## ✅ Conclusion

This convention helps to:

* Maintain consistent and predictable project trees 🧭
* Improve tooling and semantic code analysis 🤖
* Align developer expectations across repositories 🤝

Use it as a base, extend it carefully — and document your extensions.
