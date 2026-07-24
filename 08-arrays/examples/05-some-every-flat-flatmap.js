"use strict";

// ─── NON-MUTATING METHODS: some, every, flat, flatMap ────────────────────
// More powerful tools that do not change the original array.

const scores = [72, 45, 88, 33, 91];

// ── some() — true if AT LEAST ONE element passes the test ────────────────────
// Stops checking as soon as it finds a match (short-circuit).
console.log(scores.some(s => s < 50));   // true  — at least one score below 50
console.log(scores.some(s => s > 100));  // false — none over 100

// Real-world: does the cart have any out-of-stock item?
const cart = [
  { name: "Keyboard", inStock: true  },
  { name: "Mouse",    inStock: false },
];
console.log(cart.some(item => !item.inStock)); // true — show a warning

// ── every() — true ONLY IF ALL elements pass the test ────────────────────────
// Stops as soon as it finds a failure (short-circuit).
console.log(scores.every(s => s > 0));   // true  — all positive
console.log(scores.every(s => s >= 50)); // false — some are below 50

// Real-world: is every form field filled?
const fields = [{ value: "Rasel" }, { value: "rasel@email.com" }, { value: "" }];
console.log(fields.every(f => f.value !== "")); // false — the last field is empty

// ── flat(depth) — flatten nested arrays ───────────────────────────────────────
const nested  = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]] — one level by default
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]   — two levels
console.log(nested.flat(Infinity)); // fully flattened regardless of depth

// Real-world: flatten document chunks before searching
const docChunks = [
  ["React is fast", "Use hooks"],
  ["FastAPI is async", "Python backend"],
];
const keyword = "Use hooks";
console.log(docChunks.flat().includes(keyword)); // true

// ── flatMap() — map then flat(1), in a single efficient pass ──────────────────
// Returns exactly one level of flattening after mapping.
// Returning [] from the callback effectively filters the element out.

// Example: expand each user's skills into "name:skill" strings
const devs = [
  { name: "Rasel", role: "dev",    skills: ["react", "python"] },
  { name: "John",  role: "intern", skills: ["html"]            },
  { name: "Sara",  role: "dev",    skills: ["node",  "sql"]    },
];
const devSkills = devs.flatMap(u =>
  u.role !== "intern" ? u.skills.map(sk => `${u.name}:${sk}`) : []
);
console.log(devSkills); // ["Rasel:react", "Rasel:python", "Sara:node", "Sara:sql"]

// Example: filter and transform in one step (replaces filter().map())
const nums    = [1, 2, 3, 4, 5, 6];
const doubled = nums.flatMap(n => (n % 2 === 0 ? [n * 2] : []));
console.log(doubled); // [4, 8, 12]
