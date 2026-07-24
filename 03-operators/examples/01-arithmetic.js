"use strict";

// ─── ARITHMETIC OPERATORS ─────────────────────────────────────────────────
// The six arithmetic operators: + - * / % **
// Most behave as expected. The edge cases are worth knowing.

const a = 17;
const b = 5;
console.log({ add: a + b, subtract: a - b, multiply: a * b, divide: a / b });
// { add: 22, subtract: 12, multiply: 85, divide: 3.4 }

console.log({ remainder: a % b, exponent: a ** b });
// { remainder: 2, exponent: 1419857 }

// ── Remainder (%) — keeps the sign of the LEFT operand ───────────────────────
// % is not the same as mathematical modulo for negative numbers.
console.log(-17 % 5);   // -2 ← negative because -17 (left side) is negative
console.log( 17 % -5);  //  2 ← positive because 17 (left side) is positive
// If you need a true modulo (always non-negative): ((n % m) + m) % m

// ── Precedence — multiplication before addition, parentheses always win ───────
console.log(2 + 3 * 4);     // 14  — * evaluated first, then +
console.log((2 + 3) * 4);   // 20  — parentheses override precedence
// Tip: when in doubt, add parentheses. Clarity beats cleverness.

// ── Division edge cases ────────────────────────────────────────────────────────
console.log(1 / 0);   // Infinity  — does NOT throw in JavaScript
console.log(0 / 0);   // NaN       — indeterminate form
console.log(-1 / 0);  // -Infinity
