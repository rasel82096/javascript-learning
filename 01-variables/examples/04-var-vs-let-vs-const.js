"use strict";

// ─── VAR vs LET vs CONST — side-by-side comparison ────────────────────────
// Quick decision rule for every variable you write:
//   1. Start with `const`
//   2. Switch to `let` only if you genuinely need to reassign the value
//   3. Never choose `var` in new code

// ── 1. Scope comparison ───────────────────────────────────────────────────────
if (true) {
  var legacy = "function/global scoped — leaks out of the block";
  let modern = "block scoped — stays inside {}";
  const fixed = "also block scoped — stays inside {}";
  console.log(modern, fixed);
}
console.log(legacy); // ✓ var leaks out of the if-block
// console.log(modern); // ❌ ReferenceError — let stays inside
// console.log(fixed);  // ❌ ReferenceError — const stays inside

// ── 2. Redeclaration comparison ───────────────────────────────────────────────
// `var` lets you declare the same name twice in the same scope — a source of bugs.
var label = "first";
var label = "second"; // allowed, silently replaces the first — easy to miss
console.log(label); // "second"

let count = 1;
// let count = 2; // ❌ SyntaxError: cannot redeclare `let` in the same scope
count = 2; // ✓ reassignment (not redeclaration) is absolutely fine
console.log(count); // 2

// ── 3. Reassignment comparison ────────────────────────────────────────────────
const id = 42;
// id = 43; // ❌ TypeError: Assignment to constant variable.

// ── 4. Hoisting summary ───────────────────────────────────────────────────────
// var   → hoisted AND initialized to `undefined` (can silently hide bugs)
// let   → hoisted but in the Temporal Dead Zone (TDZ) → ReferenceError if read early
// const → same as let (TDZ applies)
// Rule: always declare before you use — never rely on hoisting for correctness.
