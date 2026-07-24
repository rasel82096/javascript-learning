"use strict";

// ─── OBJECT: reference types — the containers of JavaScript ────────────────
// Objects, arrays, functions, dates, Maps, Sets — all are objects.
// The fundamental difference from primitives: objects are held by reference.
// Two variables can point to the exact same object in memory.

// ── Reference vs. copy ───────────────────────────────────────────────────────
const user  = { name: "Noor", skills: ["HTML"] };
const alias = user; // `alias` is NOT a copy — both labels point to the same object

alias.name = "Noor Alam";
alias.skills.push("JavaScript");
console.log(user); // { name: 'Noor Alam', skills: ['HTML', 'JavaScript'] }
// The change made through `alias` is visible through `user` — same object in memory!
console.log(user === alias); // true — they reference the same object

// ── Making an independent copy with spread syntax ────────────────────────────
// { ...obj } copies own enumerable properties — but only ONE level deep (shallow).
// For nested objects/arrays, spread each level separately.
const clone = { ...user, skills: [...user.skills] }; // spread the nested array too
clone.skills.push("Node.js");
console.log({ original: user.skills, clone: clone.skills });
// The original is unchanged — we created truly independent arrays.
// For deeply nested structures, use structuredClone() (available in modern runtimes).

// ── typeof gotchas with objects ───────────────────────────────────────────────
console.log(typeof []);               // "object"   ← arrays report as objects
console.log(Array.isArray([]));        // true       ← use this to test for arrays
console.log(typeof function foo() {}); // "function" ← callable objects get a special result
// null also reports typeof "object" — always test null with `=== null`.
