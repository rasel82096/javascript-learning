"use strict";

// ─── BOOLEAN: true or false, and JavaScript's truthiness system ────────────
// Booleans are simple: `true` or `false`.
// But JavaScript evaluates ANY value as truthy or falsy when used in a condition.
// Understanding this is essential — it affects if-statements, &&, ||, and ??.

const isMember = true;
const hasPaid  = false;
console.log(isMember, hasPaid);

// ── Truthiness table ──────────────────────────────────────────────────────────
// Boolean(value) shows exactly how JavaScript evaluates a value in a condition.
const candidates = [true, false, 0, -0, 1, "", "0", null, undefined, NaN, [], {}];
for (const value of candidates) {
  console.log(String(value).padEnd(9), "=>", Boolean(value));
}

// ── The eight falsy values — memorise these ───────────────────────────────────
//   false   0   -0   0n   ""   null   undefined   NaN
// Every other value is truthy — including [], {}, "0", and "false"!
console.log(Boolean([]));  // true  ← an empty ARRAY is truthy (it's an object)
console.log(Boolean({}));  // true  ← an empty OBJECT is truthy

// ── The most common trap ──────────────────────────────────────────────────────
// The string "false" is truthy — it is not the boolean value `false`.
// It's just a non-empty piece of text, and all non-empty strings are truthy.
console.log(Boolean("false")); // true — the TEXT "false", not the VALUE false

// ── Practical tip ─────────────────────────────────────────────────────────────
// When checking for the presence of a value, remember that 0 and "" are falsy.
// If 0 or "" are valid values in your program, use explicit checks:
//   if (count !== undefined) { ... }  instead of  if (count) { ... }
