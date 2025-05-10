# ⚙️ CI/CD Workflows

This page documents the **automation workflows** used in GitHub Actions for this project.

It describes:
✅ The available workflows (`ci.yml`, `deploy.yml`)
✅ The key steps executed (tests, linting, deployment)
✅ How to configure and extend these workflows to fit your needs

👉 Essential for understanding how your project automatically moves from **local code** to **production**.

---

## 📦 Available workflows

| File                           | Role                                                  |
| ------------------------------ | ----------------------------------------------------- |
| `.github/workflows/ci.yml`     | Runs tests, lint, and checks on every push            |
| `.github/workflows/deploy.yml` | Automatically deploys to Deno Deploy on every release |

---

## 🔨 `ci.yml`

This workflow is triggered:
✅ On every `pull_request` to the `main` branch

It automatically performs:

* **Installation** of dependencies
* **Linting** the project (`deno lint`)
* **Code formatting** (`deno fmt`)
* **Unit tests** (`deno test`)
* **Generation of a JUnit report** for CI/CD tools (if configured)

---

## 🚀 `deploy.yml`

This workflow takes over to **put the project online**.

✅ Triggered only on **GitHub releases** (`published`)
✅ Deploys the project to [Deno Deploy](https://deno.com/deploy)
✅ Uses `deno deployctl` to push the code

> **Tip**:
> Ensure that the `project` variable in `deploy.yml` exactly matches the name configured on Deno Deploy.

---

## ⚙️ How to customize these workflows

If you want to:
🔧 Add steps (e.g., vulnerability scanning) → edit the YAML files.
🔧 Modify triggers (e.g., for other branches) → change the `on:` blocks.
🔧 Integrate other services (e.g., Docker, Slack) → add the appropriate GitHub Actions.

> **Best practices**:
> ✅ Commit your changes in `.github/workflows/`
> ✅ Document any new automation added here
> ✅ Carefully check the secrets and permissions used

---

## 📚 Resources

* [GitHub Actions](https://docs.github.com/actions)
* [Deno Deploy](https://deno.com/deploy)
* [deno deployctl](https://deno.com/deploy/docs/deployctl)
