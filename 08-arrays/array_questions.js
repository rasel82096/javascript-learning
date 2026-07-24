/*Q10 — E-commerce Admin Dashboard
const orders = [
  {
    id: 1,
    status: "completed",
    amount: 120
  },
  {
    id: 2,
    status: "pending",
    amount: 80
  },
  {
    id: 3,
    status: "completed",
    amount: 200
  },
  {
    id: 4,
    status: "cancelled",
    amount: 50
  },
  {
    id: 5,
    status: "completed",
    amount: 180
  }
];

Calculate the total revenue generated from completed orders only.

Expected Output
500 */

/*const orders = [
  {
    id: 1,
    status: 'completed',
    amount: 120,
  },
  {
    id: 2,
    status: 'pending',
    amount: 80,
  },
  {
    id: 3,
    status: 'completed',
    amount: 200,
  },
  {
    id: 4,
    status: 'cancelled',
    amount: 50,
  },
  {
    id: 5,
    status: 'completed',
    amount: 180,
  },
];

const total_rev=orders.reduce((acc,curr)=>{
  curr.status==="completed"?acc+=curr.amount:acc+=0;

  return acc;
},0)
console.log(total_rev);*/
//!!Q9 very important
/*Q9 — Transaction Summary
const transactions = [
  { type: "credit", amount: 200 },
  { type: "debit", amount: 50 },
  { type: "credit", amount: 150 },
  { type: "debit", amount: 30 },
  { type: "transfer", amount: 100 }
];

Create an object where each transaction type stores its total amount.

Expected Output
{
  credit: 350,
  debit: 80,
  transfer: 100
} */
/*const transactions = [
  { type: 'credit', amount: 200 },
  { type: 'debit', amount: 50 },
  { type: 'credit', amount: 150 },
  { type: 'debit', amount: 30 },
  { type: 'transfer', amount: 100 },
];

const tra_summery=transactions.reduce((acc,curr)=>{
  acc[curr.type]=acc[curr.type]||0;
  acc[curr.type]+=curr.amount;
  return acc;
},{})
console.log(tra_summery);*/

/*Q8 — Notification Center
const notifications = [
  { id: 1, read: true },
  { id: 2, read: false },
  { id: 3, read: true },
  { id: 4, read: false }
];

Determine whether there is at least one unread notification.

Expected Output
true */

/*const notifications = [
  { id: 1, read: true },
  { id: 2, read: false },
  { id: 3, read: true },
  { id: 4, read: false },
];

const unread = notifications.some(elem => !elem.read);
console.log(unread);*/

/*Q7 — Analytics Dashboard
const visits = [
  { page: "Home", views: 150 },
  { page: "About", views: 70 },
  { page: "Products", views: 220 },
  { page: "Contact", views: 40 }
];

Calculate the total number of page views.

Expected Output
480 */

/*const visits = [
  { page: 'Home', views: 150 },
  { page: 'About', views: 70 },
  { page: 'Products', views: 220 },
  { page: 'Contact', views: 40 },
];
const total=visits.reduce((acc,curr)=>{
  return acc+=curr.views
},0)
console.log(total);*/

/*Q6 — Student Report
const students = [
  { name: "Rasel", score: 72 },
  { name: "Nadia", score: 45 },
  { name: "Karim", score: 58 },
  { name: "Sumi", score: 30 }
];

Create a new array where each student has:

{
  name: "...",
  grade: "pass" | "fail"
}
Expected Output
[
  { name: "Rasel", grade: "pass" },
  { name: "Nadia", grade: "fail" },
  { name: "Karim", grade: "pass" },
  { name: "Sumi", grade: "fail" }
] */

/*const students = [
  { name: 'Rasel', score: 72 },
  { name: 'Nadia', score: 45 },
  { name: 'Karim', score: 58 },
  { name: 'Sumi', score: 30 },
];

const report = students.reduce((acc, curr) => {
  if (curr.score > 50) {
    acc.push({
      name: `${curr.name}`,
      grade: `pass`,
    });
  }

  else{
    acc.push({
      name: `${curr.name}`,
      grade: `fail`,
    });
  }

  return acc;
}, []);
console.log(report);*/

/*Q5 — Blog Tags System
const posts = [
  ["react", "javascript"],
  ["node", "javascript", "backend"],
  ["react", "css"],
  ["css", "frontend"]
];

Build a single sorted list containing every tag only once.

Expected Output
[
  "backend",
  "css",
  "frontend",
  "javascript",
  "node",
  "react"
] */
/*const posts = [
  ['react', 'javascript'],
  ['node', 'javascript', 'backend'],
  ['react', 'css'],
  ['css', 'frontend'],
];
const final = [...new Set(posts.flat(1))].sort();
console.log(final);*/

/*Q4 — API Response Cleanup
const responses = [
  { status: "success", data: "dashboard" },
  { status: "error", data: null },
  { status: "success", data: "profile" },
  { status: "success", data: "settings" },
  { status: "error", data: null }
];

Create an array containing only successful data values converted to uppercase.

Expected Output
["DASHBOARD", "PROFILE", "SETTINGS"] */

/*const responses = [
  { status: 'success', data: 'dashboard' },
  { status: 'error', data: null },
  { status: 'success', data: 'profile' },
  { status: 'success', data: 'settings' },
  { status: 'error', data: null },
];

const success=responses.flatMap((elem)=>elem.status==="success"?elem.data.toUpperCase():[])
console.log(success);*/

/*Q3 — Product Search Result
const products = [
  { id: 1, name: "Keyboard", stock: 5 },
  { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Monitor", stock: 2 },
  { id: 4, name: "Webcam", stock: 0 }
];

Return only products that are available in stock.

Expected Output
[
  { id: 1, name: "Keyboard", stock: 5 },
  { id: 3, name: "Monitor", stock: 2 }
] */

/*const products = [
    { id: 1, name: 'Keyboard', stock: 5 },
    { id: 2, name: 'Mouse', stock: 0 },
    { id: 3, name: 'Monitor', stock: 2 },
    { id: 4, name: 'Webcam', stock: 0 },
  ];

  const result=products.filter(elem=>{
    if(elem.stock>0){
      return elem
    }
  })
  console.log(result);*/

/*Q2 — Shopping Cart Total
const cart = [
  { name: "Keyboard", price: 50, qty: 2 },
  { name: "Mouse", price: 20, qty: 3 },
  { name: "Monitor", price: 150, qty: 1 }
];

Calculate the final cart value.

Expected Output
310 */

/*const cart = [
  { name: 'Keyboard', price: 50, qty: 2 },
  { name: 'Mouse', price: 20, qty: 3 },
  { name: 'Monitor', price: 150, qty: 1 },
];

const result = cart.reduce((acc, curr) => {
  return (acc += curr.price * curr.qty);
}, 0);
console.log(result);*/

/*Q1 — User Dashboard
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "David", active: true },
  { id: 5, name: "Eva", active: false }
];

Create an array containing only the names of active users.

Expected Output
["Alice", "Charlie", "David"] */
/*const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "David", active: true },
  { id: 5, name: "Eva", active: false }
];

const activeUser=users.flatMap(elem=>elem.active?elem.name:[])
console.log(activeUser);*/
