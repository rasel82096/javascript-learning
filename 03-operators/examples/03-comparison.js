"use strict";

// ─── COMPARISON OPERATORS ─────────────────────────────────────────────────
// Comparison operators return a boolean: true or false.
// The most important rule: always use === (strict) unless you have a specific reason not to.

// ── Strict equality (===) and strict inequality (!==) ────────────────────────
// Compares value AND type — no conversion happens.
console.log(5 === 5);    // true  — same value, same type
console.log(5 !== 4);    // true  — different values
console.log(5 === "5");  // false — number ≠ string, even if they look the same

// ── Loose equality (==) — avoid this in most cases ───────────────────────────
// Converts types before comparing — the rules are complex and surprising.
console.log(5 == "5");   // true  — "5" is coerced to 5 before comparing
// This can hide bugs where you expected a type mismatch to be caught.

// ── The one accepted use of loose equality ────────────────────────────────────
// `value == null` catches both null AND undefined in one check.
// This is a well-known convention and is safe to use.
console.log(null == undefined);  // true  — special case of loose equality
console.log(null === undefined); // false — strictly different types

// ── Ordering operators (< > <= >=) ───────────────────────────────────────────
console.log(10 > 3, 10 >= 10, 3 < 2, 3 <= 3); // true true false true
console.log("apple" < "banana"); // true — strings are compared character by character (Unicode)

// ── NaN is not equal to anything — including itself ───────────────────────────
console.log(NaN === NaN);         // false  ← NaN is the only value not equal to itself
console.log(Number.isNaN(NaN));   // true   ← always use Number.isNaN to test for NaN

// ── Object.is() — stricter than === in two edge cases ────────────────────────
// Object.is(NaN, NaN)  → true  (=== says false)
// Object.is(0, -0)     → false (=== says true)
console.log(Object.is(NaN, NaN)); // true  — useful for checking NaN
console.log(Object.is(0, -0));    // false — tells 0 and -0 apart
console.log(0 === -0);            // true  — === cannot distinguish them
// In everyday code, use === and Number.isNaN. Object.is is rarely needed.
