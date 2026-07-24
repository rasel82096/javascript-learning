"use strict";

// ─── TEMPLATE LITERALS AND BASIC METHODS ─────────────────────────────────
// Before diving into individual methods, cover the three ways to write strings
// and the most essential whitespace/case methods.

// ── Three string literal forms ────────────────────────────────────────────────
const single   = 'It\'s a valid string'; // single quotes — escape the apostrophe
const double   = "also valid";           // double quotes
const name     = "Rasel";
const template = `Hello, ${name}! 2 + 3 = ${2 + 3}`;
// Template literals (backticks) can:
//   - embed ANY expression inside ${ }
//   - span multiple lines without \n
//   - be nested for complex formatting
console.log(single, double, template);

// ── Multi-line template literal ───────────────────────────────────────────────
const email = `
  Hi ${name},

  Welcome to JavaScript learning!

  Regards,
  The Team
`.trim(); // trim() removes the leading and trailing newlines from the template
console.log(email);

// ── trim(), trimStart(), trimEnd() — remove whitespace ────────────────────────
const rawInput = "   user@email.com   "; // typical form input
console.log(rawInput.trim());       // "user@email.com"
console.log(rawInput.trimStart()); // "user@email.com   " — only leading
console.log(rawInput.trimEnd());   // "   user@email.com" — only trailing

// ── toUpperCase() / toLowerCase() ────────────────────────────────────────────
const mixedCase = "JavaScript Is AWESOME";
console.log(mixedCase.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(mixedCase.toLowerCase()); // "javascript is awesome"

// Real-world: case-insensitive comparison
const userInput = "Bangladesh";
const stored    = "bangladesh";
console.log(userInput.toLowerCase() === stored.toLowerCase()); // true ✓

// ── repeat(n) — repeat a string n times ──────────────────────────────────────
console.log("ha".repeat(3));   // "hahaha"
console.log("─".repeat(30));   // a divider line: ──────────────────────────────

// ── String.raw — tagged template (advanced) ───────────────────────────────────
// String.raw ignores escape sequences — useful for file paths and regex patterns.
console.log(String.raw`C:\Users\name\Documents`); // "C:\Users\name\Documents"
// Without String.raw, \n and \U would be processed as escape sequences.
