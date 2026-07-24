"use strict";

/*
  ── Exercise 2 — String methods practice ─────────────────────────────────────
  Each task isolates one or two must-master methods. Predict the output first.
*/

// ── 1. includes + startsWith + endsWith ──────────────────────────────────────
const url = "https://www.example.com/products?sort=asc";
console.log(url.startsWith("https"));            // true — it's a secure URL
console.log(url.endsWith("asc"));                // true — sort direction
console.log(url.includes("products"));           // true — it's a product page
console.log(url.includes("users"));              // false — not a user page

// ── 2. indexOf — find all positions of a character ───────────────────────────
const text = "banana";
let idx = text.indexOf("a");
const positions = [];
while (idx !== -1) {
  positions.push(idx);
  idx = text.indexOf("a", idx + 1); // search from the next position
}
console.log(positions); // [1, 3, 5] — all positions of 'a' in "banana"

// ── 3. replace + replaceAll ───────────────────────────────────────────────────
const log = "ERROR: login failed. ERROR: token expired. ERROR: session ended.";
console.log(log.replace("ERROR", "WARN"));    // replaces only FIRST
console.log(log.replaceAll("ERROR", "WARN")); // replaces ALL ✓

// ── 4. padStart — format numbers with leading zeros ──────────────────────────
const orderIds = [1, 12, 123, 1234];
const formatted = orderIds.map(id => String(id).padStart(6, "0"));
console.log(formatted); // ["000001", "000012", "000123", "001234"]

// ── 5. split + reverse + join — reverse a string ─────────────────────────────
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("racecar"));    // "racecar" ← a palindrome!

// ── 6. match — extract all numbers from a string ─────────────────────────────
const receipt = "Keyboard: 1200 BDT, Mouse: 500 BDT, Cable: 150 BDT";
const prices  = receipt.match(/\d+/g)?.map(Number);
console.log(prices);                            // [1200, 500, 150]
console.log(prices?.reduce((a, b) => a + b, 0)); // 1850 — total

// ── 7. Template literal — multi-line HTML fragment ────────────────────────────
function renderCard(name, role, score) {
  return `
    <div class="card">
      <h2>${name}</h2>
      <p>Role: ${role}</p>
      <p>Score: ${score >= 80 ? "⭐ " : ""}${score}</p>
    </div>
  `.trim();
}
console.log(renderCard("Rasel", "Developer", 92));
console.log(renderCard("Mina",  "Designer",  71));

// ── 8. concat + repeat — build a simple progress bar ─────────────────────────
function progressBar(percent, width = 20) {
  const filled = Math.round((percent / 100) * width);
  return "[" + "█".repeat(filled) + "░".repeat(width - filled) + "]" + ` ${percent}%`;
}
console.log(progressBar(75));  // [███████████████░░░░░] 75%
console.log(progressBar(30));  // [██████░░░░░░░░░░░░░░] 30%
