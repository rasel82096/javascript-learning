"use strict";

// ─── UTF-16 AND UNICODE AWARENESS ─────────────────────────────────────────
// JavaScript strings are sequences of UTF-16 code units.
// Most common characters (letters, digits, basic symbols) use ONE code unit.
// Some characters (emoji, many non-Latin scripts) use TWO code units ("surrogate pairs").
// This means .length and index access can be surprising.

// ── .length counts code units, not visible characters ─────────────────────────
console.log("hello".length);   //  5 — each letter is one code unit
console.log("😀".length);      //  2 — one emoji, but two UTF-16 code units!
console.log("café".length);    //  4 — in most encodings; depends on normalisation

// ── Index access on surrogate pairs ──────────────────────────────────────────
const emoji = "😀";
console.log(emoji[0]); // "\uD83D" — the first surrogate half (looks broken)
console.log(emoji[1]); // "\uDE00" — the second surrogate half
// You can't reliably access emoji by index — the surrogate pair splits.

// ── Getting the actual character count (user-perceived) ────────────────────────
// Use Array.from() or the spread operator to iterate by Unicode code point
const text = "hello 😀";
console.log(text.length);            //  8 — counts code units (emoji = 2)
console.log(Array.from(text).length); //  7 — counts actual characters ✓
console.log([...text]);              // ['h','e','l','l','o',' ','😀'] — emoji kept intact

// ── for...of iterates by code point, not code unit ───────────────────────────
for (const char of "hi 😀") {
  console.log(char); // h, i, " ", 😀  (emoji is one item here)
}

// ── String.fromCodePoint and codePointAt ─────────────────────────────────────
console.log("A".codePointAt(0));     // 65  — Unicode code point for 'A'
console.log("😀".codePointAt(0));    // 128512 — emoji's code point (32-bit)
console.log(String.fromCodePoint(128512)); // "😀"

// ── Practical tip ─────────────────────────────────────────────────────────────
// When truncating user-generated text that might contain emoji, use Array.from:
function truncate(str, maxChars) {
  const chars = Array.from(str);
  return chars.length <= maxChars
    ? str
    : chars.slice(0, maxChars).join("") + "…";
}
console.log(truncate("hello 😀 world", 8)); // "hello 😀 …" — emoji not split
