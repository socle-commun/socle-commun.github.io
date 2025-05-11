# 🖥️ Chapter 1 — Your First Terminal Commands

Welcome to your first real step into development! 🎉  
In this chapter, you’ll learn how to **use the terminal** — a powerful tool that every developer uses daily.

---

## 🤔 What is "the terminal"?

The terminal (or "console", or "command line") is a tool where you **type commands** instead of clicking with your mouse.

You’ll use it to:

- navigate through folders and files,
- launch programs (like TypeScript),
- install tools and libraries,
- and run your apps.

You don't need to memorize everything. The goal is to **get comfortable** using it.

📘 Learn more:  
- [What is a terminal? (freecodecamp.org)](https://www.freecodecamp.org/news/what-is-the-command-line-terminal-a-visual-intro/)
- [Command line crash course](https://learn.microsoft.com/en-us/windows/terminal/tutorials/basic-commands)

---

## 🧑‍💻 Setup

You can use:

- **Mac / Linux** → Terminal is already available.
- **Windows** → Use either:
  - Windows Terminal (recommended)
  - Git Bash (comes with Git)
  - Or install [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/) (advanced)

We'll stick to **basic, cross-platform commands** that work everywhere.

📘 Official docs:  
- [Windows Terminal on learn.microsoft.com](https://learn.microsoft.com/en-us/windows/terminal/)
- [WSL setup guide](https://learn.microsoft.com/en-us/windows/wsl/install)

---

## 📁 Basic navigation

### 🔹 See where you are

```bash
pwd
````

> “pwd” = **Print Working Directory**

---

### 🔹 List the contents of the current folder

```bash
ls
```

> On Windows you can also use `dir`, but `ls` is preferred (and used everywhere).

---

### 🔹 Move to another folder

```bash
cd foldername
```

To go up one level:

```bash
cd ..
```

To go to your home folder:

```bash
cd ~
```

---

### 🔹 Create a new folder

```bash
mkdir my-first-project
```

---

### 🔹 Go into that folder

```bash
cd my-first-project
```

---

### 🔹 Create a file

```bash
touch hello.txt
```

> On Windows: `echo > hello.txt`

---

### 🔹 Open the folder in VS Code (if installed)

```bash
code .
```

> You may need to install the `code` command in your terminal:
> Open VS Code → `Cmd+Shift+P` → Search: `Install 'code' command in PATH`

📘 VS Code docs:

* [Set up the command line interface](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

---

## 💪 Challenge

Try this mini-mission:

1. Open your terminal
2. Go to your home folder: `cd ~`
3. Create a folder named `starter-dev`
4. Inside that folder, create another folder called `chapter-1`
5. Enter that folder and create a file named `readme.md`
6. Open it in VS Code using `code .`

If you did it, congrats! You’ve just recreated a mini project structure using only your keyboard 🎉

---

## 🧼 Bonus: Clean up

To delete a file:

```bash
rm readme.md
```

To delete a folder and all its content:

```bash
rm -rf chapter-1
```

> ⚠️ Be careful with `rm -rf` — it deletes without asking!

📘 Optional: [Learn more bash commands](https://dev.to/bholmesdev/a-minimalist-guide-to-bash-commands-4acn)

---

## 🧠 Summary

| Command  | What it does                      |
| -------- | --------------------------------- |
| `pwd`    | Show current directory            |
| `ls`     | List files in a directory         |
| `cd`     | Change directory                  |
| `mkdir`  | Create a folder                   |
| `touch`  | Create a file                     |
| `rm`     | Delete a file                     |
| `rm -rf` | Delete a folder (recursive!)      |
| `code .` | Open folder in VS Code (if setup) |

---

## ✅ You’re ready for the next step

You now know how to **move around**, **create**, and **organize** files using the terminal.

👉 [Go to Chapter 2: Installing Node.js, Deno and TypeScript](./02-typescript-setup.md)
