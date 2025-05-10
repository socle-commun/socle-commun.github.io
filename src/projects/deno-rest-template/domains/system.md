# 🛠️ `system` Domain

The `system` domain groups the **basic** routes exposed by the API to provide technical and diagnostic information about the server.

---

## 📚 General Description

| Element            | Details                                                                 |
| ------------------ | ---------------------------------------------------------------------- |
| Domain Name        | 🛠️ System                                                             |
| Entry Point        | `/`                                                                   |
| Main Purpose       | Provide diagnostic routes to check if the server is functioning        |
| Type              | Technical domain (non-business)                                        |
| Authentication     | Required (Bearer token)                                               |

---

## 🌐 Available Routes

| Method  | Path         | Description                                                              |
| ------- | ------------ | ------------------------------------------------------------------------ |
| GET     | `/`          | Checks if the API is online and responds with a basic message            |
| GET     | `/version`   | Returns the application version (from `deno.jsonc`) and the commit SHA   |
| GET     | `/status`    | Provides uptime, memory usage, and a timestamp                           |
| GET     | `/health`    | Reports overall health status (`ok` or `degraded`) with uptime and timestamp |

---

## 🛡️ Security

All routes are protected:
- Authentication: **Bearer token**
- Security headers: `nosniff`, `DENY`, `1; mode=block`, `Strict-Transport-Security`, etc.
- Rate limiting: **100 requests / minute / IP**

---

## 🔧 Example Response

### ✅ `/health`

```json
{
  "status": "ok",
  "uptime": 3600,
  "timestamp": "2025-05-08T12:34:56Z"
}
```

---

## 📌 Notes

* This domain is automatically documented in the OpenAPI (`/doc`) and visible via Swagger UI (`/ui`).
* Routes are dynamically loaded from `src/app/rest/domains/system/` using Domain Driven Routing.
