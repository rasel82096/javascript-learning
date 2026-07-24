"use strict";

/*
  ── Exercise 1 — Data types basics ───────────────────────────────────────────
  Work through each task before checking the solution below it.

  Tasks:
  1. For each value in `values`, predict the typeof result — then run it.
  2. Convert `userInput` to a number; reject it with a friendly message if invalid.
  3. Predict Boolean("false") before running it, then explain why it gives that result.
*/

// ── Task 1 — typeof ───────────────────────────────────────────────────────────
const values = [7, "7", false, undefined, null, 7n, Symbol("7"), {}];
console.log(values.map((value) => typeof value));
// Expected: ['number', 'string', 'boolean', 'undefined', 'object', 'bigint', 'symbol', 'object']
//                                                          ↑
//           Note: typeof null === "object" is a known historical bug in JavaScript.
//           Always use `value === null` to check for null specifically.

// ── Task 2 — Safe number conversion ──────────────────────────────────────────
const userInput = " 36 "; // simulating a value typed into a form field
const converted = Number(userInput.trim()); // trim whitespace first, then convert
if (Number.isNaN(converted)) {
  // Number.isNaN is reliable; the global isNaN() coerces its argument first
  console.log("Please enter a numeric age.");
} else {
  console.log(`Age next year: ${converted + 1}`); // 37
}

// ── Task 3 — Truthiness of the string "false" ────────────────────────────────
console.log(Boolean("false")); // true
// Why? "false" is a non-empty string. Any non-empty string is truthy.
// The only falsy string is the empty string "".
// Only the actual boolean value `false` (and 7 other specific values) are falsy.
