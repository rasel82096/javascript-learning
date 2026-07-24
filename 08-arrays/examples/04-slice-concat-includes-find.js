"use strict";

// ─── NON-MUTATING METHODS: slice, concat, includes, find ──────────────────
// These are all safe — they never change the original array.

const arr = [10, 20, 30, 40, 50];

// ── slice(start, end) — extract a sub-array, end is exclusive ────────────────
console.log(arr.slice(1, 3));  // [20, 30]
console.log(arr.slice(-2));    // [40, 50] — last two elements
console.log(arr.slice());      // [10, 20, 30, 40, 50] — full shallow copy
console.log(arr);              // [10, 20, 30, 40, 50] — original unchanged

// Real-world: paginate results (page 1 = items 0-4, page 2 = items 5-9, etc.)
function getPage(data, page, pageSize) {
  const start = (page - 1) * pageSize;
  return data.slice(start, start + pageSize);
}
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPage(items, 2, 3)); // [4, 5, 6] — second page, 3 items per page

// ── concat() — merge arrays into a new array ──────────────────────────────────
const a = [1, 2];
const b = [3, 4];
const c = [5, 6];
console.log(a.concat(b, c));    // [1, 2, 3, 4, 5, 6]
console.log([...a, ...b, ...c]); // same result using spread — more common today

// ── includes(value) — true/false existence check ──────────────────────────────
const tags = ["react", "javascript", "node"];
console.log(tags.includes("react"));     // true
console.log(tags.includes("angular"));   // false
// Note: uses SameValueZero equality: like === for most values, but it finds NaN.
// It still won't find objects by content—only the same object reference.

// ── find(callback) — first element that passes the test, or undefined ─────────
const users = [
  { id: 1, name: "Rasel",  active: true  },
  { id: 2, name: "Mina",   active: false },
  { id: 3, name: "Tanvir", active: true  },
];
const firstActive  = users.find(u => u.active);
const byId         = users.find(u => u.id === 2);
console.log(firstActive); // { id: 1, name: "Rasel", active: true }
console.log(byId);        // { id: 2, name: "Mina", active: false }

// find vs filter:
//   find()   → returns ONE element (or undefined)
//   filter() → returns ALL matching elements (always an array)

// ── findIndex(callback) — like find() but returns the index, or -1 ───────────
const idx = users.findIndex(u => u.id === 2);
console.log(idx); // 1
