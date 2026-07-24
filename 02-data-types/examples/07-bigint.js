"use strict";

// ─── BIGINT: integers beyond the safe integer limit ────────────────────────
// Regular `number` can only represent integers exactly up to
// Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).
// Beyond that, integer arithmetic quietly becomes inaccurate.
// BigInt handles arbitrarily large integers with full precision.

// ── Creating BigInt values ────────────────────────────────────────────────────
const huge        = 9_007_199_254_740_993n;         // append `n` to any integer literal
const anotherHuge = BigInt("9007199254740993");      // or construct from a string
console.log(huge === anotherHuge); // true — same value, different literal forms
console.log(huge + 7n);            // 9007199254741000n

console.log(typeof huge); // "bigint"

// ── BigInt arithmetic ─────────────────────────────────────────────────────────
console.log(5n / 2n); // 2n — BigInt division truncates toward zero (no fractions)

// ── Cannot mix BigInt and Number in arithmetic ────────────────────────────────
// console.log(huge + 1); // ❌ TypeError: Cannot mix BigInt and other types
console.log(huge + BigInt(1)); // ✓ convert Number to BigInt first

// ── The safe integer boundary ─────────────────────────────────────────────────
// Numbers up to and including MAX_SAFE_INTEGER are represented exactly.
// One step beyond it and precision is lost — silently.
console.log(Number.isSafeInteger(9_007_199_254_740_991)); // true  ← this IS the boundary
console.log(Number.isSafeInteger(9_007_199_254_740_992)); // false ← one step over!

// The danger: Number silently loses precision beyond the boundary
console.log(9_007_199_254_740_992 === 9_007_199_254_740_993); // true ← they look different but Number says equal!

// ── Limitations of BigInt ─────────────────────────────────────────────────────
// - Cannot represent fractions (no 1.5n)
// - JSON.stringify({ value: 1n }) throws by default — needs a custom replacer
// - Math methods like Math.sqrt() do not accept BigInt
