"use strict";

/*
  ── Exercise 1 — String basics ───────────────────────────────────────────────
  Try each task before reading the solution below it.

  Tasks:
  1. Declare a string `city` = "  dhaka  ". Trim it, capitalise the first letter,
     and log the result. ("Dhaka")
  2. Create a template literal that shows: "Rasel is 24 years old and lives in Dhaka."
  3. Check if "Bangladesh" contains "glad" (case-insensitive). Log true or false.
  4. Log the last 3 characters of "JavaScript" using .slice() with a negative index.
  5. Split "2026-07-24" into [year, month, day] using destructuring.
*/

// ── Task 1 ────────────────────────────────────────────────────────────────────
const rawCity = "  dhaka  ";
const city    = rawCity.trim();
const capitalisedCity = city[0].toUpperCase() + city.slice(1);
console.log(capitalisedCity); // "Dhaka"

// ── Task 2 ────────────────────────────────────────────────────────────────────
const personName = "Rasel";
const personAge  = 24;
const personCity = "Dhaka";
const bio = `${personName} is ${personAge} years old and lives in ${personCity}.`;
console.log(bio); // "Rasel is 24 years old and lives in Dhaka."

// ── Task 3 ────────────────────────────────────────────────────────────────────
const country = "Bangladesh";
// includes() is case-sensitive, so we normalise both to lowercase first
console.log(country.toLowerCase().includes("glad")); // true

// ── Task 4 ────────────────────────────────────────────────────────────────────
const language = "JavaScript";
console.log(language.slice(-3)); // "ipt"

// ── Task 5 ────────────────────────────────────────────────────────────────────
const dateString        = "2026-07-24";
const [year, month, day] = dateString.split("-");
console.log({ year, month, day }); // { year: "2026", month: "07", day: "24" }
// Note: these are still strings — use Number() to convert if needed.
