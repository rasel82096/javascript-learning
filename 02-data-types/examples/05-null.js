"use strict";

// ─── NULL: an intentional "no value" ──────────────────────────────────────
// `undefined` appears automatically when something has no value yet.
// `null` is set deliberately by the programmer to mean "this is intentionally empty."
// Use `null` when you want to express "I cleared this" or "nothing is selected."

let selectedUser = null; // no user has been selected yet — by choice
console.log(selectedUser); // null
console.log(typeof selectedUser); // "object" ← this is a historical JavaScript bug!
// The ECMAScript committee knows it's wrong but cannot fix it without breaking the web.
// Never use `typeof x === "object"` to check for null. Always use `x === null`.

selectedUser = { id: 1, name: "Sam" }; // now a user is selected
console.log(selectedUser.name); // "Sam"

// ── Checking for null ─────────────────────────────────────────────────────────
const config = { timeout: null }; // timeout deliberately set to "off" / unknown
console.log(config.timeout === null); // true — strict equality is the right check

// ── null == undefined: the one accepted use of loose equality ─────────────────
// These two values are loosely equal but strictly different types.
// `value == null` is sometimes used as a shorthand to catch EITHER null OR undefined.
// This is a well-known convention — do not use loose equality for anything else.
console.log(null == undefined);  // true  — loosely "same family"
console.log(null === undefined); // false — strictly different types

// Summary:
// null      = programmer says "no value here on purpose"
// undefined = JavaScript says "this was never assigned"
