"use strict";

// ─── OPTIONAL CHAINING (?.) ────────────────────────────────────────────────
// `object?.property` safely returns `undefined` if `object` is null or undefined,
// instead of throwing a TypeError.
// Use it when a value MAY be absent — not as a replacement for proper validation.

// ── Basic property access ─────────────────────────────────────────────────────
const response = { user: { profile: { city: "Dhaka" } } };
console.log(response.user?.profile?.city);    // "Dhaka"   — all levels exist
console.log(response.user?.contact?.phone);   // undefined — contact doesn't exist; no crash

// Without ?., you'd write: response.user && response.user.contact && response.user.contact.phone
// Optional chaining is much cleaner for this pattern.

// ── Nullish left-hand side ────────────────────────────────────────────────────
const maybeUser = null;
console.log(maybeUser?.name); // undefined — short-circuits at maybeUser safely

// ── Optional method calls — ?.() ─────────────────────────────────────────────
// Use ?.() to call a method that might not exist on the object.
const service = { format: (name) => name.toUpperCase() };
console.log(service.format?.("ada"));   // "ADA"       — format exists, called normally
console.log(service.missing?.("ada")); // undefined   — missing doesn't exist; no crash

// ── Optional computed property — ?.[] ────────────────────────────────────────
const key = "city";
console.log(response.user?.profile?.[key]); // "Dhaka" — dynamic key with safe access

// ── Combining ?. with ?? ─────────────────────────────────────────────────────
// A common pattern: use ?. to safely access, then ?? to provide a fallback.
const city = response.user?.address?.city ?? "City not provided";
console.log(city); // "City not provided" — address doesn't exist

// ── Important: don't overuse ?. ───────────────────────────────────────────────
// Optional chaining silences errors. If an object MUST exist, use a regular
// property access so a missing value causes an immediate error — not a silent undefined.
// Think: "is this value allowed to be absent, or is absence a bug?"
