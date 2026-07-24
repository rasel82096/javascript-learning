"use strict";

// ─── VAR: the old way to declare variables ─────────────────────────────────
// `var` was JavaScript's only declaration keyword before ES6 (2015).
// It still works, but has quirks that cause bugs in larger programs.
// Learn it so you can read older code — but avoid it in new code.

// 1. `var` can be reassigned freely (just like `let`)
var course = "JavaScript";
course = "Modern JavaScript";
console.log(course); // "Modern JavaScript"

// 2. The biggest problem: `var` escapes block boundaries like if / for / while.
//    It is "function-scoped", meaning ordinary {} blocks do NOT contain it.
if (true) {
  var visibleOutsideBlock = "I escaped the if-block!";
}
console.log(visibleOutsideBlock); // Works — and that's exactly the problem.
// If this were `let`, a ReferenceError would be thrown — which is the safe behavior.

// 3. `var` IS contained inside a function — that is its only scope boundary.
function demonstrateFunctionScope() {
  var onlyInsideFunction = "private to this function";
  return onlyInsideFunction;
}
console.log(demonstrateFunctionScope()); // "private to this function"
// console.log(onlyInsideFunction); // ❌ ReferenceError — can't reach it out here

// 4. `var` is hoisted: the declaration is moved to the top of its scope,
//    but the value assignment stays in place.
//    Reading it before the assignment gives `undefined` — not an error.
console.log(hoistedWithVar); // undefined  ← no crash, just a silent surprise
var hoistedWithVar = "assigned later";
// Think of it as if JavaScript secretly rewrote this as:
//   var hoistedWithVar;        ← moved to the top
//   console.log(hoistedWithVar); ← still undefined here
//   hoistedWithVar = "assigned later"; ← value set here
