"use strict";

/*
  ── Exercise 3 — String challenges ───────────────────────────────────────────
  Harder problems that require combining multiple string methods.
  Try to write each solution before reading it.
*/

// ── Q1 — Username validator ───────────────────────────────────────────────────
// Rules: 3–20 chars, letters/digits/underscores only, cannot start with a digit
function validateUsername(input) {
  const username = input.trim();
  if (username.length < 3 || username.length > 20) return "Invalid: length must be 3–20 chars";
  if (/^\d/.test(username))             return "Invalid: cannot start with a digit";
  if (/[^a-zA-Z0-9_]/.test(username))  return "Invalid: only letters, digits, and _ allowed";
  return `Valid: "${username}"`;
}
console.log(validateUsername("  rasel_123  ")); // Valid: "rasel_123"
console.log(validateUsername("ab"));            // Invalid: length must be 3–20 chars
console.log(validateUsername("9user"));         // Invalid: cannot start with a digit
console.log(validateUsername("ra sel"));        // Invalid: only letters, digits, and _ allowed

// ── Q2 — Mask sensitive data ───────────────────────────────────────────────────
// Show only the last 4 digits of a card number; mask the rest with *
function maskCard(cardNumber) {
  const digits  = cardNumber.replace(/\D/g, ""); // strip non-digits
  const visible = digits.slice(-4);
  const masked  = "*".repeat(digits.length - 4) + visible;
  // Format into groups of 4
  return masked.match(/.{1,4}/g)?.join(" ") ?? masked;
}
console.log(maskCard("1234 5678 9012 3456")); // "**** **** **** 3456"
console.log(maskCard("4111111111111111"));    // "**** **** **** 1111"

// ── Q3 — camelCase to kebab-case converter ─────────────────────────────────────
// "backgroundColor" → "background-color"
function camelToKebab(str) {
  return str
    .replace(/([A-Z])/g, "-$1") // insert a hyphen before each uppercase letter
    .toLowerCase();
}
console.log(camelToKebab("backgroundColor")); // "background-color"
console.log(camelToKebab("borderTopWidth"));  // "border-top-width"
console.log(camelToKebab("fontSize"));        // "font-size"

// ── Q4 — kebab-case to camelCase converter ────────────────────────────────────
// "background-color" → "backgroundColor"
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
console.log(kebabToCamel("background-color")); // "backgroundColor"
console.log(kebabToCamel("border-top-width")); // "borderTopWidth"

// ── Q5 — Highlight search term in text ───────────────────────────────────────
// Wrap all occurrences of a search term in ** markers (case-insensitive)
function highlight(text, term) {
  const regex = new RegExp(`(${term})`, "gi"); // capture group so the term is preserved
  return text.replace(regex, "**$1**");
}
console.log(highlight("JavaScript is great. I love javascript.", "javascript"));
// "**JavaScript** is great. I love **javascript**."

// ── Q6 — Simple template engine ───────────────────────────────────────────────
// Replace {{key}} placeholders with values from a data object
function renderTemplate(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return Object.hasOwn(data, key) ? String(data[key]) : match; // keep placeholder if missing
  });
}
const template = "Dear {{name}}, your order #{{orderId}} totalling ${{total}} is {{status}}.";
console.log(renderTemplate(template, {
  name:    "Rasel",
  orderId: 10042,
  total:   "124.99",
  status:  "confirmed",
}));
// "Dear Rasel, your order #10042 totalling $124.99 is confirmed."

console.log(renderTemplate("Hello {{name}}, role: {{role}}", { name: "Mina" }));
// "Hello Mina, role: {{role}}"  — missing key kept as placeholder

// ── Q7 — Word frequency map ───────────────────────────────────────────────────
function wordFrequency(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")  // strip punctuation
    .split(/\s+/)               // split on any whitespace
    .filter(Boolean)            // remove empty strings from multiple spaces
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
}
const paragraph = "the quick brown fox jumps over the lazy dog the fox";
console.log(wordFrequency(paragraph));
// { the: 3, fox: 2, quick: 1, brown: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }
