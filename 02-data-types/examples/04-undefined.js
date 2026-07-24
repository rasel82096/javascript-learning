"use strict";

// ─── UNDEFINED: JavaScript's "no value assigned" signal ───────────────────
// `undefined` appears automatically in three main situations.
// You do not assign `undefined` on purpose — that's what `null` is for.

// 1. A variable declared but not yet given a value
let pending;
console.log(pending); // undefined

// 2. Reading a property that does not exist on an object
const user = { name: "Tania" };
console.log(user.age); // undefined — no error, just undefined

// 3. A function that has no return statement (or returns with no value)
function noReturnValue() {
  // nothing returned
}
console.log(noReturnValue()); // undefined

// ── undefined vs null in default parameters ───────────────────────────────────
// Default parameter values only activate when the argument is `undefined`.
// Passing `null` is treated as a deliberate "no value" — the default is NOT used.
function greeting(name = "guest") {
  return `Hello, ${name}`;
}
console.log(greeting());           // "Hello, guest"  — no argument → default activates
console.log(greeting(undefined));  // "Hello, guest"  — undefined → default activates
console.log(greeting(null));       // "Hello, null"   — null is intentional, no default
console.log(greeting("Tania"));    // "Hello, Tania"  — explicit value always wins

// Summary:
// undefined = "I haven't been given a value yet"  (automatic, unintentional)
// null      = "I intentionally have no value"      (set by the programmer)
