### 📄 `docs/utils/deep-merge.md`

````markdown
# 🛠️ `deepMerge`

**Module:** `src/utils/deep-merge.ts`  
**Type:** Pure TypeScript utility  
**Purpose:** Recursively merge two objects, including nested objects and arrays.

---

## ✨ Function

```ts
export function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T
````

This function performs a **deep merge** of two objects, combining:

✅ **Simple properties** (overwrites if the key exists)
✅ **Nested objects** (recursive merging)
✅ **Arrays** (concatenation)
✅ **Date objects** (copies instances)

---

## 📦 Import

```ts
import { deepMerge } from "@/utils/deep-merge.ts";
```

---

## 🏗️ Basic Example

```ts
const a = { foo: 1, bar: [1, 2], nested: { x: 10 } };
const b = { bar: [3, 4], nested: { y: 20 }, baz: true };

const result = deepMerge(a, b);
// Result:
{
    foo: 1,
    bar: [1, 2, 3, 4],
    nested: { x: 10, y: 20 },
    baz: true
}
```

---

## ⚙️ Detailed Behaviors

| Case                       | Expected Behavior                                                 |
| -------------------------- | ----------------------------------------------------------------- |
| Simple key overwrite       | The `source` value overwrites the `target` value.                 |
| Nested objects             | Merged recursively.                                               |
| Arrays                     | Concatenated (elements from `source` are appended to `target`).   |
| `null` or `undefined` keys | `source` overwrites `target` even if the value is null/undefined. |
| Date objects               | Copied as new instances (no shared reference).                    |
| Unique keys                | Simply added from `source` to `target`.                           |

---

## 🔍 Covered in Unit Tests

* [x] Flat object merging
* [x] Nested object merging
* [x] Array concatenation
* [x] Primitive overwrites (`number`, `string`, etc.)
* [x] Handling of `null` and `undefined`
* [x] Proper `Date` copying
* [x] Non-overlapping keys

---

## 🚨 Known Limitations

* **Not supported:**
  ❌ Symbols
  ❌ Map / Set (treated as plain objects)
  ❌ Functions (copied as-is, not executed)
  ❌ Circular references (no loop detection)

* **Note:**
  Array merging concatenates without deduplication:

  ```ts
  deepMerge({ arr: [1, 2] }, { arr: [2, 3] })
  // => { arr: [1, 2, 2, 3] }
  ```

---

## 🧪 Run Tests Locally

Run all Deno tests:

```bash
deno test src/utils/deep-merge.test.ts
```

---

## 📁 Related Files

| File                           | Purpose                          |
| ------------------------------ | -------------------------------- |
| `src/utils/deep-merge.ts`      | Main implementation              |
| `src/utils/deep-merge.test.ts` | Unit tests for the module        |
| `docs/utils/deep-merge.md`     | This detailed documentation file |

---

## 📜 License

Distributed under the MIT License.
See the `LICENSE` file for more details.

---

🐢 **Sloth Utilities** — simple, modular, and robust utilities.
