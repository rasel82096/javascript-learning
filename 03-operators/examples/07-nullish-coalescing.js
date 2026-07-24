"use strict";

// ─── NULLISH COALESCING (??) ───────────────────────────────────────────────
// `left ?? fallback` uses `fallback` ONLY if `left` is null or undefined.
// This is different from `||`, which also treats 0, "", and false as "missing."

// ── The problem with || for default values ────────────────────────────────────
const savedVolume  = 0;    // 0 is a valid volume setting — the user set it to mute
const missingVolume = null; // no volume was saved at all

console.log(savedVolume  || 50); // 50  ← WRONG: || treats 0 as absent and uses the fallback
console.log(savedVolume  ?? 50); //  0  ← CORRECT: ?? sees 0 and knows it's a real value
console.log(missingVolume ?? 50); // 50  ← correct: null is absent, fallback is used

// ── ??= : assign only when the variable is nullish ───────────────────────────
let displayName;
displayName ??= "Anonymous"; // assigns "Anonymous" because displayName is undefined
console.log(displayName); // "Anonymous"

let existingName = "Rafi";
existingName ??= "Anonymous"; // does NOT assign because existingName is already set
console.log(existingName); // "Rafi"

// ── Mixing ?? with && or || requires parentheses ──────────────────────────────
// JavaScript forbids `a ?? b || c` without parentheses — intentional to prevent mistakes.
// Use parentheses to make the grouping explicit.
const value = (null ?? "middle") || "end";
console.log(value); // "middle" — null → "middle" first, "middle" is truthy so || stops

// ── Summary: when to use || vs ?? ────────────────────────────────────────────
// Use ||  when falsy values (0, "", false) count as "missing" and should use the fallback.
// Use ??  when only null/undefined should use the fallback — 0, "", false are VALID values.
