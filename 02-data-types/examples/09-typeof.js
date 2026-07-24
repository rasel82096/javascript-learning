"use strict";

// ─── TYPEOF: checking what kind of value something is ─────────────────────
// `typeof value` returns a lowercase string describing the type.
// It is reliable for primitives, but has two well-known quirks:
//   1. typeof null === "object"  (historical bug)
//   2. typeof []   === "object"  (arrays are objects — use Array.isArray instead)

// ── typeof results for every built-in type ────────────────────────────────────
const values = [42, "text", true, undefined, null, Symbol("x"), 1n, {}, [], () => {}];
for (const value of values) {
  console.log(String(value).padEnd(12), "=>", typeof value);
}
// Expected output:
//   42           => number
//   text         => string
//   true         => boolean
//   undefined    => undefined
//   null         => object    ← BUG: null is not an object
//   Symbol(x)    => symbol
//   1            => bigint
//   [object Obj] => object
//   (empty)      => object    ← arrays are objects
//   () => {}     => function  ← special result for callable objects

// ── Better alternatives for specific checks ───────────────────────────────────
console.log(Array.isArray([]));                         // true — reliable array test
console.log(Number.isNaN(NaN));                         // true — reliable NaN test (no coercion)
console.log(Object.prototype.toString.call(new Date())); // "[object Date]" — for rare precise checks

// ── The typeof safety net for undeclared names ────────────────────────────────
// Normally, reading an undeclared variable throws a ReferenceError immediately.
// `typeof` is uniquely safe — it returns "undefined" instead of crashing.
console.log(typeof neverDeclared); // "undefined" — no crash at all
// Practical use: checking if an optional global exists before using it:
//   if (typeof fetch !== "undefined") { ... }
