# 🧩 Sloth Core

**sloth-core** fournit un singleton centralisé pour toutes les librairies Sloth.

## 🔌 Exemple

```ts
import { Sloth } from "sloth-core";
import { ConsoleResolver } from "sloth-resolver";

Sloth.set("resolver", new ConsoleResolver());

const resolver = Sloth.get<$Resolver>("resolver");
await resolver.prompt({ message: "Quel mode ?" });
```

## ✅ Services typiques

- `resolver` — gestion des entrées/sorties utilisateur
- `logger` — traceur global
- `config` — configuration runtime

## 🧪 Test

```ts
Sloth.set("resolver", fakeResolver);
Sloth.clear();
```

## 📜 Licence

Publié sous la [Licence MIT](LICENSE). Copyright © 2025 [Socle Commun](https://github.com/socle-commun) — Conçu avec soin pour un monde accessible.
