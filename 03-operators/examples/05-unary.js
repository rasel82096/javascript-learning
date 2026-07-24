"use strict";

// ─── UNARY OPERATORS ─────────────────────────────────────────────────────
// Unary operators take only ONE operand (unlike binary operators like + that take two).

// ── Increment (++) and Decrement (--) ────────────────────────────────────────
// PREFIX form (++x): change first, then return the new value.
// POSTFIX form (x++): return the current value first, then change.
let count = 3;
console.log(++count); // 4  — incremented to 4, then returned 4
console.log(count++); // 4  — returned 4 first, then incremented to 5
console.log(count);   // 5  — now it's 5
console.log(--count); // 4  — decremented to 4, returned 4
console.log(count--); // 4  — returned 4 first, then decremented to 3
console.log(count);   // 3

// Best practice: don't embed ++ / -- inside larger expressions.
// Use them on their own line so the intent is clear.
// AVOID:  result = arr[i++] + arr[i++];  — very confusing
// PREFER: i += 1;  on its own line

// ── typeof — unary type query ─────────────────────────────────────────────────
console.log(typeof count); // "number" — always a string describing the type

// ── Unary + and - — numeric conversion and negation ──────────────────────────
console.log(+"12");    //  12  — converts string "12" to the number 12
console.log(-"12");    // -12  — converts then negates: same as Number("12") * -1
console.log(+true);    //   1  — true becomes 1
console.log(+false);   //   0  — false becomes 0

// ── ! — boolean negation ──────────────────────────────────────────────────────
console.log(!"");   // true  — empty string is falsy, negated to true
console.log(!"yes");// false — non-empty string is truthy, negated to false

// ── delete — remove an object property ───────────────────────────────────────
const item = { active: true, label: "featured" };
console.log(delete item.active); // true — property was removed successfully
console.log(item);               // { label: 'featured' }
// Use `delete` sparingly. Removing a property can trigger performance de-optimisation
// in V8 (Chrome/Node.js) because the engine changes the object's internal shape.
// Setting the value to `null` or `undefined` is often a safer alternative.
