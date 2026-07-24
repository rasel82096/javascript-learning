"use strict";

// ─── ITERATION CONTRACTS — length and order guarantees ────────────────────
// Arrays maintain insertion order — elements always come out in the same order
// they went in. This is guaranteed by the spec for integer-indexed properties.

// ── Array.from() — create an array from array-like or iterable objects ───────
// Array-like: any object with `.length` and indexed properties (e.g. strings, NodeLists)
// Iterable: any object with [Symbol.iterator] (e.g. Set, Map, arguments)

const fromString = Array.from("hello");
console.log(fromString); // ["h", "e", "l", "l", "o"]

// Array-like object with length and numeric keys
const arrayLike = { 0: "A", 1: "B", 2: "C", length: 3 };
console.log(Array.from(arrayLike)); // ["A", "B", "C"]
console.log(typeof arrayLike);      // "object" — it's not an array, but from() converts it

// Convert a Set to an array (useful for deduplication)
const unique = Array.from(new Set([1, 2, 2, 3, 3, 3]));
console.log(unique); // [1, 2, 3]

// Array.from with a mapping function (second argument)
const squares = Array.from({ length: 5 }, (_, i) => i ** 2);
console.log(squares); // [0, 1, 4, 9, 16]

// ── Spread syntax vs Array.from ───────────────────────────────────────────────
// Both can convert iterables. Array.from also handles non-iterables with .length.
console.log([...new Set([1, 2, 2, 3])]); // [1, 2, 3] — spread works on Set
// console.log([...arrayLike]);           // ❌ spread doesn't work on plain array-likes

// ── fill() — fill all or part of an array with a value ───────────────────────
// fill() MUTATES the original array and returns it.
const template = new Array(5).fill(0);
console.log(template); // [0, 0, 0, 0, 0]

// fill(value, start, end) — fill a range
const partial = [1, 2, 3, 4, 5];
partial.fill(9, 2, 4); // fill from index 2 up to (not including) 4
console.log(partial); // [1, 2, 9, 9, 5]

// Real-world: create skeleton loaders
const skeletons = new Array(5).fill(null).map(() => ({ loading: true }));
// ⚠️ Don't use fill({ loading: true }) directly — all items would share the SAME object!
console.log(skeletons);

// ── Kanban card reorder — non-mutating move ───────────────────────────────────
// Move item from index 1 to index 3 without splice or mutating the original.
const cards = ["Design", "Dev", "Review", "Deploy", "Done"];
const fromIdx = 1; // "Dev"
const toIdx   = 3; // before "Deploy"
const item    = cards[fromIdx];
const reordered = [
  ...cards.slice(0, fromIdx),             // before the moved item
  ...cards.slice(fromIdx + 1, toIdx + 1), // items in between
  item,                                    // the moved item
  ...cards.slice(toIdx + 1),              // items after
];
console.log(reordered); // ["Design", "Review", "Deploy", "Dev", "Done"]
console.log(cards);     // ["Design", "Dev", "Review", "Deploy", "Done"] — original unchanged
