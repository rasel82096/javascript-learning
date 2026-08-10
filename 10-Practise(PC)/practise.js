//!Q1.
/*
You’re building a product search feature for an e-commerce app.
const products = [
  { id: 1, name: "  Wireless Mouse ", category: "Accessories", inStock: true },
  { id: 2, name: "Gaming Keyboard", category: "Accessories", inStock: false },
  { id: 3, name: "USB-C Cable", category: "Cables", inStock: true },
  { id: 4, name: "Mouse Pad", category: "Accessories", inStock: true }
];

const searchTerm = "mouse";
​
Write a function searchProducts(products, searchTerm) that:
Finds only in-stock products whose names contain searchTerm.
Makes the search case-insensitive.
Removes extra spaces from product names.
Returns an array containing only the matching products’ id and cleaned name.
Expected result:
[
  { id: 1, name: "Wireless Mouse" },
  { id: 4, name: "Mouse Pad" }
]
​
Use destructuring, filter(), map(), includes(), and trim(). */

//?soln:
/* const products = [
  { id: 1, name: '  Wireless Mouse ', category: 'Accessories', inStock: true },
  { id: 2, name: 'Gaming Keyboard', category: 'Accessories', inStock: false },
  { id: 3, name: 'USB-C Cable', category: 'Cables', inStock: true },
  { id: 4, name: 'Mouse Pad', category: 'Accessories', inStock: true },
];

function searchProducts(products, searchTerm) {
  return products
    .filter(
      elem =>
        elem.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        elem.inStock,
    )
    .map(({ id, name }) => {
      return {
        id,
        name: name.trim(),
      };
    });
}

const searchTerm = 'Mouse';

console.log(searchProducts(products, searchTerm)); */

//!Q2

/* You’re building a usage dashboard for an AI chatbot. Each object property represents a user, and its value contains the number of tokens they used.
const usage = {
  user_101: { promptTokens: 120, responseTokens: 80 },
  admin_202: { promptTokens: 300, responseTokens: 150 },
  user_303: { promptTokens: 200, responseTokens: 100 },
  user_404: { promptTokens: 50, responseTokens: 25 }
};
​
Write a function calculateUserTokens(usage) that:
Ignores keys that don’t start with "user_".
Calculates each user’s total tokens: promptTokens + responseTokens.
Returns an object where each key is the user ID and each value is the total.
Also includes a grandTotal property.
Expected result:
{
  user_101: 200,
  user_303: 300,
  user_404: 75,
  grandTotal: 575
}
​
Use Object.entries(), startsWith(), destructuring, and reduce().
 */
/* const usage = {
  user_101: { promptTokens: 120, responseTokens: 80 },
  admin_202: { promptTokens: 300, responseTokens: 150 },
  user_303: { promptTokens: 200, responseTokens: 100 },
  user_404: { promptTokens: 50, responseTokens: 25 },
};

function calculateUserTokens(usage) {
  return Object.entries(usage).reduce(
    (acc, [use, cal]) => {
      if (use.startsWith('user_')) {
        acc.grandTotal += cal.promptTokens + cal.responseTokens;
        acc[use] = cal.promptTokens + cal.responseTokens;
      }

      return acc;
    },
    { grandTotal: 0 },
  );
}

console.log(calculateUserTokens(usage)); */

//!Q3.

/* You’re building authorization for a Next.js dashboard.
const users = [
  { id: 1, name: "Rasel", role: "admin", permissions: ["read", "write", "delete"] },
  { id: 2, name: "Nadia", role: "editor", permissions: ["read", "write"] },
  { id: 3, name: "Karim", role: "viewer", permissions: ["read"] }
];
​
Write a function:
checkAccess(users, userId, requiredPermissions)
​
It should:
Find the user with the matching userId.
Check whether the user has every required permission.
Return this object if access is allowed:
{
  id: 2,
  name: "Nadia",
  access: true
}
​
If the user exists but lacks any required permission, return the same structure with access: false.
If the user doesn’t exist, return:
{
  error: "User not found"
}
​
Example:
checkAccess(users, 2, ["read", "write"]);
/ { id: 2, name: "Nadia", access: true }

checkAccess(users, 3, ["read", "write"]);
 { id: 3, name: "Karim", access: false }
​
Use destructuring, find(), includes(), and an array-checking method. */

//?soln:
/* const users = [
  {
    id: 1,
    name: 'Rasel',
    role: 'admin',
    permissions: ['read', 'write', 'delete'],
  },
  { id: 2, name: 'Nadia', role: 'editor', permissions: ['read', 'write'] },
  { id: 3, name: 'Karim', role: 'viewer', permissions: ['read'] },
];

function checkAccess(users, userId, requiredPermissions) {
  const user = users.find(elem => elem.id === userId);
  if (!user) {
    return {
      error: 'User not found',
    };
  }

  const { id, name, permissions } = user;

  const access = permissions.every(per => {
    return requiredPermissions.includes(per);
  });
  return {
    id,
    name,
    access,
  };
}

console.log(checkAccess(users, 2, ['read', 'write'])); */

//!q4
/*Question 4 of 5 — Medium
You’re building a configuration parser for a FastAPI/Next.js project. The server receives settings as a single string:
const configText = `
  API_URL = https://api.example.com
  MODEL_NAME = gpt-4
  EMPTY_VALUE =
  # This is a comment
  MAX_RESULTS = 10
`;
​
Write a function parseConfig(configText) that:
Splits the string into separate lines.
Removes whitespace around each line.
Ignores empty lines and lines starting with #.
Ignores settings with an empty value.
Returns the remaining settings as an object.
Expected result:
{
  API_URL: "https://api.example.com",
  MODEL_NAME: "gpt-4",
  MAX_RESULTS: "10"
}
​
Use split(), trim(), startsWith(), filter(), map(), destructuring, and Object.fromEntries().
 */
/* const configText = `
  API_URL = https://api.example.com
  MODEL_NAME = gpt-4
  EMPTY_VALUE =
  # This is a comment
  MAX_RESULTS = 10
`;

function parseConfig(configText) {
  const result = configText
    .split('\n')
    .filter(elem => elem.includes('_'))
    .map(line => {
      const [key, value] = line.split('=');

      return [key.trim(), value.trim()];
    })
    .filter(([key, value]) => value != '');

  return Object.fromEntries(result);
}

console.log(parseConfig(configText)); */

//!Q5.

/* Question 1 — Easy/Medium
You are building a small AI course search feature for a learning platform.
You receive this array of course titles from an API:
const courses = [
  "  React Basics for Beginners  ",
  "Next.js Full Stack Project",
  "JavaScript Array Methods",
  "FastAPI Backend Development",
  "LangChain RAG Chatbot",
  "React AI Dashboard"
];
​
Write a function called searchCourses(courses, keyword) that:
Removes extra spaces from each course title
Checks if the course title includes the keyword
Search should be case-insensitive
Returns an array of matching course titles
Example:
searchCourses(courses, "react");
​
Expected output:
[
  "React Basics for Beginners",
  "React AI Dashboard"
]
​
Use any methods you know, but try to use at least:
trim()
includes()
filter()
a function  
optionally map() if needed
Submit your answer, and I’ll review it honestly. */

//?soln
/* function searchCourses(courses, keyword) {
  const cleanKeyword = keyword.trim().toLowerCase();

  return courses
    .map(course => course.trim())
    .filter(course => course.toLowerCase().includes(cleanKeyword));
}

console.log(searchCourses(courses, 'react')); */

//!Q6.

/* You are building a student dashboard for a JavaScript learning app.
You receive this array from an API:
const students = [
  { name: "Rasel", score: 82, course: "JavaScript" },
  { name: "Mina", score: 45, course: "React" },
  { name: "Tanvir", score: 67, course: "JavaScript" },
  { name: "Nadia", score: 90, course: "Next.js" },
  { name: "Hasan", score: 38, course: "JavaScript" }
];
​
Write a function called getPassedJSStudents(students) that:
Finds only students whose course is "JavaScript"
Keeps only students with score >= 60
Returns an array of their names only
Expected output:
["Rasel", "Tanvir"]
​
Try to use:
filter()
map()
object property access
a function
Submit your solution when ready. */

//?soln

/* const students = [
  { name: 'Rasel', score: 82, course: 'JavaScript' },
  { name: 'Mina', score: 45, course: 'React' },
  { name: 'Tanvir', score: 67, course: 'JavaScript' },
  { name: 'Nadia', score: 90, course: 'Next.js' },
  { name: 'Hasan', score: 38, course: 'JavaScript' },
];

function getPassedJSStudents(students) {
  return students
    .filter(
      stu =>
        stu.score >= 60 && stu.course.trim().toLowerCase() === 'javascript',
    )
    .map(({ name }) => {
      return name;
    });
}

console.log(getPassedJSStudents(students)); */

//!Q7.

/* You are building a shopping cart summary for an e-commerce web app.
You receive this cart data from an API:
const cart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 20, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 },
  { name: "USB Cable", price: 10, quantity: 3 }
];
​
Write a function called getCartSummary(cart) that returns an object like this:
{
  totalItems: 7,
  totalPrice: 920,
  itemNames: "Laptop, Mouse, Keyboard, USB Cable"
}
​
Requirements:
totalItems should be the sum of all quantities
totalPrice should be the sum of price * quantity
itemNames should be all product names joined by comma
Try to use:
reduce()
map()
join()
object return
a function
Submit your solution when ready.
 */
/* const cart = [
  { name: 'Laptop', price: 800, quantity: 1 },
  { name: 'Mouse', price: 20, quantity: 2 },
  { name: 'Keyboard', price: 50, quantity: 1 },
  { name: 'USB Cable', price: 10, quantity: 3 },
];

function getCartSummary(cart) {
  const summary = cart.reduce(
    (acc, curr) => {
      acc.totalItems += curr.quantity;
      acc.totalPrice += curr.price * curr.quantity;
      return acc;
    },
    {
      totalItems: 0,
      totalPrice: 0,
    },
  );

  return {
    ...summary,
    itemNames: cart.map(item => item.name).join(', '),
  };
}

console.log(getCartSummary(cart)); */
