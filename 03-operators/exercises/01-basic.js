"use strict";

/*
  ── Exercise 1 — Operators basics ────────────────────────────────────────────
  Try to predict each output BEFORE running the code. Then verify.

  Tasks:
  1. Calculate a price after a 15% discount.
  2. Show the difference between || and ?? when the stored value is 0.
  3. Safely access a deeply nested property that might not exist.
*/

// ── Task 1 — Discount calculation ────────────────────────────────────────────
const price           = 800;
const discountPercent = 15;
const discountedPrice = price * (1 - discountPercent / 100);
// Step by step: 15 / 100 = 0.15 → 1 - 0.15 = 0.85 → 800 × 0.85 = 680
console.log(discountedPrice); // 680

// ── Task 2 — || vs ?? with a falsy-but-valid value ───────────────────────────
const savedItems = 0; // the user has 0 items in their cart — a real, valid count

console.log(savedItems || 10); // 10  ← WRONG for this case: || treats 0 as "nothing"
console.log(savedItems ?? 10); //  0  ← CORRECT: ?? only falls back for null/undefined

// The rule: use ?? whenever 0, false, or "" could be a legitimate value in your data.

// ── Task 3 — Safe optional chaining ──────────────────────────────────────────
const user = { name: "Mira" }; // user exists but has no `address` property

const city = user.address?.city ?? "Unknown city";
// user.address is undefined → ?. short-circuits → undefined → ?? gives the fallback
console.log(city); // "Unknown city"
