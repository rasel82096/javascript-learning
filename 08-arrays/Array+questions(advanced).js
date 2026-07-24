/*Q1 — Active Customers Leaderboard
const customers = [
  { id: 1, name: "Alice", active: true, spent: 1200 },
  { id: 2, name: "Bob", active: false, spent: 2500 },
  { id: 3, name: "Charlie", active: true, spent: 1800 },
  { id: 4, name: "David", active: true, spent: 900 },
  { id: 5, name: "Eva", active: true, spent: 3000 }
];

Return the names of the top 3 active customers sorted by money spent from highest to lowest.

Expected Output
["Eva", "Charlie", "Alice"] */
/*const customers = [
  { id: 1, name: 'Alice', active: true, spent: 1200 },
  { id: 2, name: 'Bob', active: false, spent: 2500 },
  { id: 3, name: 'Charlie', active: true, spent: 1800 },
  { id: 4, name: 'David', active: true, spent: 900 },
  { id: 5, name: 'Eva', active: true, spent: 3000 },
];

const result=customers.sort((a,b)=>b.spent-a.spent).flatMap((elem,idx)=> (idx<4&&elem.active)?elem.name:[]
 )
console.log(result);*/

/*Q2 — Product Inventory Report
const products = [
  { name: "Keyboard", category: "Accessories", stock: 12 },
  { name: "Mouse", category: "Accessories", stock: 0 },
  { name: "Monitor", category: "Displays", stock: 5 },
  { name: "Laptop", category: "Computers", stock: 0 },
  { name: "Webcam", category: "Accessories", stock: 7 }
];

Build an object showing the total stock available per category.

Expected Output
{
  Accessories: 19,
  Displays: 5,
  Computers: 0
} */

/*const products = [
  { name: 'Keyboard', category: 'Accessories', stock: 12 },
  { name: 'Mouse', category: 'Accessories', stock: 0 },
  { name: 'Monitor', category: 'Displays', stock: 5 },
  { name: 'Laptop', category: 'Computers', stock: 0 },
  { name: 'Webcam', category: 'Accessories', stock: 7 },
];

const output=products.reduce((acc,curr)=>{
  acc[curr.category]=acc[curr.category]||0
  acc[curr.category]+=curr.stock;
  return acc;
},{})
console.log(output);*/

/*Q3 — Completed Orders Analytics
const orders = [
  { id: 1, status: "completed", amount: 120 },
  { id: 2, status: "pending", amount: 80 },
  { id: 3, status: "completed", amount: 250 },
  { id: 4, status: "cancelled", amount: 50 },
  { id: 5, status: "completed", amount: 180 }
];

Return an object containing:

Expected Output
{
  totalOrders: 3,
  totalRevenue: 550
} */

/*const orders = [
  { id: 1, status: 'completed', amount: 120 },
  { id: 2, status: 'pending', amount: 80 },
  { id: 3, status: 'completed', amount: 250 },
  { id: 4, status: 'cancelled', amount: 50 },
  { id: 5, status: 'completed', amount: 180 },
];

const output = orders.reduce(
  (acc, curr) => {
    if (curr.status === 'completed') {
      acc.totalOrders++;
      acc.totalRevenue += curr.amount;
    }

    return acc;
  },
  {
    totalOrders: 0,
    totalRevenue: 0,
  },
);
console.log(output);*/

/*Q4 — Blog Platform Tags
const articles = [
  {
    title: "React Basics",
    tags: ["react", "javascript"]
  },
  {
    title: "Node API",
    tags: ["node", "backend", "javascript"]
  },
  {
    title: "CSS Grid",
    tags: ["css", "frontend"]
  },
  {
    title: "Advanced React",
    tags: ["react", "frontend"]
  }
];

Return all tags:

unique
alphabetical
uppercase
Expected Output
[
  "BACKEND",
  "CSS",
  "FRONTEND",
  "JAVASCRIPT",
  "NODE",
  "REACT"
] */

/*const articles = [
  {
    title: 'React Basics',
    tags: ['react', 'javascript'],
  },
  {
    title: 'Node API',
    tags: ['node', 'backend', 'javascript'],
  },
  {
    title: 'CSS Grid',
    tags: ['css', 'frontend'],
  },
  {
    title: 'Advanced React',
    tags: ['react', 'frontend'],
  },
];

const output=[...new Set(articles.flatMap((elem)=>elem.tags))].sort().map((elem)=>elem.toUpperCase())
console.log(output);*/

/*Q5 — User Activity Dashboard
const users = [
  {
    name: "Alice",
    activities: ["login", "purchase", "logout"]
  },
  {
    name: "Bob",
    activities: ["login"]
  },
  {
    name: "Charlie",
    activities: ["login", "purchase", "purchase"]
  }
];

Find the user who performed the highest number of activities.

Expected Output
{
  name: "Charlie",
  activities: ["login", "purchase", "purchase"]
} */

const users = [
  {
    name: 'Alice',
    activities: ['login', 'purchase', 'logout'],
  },
  {
    name: 'Bob',
    activities: ['login'],
  },
  {
    name: 'Charlie',
    activities: ['login', 'purchase', 'purchase'],
  },
];
const result = users.reduce((max, user) => {
  return user.activities.length >= max.activities.length ? user : max;
});
console.log(result);