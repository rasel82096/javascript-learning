"use strict";

// ─── TRANSFORMING: replace, replaceAll, concat, padStart, padEnd ──────────
// These produce new strings with changes applied.

// ── replace(search, replacement) — replace the FIRST match ───────────────────
const log = "Error: file not found. Error: disk full.";
console.log(log.replace("Error", "Warning"));
// "Warning: file not found. Error: disk full." — only first "Error" replaced!

// ── replaceAll(search, replacement) — replace ALL matches ─────────────────────
console.log(log.replaceAll("Error", "Warning"));
// "Warning: file not found. Warning: disk full." — all replaced ✓

// ── Using a regex with replace — for powerful pattern-based replacement ────────
// Replace all digits with *
const cardNumber = "Card: 1234 5678 9012 3456";
const masked = cardNumber.replace(/\d/g, "*");
console.log(masked); // "Card: **** **** **** ****"

// Capitalise the first letter of each word (title case)
const title = "the quick brown fox";
const titleCase = title.replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCase); // "The Quick Brown Fox"

// ── Using a function as the replacement ──────────────────────────────────────
// The callback receives: (match, ...captureGroups, offset, fullString)
const template = "Hello {{name}}, you have {{count}} messages.";
const data = { name: "Rasel", count: 5 };
const filled = template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? "");
console.log(filled); // "Hello Rasel, you have 5 messages."

// ── concat() — join strings (prefer template literals or + for clarity) ────────
const first = "Hello";
const second = ", world!";
console.log(first.concat(second));  // "Hello, world!"
console.log(`${first}${second}`);   // "Hello, world!" — more readable ✓

// ── padStart(targetLength, padString?) — pad from the LEFT ───────────────────
// Makes a string reach a minimum length by adding padding characters.
console.log("5".padStart(3, "0"));   // "005"  — useful for IDs, times
console.log("42".padStart(5, "0"));  // "00042"
console.log("hello".padStart(8));    // "   hello" — spaces by default

// Real-world: format a time as HH:MM:SS
function formatTime(h, m, s) {
  return [h, m, s].map(n => String(n).padStart(2, "0")).join(":");
}
console.log(formatTime(9, 5, 3)); // "09:05:03"

// ── padEnd(targetLength, padString?) — pad from the RIGHT ────────────────────
console.log("hello".padEnd(10, "."));  // "hello....."
console.log("Name".padEnd(15));        // "Name           " — aligned for table display

// Real-world: create a simple text table with aligned columns
const students = [
  { name: "Rasel",  score: 92 },
  { name: "Mina",   score: 78 },
  { name: "Tanvir", score: 85 },
];
console.log("NAME".padEnd(10) + "SCORE");
console.log("─".repeat(16));
for (const s of students) {
  console.log(s.name.padEnd(10) + s.score);
}
