"use strict";

// ─── ASSIGNMENT OPERATORS ─────────────────────────────────────────────────
// The `=` operator assigns a value to a variable.
// Compound assignments combine arithmetic with assignment in one step.

let total = 100;
total += 25;  // total = total + 25  →  125
total -= 5;   // total = total - 5   →  120
total *= 2;   // total = total * 2   →  240
total /= 4;   // total = total / 4   →   60
console.log(total); // 60

// ── Remainder and exponent shorthand ─────────────────────────────────────────
let remainder = 17;
remainder %= 5;       // remainder = remainder % 5  →  2
console.log(remainder); // 2

let power = 2;
power **= 3;          // power = power ** 3  →  8
console.log(power);   // 8

// ── Chained assignment ────────────────────────────────────────────────────────
// Assignment is an expression that returns the assigned value.
// This means you can chain it — but keep it simple for readability.
let first;
let second;
first = second = 10; // 10 is assigned to `second`, then that 10 is assigned to `first`
console.log({ first, second }); // { first: 10, second: 10 }
// Avoid chaining more than two assignments — it becomes hard to follow quickly.

// ── Logical assignment operators (ES2021) ─────────────────────────────────────
let a = null;
let b = "existing";
a ??= "default"; // assign "default" only if `a` is null or undefined
b ??= "default"; // `b` already has a value, so it stays unchanged
console.log({ a, b }); // { a: 'default', b: 'existing' }
