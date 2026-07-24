"use strict";

// ─── LOGICAL OPERATORS ────────────────────────────────────────────────────
// &&, ||, and ! are called "logical" operators, but they don't always return booleans.
// They return one of their OPERANDS — whichever one determined the result.

// ── && (AND) — returns the first FALSY operand, or the last operand ──────────
console.log(true && "ready");         // "ready"  — left is truthy, so return right
console.log(0 && "never reached");    // 0        — left is falsy, stop and return it
// The right side is NOT evaluated when the left is falsy — this is short-circuiting.

// ── || (OR) — returns the first TRUTHY operand, or the last operand ──────────
console.log("" || "fallback");        // "fallback" — left is falsy (""), return right
console.log("saved" || "fallback");   // "saved"    — left is truthy, return it immediately
// The right side is NOT evaluated when the left is truthy.

// ── ! (NOT) — negates truthiness ─────────────────────────────────────────────
console.log(!true);   // false
console.log(!"text"); // false — "text" is truthy, ! flips it to false
console.log(!!"text");// true  — double negation converts any value to its boolean equivalent
// Boolean("text") is often clearer than !!"text" — prefer whichever is more readable.

// ── Short-circuit evaluation in practice ─────────────────────────────────────
// Use && to guard expensive operations: if the left side fails, the right is skipped.
function expensiveCheck() {
  console.log("expensive check ran!"); // you'll only see this when `enabled` is true
  return true;
}
const enabled = false;
console.log(enabled && expensiveCheck()); // false — expensiveCheck is never called

// ── Using && and || for concise conditionals ──────────────────────────────────
const canEdit = true;
if (canEdit && expensiveCheck()) {
  console.log("edit allowed"); // expensiveCheck runs here because canEdit is true
}

// ── Common practical patterns ─────────────────────────────────────────────────
const username = "";
const display = username || "Anonymous"; // use "Anonymous" when username is empty/falsy
console.log(display); // "Anonymous"
// ⚠️ Warning: || treats 0 and "" as "no value" — see 07-nullish-coalescing.js
//             for how ?? handles these correctly when 0 or "" are valid values.
