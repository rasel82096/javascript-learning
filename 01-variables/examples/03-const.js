"use strict";

// ─── CONST: the default choice for most variables ──────────────────────────
// `const` prevents a binding from being *reassigned* after creation.
// This is NOT the same as making the value immutable — objects and arrays
// declared with `const` can still have their contents changed.

// 1. Primitive constants — the binding and the value are both fixed
const taxRate = 0.15;
const subtotal = 100;
console.log(subtotal * (1 + taxRate)); // 115  (100 × 1.15 = 115 exactly)

// taxRate = 0.2; // ❌ TypeError: Assignment to constant variable.

// 2. The binding is constant — the object it POINTS TO is still mutable.
//    Think of `const` as: "this label will never move to point elsewhere."
//    But the thing the label is pointing to can still change internally.
const user = { name: "Asha", role: "student" };
user.role = "mentor"; // ✓ modifying a property is fine
user.active = true;   // ✓ adding a new property is also fine
console.log(user); // { name: 'Asha', role: 'mentor', active: true }

const topics = ["variables"];
topics.push("data types"); // ✓ mutating an array is allowed
console.log(topics); // ['variables', 'data types']
// topics = []; // ❌ TypeError — this would move the label to a new array

// 3. Object.freeze() adds shallow immutability — a separate concern from `const`
//    Frozen means top-level properties cannot be changed (throws in strict mode).
//    But nested objects inside are NOT frozen — freeze is only one level deep.
const settings = Object.freeze({ theme: "dark", colors: { primary: "blue" } });
// settings.theme = "light"; // ❌ TypeError in strict mode — top level is frozen
settings.colors.primary = "red"; // ✓ nested objects are NOT covered by freeze!
console.log(settings.theme);         // "dark"  — protected
console.log(settings.colors.primary); // "red"   — nested object was NOT frozen
