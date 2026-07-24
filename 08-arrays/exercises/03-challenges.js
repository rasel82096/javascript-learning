"use strict";

/*
  ── Exercise 3 — Real-world challenges (your own problems, organized) ─────────
  All of these are from your own files. They are now ordered by difficulty
  and each has a short explanation of the key technique used.
*/

// ── Q1 — User Dashboard (filter + map) ───────────────────────────────────────
// Key: filter to keep, map to transform
const users = [
  { id: 1, name: "Alice",   active: true  },
  { id: 2, name: "Bob",     active: false },
  { id: 3, name: "Charlie", active: true  },
  { id: 4, name: "David",   active: true  },
  { id: 5, name: "Eva",     active: false },
];
const activeNames = users.filter(u => u.active).map(u => u.name);
console.log(activeNames); // ["Alice", "Charlie", "David"]

// ── Q2 — Student Report (map with ternary) ────────────────────────────────────
// Key: map transforms each item into a new shape
const students = [
  { name: "Rasel", score: 72 },
  { name: "Nadia", score: 45 },
  { name: "Karim", score: 58 },
  { name: "Sumi",  score: 30 },
];
const report = students.map(s => ({ name: s.name, grade: s.score > 50 ? "pass" : "fail" }));
console.log(report);
// [{ name: "Rasel", grade: "pass" }, { name: "Nadia", grade: "fail" }, ...]

// ── Q3 — Blog Tags (flat + Set for deduplication) ─────────────────────────────
// Key: flat() to merge nested arrays, Set to deduplicate, sort to order
const posts = [
  ["react", "javascript"],
  ["node", "javascript", "backend"],
  ["react", "css"],
  ["css", "frontend"],
];
const uniqueTags = [...new Set(posts.flat())].sort();
console.log(uniqueTags); // ["backend", "css", "frontend", "javascript", "node", "react"]

// ── Q4 — API Cleanup (flatMap for filter + map in one step) ───────────────────
// Key: flatMap returning [] skips the element
const responses = [
  { status: "success", data: "dashboard" },
  { status: "error",   data: null        },
  { status: "success", data: "profile"   },
  { status: "success", data: "settings"  },
  { status: "error",   data: null        },
];
const successData = responses.flatMap(r =>
  r.status === "success" ? [r.data.toUpperCase()] : []
);
console.log(successData); // ["DASHBOARD", "PROFILE", "SETTINGS"]

// ── Q5 — Transaction Summary (reduce to accumulate by key) ────────────────────
// Key: reduce building an object, using || to initialise missing keys
const transactions = [
  { type: "credit",   amount: 200 },
  { type: "debit",    amount: 50  },
  { type: "credit",   amount: 150 },
  { type: "debit",    amount: 30  },
  { type: "transfer", amount: 100 },
];
const summary = transactions.reduce((acc, t) => {
  acc[t.type] = (acc[t.type] || 0) + t.amount;
  return acc;
}, {});
console.log(summary); // { credit: 350, debit: 80, transfer: 100 }

// ── Q6 — Product Inventory by Category (reduce + accumulate numbers) ──────────
const inventory = [
  { name: "Keyboard", category: "Accessories", stock: 12 },
  { name: "Mouse",    category: "Accessories", stock: 0  },
  { name: "Monitor",  category: "Displays",    stock: 5  },
  { name: "Laptop",   category: "Computers",   stock: 0  },
  { name: "Webcam",   category: "Accessories", stock: 7  },
];
const stockByCategory = inventory.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + p.stock;
  return acc;
}, {});
console.log(stockByCategory); // { Accessories: 19, Displays: 5, Computers: 0 }

// ── Q7 — Completed Orders (reduce to multi-field accumulator) ─────────────────
const orders = [
  { id: 1, status: "completed", amount: 120 },
  { id: 2, status: "pending",   amount: 80  },
  { id: 3, status: "completed", amount: 250 },
  { id: 4, status: "cancelled", amount: 50  },
  { id: 5, status: "completed", amount: 180 },
];
const orderStats = orders.reduce((acc, o) => {
  if (o.status === "completed") {
    acc.totalOrders++;
    acc.totalRevenue += o.amount;
  }
  return acc;
}, { totalOrders: 0, totalRevenue: 0 });
console.log(orderStats); // { totalOrders: 3, totalRevenue: 550 }

// ── Q8 — Unique sorted uppercase tags (flatMap + Set + sort + map) ─────────────
// Key: chaining flatMap → new Set → sort → map for a multi-step pipeline
const articles = [
  { title: "React Basics",   tags: ["react", "javascript"]           },
  { title: "Node API",       tags: ["node", "backend", "javascript"] },
  { title: "CSS Grid",       tags: ["css", "frontend"]               },
  { title: "Advanced React", tags: ["react", "frontend"]             },
];
const allTags = [...new Set(articles.flatMap(a => a.tags))]
  .sort()
  .map(t => t.toUpperCase());
console.log(allTags); // ["BACKEND", "CSS", "FRONTEND", "JAVASCRIPT", "NODE", "REACT"]

// ── Q9 — Most Active User (reduce to find maximum) ───────────────────────────
// Key: reduce accumulating the "winner" instead of a number
const activityUsers = [
  { name: "Alice",   activities: ["login", "purchase", "logout"]             },
  { name: "Bob",     activities: ["login"]                                    },
  { name: "Charlie", activities: ["login", "purchase", "purchase"]           },
];
const mostActive = activityUsers.reduce((champion, user) =>
  user.activities.length >= champion.activities.length ? user : champion
);
console.log(mostActive); // { name: "Charlie", activities: [...] }
