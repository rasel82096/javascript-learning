"use strict";

/*
  ── Exercise 2 — map, filter, reduce practice ────────────────────────────────
  These are taken directly from your own practice problems, now cleaned up.
*/

// ── From your filter file ─────────────────────────────────────────────────────

// Q: Keep only prices where (price + 15% tax) is below 10
const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
const lowPrices = prices.filter(p => p * 1.15 < 10);
console.log(lowPrices); // [1.23, 8, 5.2]

// Q: Keep only sub-arrays that contain 2
const grid = [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]];
const hasTwos = grid.filter(sub => sub.includes(2));
console.log(hasTwos); // [[1, 2, 3], [0, 1, 2]]

// Q: Double all numbers, then keep only those over 50
const nums = [10, 20, 30, 40, 50];
const timesTwo = nums.map(n => n * 2);
const over50   = timesTwo.filter(n => n > 50);
console.log(timesTwo); // [20, 40, 60, 80, 100]
console.log(over50);   // [60, 80, 100]

// ── From your reduce file ─────────────────────────────────────────────────────

// Q: Total price in a cart (price × quantity for each item)
const cartItems = [
  { name: "Keyboard", price: 1200, qty: 2 },
  { name: "Mouse",    price: 500,  qty: 1 },
  { name: "Monitor",  price: 8000, qty: 1 },
];
const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
console.log(cartTotal); // 11900

// Q: Group users by role
const users = [
  { name: "Rasel",  role: "admin"  },
  { name: "Mina",   role: "editor" },
  { name: "Tanvir", role: "admin"  },
  { name: "Sadia",  role: "viewer" },
  { name: "Habib",  role: "editor" },
];
const groupedByRole = users.reduce((acc, user) => {
  acc[user.role] = acc[user.role] || [];
  acc[user.role].push(user);
  return acc;
}, {});
console.log(groupedByRole);
// { admin: [...], editor: [...], viewer: [...] }

// Q: Word frequency counter (single-pass)
function wordFrequency(text) {
  return text.split(" ").reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}
const text = "the quick brown fox jumps over the lazy dog the fox runs";
console.log(wordFrequency(text));
// { the: 3, fox: 2, quick: 1, ... }
