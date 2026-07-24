"use strict";

// ─── COPY STRATEGIES ──────────────────────────────────────────────────────
// Three common ways to copy an array — each with different depth and trade-offs.

const original = [1, 2, [3, 4]];

// ── Strategy 1: Spread [...arr] — shallow, fast, most common ─────────────────
const spreadCopy = [...original];
spreadCopy[0] = 99;        // ✓ top-level change is independent
spreadCopy[2].push(5);     // ✗ nested array is still shared
console.log(original[0]);  // 1    — top level unaffected
console.log(original[2]);  // [3, 4, 5] — nested SHARED!

// ── Strategy 2: JSON round-trip — deep copy, but with limits ─────────────────
const jsonCopy = JSON.parse(JSON.stringify(original));
jsonCopy[2].push(99);
console.log(original[2]); // [3, 4, 5] — original unchanged ✓ (deep copy worked)

// ── JSON.parse(stringify()) limitations: ─────────────────────────────────────
//   ✗ functions, undefined, Symbol → object properties are dropped; array slots become null
//   ✗ Date          → converted to a string, loses Date type
//   ✗ BigInt        → throws a TypeError
//   ✗ circular refs → throws a TypeError
const withFunction = [1, undefined, () => {}, new Date(), Symbol("x")];
const jsonResult   = JSON.parse(JSON.stringify(withFunction));
// Unsupported values are omitted from object properties; in an array, each slot becomes null.
console.log(jsonResult); // [1, null, null, "2024-...", null] — lossy!

// ── Strategy 3: structuredClone() — deep copy, handles more types ─────────────
// Available in modern browsers (2022+) and Node.js 17+
const structCopy = structuredClone(original);
structCopy[2].push(999);
console.log(original[2]); // [3, 4, 5] — untouched ✓ (true deep copy)

// structuredClone limitations:
//   ✗ functions     → throws a DataCloneError
//   ✗ Symbol        → throws a DataCloneError
//   ✓ Date, Map, Set, RegExp, typed arrays → all handled correctly

// ── Summary table ─────────────────────────────────────────────────────────────
// Strategy           | Depth  | Speed  | Safe for dates/maps? | Handles functions?
// Spread [...]        | shallow | fast   | no                  | n/a (not deep)
// JSON round-trip     | deep    | slow   | ✗ (loses Date type) | ✗ (silently dropped)
// structuredClone()   | deep    | medium | ✓                   | ✗ (throws)
