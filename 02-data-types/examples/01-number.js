"use strict";

// ─── NUMBER: integers and decimals share one type ──────────────────────────
// JavaScript has a single numeric type for everything: integers, decimals,
// very large numbers, and special values like Infinity and NaN.
// Under the hood it uses IEEE 754 double-precision floating-point.

// ── Literal forms ─────────────────────────────────────────────────────────────
const integer    = 42;
const decimal    = 3.14;
const scientific = 6.02e23;   // 6.02 × 10²³ — the same as writing 602000000000000000000000
const readable   = 1_000_000; // underscores are visual separators only — value is still 1000000
console.log({ integer, decimal, scientific, readable });

// ── The floating-point surprise ───────────────────────────────────────────────
// Many decimal fractions cannot be stored exactly in binary — they get rounded.
// This is NOT a JavaScript bug; it affects every language using IEEE 754.
console.log(0.1 + 0.2); // 0.30000000000000004  ← not exactly 0.3!
// Tip: for money, store amounts in the smallest unit (e.g. cents as integers),
// or use a dedicated decimal library.

// ── Useful Number utilities ───────────────────────────────────────────────────
console.log(Number.isInteger(integer));  // true  — checks for whole number
console.log(Number.isFinite(decimal));   // true  — checks it's not Infinity or NaN
console.log(10 / 0);                     // Infinity — dividing by zero does NOT throw
console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
// Beyond MAX_SAFE_INTEGER, integer arithmetic becomes unreliable — use BigInt instead.

// ── NaN (Not a Number) ────────────────────────────────────────────────────────
// NaN is produced when a conversion or calculation fails to produce a valid number.
const notANumber = Number("not a number"); // "not a number" cannot be converted
console.log(notANumber);                   // NaN
console.log(Number.isNaN(notANumber));     // true  ← always use Number.isNaN, not isNaN()
// The global isNaN() coerces its argument first, causing false positives.
console.log(typeof NaN); // "number" — NaN is of type number (confusing, but true)
// NaN is the ONLY value in JavaScript that is not equal to itself:
console.log(NaN === NaN); // false  ← that's why Number.isNaN() exists
