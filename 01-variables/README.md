# 01 — Variables

Variables give names to values. This module teaches declaration (`var`, `let`, `const`), scope, naming, and hoisting—the rules behind many beginner bugs.

## Run the examples

From the repository root, run `node 01-variables/examples/01-var.js`. Each example is standalone; read it, predict the output, then run it.

## Learning path

1. `var`: function scope and legacy behaviour.
2. `let`: block scope and reassignment.
3. `const`: bindings that cannot be reassigned.
4. Choosing the right declaration.
5. Clear, valid names.
6. Hoisting and the temporal dead zone (TDZ).

## Rules worth memorising

- Prefer `const`; use `let` only when the variable will be reassigned.
- Avoid `var` in new code.
- `const` protects the *binding*, not an object's contents.
- Declare variables near their first use and in the narrowest useful scope.
- JavaScript is case-sensitive: `userName` and `username` differ.

## Revision prompts

- Why does `const items = []` still allow `items.push(...)`?
- What is the difference between an undeclared identifier and a TDZ error?
- Why is `var` in a loop surprising when callbacks are involved?

See [notes/variables.md](./notes/variables.md) for the detailed reference, then attempt `exercises/` without looking at solutions.
# 01 — Variables

Variables give names to values. This module teaches declaration (`var`, `let`, `const`), scope, naming, and hoisting—the rules behind many beginner bugs.

## Run the examples

From the repository root, run `node 01-variables/examples/01-var.js`. Each example is standalone; read it, predict the output, then run it.

## Learning path

1. `var`: function scope and legacy behaviour.
2. `let`: block scope and reassignment.
3. `const`: bindings that cannot be reassigned.
4. Choosing the right declaration.
5. Clear, valid names.
6. Hoisting and the temporal dead zone (TDZ).

## Rules worth memorising

- Prefer `const`; use `let` only when the variable will be reassigned.
- Avoid `var` in new code.
- `const` protects the *binding*, not an object's contents.
- Declare variables near their first use and in the narrowest useful scope.
- JavaScript is case-sensitive: `userName` and `username` differ.

## Revision prompts

- Why does `const items = []` still allow `items.push(...)`?
- What is the difference between an undeclared identifier and a TDZ error?
- Why is `var` in a loop surprising when callbacks are involved?

See [notes/variables.md](./notes/variables.md) for the detailed reference, then attempt `exercises/` without looking at solutions.
