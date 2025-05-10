# 📘 Documentation

This page describes the **documentation system** of the REST API.

It explains:  
✅ How the OpenAPI schema is automatically generated  
✅ Where to find and browse the documentation (`/doc` and `/ui`)  
✅ How to customize Swagger UI and enrich the general documentation

This is where you’ll learn how to expose your routes and properly document your endpoints.

---

### OpenAPI

The library [`@hono/zod-openapi`](https://github.com/honojs/zod-openapi) enables:

- Automatic generation of an OpenAPI schema from the routes
- Exposing this schema on the `/doc` endpoint

---

### Swagger UI

The library [`@hono/swagger-ui`](https://github.com/honojs/swagger-ui) provides an interactive interface:

- Available at `/ui`
- Customized dark theme using `swagger-themes`
