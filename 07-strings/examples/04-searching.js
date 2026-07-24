"use strict";

// ─── SEARCHING: includes, indexOf, startsWith, endsWith, match ────────────
// These methods find content inside a string. None of them change the original.

const sentence = "JavaScript is a powerful and flexible language.";

// ── includes(searchStr, position?) — true/false ───────────────────────────────
console.log(sentence.includes("powerful"));   // true
console.log(sentence.includes("Python"));     // false
console.log(sentence.includes("is", 20));     // false — search starts from index 20
// Case-sensitive: "javascript" ≠ "JavaScript"
console.log(sentence.includes("javascript")); // false

// ── indexOf(searchStr, position?) — first index, or -1 ───────────────────────
console.log(sentence.indexOf("a"));           // 1  — first 'a'
console.log(sentence.indexOf("a", 5));        // 7  — next 'a' after index 5
console.log(sentence.indexOf("Python"));      // -1 — not found
// lastIndexOf finds the LAST occurrence
console.log(sentence.lastIndexOf("a"));       // 37 — last 'a'

// ── startsWith(str, position?) / endsWith(str, length?) ──────────────────────
console.log(sentence.startsWith("Java"));          // true
console.log(sentence.startsWith("Script", 4));     // true — check from index 4
console.log(sentence.endsWith("language."));       // true
console.log(sentence.endsWith("powerful", 33));    // true — check first 33 chars only

// ── Real-world: file type validation ─────────────────────────────────────────
function isImageFile(filename) {
  const lower = filename.toLowerCase();
  return lower.endsWith(".jpg")
      || lower.endsWith(".png")
      || lower.endsWith(".webp");
}
console.log(isImageFile("photo.JPG"));   // true  — toLowerCase normalises case
console.log(isImageFile("doc.pdf"));     // false

// ── match(regex) — test against a regular expression ─────────────────────────
// Returns an array of matches (or null if no match).
const log   = "Error: file not found at line 42";
const match = log.match(/\d+/); // find first number
console.log(match?.[0]);  // "42" — the matched number as a string

// With the global flag (g) — find ALL matches
const text    = "Order #101 and #202 and #303";
const allNums = text.match(/#(\d+)/g);
console.log(allNums); // ["#101", "#202", "#303"]

// ── matchAll(regex) — iterate over all matches with capture groups ─────────────
const matches = [...text.matchAll(/#(\d+)/g)];
for (const m of matches) {
  console.log(`Full: ${m[0]}, ID: ${m[1]}`);
}
// Full: #101, ID: 101
// Full: #202, ID: 202
// Full: #303, ID: 303
