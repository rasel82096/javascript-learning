# 02 — Data Types

JavaScript values have primitive types and object types. Knowing their behavior prevents coercion, equality, and mutation bugs.

Run any lesson with `node 02-data-types/examples/01-number.js` from the repository root. Predict first; the comments explain important output.

## Sequence

Numbers → strings → booleans → absence (`undefined` / `null`) → unique symbols → huge integers → objects → `typeof` → conversion.

## Essential distinction

Primitives (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`) are immutable values. Objects—including arrays, functions, dates, maps, and regexes—are mutable reference values.

## Revision prompts

- Why is `typeof null` `"object"`?
- Why is `NaN !== NaN` and how do you test it?
- When is `Number(...)` safer than `parseInt(...)`?
- Why must `1n + 1` throw?

The detailed explanations and decision guide are in [notes/data-types.md](./notes/data-types.md). Exercises are intentionally runnable so you can inspect your answer.
# 02 — Data Types

JavaScript values have primitive types and object types. Knowing their behavior prevents coercion, equality, and mutation bugs.

Run any lesson with `node 02-data-types/examples/01-number.js` from the repository root. Predict first; the comments explain important output.

## Sequence

Numbers → strings → booleans → absence (`undefined` / `null`) → unique symbols → huge integers → objects → `typeof` → conversion.

## Essential distinction

Primitives (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`) are immutable values. Objects—including arrays, functions, dates, maps, and regexes—are mutable reference values.

## Revision prompts

- Why is `typeof null` `"object"`?
- Why is `NaN !== NaN` and how do you test it?
- When is `Number(...)` safer than `parseInt(...)`?
- Why must `1n + 1` throw?

The detailed explanations and decision guide are in [notes/data-types.md](./notes/data-types.md). Exercises are intentionally runnable so you can inspect your answer.
