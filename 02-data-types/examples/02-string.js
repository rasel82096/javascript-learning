"use strict";

// ─── STRING: text data ─────────────────────────────────────────────────────
// Strings are immutable sequences of Unicode characters.
// "Immutable" means once a string is created, it cannot be changed.
// String methods always return a NEW string — the original is untouched.

// ── Three ways to write string literals ──────────────────────────────────────
const single   = 'It\'s valid';  // single quotes — escape the apostrophe with \
const double   = "also valid";   // double quotes — most common
const name     = "Rafi";
const template = `Hello, ${name}! 2 + 3 = ${2 + 3}`;
// Template literals (backticks) can:
//   - embed any expression inside ${ }
//   - span multiple lines without escape characters
console.log(single, double, template);

// ── Reading string content ────────────────────────────────────────────────────
const text = "JavaScript";
console.log(text.length);           // 10  — number of characters
console.log(text[0]);               // "J" — first character (zero-indexed)
console.log(text.at(-1));           // "t" — last character (.at() accepts negatives)
console.log(text.toUpperCase());    // "JAVASCRIPT"
console.log(text.slice(4));         // "Script" — from index 4 to the end
console.log(text.includes("Script")); // true — case-sensitive substring check

// ── Methods return new strings — originals are never changed ─────────────────
const trimmed = "  learn  ".trim(); // removes leading and trailing whitespace
console.log(trimmed); // "learn"
// "  learn  " still exists unchanged somewhere in memory; trim() returned a copy.

// ── Unicode and emoji: the .length trap ──────────────────────────────────────
// .length counts UTF-16 code units, not visible characters.
// Many emoji and non-Latin scripts use 2 code units (a "surrogate pair").
console.log("😀".length);     // 2 — one emoji, but two code units
console.log("A".length);      // 1 — a regular ASCII character is one code unit
// Use Array.from("😀").length === 1 if you need the visible character count.
