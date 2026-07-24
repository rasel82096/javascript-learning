"use strict";

// ─── LET: the modern keyword for variables that change ─────────────────────
// Use `let` when a value genuinely needs to be updated over time.
// Prefer `const` for everything else — reach for `let` only when you know
// you will reassign the variable at some point.

// 1. Basic reassignment — the whole reason `let` exists
let score = 0;
score += 10;
console.log(`Score: ${score}`); // "Score: 10"

// 2. `let` is block-scoped — it lives only inside the {} where it was declared
if (true) {
  let blockOnly = "available only inside this block";
  console.log(blockOnly); // ✓ visible here
}
// console.log(blockOnly); // ❌ ReferenceError — it doesn't exist out here

// 3. Each loop iteration gets its OWN binding of `i` — crucial for closures.
//    With `var i`, every callback shares the same variable and all print 3.
//    With `let i`, each callback captures its own snapshot of `i`.
const callbacks = [];
for (let i = 0; i < 3; i += 1) {
  callbacks.push(() => i); // each arrow function remembers its own `i`
}
console.log(callbacks.map((getValue) => getValue())); // [0, 1, 2] ✓
// Try changing `let` to `var` above and notice the difference!

// 4. `let` can be declared without an initial value — it starts as `undefined`
let selectedTheme;
console.log(selectedTheme); // undefined
// Assign a value later when you actually have one.
