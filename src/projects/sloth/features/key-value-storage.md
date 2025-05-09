# 📦 KvSlot

`KvSlot` is a generic class for managing **typed, namespaced storage** in Deno KV, using **strict validation** via Zod.
It provides a clean abstraction to store, retrieve, list, delete, and manage values under a defined key prefix.

---

## ✨ Main Features

✅ Type-safe storage and retrieval with Zod schema validation
✅ Strict data checking on both **write** and **read**
✅ Delete by key or by prefix
✅ List all entries under a prefix
✅ Supports TTL (time-to-live) on entries
✅ Compatible with any injected Deno KV instance (great for testing)

---

## 📐 Class Signature

```ts
export class KvSlot<T> {
    constructor(
        private _name: string,                   // Namespace prefix
        private _schema: ZodObject<ZodRawShape>, // Zod schema for validation
        private _kv = kv                        // Deno KV instance (default: global)
    ) {}

    async get(key: string[]): Promise<T | null>;
    async set(key: string[], value: T): Promise<void>;
    async delete(key: string[]): Promise<void>;
    async list(prefix: string[]): Promise<T[]>;
    async clear(prefix: string[] = []): Promise<void>;
    async setWithTTL(key: string[], value: T, ttlMillis: number): Promise<void>;
}
```

---

## 🛠 Example Usage

```ts
import { KvSlot } from './slot.class.ts'
import { z } from 'npm:zod'

const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
})

const userSlot = new KvSlot('users', UserSchema)

// Add a user
await userSlot.set(['user1'], { name: 'Alice', age: 30 })

// Retrieve a user
const user = await userSlot.get(['user1'])
console.log(user) // { name: 'Alice', age: 30 }

// Delete a user
await userSlot.delete(['user1'])

// List users under a group prefix
const users = await userSlot.list(['group'])
console.log(users) // [ { name: ..., age: ... }, ... ]
```

---

## ⚠️ Strict Validation

* On **write** (`set`, `setWithTTL`), if validation fails → a **KvSlotValidationError** is thrown.
* On **read** (`get`, `list`), if validation fails → a **console warning** is shown, but the raw value is still returned.

This ensures you never accidentally store invalid data, while remaining tolerant when reading legacy or non-conforming entries.

---

## 🧪 Testing-Friendly Design

The class allows injection of any KV instance (default is the global `Deno.openKv()`), making it easy to inject **mock KV stores** for unit tests.

```ts
const mockKv = { /* ... */ }
const slot = new KvSlot('testSlot', TestSchema, mockKv)
```

---

## 📚 Method Summary

| Method       | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `get`        | Retrieves a typed value by key. Returns `null` if absent.      |
| `set`        | Stores a value after strict schema validation.                 |
| `setWithTTL` | Stores a value with an expiration time (TTL, in milliseconds). |
| `delete`     | Deletes a value by key.                                        |
| `list`       | Lists all valid, parsed values under a given prefix.           |
| `clear`      | Deletes all entries under a given prefix.                      |

---

## 📦 Advanced Example: TTL

```ts
await userSlot.setWithTTL(['session', 'user1'], { name: 'Bob', age: 40 }, 60000) // expires after 60 seconds
```
