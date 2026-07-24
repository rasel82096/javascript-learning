"use strict";

// ─── ARRAY DESTRUCTURING ──────────────────────────────────────────────────
// Destructuring lets you unpack values from an array into named variables
// in a single, readable line.

// ── Basic destructuring ────────────────────────────────────────────────────────
const person = ["Rasel", 24, "Dhaka", "CSE"];
const [name, age, city, dept] = person;
console.log(name, age, city, dept); // "Rasel" 24 "Dhaka" "CSE"

// ── Skipping elements ──────────────────────────────────────────────────────────
const colors = ["red", "green", "blue", "yellow", "purple"];
const [first, , third] = colors; // skip "green" with a comma
console.log(first, third); // "red" "blue"

// ── Default values ────────────────────────────────────────────────────────────
// If the position doesn't exist, the default value is used instead.
const config = [1920, 1080];
const [width, height, fps = 60] = config; // fps not in array → uses default
console.log(width, height, fps); // 1920 1080 60

// ── Swap variables — without a temp variable ──────────────────────────────────
let celsius    = "hot";
let fahrenheit = "cold";
[fahrenheit, celsius] = [celsius, fahrenheit]; // classic destructuring swap
console.log(fahrenheit, celsius); // "hot" "cold"

// ── Destructuring function return values ─────────────────────────────────────
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = getMinMax([5, 2, 9, 1, 7, 3]);
console.log(min, max); // 1 9

// ── Destructuring in for...of loops ──────────────────────────────────────────
const students = [
  ["Rasel",  90],
  ["Tanvir", 85],
  ["Mim",    92],
  ["Sadia",  78],
];
for (const [studentName, score] of students) {
  const result = score >= 80 ? "PASS" : "FAIL";
  console.log(`${studentName} scored ${score} — ${result}`);
}

// ── Nested destructuring ──────────────────────────────────────────────────────
const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [, [, five]] = board; // skip row 0, skip col 0 in row 1
console.log(five); // 5

// ── Rest pattern ─────────────────────────────────────────────────────────────
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// ── String destructuring ─────────────────────────────────────────────────────
const word = "JavaScript";
const [a, b, c] = [...word]; // spread string into characters first
console.log(a, b, c);        // "J" "a" "v"
console.log(a + b + c);      // "Jav"
