"use strict";

// ─── HOISTING: declarations are processed before code runs ─────────────────
// JavaScript reads your file in two phases:
//   Phase 1 — Registration: all declarations are found and registered.
//   Phase 2 — Execution:    code runs top to bottom.
// "Hoisting" is the result of Phase 1 happening before Phase 2.

// ── var: hoisted AND initialized to undefined ─────────────────────────────────
// The declaration is moved to the top of its scope; the assignment stays in place.
// Reading it before the assignment gives `undefined` — no crash, just silence.
console.log(oldStyle); // undefined  ← no crash, but also no real value yet
var oldStyle = "value assigned here";
console.log(oldStyle); // "value assigned here"

// ── let / const: hoisted but NOT initialized (Temporal Dead Zone — TDZ) ───────
// They exist in the scope from the start, but touching them before their
// declaration line causes a ReferenceError. This is intentional and helpful.
// console.log(modernStyle); // ❌ ReferenceError: Cannot access before initialization
let modernStyle = "safe to read after this line";
console.log(modernStyle); // "safe to read after this line"

// ── Function declarations: fully hoisted, body and all ───────────────────────
// You can call a function declaration anywhere in its scope — even above its definition.
announce("Ada"); // ✓ works — the whole function body is registered in Phase 1
function announce(name) {
  console.log(`Hello, ${name}`);
}

// ── Function expressions: follow their variable keyword's rules ───────────────
// `const greet` → TDZ applies → calling it before the line throws a ReferenceError
// `var greet`   → hoisted as undefined → calling it early gives TypeError (not a function)
const greet = () => console.log("Hello after initialization");
greet(); // ✓ safe here because we are after the assignment line

// ── typeof with an undeclared name: the one safe exception ───────────────────
// Reading any undeclared name directly throws a ReferenceError.
// `typeof` is uniquely immune — it returns "undefined" instead of crashing.
console.log(typeof neverDeclared); // "undefined" — no crash
// This is useful for feature detection: checking if a global like `fetch` exists.
