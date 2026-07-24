"use strict";

/*
  ── Exercise 2 — Type-safe describeValue function ────────────────────────────
  The problem: `typeof` alone cannot reliably distinguish all value types.
    - typeof null      → "object"   (bug — null is not an object)
    - typeof []        → "object"   (arrays are objects)
    - typeof NaN       → "number"   (NaN is "not a number" but typeof says "number")

  Your job: write a function that correctly labels null, arrays, NaN, and everything else.

  Order of checks matters!
    1. Check `=== null` FIRST — before checking typeof "object"
    2. Check Array.isArray() BEFORE typeof — arrays would fall into "object"
    3. Check Number.isNaN() BEFORE typeof — NaN would fall into "number"
    4. Fall through to typeof for everything else
*/

function describeValue(value) {
  if (value === null)       return "null";   // must come before typeof check
  if (Array.isArray(value)) return "array";  // must come before typeof "object"
  if (Number.isNaN(value))  return "NaN";    // must come before typeof "number"
  return typeof value;                        // reliable for all remaining cases
}

const samples = [null, [], {}, NaN, 1, "one", undefined, 1n, Symbol("x")];
for (const sample of samples) {
  console.log(`${String(sample).padEnd(12)} → ${describeValue(sample)}`);
}
// Expected:
//   null         → null
//               → array
//   [object Obj] → object
//   NaN          → NaN
//   1            → number
//   one          → string
//   undefined    → undefined
//   1            → bigint
//   Symbol(x)    → symbol

/*
  Bonus question:
  Why is String(sample) less informative than the DevTools console for objects?
  → String({}) gives "[object Object]", and String([1, 2]) gives "1,2".
    The DevTools inspector (or console.log) shows the full structure interactively.
    That's why structured logging (console.log({ value: sample })) is more useful.
*/
