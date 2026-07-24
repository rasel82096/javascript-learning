"use strict";

// ─── STRING IMMUTABILITY ───────────────────────────────────────────────────
// Strings are a primitive type in JavaScript. They are IMMUTABLE:
// once a string is created, it cannot be changed.
// Every string method returns a BRAND NEW string — the original is untouched.

// ── Demonstrating immutability ────────────────────────────────────────────────
let greeting = "hello";
const upper  = greeting.toUpperCase(); // returns a new string
console.log(greeting); // "hello" — completely unchanged
console.log(upper);    // "HELLO" — a new string

// Strings cannot be modified by index either
greeting[0] = "H"; // silently does nothing (no error in non-strict mode)
console.log(greeting); // "hello" — still the same

// ── String primitives vs String objects ──────────────────────────────────────
// A string PRIMITIVE is just a value: "hello"
// A String OBJECT is a wrapper: new String("hello")
// JavaScript auto-boxes primitives to objects when you call methods on them —
// so you almost never need to create a String object manually.

const primitive = "hello";          // string primitive — use this
const strObject = new String("hello"); // String object — avoid this

console.log(typeof primitive); // "string"
console.log(typeof strObject); // "object" ← not a primitive!

// Equality trap with String objects
console.log(primitive === "hello");    // true  — primitives compare by value
console.log(strObject === "hello");    // false — object compares by reference!
console.log(strObject.valueOf() === "hello"); // true — extract the primitive with .valueOf()

// ── Auto-boxing: how methods work on primitives ───────────────────────────────
// When you write "hello".toUpperCase(), JavaScript temporarily wraps "hello"
// in a String object, calls the method, returns the result, then discards the wrapper.
// You get the benefit of object methods without ever creating a String object yourself.
console.log("hello".toUpperCase()); // "HELLO" — works on a primitive ✓

// ── Practical consequences of immutability ────────────────────────────────────
// Building a string in a loop with += is inefficient for large data:
// each iteration creates and discards a new string in memory.
// For large string building, collect parts in an array and join at the end.
let result = "";
["Hello", ", ", "world", "!"].forEach(part => (result += part));
console.log(result); // "Hello, world!"

// More efficient for many parts:
const parts  = ["Hello", ", ", "world", "!"];
const joined = parts.join("");
console.log(joined); // "Hello, world!"
