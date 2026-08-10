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

//!q5.

/* Question 4 — Medium
You are building an AI subscription billing dashboard.
You receive this data from an API:
const subscriptions = [
  { plan: "Basic", price: 10, users: 3 },
  { plan: "Pro", price: 25, users: 5 },
  { plan: "Enterprise", price: 100, users: 2 },
  { plan: "Student", price: 5, users: 10 }
];
​
Write a function called getSubscriptionSummary(subscriptions) that returns an object like this:
{
  totalUsers: 20,
  totalRevenue: 375,
  planNames: "Basic | Pro | Enterprise | Student"
}
​
Requirements:
totalUsers should be the sum of all users
totalRevenue should be the sum of price * users
planNames should contain all plan names joined with " | "
Try to use:
reduce()
map()
join()
object return
optionally spread operator
Submit your solution when ready. */

const subscriptions = [
  { plan: 'Basic', price: 10, users: 3 },
  { plan: 'Pro', price: 25, users: 5 },
  { plan: 'Enterprise', price: 100, users: 2 },
  { plan: 'Student', price: 5, users: 10 },
];

function getSubscriptionSummary(subscriptions) {
  const summerry = subscriptions.reduce(
    (acc, curr) => {
      acc.totalUsers += curr.users;

      acc.totalRevenue += curr.price + curr.users;

      return acc;
    },
    {
      totalUsers: 0,
      totalRevenue: 0,
    },
  );

  return {
    ...summerry,
    planNames: subscriptions.map(elem => elem.plan).join('|'),
  };
}

console.log(getSubscriptionSummary(subscriptions));
