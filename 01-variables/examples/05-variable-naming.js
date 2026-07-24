"use strict";

// ─── VARIABLE NAMING: clarity beats brevity ────────────────────────────────
// A good name tells the reader what the value *means* without needing a comment.
// JavaScript convention: camelCase for variables and functions.

// ── Good names ────────────────────────────────────────────────────────────────
const userName = "Mina";           // camelCase — standard for variables
const maximumRetries = 3;          // full words, no cryptic abbreviations
let isLoggedIn = false;            // boolean names read like a yes/no question
const DEFAULT_TIMEOUT_MS = 5_000;  // UPPER_SNAKE_CASE signals a module-level constant
// The underscores in 5_000 are just visual separators — the value is still 5000

console.log({ userName, maximumRetries, isLoggedIn, DEFAULT_TIMEOUT_MS });

// ── Special characters: $ and _ ───────────────────────────────────────────────
// Both are valid anywhere in a name. Their meaning is purely by convention.
const $element = "search input";  // $ often signals a DOM element (jQuery style)
const _internalValue = 7;          // leading _ suggests "treat this as private"
console.log($element, _internalValue);

// ── Invalid names — left commented so the file still runs ────────────────────
// const 2fa = true;       // ❌ cannot start with a digit
// const user-name = "x";  // ❌ hyphens mean subtraction, not a word separator
// const class = "x";      // ❌ `class` is a reserved keyword

// ── Intent over implementation ────────────────────────────────────────────────
// Bad:  const n = 250;              — what is n? a count? a price? in what unit?
// Good: const elapsedMilliseconds = 250; — the name explains it all
// Bonus: adding a unit to the name (Ms, Km, Px) prevents "is this seconds or ms?" bugs.
const elapsedMilliseconds = 250;
console.log(elapsedMilliseconds);
