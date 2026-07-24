"use strict";

// ─── MUTATING METHODS ─────────────────────────────────────────────────────
// These methods CHANGE the original array in place.
// ⚠️ Avoid in React state — always create a new array instead.
// Fine in regular JavaScript where mutation is deliberate.

const stack = [1, 2, 3];

// ── push() / pop() — add/remove from the END ──────────────────────────────────
stack.push(4);       // add to end — returns new length
console.log(stack);  // [1, 2, 3, 4]
stack.pop();         // remove from end — returns the removed element
console.log(stack);  // [1, 2, 3]

// ── unshift() / shift() — add/remove from the START ──────────────────────────
stack.unshift(0);    // add to start — returns new length (slower than push for large arrays)
console.log(stack);  // [0, 1, 2, 3]
stack.shift();       // remove from start — returns the removed element
console.log(stack);  // [1, 2, 3]

// ── splice(start, deleteCount, ...items) — insert, remove, or replace ─────────
// The most powerful mutating method — does all three operations.
const letters = ["a", "b", "c", "d", "e"];

// Remove: remove 2 elements starting at index 1
const removed = letters.splice(1, 2);
console.log(removed);  // ["b", "c"]
console.log(letters);  // ["a", "d", "e"]

// Insert: add elements without removing any (deleteCount = 0)
letters.splice(1, 0, "x", "y");
console.log(letters);  // ["a", "x", "y", "d", "e"]

// Replace: remove and insert at the same position
letters.splice(2, 1, "Z");
console.log(letters);  // ["a", "x", "Z", "d", "e"]

// ── sort() — sorts IN PLACE, returns the same array ───────────────────────────
// Default sort converts elements to strings — WRONG for numbers!
const nums = [10, 1, 21, 2];
nums.sort();
console.log(nums); // [1, 10, 2, 21] ← WRONG — lexicographic (string) order!

// Always provide a comparator for numbers:
nums.sort((a, b) => a - b); // ascending
console.log(nums); // [1, 2, 10, 21] ✓

// Sort strings explicitly for clarity:
const names = ["Charlie", "Alice", "Bob"];
names.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));
console.log(names); // ["Alice", "Bob", "Charlie"]

// ⚠️ sort() mutates and also returns the same array — easy to mistake for a copy!
const originalArray = [5, 1, 3];
const sortedRef     = originalArray.sort((a, b) => a - b);
console.log(originalArray === sortedRef); // true — same array!

// To sort without mutation, spread first:
const safe       = [5, 1, 3];
const sortedCopy = [...safe].sort((a, b) => a - b);
console.log(safe);        // [5, 1, 3] — untouched ✓
console.log(sortedCopy);  // [1, 3, 5]

// Or use the non-mutating toSorted() (ES2023):
const sorted2 = safe.toSorted((a, b) => a - b);
console.log(safe);    // [5, 1, 3] — still untouched ✓
console.log(sorted2); // [1, 3, 5]
