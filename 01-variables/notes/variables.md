# Variables — revision notes

## What is a variable?

A variable is a named label attached to a value. Think of it like a sticky note with a name written on it, placed on top of a value. With `let` and `var`, you can move that label to a different value. With `const`, the label is stuck in place.

```js
let status = "draft";
status = "published"; // move the label to a new string value

const book = { title: "JS" };
book.title = "JavaScript"; // change the object — the label hasn't moved
```

`const` is not deep immutability. It prevents *reassignment* (moving the label), not *mutation* (changing what the label points to). `Object.freeze` prevents direct property changes, but only one level deep. For truly immutable updates: `const nextBook = { ...book, title: "New" }`.

---

## Declaration comparison

| Declaration | Scope            | Reassign? | Redeclare same scope? | Before declaration    |
|-------------|------------------|-----------|-----------------------|-----------------------|
| `var`       | function/global  | yes       | yes                   | `undefined` (hoisted) |
| `let`       | block            | yes       | no                    | TDZ → `ReferenceError`|
| `const`     | block            | no        | no                    | TDZ → `ReferenceError`|

**Rule:** `const` by default → `let` if you must reassign → never `var` in new code.

---

## Scope

Scope is the region of code where a name is visible. A *block* is any code inside `{}`, such as the body of an `if`, `for`, or a standalone block.

- `let` and `const` are **block-scoped** — they stay inside the `{}` where they were declared.
- `var` is **function-scoped** — it ignores ordinary blocks and leaks out of them.

Accidentally creating global variables is a common bug. In strict mode (`"use strict"`), assigning to an undeclared name throws a `ReferenceError`. ES modules are strict by default.

---

## Hoisting and the Temporal Dead Zone (TDZ)

JavaScript processes declarations before running any code. This is called hoisting.

- **`var`** is hoisted and initialized to `undefined`. Reading it before its assignment gives `undefined` — no error, just a silent surprise that can hide bugs.
- **`let` and `const`** are hoisted too, but they are NOT initialized. Accessing them before their declaration line throws a `ReferenceError`. This is called the **Temporal Dead Zone (TDZ)** — the gap between the start of the scope and the declaration.
- **Function declarations** are fully hoisted (body included), so you can call them before their written position.
- **Function expressions** follow the rules of their variable keyword — they are not safely callable before assignment.

The practical rule is simple: **declare before you use.** Never rely on hoisting.

---

## Naming conventions

| Pattern         | Used for                                  | Example                        |
|-----------------|-------------------------------------------|--------------------------------|
| `camelCase`     | variables, functions                      | `totalPrice`, `isLoggedIn`     |
| `PascalCase`    | classes, constructor functions            | `UserAccount`                  |
| `UPPER_SNAKE`   | module-level constants (by convention)    | `DEFAULT_TIMEOUT_MS`           |
| `_leading`      | "private" / internal (by convention)      | `_internalCount`               |

Boolean names should read like a question: `isReady`, `hasAccess`, `canEdit`. Collections use clear plurals: `users`, `topics`. Adding a unit to a name prevents confusion: `timeoutMs`, `distanceKm`.

Names cannot start with a digit, cannot contain hyphens, and cannot be reserved keywords. JavaScript is case-sensitive (`name ≠ Name`).

---

## Common traps

- `const array = []` permits `array.push(...)` — it only forbids `array = []`.
- `typeof undeclaredName` returns `"undefined"` safely; directly evaluating `undeclaredName` throws.
- `let value;` is an initialized binding whose value is `undefined`. The TDZ is only before the declaration line.
- `var` in a loop creates **one shared** binding across all iterations — functions closing over it all see the final value. `let` creates a **fresh** binding per iteration.

---

## Checklist before committing

- [ ] Used `const` wherever the value doesn't change
- [ ] Used meaningful names that explain intent, not just type
- [ ] Kept scope as small as possible
- [ ] Declared variables before using them
- [ ] No implicit globals (no assignment to undeclared names)
