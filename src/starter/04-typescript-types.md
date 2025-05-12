# 🧠 Chapter 4 — Understanding TypeScript Types

You're now writing and running TypeScript — great job!  
It's time to understand what makes **TypeScript** so powerful: its **type system**.

---

## 🤔 What are types?

A **type** tells the computer what kind of value something is:

- Is it a number? a string? an object?
- Can it ever be `undefined`?
- Should it behave a certain way?

TypeScript helps you **catch errors before your code runs**, just by checking the types.

📘 Learn more:  
- [TypeScript Handbook – Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

## 🔤 Basic types

| Type     | Example                    |
|----------|----------------------------|
| `string` | `"hello"`                  |
| `number` | `42`, `3.14`               |
| `boolean`| `true`, `false`            |
| `any`    | Can be anything (⚠️ avoid) |
| `unknown`| Safe "I don't know yet"    |
| `null` / `undefined` | Empty values   |

Example:

```ts
let age: number = 30;
let name: string = "Alice";
let isStudent: boolean = true;
````

---

## 🧮 Arrays and objects

### Arrays

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];
```

📘 [Array types in TS Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

---

### Objects (Interfaces)

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user: User = {
  name: "Bob",
  age: 42,
  isAdmin: false,
};
```

📘 [Interfaces vs types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

## 🧰 Functions with types

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet("World"); // ✅
greet(42);      // ❌ Type error
```

📘 [Functions in TypeScript](https://www.typescriptlang.org/docs/handbook/2/functions.html)

---

## 🧩 Special types: `unknown` and `Partial`

### 🔸 `unknown`: when you don’t know the type *yet*

```ts
let value: unknown;

value = 42;
value = "hello";
value = { name: "Bob" };

// ❌ You can't use it directly
// console.log(value.toUpperCase()); // Error

// ✅ You must check first
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Use `unknown` instead of `any` when you want **safety + flexibility**.

📘 [Unknown vs any](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)

---

### 🔸 `Partial<T>`: make all properties optional

Sometimes you only want to update part of an object.
Example:

```ts
interface User {
  name: string;
  age: number;
}

function updateUser(user: User, changes: Partial<User>) {
  return { ...user, ...changes };
}

const u = updateUser({ name: "Alice", age: 30 }, { age: 31 });
```

Without `Partial<User>`, you’d be forced to provide both `name` and `age`.

📘 [Partial in utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)

---

## 🧪 Try this

```ts
function add(a: number, b: number): number {
  return a + b;
}

const result = add(2, 3);
console.log(result);

add("hello", 4); // ❌ TypeScript will warn you here
```

Try running it with `tsx` or `deno`.

---

## 🧠 Summary

| Concept      | Example                          |
| ------------ | -------------------------------- |
| `: type`     | `let x: number = 10`             |
| `[]` arrays  | `let names: string[]`            |
| `interface`  | Define an object’s structure     |
| `unknown`    | Value must be checked before use |
| `Partial<T>` | Makes all object props optional  |

---

## 📚 Want to go deeper?

* [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
* [Functions and unknown](https://www.typescriptlang.org/docs/handbook/2/functions.html)
* [Utility types like Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html)
* [Playground to test types](https://www.typescriptlang.org/play)

---

## ✅ What’s next?

Now that you know how to use types, let’s organize code in a clean way: with **folders, files, and modules**.

👉 [Go to Chapter 5: Structuring a TypeScript Project](./05-project-structure.md)
