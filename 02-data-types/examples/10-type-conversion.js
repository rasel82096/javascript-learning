"use strict";

// ─── TYPE CONVERSION: explicit and implicit ────────────────────────────────
// JavaScript automatically converts between types in many situations ("coercion").
// This is a common source of bugs. The golden rule:
//   Always convert EXPLICITLY — it documents your intent and avoids surprises.

// ── Number() — strict whole-value conversion ──────────────────────────────────
console.log(Number("42"));     //  42  — entire string is a valid number
console.log(Number(""));       //   0  — empty string becomes 0 (surprising!)
console.log(Number(null));     //   0  — null becomes 0
console.log(Number("42px"));   // NaN  — fails because "px" is not numeric

// ── parseInt / parseFloat — prefix-reading conversion ────────────────────────
// These read as far as they can and stop at the first non-numeric character.
// Always pass the radix (10) to parseInt to avoid octal surprises.
console.log(parseInt("42px", 10));   // 42   — stops at "p"
console.log(parseFloat("3.14rem"));  // 3.14 — stops at "r"

// ── String() and Boolean() ────────────────────────────────────────────────────
console.log(String(123));   // "123"
console.log(String(null));  // "null"
console.log(String(1n));    // "1"

console.log(Boolean(""));       // false — empty string is falsy
console.log(Boolean("false"));  // true  — non-empty string is ALWAYS truthy
console.log(Boolean(0));        // false — 0 is falsy

// ── Implicit coercion traps ───────────────────────────────────────────────────
// The `+` operator CONCATENATES when at least one operand is a string.
// Every other arithmetic operator (-  *  /  **  %) converts operands to numbers.
console.log("5" + 1);  // "51" ← number 1 gets coerced to the string "1"
console.log("5" - 1);  //   4  ← "5" gets coerced to the number 5, then subtract

// ── Best practice: trim and convert user input explicitly ─────────────────────
const input = " 24 "; // typical raw value from a text form field
const age   = Number(input.trim()); // Step 1: strip whitespace. Step 2: convert.
// Step 3: validate before using the number.
console.log(Number.isInteger(age) && age >= 18 ? "adult" : "not an adult");
