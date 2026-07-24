"use strict";

/*
  ── Exercise 2 — Robust eligibility checker ──────────────────────────────────
  Requirements:
  - A valid age is a finite number between 0 and 130 (inclusive).
  - The person must be at least 18 years old AND a member to be eligible.
  - Return a human-readable message for every case.
  - Test with: normal ages, a minor, a non-member, undefined, a string, and out-of-range.

  Key operators used: Number.isFinite, &&, >=, ternary ?:
*/

function eligibilityMessage(age, isMember) {
  // Guard: reject anything that isn't a real finite number in a sensible range.
  // Number.isFinite rejects: NaN, Infinity, strings, undefined, null — all in one check.
  if (!Number.isFinite(age) || age < 0 || age > 130) {
    return "Please enter a valid age (0–130).";
  }

  // Both conditions must be true: old enough AND a paying member.
  return age >= 18 && isMember
    ? "Eligible ✓"
    : "Not eligible ✗";
}

// ── Test cases ────────────────────────────────────────────────────────────────
const cases = [
  [20,        true,  "adult member — should be eligible"],
  [17,        true,  "minor member — too young"],
  [20,        false, "adult non-member — not a member"],
  [undefined, true,  "missing age — should be rejected"],
  ["20",      true,  "string age — should be rejected (strings are not finite numbers)"],
  [200,       true,  "age out of range — should be rejected"],
];

for (const [age, member, description] of cases) {
  console.log(`${description}:`);
  console.log(`  → ${eligibilityMessage(age, member)}\n`);
}

/*
  Bonus challenge:
  Refactor `eligibilityMessage` to accept a single object argument instead of two
  separate parameters, and use ?. and ?? to handle missing properties safely:

  function eligibilityMessage({ age, isMember } = {}) { ... }

  Then test: eligibilityMessage({}) and eligibilityMessage() and eligibilityMessage({ age: 25 })
*/
