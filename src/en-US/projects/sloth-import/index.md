# $Import 🦥 – Powerful Dynamic Import for Deno

![Deno](https://img.shields.io/badge/Deno-🦕-000?logo=deno)

![Module Type](https://img.shields.io/badge/Type-Library-informational)

> ⚡ A flexible and high-performance solution for dynamically loading your Deno modules — whether it's a single file, multiple files, or entire directories.

## ✨ Key Features

- 📄 Dynamic import of a single file
- 📁 Import all `.ts`, `.js`, etc. files in a directory
- 🔍 Auto-detect `main.ts` (or a custom entry) in subdirectories
- 🔁 Multiple path support
- 🚀 Parallel loading for optimal performance
- 🧩 Import callback
- 📜 Allowed extension filtering
- 🔍 Optional logging
- 🧯 Fallback handling on error

## 📦 Installation

Simply add:

```ts
import { $Import } from "https://raw.githubusercontent.com/socle-commun/lib-core-deno/main/libs/import/mod.ts";
```

## 🧪 Usage Examples

Import a single file:

```ts
const meta = import.meta.url;
const mod = await $Import(meta, "./services/foo.ts");
```

Import multiple files and/or directories:

```ts
const all = await $Import(meta, ["./services/foo.ts", "./modules/"]);
```

Use a callback after import:

```ts
await $Import(meta, "./config.ts", {
  callback: async (mod) => {
    console.log("Module loaded:", mod);
  },
});
```

## 🔧 API

```ts
$Import<T>(
  metaUrl: string,
  path: string | string[],
  options?: SlothImportOptions<T>
): Promise<T>;
```

### Available Options (`options`)

```ts
interface SlothImportOptions<T> {
  callback?: (mod: T) => Promise<void>;
  entryFileName?: string; // default: "main.ts"
  allow?: SlothImportAllowedExtension[]; // default: ["ts"]
}
```

## ⚙️ Global Configuration

Customize the global behavior of `$Import`:

```ts
$Import.logging = true; // or a custom function
$Import.fallback = (path, err) => ({ error: true });

$Import.config = {
  logging: false,
  entryFileName: "entry.ts",
  allow: ["ts"],
};
```

## 🗂 Auto-import `main.ts` from directories

Example folder structure:

```text
features/
├─ feature-a/
│  └─ main.ts
├─ feature-b/
│  └─ main.ts
```

Auto-import:

```ts
await $Import(import.meta.url, "./features/");
```

Each `main.ts` file will be automatically detected and loaded.

## 🔤 Supported Extensions

By default:

```text
["ts", "js"]
```

Customizable extensions:

```text
["ts", "js", "jsx", "tsx", "mts", "cts"]
```

## 🧱 Project Structure

```text
libs/import/
├─ mod.ts                  # Main entry point
├─ config.ts               # Runtime configuration
├─ types.ts                # TypeScript types
├─ constants.ts            # Constants
├─ processes/              # Internal processes
│  ├─ import-file/
│  ├─ import-directory/
│  ├─ resolve-path/
│  ├─ handle-error/
│  └─ log/
└─ _fixtures/              # Test modules
```

## ✅ Tests

Run unit tests:

```bash
deno task test
```

Each process is independently covered by tests.

## 🐢 About Sloth

`$Import` is part of the **Sloth 🦥** utility suite — minimalist, lazy, yet powerful tools for Deno developers.

## 📜 License

Released under the MIT license. Copyright © 2025 [Socle Commun](https://github.com/socle-commun) — Built with care for an accessible world.
