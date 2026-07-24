"use strict";

// ─── SYMBOL: guaranteed-unique identifiers ─────────────────────────────────
// Every call to Symbol() creates a completely unique value, even if you pass
// the same label string. The label is only for debugging — it has no effect
// on equality or identity.

// 1. Two symbols with the same label are still different values
const firstId  = Symbol("id");
const secondId = Symbol("id");
console.log(firstId === secondId); // false — ALWAYS unique, no exceptions

// 2. Symbols as object keys — they cannot clash with regular string keys
const record = { name: "Ada", [firstId]: 101 };
console.log(record[firstId]); // 101 — retrieved with the exact same symbol reference
console.log(Object.keys(record));                 // ["name"] — symbols are hidden from Object.keys
console.log(Object.getOwnPropertySymbols(record)); // [Symbol(id)] — use this to find them

// 3. Symbol.for() — a shared global registry
// Unlike Symbol(), Symbol.for(key) returns the SAME symbol every time for the same key.
// This lets two completely separate modules share a symbol without importing each other.
const tokenA = Symbol.for("app.token");
const tokenB = Symbol.for("app.token");
console.log(tokenA === tokenB); // true — retrieved from the global registry

// 4. Symbols cannot be implicitly converted to strings (it throws a TypeError)
// console.log("Value: " + firstId); // ❌ TypeError: Cannot convert a Symbol value to a string
console.log("Value: " + String(firstId)); // ✓ explicit conversion is fine
console.log(`Description: ${firstId.description}`); // ✓ .description gives just the label text
