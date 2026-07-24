"use strict";

/*
  ── Exercise 1 — Variables basics ────────────────────────────────────────────
  Try each task yourself before reading the solutions below.

  Tasks:
  1. Create a `const` named `country`, set it to your country, and log it.
  2. Create a `let` named `visits` starting at 0. Add 1 twice, then log the result.
  3. Create a `const` object `profile` with a `name` property, then add an `age`
     property to it. Why is this allowed even though `profile` is const?
  4. Inside an if-block, declare a `let` called `secret`. Uncomment the line
     below the block to confirm a ReferenceError is thrown outside the block.
*/

// ── Solutions ────────────────────────────────────────────────────────────────

// Task 1
const country = "Bangladesh";
console.log(country); // "Bangladesh"

// Task 2
let visits = 0;
visits += 1;
visits += 1;
console.log(`Visits: ${visits}`); // "Visits: 2"

// Task 3
const profile = { name: "Learner" };
profile.age = 20; // ✓ allowed — `const` locks the binding, not the object's content
// profile = {};  // ❌ TypeError — this would move the label to a different object

// Task 4
if (true) {
  let secret = "block scoped";
  console.log(secret); // visible inside the block ✓
}
// console.log(secret); // ❌ Uncomment this line to see the ReferenceError

console.log({ country, visits, profile });

// Key insight:
// `const profile = { ... }` means "this label will always point to the same object."
// Changing properties ON that object is perfectly fine — you are not moving the label.
