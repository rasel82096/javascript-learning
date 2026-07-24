"use strict";

// ─── BITWISE OPERATORS ────────────────────────────────────────────────────
// Bitwise operators treat their Number operands as 32-bit signed integers.
// They operate bit by bit. A practical real-world use: compact permission flags.

// ── Setting up permission flags using binary literals ─────────────────────────
const READ    = 0b001; // 1 in decimal — bit 0
const WRITE   = 0b010; // 2 in decimal — bit 1
const EXECUTE = 0b100; // 4 in decimal — bit 2

// ── | (OR) — set a flag (turn bits ON) ───────────────────────────────────────
let permissions = READ | WRITE; // 001 | 010 = 011 (both bits on)
console.log(permissions.toString(2).padStart(3, "0")); // "011"

// ── & (AND) — test a flag (check if a bit is ON) ─────────────────────────────
console.log(Boolean(permissions & WRITE));   // true  — WRITE bit is on
console.log(Boolean(permissions & EXECUTE)); // false — EXECUTE bit is off

// ── |= — add a flag ───────────────────────────────────────────────────────────
permissions |= EXECUTE; // 011 | 100 = 111 (all three bits on)
console.log(permissions.toString(2).padStart(3, "0")); // "111"

// ── &= ~ — remove a flag (AND with the bitwise NOT) ──────────────────────────
permissions &= ~WRITE; // ~010 = ...11111101 (flip all bits), AND clears the WRITE bit
console.log(permissions.toString(2).padStart(3, "0")); // "101" (READ + EXECUTE)

// ── ^ (XOR) — toggle a flag (flips the bit) ──────────────────────────────────
console.log(5 ^ 3); // 6  — 101 XOR 011 = 110

// ── ~ (NOT) — flips ALL bits, equivalent to -(n + 1) ─────────────────────────
console.log(~5); // -6  — flips all bits of 5 (0...0101) → -(5 + 1)

// ── << and >> — left and right shift ─────────────────────────────────────────
console.log(5 << 1); //  10 — shift bits left by 1 (multiply by 2)
console.log(5 >> 1); //   2 — shift bits right by 1 (divide by 2, discard remainder)

// ── >>> (unsigned right shift) — always fills with 0s on the left ─────────────
// For negative numbers, >> preserves the sign bit; >>> always shifts in a 0.
console.log(-1 >> 1);  // -1  — sign bit preserved (still negative)
console.log(-1 >>> 1); // 2147483647 — fills with 0, produces a large positive number

// ── When to use bitwise operators ────────────────────────────────────────────
// ✓ Compact permission flags (as shown above)
// ✓ Low-level algorithms, hashing, encoding
// ✗ Everyday arithmetic — use regular operators; bitwise is limited to 32 bits
// ✗ BigInt arithmetic requires its own bitwise operations (BigInt can't mix with Number)
