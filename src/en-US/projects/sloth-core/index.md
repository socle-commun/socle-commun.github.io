# 🧩 Sloth Core

**sloth-core** provides a centralized singleton for all Sloth libraries.

## 🔌 Example

```ts
import { Sloth } from "sloth-core";
import { ConsoleResolver } from "sloth-resolver";

Sloth.set("resolver", new ConsoleResolver());

const resolver = Sloth.get<$Resolver>("resolver");
await resolver.prompt({ message: "Which mode?" });
```

## ✅ Common Services

- `resolver` — handles user input/output
- `logger` — global logging utility
- `config` — runtime configuration management

## 🧪 Testing

```ts
Sloth.set("resolver", fakeResolver);
Sloth.clear();
```

## 📜 License

Released under the MIT license. Copyright © 2025 [Socle Commun](https://github.com/socle-commun) — Built with care for an accessible world.
