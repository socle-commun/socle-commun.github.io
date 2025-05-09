## 📦 KV Store Domain

This domain exposes REST routes to interact with the **Deno KV store**.
All operations are based on the path `/kv/{keypath}` where `keypath` is a hierarchical key, separated by dots (`.`).

---

### 🔑 Key Concepts

* **Keypath**
  Example: `users.john.settings` → becomes `['users', 'john', 'settings']` on the Deno side.

* **Value**
  Any JSON-serializable object.

* **TTL (Time To Live)**
  Optional time (in milliseconds) after which the key will automatically expire.
  Example: `60000` for 1 minute.

---

### 🚀 Endpoints

---

### `GET /kv/{keypath}`

Retrieve the value stored at a key.

✅ Parameters:

* `keypath` (path param) — full path (e.g., `users.john.settings`)

✅ Query:

* `list` (optional, boolean) — if `true`, lists all keys under the given prefix.

✅ Responses:

* `200 OK` — returns the value or the list.
* `404 Not Found` — if the key does not exist.
* Standard errors: `401`, `403`, `429`, `500`, `503`.

---

### `PUT /kv/{keypath}`

Store or update a value.

✅ Parameters:

* `keypath` (path param) — full path.

✅ Body:

```json
{
  "value": { /* any JSON value */ },
  "ttl": 60000 // optional, in milliseconds
}
```

✅ Responses:

* `200 OK` — key stored.
* `400 Bad Request` — bad request (e.g., invalid value).
* Standard errors.

ℹ️ **TTL Note**:
If `ttl` is provided, the key will automatically expire after that delay.
Time is in **milliseconds** — make sure to multiply by 1000 if starting from seconds.

---

### `DELETE /kv/{keypath}`

Delete a specific key.

✅ Parameters:

* `keypath` (path param)

✅ Responses:

* `200 OK` — key deleted (or marked as deleted).
* Standard errors.

---

### ⚠️ Standard Error Codes

All routes can also return:

* `401 Unauthorized`
* `403 Forbidden`
* `429 Too Many Requests`
* `500 Internal Server Error`
* `503 Service Unavailable`

---

### 🏗️ Best Practices for Deno KV

Recommended practices to get the most out of **Deno.openKv()**:

✅ **Always use a single instance** of `Deno.openKv()` per request lifecycle.
→ Open it at the start of the route (not globally) and close it if needed (in some cases, it closes automatically at the end).

✅ **Structured keys**: use `keypath.split('.')` to transform `users.john.settings` into the array `[ 'users', 'john', 'settings' ]`.

✅ **Server-side TTL handling**: apply `ttl` in milliseconds and ensure it matches business needs (avoid overly long or infinite TTLs for temporary caches).

✅ **Result checks**: always check `res.ok` or `res.value` after each operation (`get`, `set`, `delete`) — never assume success without verifying.

✅ **Atomic operations**:
For complex updates (e.g., compare-and-swap), use `atomic()` instead of separate `get` + `set` calls.

✅ **Performance**: avoid opening too many simultaneous KV connections, especially under heavy load. Reuse connections and test performance.

✅ **Serialization**: always store simple, well-typed values (avoid complex, non-serializable objects).

---

### 📘 Complete Example (with TTL)

```bash
# Save a record with a 1-hour TTL
curl -X PUT http://localhost:8000/kv/users.john.session \
    -H "Content-Type: application/json" \
    -d '{"value": {"token": "abc123"}, "ttl": 3600000}'
```
