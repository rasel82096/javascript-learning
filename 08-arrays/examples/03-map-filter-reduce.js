"use strict";

// ─── NON-MUTATING METHODS: map, filter, reduce ────────────────────────────
// These methods do not change the original array themselves. They return a new
// array (or a single value), although a callback could still mutate an object.

const numbers = [1, 2, 3, 4, 5, 6];

// ── map() — transform every element, return a new array of the same length ────
// Signature: array.map((element, index, array) => newValue)
const doubled = numbers.map(n => n * 2);
console.log(doubled);   // [2, 4, 6, 8, 10, 12]
console.log(numbers);   // [1, 2, 3, 4, 5, 6]  — original untouched

// Real-world: add a property to each object without mutating originals
const users = [{ id: 1, name: "Rasel" }, { id: 2, name: "Mina" }];
const withRole = users.map(user => ({ ...user, role: "student" }));
console.log(withRole);

// ── filter() — keep only elements that pass the test, return a new array ──────
// Signature: array.filter((element, index, array) => boolean)
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4, 6]

// Real-world: filter in-stock products
const products = [
  { name: "Keyboard", inStock: true  },
  { name: "Mouse",    inStock: false },
  { name: "Monitor",  inStock: true  },
];
const available = products.filter(p => p.inStock);
console.log(available.map(p => p.name)); // ["Keyboard", "Monitor"]

// ── reduce() — combine all elements into a single value ────────────────────────
// Signature: array.reduce((accumulator, current, index, array) => newAcc, initialValue)
// Always provide an initialValue — omitting it is a common source of bugs.
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 21

// Real-world: group objects by a property (very common pattern!)
const orders = [
  { id: 1, status: "completed", amount: 120 },
  { id: 2, status: "pending",   amount: 80  },
  { id: 3, status: "completed", amount: 200 },
];
const grouped = orders.reduce((acc, order) => {
  acc[order.status] = acc[order.status] || [];
  acc[order.status].push(order);
  return acc;
}, {});
console.log(grouped);

// ── Chaining — compose multiple transformations ────────────────────────────────
// Each method returns a new array, so you can chain them.
const completedRevenue = orders
  .filter(o => o.status === "completed") // keep only completed
  .reduce((acc, o) => acc + o.amount, 0); // sum their amounts
console.log(completedRevenue); // 320
