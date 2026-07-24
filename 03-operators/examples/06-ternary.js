"use strict";

// ─── TERNARY OPERATOR ─────────────────────────────────────────────────────
// Syntax: condition ? valueIfTrue : valueIfFalse
// The ternary is an EXPRESSION — it produces a value, which you can assign or use.
// Best for choosing between two values inline. Use if/else for multi-step logic.

// ── Basic usage ───────────────────────────────────────────────────────────────
const age    = 19;
const access = age >= 18 ? "granted" : "denied";
console.log(access); // "granted"

// ── Ternary as an expression — embed it anywhere a value is expected ──────────
const score   = 73;
const message = score >= 50
  ? `Passed with ${score}`
  : `Try again (${score})`;
console.log(message); // "Passed with 73"

// ── Nested ternary — use with care ───────────────────────────────────────────
// Nesting is compact but quickly becomes hard to read.
// Add line breaks and indent each branch to help readability.
const grade = score >= 80 ? "A"
            : score >= 60 ? "B"
            : score >= 40 ? "C"
            : "F";
console.log(grade); // "B"
// If you have 3 or more branches like this, an if/else or a lookup object is clearer.

// ── When to choose ternary vs if/else ────────────────────────────────────────
// ✓ Ternary:  choosing one of two VALUES inline, no side effects
// ✗ Ternary:  multiple statements, logging, throwing errors — use if/else

// Good — produces a value:
const label = score >= 50 ? "Pass" : "Fail";

// Bad — use if/else when side effects are involved:
// score >= 50 ? console.log("Pass") : console.log("Fail"); // harder to read
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
