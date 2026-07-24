"use strict";

// ─── EXTRACTING: slice, substring, split ──────────────────────────────────
// These methods pull parts of a string out without changing the original.

const text = "JavaScript is awesome";

// ── slice(start, end) — the recommended extractor ────────────────────────────
// Extracts from `start` up to (NOT including) `end`.
// Accepts negative indices (counts from end). Returns "" if start >= end.
console.log(text.slice(0, 10));  // "JavaScript"
console.log(text.slice(11));     // "is awesome" — from index 11 to end
console.log(text.slice(-7));     // "awesome"   — last 7 characters
console.log(text.slice(-7, -1)); // "awesom"    — 6 chars from the end

// ── substring(start, end) — similar to slice, but NO negatives ───────────────
// Negative arguments are treated as 0.
// If start > end, the arguments are SWAPPED automatically.
console.log(text.substring(0, 10)); // "JavaScript"
console.log(text.substring(11));    // "is awesome"
console.log(text.substring(-3));    // "JavaScript is awesome" — negative → 0 → whole string

// slice vs substring:
//   slice:     respects negatives, no argument swapping
//   substring: no negatives, swaps arguments if out of order
// Recommendation: use slice — it behaves more predictably.

// ── split(separator, limit?) — break a string into an array ──────────────────
const csv  = "Rasel,Mina,Tanvir,Sadia";
const names = csv.split(",");
console.log(names); // ["Rasel", "Mina", "Tanvir", "Sadia"]

const words = "JavaScript is awesome".split(" ");
console.log(words); // ["JavaScript", "is", "awesome"]

// Limit the number of items in the result
console.log(csv.split(",", 2)); // ["Rasel", "Mina"] — stop after 2

// Split into individual characters
console.log("hello".split("")); // ["h", "e", "l", "l", "o"]
// Or use spread — safer for emoji (handles surrogate pairs)
console.log([..."hi 😀"]);      // ["h", "i", " ", "😀"]

// ── Real-world patterns ───────────────────────────────────────────────────────

// Extract domain from an email
const email  = "user@example.com";
const domain = email.split("@")[1];
console.log(domain); // "example.com"

// Reverse words in a sentence
const sentence  = "awesome is JavaScript";
const reversed  = sentence.split(" ").reverse().join(" ");
console.log(reversed); // "JavaScript is awesome"

// Build a URL path from an array (and add the leading slash)
const pathParts = ["users", "42", "profile"];
const url = "/" + pathParts.join("/");
console.log(url); // "/users/42/profile"

// Get filename extension
function getExtension(filename) {
  const parts = filename.split(".");
  return parts.length > 1 ? parts.at(-1).toLowerCase() : "";
}
console.log(getExtension("report.PDF")); // "pdf"
console.log(getExtension("README"));     // ""
