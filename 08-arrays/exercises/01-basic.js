"use strict";

/*
  ── Exercise 1 — Array basics and copy strategies ────────────────────────────
  Try each task before reading the solution below it.

  Tasks:
  1. Create an array `cart` with 3 product names. Log the last item using .at().
  2. Make a copy of `cart` using spread. Push "Headphones" to the copy.
     Confirm the original `cart` is unchanged.
  3. Create a nested array `matrix = [[1, 2], [3, 4]]`.
     Make a shallow copy and push 99 into the first inner array.
     What happens to the original? Why?
  4. Fix Task 3 using structuredClone().
*/

// ── Task 1 ────────────────────────────────────────────────────────────────────
const cart = ["Laptop", "Mouse", "Keyboard"];
console.log(cart.at(-1)); // "Keyboard"

// ── Task 2 ────────────────────────────────────────────────────────────────────
const cartCopy = [...cart];
cartCopy.push("Headphones");
console.log(cart);     // ["Laptop", "Mouse", "Keyboard"]   — original untouched ✓
console.log(cartCopy); // ["Laptop", "Mouse", "Keyboard", "Headphones"]

// ── Task 3 — shallow copy trap ────────────────────────────────────────────────
const matrix = [[1, 2], [3, 4]];
const shallowMatrix = [...matrix];
shallowMatrix[0].push(99);
console.log(matrix[0]); // [1, 2, 99] ← original IS affected because spread is shallow!
// Explanation: spread only copies the outer array. The inner arrays are still shared.

// ── Task 4 — deep copy with structuredClone ───────────────────────────────────
const matrix2 = [[1, 2], [3, 4]];
const deepMatrix = structuredClone(matrix2);
deepMatrix[0].push(99);
console.log(matrix2[0]); // [1, 2] ← original is fully independent now ✓
