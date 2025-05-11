# 🔧 Chapter 6 — Introduction to Git and GitHub

Git is the tool that saves your work.  
GitHub is the platform where you can share it with the world.

You’ll learn to:

- create a Git repository locally,
- publish it to GitHub,
- track your code history with clear commits.

Let’s go!

---

## 🤔 What is Git?

Git is a version control system. It lets you:

- track every change in your code,
- go back if you break something,
- and collaborate with others safely.

📘 Learn more: [https://git-scm.com/doc](https://git-scm.com/doc)

---

## ☁️ What is GitHub?

GitHub is a website where you can:

- store your Git repositories,
- share your code,
- collaborate using pull requests, issues, and discussions.

📘 Official site: [https://github.com](https://github.com)

---

## 1️⃣ Install Git

- Mac: `brew install git`
- Linux: `sudo apt install git`
- Windows: [Download Git](https://git-scm.com/download/win)

Check installation:

```bash
git --version
````

---

## 2️⃣ Configure Git

You only do this once:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Optional: use VS Code as default editor:

```bash
git config --global core.editor "code --wait"
```

---

## 3️⃣ Initialize a project with Git

Inside your TypeScript project folder:

```bash
git init
```

Create a first commit:

```bash
git add .
git commit -m "🎉 initial commit"
```

> 🧠 This uses your emoji-commit convention!

---

## 4️⃣ Create a repository on GitHub

1. Go to [https://github.com](https://github.com)
2. Click **New**
3. Choose a name (e.g. `my-app`)
4. Leave it empty (no README, etc.)
5. Copy the instructions shown

Then in your terminal:

```bash
git remote add origin https://github.com/yourname/my-app.git
git branch -M main
git push -u origin main
```

Now your code is online 🚀

---

## 5️⃣ Make changes and commit

Edit your code, then run:

```bash
git add .
git commit -m "✨ add math utility module"
git push
```

---

## ✅ Summary

| Command               | Purpose                 |
| --------------------- | ----------------------- |
| `git init`            | Create a local Git repo |
| `git add .`           | Stage all changes       |
| `git commit -m "msg"` | Save a snapshot         |
| `git push`            | Upload to GitHub        |
| `git status`          | Check what's going on   |
| `git log`             | Show commit history     |

---

## 📚 Want to go further?

* [GitHub Docs (first time)](https://docs.github.com/en/get-started/quickstart)
* [Git Handbook](https://guides.github.com/introduction/git-handbook/)
* [Oh My Git! (visual game)](https://ohmygit.org/)

---

## ✅ What’s next?

Now that your code is versioned and online, we’ll see how to **write automated tests** to check it works — even when you’re not looking!

👉 [Go to Chapter 7: Writing Your First Tests](./07-first-tests.md)
