"use strict";

// ─── ARRAYS ARE OBJECTS — reference behavior ───────────────────────────────
// An array is a special kind of object with numbered keys (indices).
// Like all objects, arrays are held by REFERENCE — not copied on assignment.

// ── Creating arrays ───────────────────────────────────────────────────────────
const fruits  = ["apple", "banana", "cherry"]; // array literal — most common
const numbers = new Array(3).fill(0);          // [0, 0, 0] — useful for fixed-length init
const mixed   = [1, "two", true, null, { id: 1 }]; // arrays hold any type

console.log(fruits[0]);         // "apple"  — zero-indexed
console.log(fruits.at(-1));     // "cherry" — .at() accepts negative indices
console.log(fruits.length);     // 3

// ── Reference behavior — two labels, one array ───────────────────────────────
const original = [1, 2, 3];
const alias    = original; // alias is NOT a copy — both point to the same array

alias.push(4);
console.log(original); // [1, 2, 3, 4] ← change via alias shows up in original!
console.log(original === alias); // true — same array in memory

// ── Shallow copy with spread ──────────────────────────────────────────────────
// Spread copies the top level only. Nested arrays/objects are still shared.
const copy = [...original];
copy.push(99);
console.log(original); // [1, 2, 3, 4]  — unchanged ✓
console.log(copy);     // [1, 2, 3, 4, 99]

// ── Nested array: spread is shallow ──────────────────────────────────────────
const matrix = [[1, 2], [3, 4]];
const shallowCopy = [...matrix];

shallowCopy[0].push(99); // modifying the inner array
console.log(matrix[0]);  // [1, 2, 99] ← inner array is still shared!
// To truly clone nested arrays, use structuredClone():
const deepCopy = structuredClone(matrix);
deepCopy[0].push(0);
console.log(matrix[0]); // [1, 2, 99] — original untouched ✓

// ── typeof and Array.isArray ──────────────────────────────────────────────────
console.log(typeof fruits);        // "object" — arrays ARE objects
console.log(Array.isArray(fruits)); // true     — use this to specifically check for arrays
