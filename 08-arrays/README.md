# 08 — Arrays

Arrays store ordered collections of values. This module covers the methods and copying rules you will use most often, with special attention to mutation and reference behavior.

## Run the examples

From the repository root, run an example with:

```bash
node 08-arrays/examples/01-arrays-and-references.js
```

Each file is standalone. Read the code, predict its output, then run it. Work through the files in numbered order before attempting the exercises.

## Learning path

1. Array creation, indices, references, and shallow vs deep copies.
2. Copy strategies and their limitations.
3. Transformation pipelines with `map`, `filter`, and `reduce`.
4. Searching, slicing, merging, and pagination.
5. Validation and restructuring with `some`, `every`, `flat`, and `flatMap`.
6. Deliberate mutation with `push`, `splice`, and `sort`.
7. Array destructuring.
8. Creation and iteration patterns with `Array.from`, spread, and `fill`.

## Rules worth memorising

- Arrays are objects: assignment copies a reference, not the array contents.
- Spread (`[...items]`) and `slice()` make shallow copies only.
- Prefer non-mutating updates when preserving the previous array matters.
- Always pass a numeric comparator to `sort`: `(a, b) => a - b`.
- Always give `reduce` an initial value, especially when an array might be empty.
- Use `Array.isArray(value)`, not `typeof value === "object"`.

## Revision prompts

- Why does changing `copy[0].name` sometimes change the original array?
- When should a fallback use `??` rather than `||` while reducing data?
- What is the difference between `find`, `filter`, `some`, and `includes`?
- Why can `new Array(3).fill({})` be a bug?

Read [notes/arrays.md](./notes/arrays.md) for the detailed reference, then solve the exercises without looking at the implementation first.
