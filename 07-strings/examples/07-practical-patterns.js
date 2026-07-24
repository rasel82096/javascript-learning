"use strict";

// ─── PRACTICAL PATTERNS — combining methods ────────────────────────────────
// Real-world string processing almost always chains multiple methods together.
// This file shows common patterns you'll use every day.

// ── 1. Sanitising user input ──────────────────────────────────────────────────
// Trim whitespace, normalise case, remove special characters
function sanitiseUsername(input) {
  return input
    .trim()             // remove leading/trailing whitespace
    .toLowerCase()      // normalise to one case
    .replace(/[^a-z0-9_]/g, ""); // keep only letters, digits, underscores
}
console.log(sanitiseUsername("  Rasel__123!!  ")); // "rasel__123"
console.log(sanitiseUsername("  Hello World  ")); // "helloworld"

// ── 2. Slugify a title (for URLs) ────────────────────────────────────────────
function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")        // replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ""); // remove everything else
}
console.log(slugify("JavaScript is AWESOME!"));  // "javascript-is-awesome"
console.log(slugify("  Hello, World  "));        // "hello-world"

// ── 3. Extracting parts of structured strings ─────────────────────────────────
// Parse a simple key=value config line
function parseConfigLine(line) {
  const [key, ...valueParts] = line.split("=");
  return { key: key.trim(), value: valueParts.join("=").trim() };
}
console.log(parseConfigLine("  database = postgres://localhost:5432 "));
// { key: "database", value: "postgres://localhost:5432" }

// ── 4. Truncate with ellipsis ─────────────────────────────────────────────────
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1).trimEnd() + "…";
}
console.log(truncate("JavaScript is a versatile language", 20)); // "JavaScript is a ver…"
console.log(truncate("Short", 20));                              // "Short"

// ── 5. Count word occurrences ─────────────────────────────────────────────────
function countOccurrences(text, word) {
  const pattern = new RegExp(`\\b${word}\\b`, "gi"); // word boundary, case-insensitive
  return (text.match(pattern) ?? []).length;
}
const article = "JavaScript is great. I love JavaScript. JavaScript everywhere!";
console.log(countOccurrences(article, "javascript")); // 3

// ── 6. Check if a string is a palindrome ─────────────────────────────────────
function isPalindrome(str) {
  const clean    = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
}
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello"));                       // false

// ── 7. Parse a CSV row safely ─────────────────────────────────────────────────
function parseCSVRow(row) {
  return row.split(",").map(cell => cell.trim());
}
console.log(parseCSVRow(" Rasel , 24 , Dhaka , CSE "));
// ["Rasel", "24", "Dhaka", "CSE"]

// ── 8. Format a number as currency string ────────────────────────────────────
function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
console.log(formatCurrency(1234.5));   // "$1,234.50"
console.log(formatCurrency(1234.5, "BDT")); // "BDT 1,234.50"
