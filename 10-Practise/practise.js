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

/* const subscriptions = [
  { plan: 'Basic', price: 10, users: 3 },
  { plan: 'Pro', price: 25, users: 5 },
  { plan: 'Enterprise', price: 100, users: 2 },
  { plan: 'Student', price: 5, users: 10 },
];

function getSubscriptionSummary(subscriptions) {
  const summarry = subscriptions.reduce(
    (acc, curr) => {
      acc.totalUsers += curr.users;

      acc.totalRevenue += curr.price * curr.users;

      return acc;
    },
    {
      totalUsers: 0,
      totalRevenue: 0,
    },
  );

  return {
    ...summarry,
    planNames: subscriptions.map(elem => elem.plan.join('|'),
  };
}

console.log(getSubscriptionSummary(subscriptions)); */

//!Q7.
/* Next Question — Medium
You’re building a RAG application. Search results arrive from multiple knowledge sources:
const searchResults = [
  {
    source: "Notion",
    documents: [
      { title: "React Guide", score: 0.92 },
      { title: "CSS Notes", score: 0.65 }
    ]
  },
  {
    source: "GitHub",
    documents: [
      { title: "RAG Implementation", score: 0.95 },
      { title: "React Components", score: 0.81 }
    ]
  },
  {
    source: "Google Drive",
    documents: [
      { title: "FastAPI Handbook", score: 0.88 }
    ]
  }
];
​
Write a function:
getTopDocuments(searchResults, minimumScore, limit)
​
It should:
Combine all nested documents into one array.
Add the corresponding source to every document.
Keep only documents whose score is greater than or equal to minimumScore.
Sort them from highest to lowest score.
Return only the first limit documents.
Example:
getTopDocuments(searchResults, 0.8, 3);
​
Expected result:
[
  { title: "RAG Implementation", score: 0.95, source: "GitHub" },
  { title: "React Guide", score: 0.92, source: "Notion" },
  { title: "FastAPI Handbook", score: 0.88, source: "Google Drive" }
]
​
Use destructuring, the spread operator, flatMap(), filter(), sort(), and slice(). */

//!soln
/* const searchResults = [
  {
    source: 'Notion',
    documents: [
      { title: 'React Guide', score: 0.92 },
      { title: 'CSS Notes', score: 0.65 },
    ],
  },
  {
    source: 'GitHub',
    documents: [
      { title: 'RAG Implementation', score: 0.95 },
      { title: 'React Components', score: 0.81 },
    ],
  },
  {
    source: 'Google Drive',
    documents: [{ title: 'FastAPI Handbook', score: 0.88 }],
  },
];

function getTopDocuments(searchResults, minimumScore, limit) {
  return searchResults
    .flatMap(({ source, documents }) =>
      documents.map(document => ({
        ...document,
        source,
      })),
    )
    .filter(({ score }) => score >= minimumScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

console.log(getTopDocuments(searchResults, 0.8, 3)); */

//!Q8**.

/* You’re building a product search system. Products are coming from multiple stores:

const storeResults = [
  {
    store: "Amazon",
    products: [
      { name: "Wireless Mouse", rating: 4.5, price: 25 },
      { name: "Keyboard", rating: 3.8, price: 40 }
    ]
  },
  {
    store: "BestBuy",
    products: [
      { name: "Gaming Headset", rating: 4.8, price: 60 },
      { name: "Webcam", rating: 4.2, price: 50 }
    ]
  },
  {
    store: "Walmart",
    products: [
      { name: "USB Hub", rating: 4.6, price: 20 }
    ]
  }
];

Write a function:

getTopProducts(storeResults, minimumRating, limit)
Requirements:
Combine all nested products into one array.
Add the corresponding store to every product.
Keep only products whose rating is greater than or equal to minimumRating.
Sort products from highest rating to lowest rating.
Return only the first limit products.
Example:
getTopProducts(storeResults, 4.5, 3);
Expected result:
[
  { name: "Gaming Headset", rating: 4.8, price: 60, store: "BestBuy" },
  { name: "USB Hub", rating: 4.6, price: 20, store: "Walmart" },
  { name: "Wireless Mouse", rating: 4.5, price: 25, store: "Amazon" }
]
Your constraints

Try to use:

destructuring
spread operator
flatMap()
filter()
sort()
slice() */

//?soln:

/* const storeResults = [
  {
    store: 'Amazon',
    products: [
      { name: 'Wireless Mouse', rating: 4.5, price: 25 },
      { name: 'Keyboard', rating: 3.8, price: 40 },
    ],
  },
  {
    store: 'BestBuy',
    products: [
      { name: 'Gaming Headset', rating: 4.8, price: 60 },
      { name: 'Webcam', rating: 4.2, price: 50 },
    ],
  },
  {
    store: 'Walmart',
    products: [{ name: 'USB Hub', rating: 4.6, price: 20 }],
  },
];

function getTopProducts(storeResults, minimumRating, limit) {
  return storeResults
    .flatMap(({ store, products }) => {
      return products
        .map(elem => {
          return {
            ...elem,
            store,
          };
        })
        .filter(({ rating }) => rating >= minimumRating)
        .sort((a, b) => b.price - a.price);
    })
    .slice(0, limit);
}

console.log(getTopProducts(storeResults, 3.8, 3)); */

//!Q9*

/* Practice Question 2 — Medium+

You're building a course recommendation system. Courses come from different platforms:

const platformResults = [
  {
    platform: "Udemy",
    courses: [
      { title: "JavaScript Basics", students: 1200, score: 8.7 },
      { title: "React Mastery", students: 900, score: 9.2 }
    ]
  },
  {
    platform: "Coursera",
    courses: [
      { title: "Python for Beginners", students: 2000, score: 9.0 },
      { title: "Data Structures", students: 1500, score: 8.5 }
    ]
  },
  {
    platform: "edX",
    courses: [
      { title: "Machine Learning", students: 1800, score: 9.4 }
    ]
  }
];

Write:

getTopCourses(platformResults, minimumScore, limit)
Requirements:
Combine all courses into one array.
Add the corresponding platform to every course.
Keep courses whose score is greater than or equal to minimumScore.
Sort them by score from highest to lowest.
If two courses have the same score, sort those courses by number of students from highest to lowest.
Return only the first limit courses.
Example:
getTopCourses(platformResults, 8.7, 4);
Expected result:
[
  { title: "Machine Learning", students: 1800, score: 9.4, platform: "edX" },
  { title: "React Mastery", students: 900, score: 9.2, platform: "Udemy" },
  { title: "Python for Beginners", students: 2000, score: 9.0, platform: "Coursera" },
  { title: "JavaScript Basics", students: 1200, score: 8.7, platform: "Udemy" }
]

For this one, try to figure out how to modify your sort():

.sort((a, b) => {
   your logic here
}) */

//!Q10
/* 
const employees = [
  { id: 1, name: 'Amit', salary: 50000, active: true },
  {
    id: 2,
    name: 'Rahul',
    salary: 80000,
    active: false,
  },
  { id: 3, name: 'Neha', salary: 90000, active: true },
];
return name of active employees whose salary is greater thab 45000 */

/* const employees = [
  { id: 1, name: 'Amit', salary: 50000, active: true },
  {
    id: 2,
    name: 'Rahul',
    salary: 80000,
    active: false,
  },
  { id: 3, name: 'Neha', salary: 90000, active: true },
];

function getemployees(employees) {
  return employees.flatMap(({ name, salary, active }) => {
    return salary > 45000 && active ? name : [];
  });
}

console.log(getemployees(employees)); */

//!Q11.

/* You’re building a request-log dashboard for an AI API. Before showing logs, you need to format IDs, clean routes, and hide sensitive tokens.
const requestLogs = [
  { id: 7, route: " /api/ai chat ", token: "sk-live-ABCD" },
  { id: 42, route: " /api/vector search ", token: "token-9876" },
  { id: 105, route: " /api/user profile ", token: "secret-WXYZ" }
];
​
Write a function:
formatRequestLogs(requestLogs)
​
It should return a new array where:
id becomes a four-digit request ID prefixed with "REQ-".
Whitespace around route is removed.
Every space inside route is replaced with "-".
Each token is masked with "*", showing only its final four characters.
The original array must not be changed.
Expected result:
[
  {
    id: "REQ-0007",
    route: "/api/ai-chat",
    token: "********ABCD"
  },
  {
    id: "REQ-0042",
    route: "/api/vector-search",
    token: "******9876"
  },
  {
    id: "REQ-0105",
    route: "/api/user-profile",
    token: "*******WXYZ"
  }
]
​
Use destructuring, map(), trim(), replaceAll(), slice(), and padStart().
 */
/* const requestLogs = [
  { id: 7, route: ' /api/ai chat ', token: 'sk-live-ABCD' },
  { id: 42, route: ' /api/vector search ', token: 'token-9876' },
  { id: 105, route: ' /api/user profile ', token: 'secret-WXYZ' },
];

function formatRequestLogs(requestLogs) {
  return requestLogs.map(({ id, route, token }) => {
    return {
      id: id.toString().padStart(8, 'REQ-000'),
      route: route.trim().replace(' ', '-'),
      token: token.slice(token.length - 4).padStart(token.length, '*'),
    };
  });
}

console.log(formatRequestLogs(requestLogs)); */

//!Q12.

/* Next Question — Medium
You’re validating signup data before sending it from a React form to a FastAPI backend.
const signupData = {
  username: "  rasel_dev  ",
  email: "  rasel@example.com ",
  password: "secret123",
  confirmPassword: "secret123"
};
​
Write a function:
validateSignup(signupData)
​
It should:
Remove surrounding whitespace from username and email.
Check whether any field is empty after trimming.
Check whether password and confirmPassword match.
Exclude confirmPassword from the returned user data.
Return a new object without changing the original object.
Expected result:
{
  isValid: true,
  errors: [],
  user: {
    username: "rasel_dev",
    email: "rasel@example.com",
    password: "secret123"
  }
}
​
Possible errors:
"All fields are required"
"Passwords do not match"
​
For example, both errors should be returned when a field is empty and the passwords don’t match.
Use object destructuring, the spread operator, Object.values(), some(), and trim(). */

/* function validateSignup(signupData) {
  const cleanedData = {
    ...signupData,
    username: signupData.username.trim(),
    email: signupData.email.trim(),
  };

  const errors = [];

  const hasEmptyField = Object.values(cleanedData).some(
    (value) => value.trim() === ""
  );

  if (hasEmptyField) {
    errors.push("All fields are required");
  }

  if (cleanedData.password !== cleanedData.confirmPassword) {
    errors.push("Passwords do not match");
  }

  const { confirmPassword, ...user } = cleanedData;

  return {
    isValid: errors.length === 0,
    errors,
    user,
  };
} */

//!Q
/* You're building a shopping cart for an e-commerce app.

You receive this cart:

const cart = [
  { id: 1, name: "Keyboard", price: 50, quantity: 2 },
  { id: 2, name: "Mouse", price: 25, quantity: 1 },
  { id: 3, name: "Monitor", price: 200, quantity: 1 }
];

Write a function getCartSummary(cart) that returns an object containing:

items → an array of item names
totalItems → total quantity of all products
totalPrice → total cost (price × quantity)
expensiveItems → products whose individual total (price × quantity) is greater than 100

Expected result:

{
  items: ["Keyboard", "Mouse", "Monitor"],
  totalItems: 4,
  totalPrice: 325,
  expensiveItems: ["Monitor"]
}
💡 Hint

Try combining:

map() → reduce() → filter()

And use destructuring inside your callbacks. */

/* const cart = [
  { id: 1, name: 'Keyboard', price: 50, quantity: 2 },
  { id: 2, name: 'Mouse', price: 25, quantity: 1 },
  { id: 3, name: 'Monitor', price: 200, quantity: 1 },
];

function getCartSummary(cart) {
  return cart.reduce(
    (acc, curr) => {
      let { name, price, quantity } = { ...curr };
      acc.items.push(name);
      acc.totalItems += quantity;
      acc.totalPrice += price * quantity;
      if (price * quantity > 100) acc.expensiveItems.push(name);
      return acc;
    },

    {
      items: [],
      totalItems: 0,
      totalPrice: 0,
      expensiveItems: [],
    },
  );
}

console.log(getCartSummary(cart)); */

//!q
/* Grouping data by a property (Dashboards)
 

const users = [
  { name: 'Alice', country: 'USA' },
  { name: 'Bob', country: 'India' },
  { name: 'Charlie', country: 'USA' },
  { name: 'Dev', country: 'India' },
];

o/p:

{
    USA:[
        {name:"Alice", country:"USA",},
        {name:"Charlie", country:"USA"}
    ],
    India:[
        {name:"Bob", country:"India",},
        {name:"Dev", country:"India"}
    ]
} */
/* const users = [
  { name: 'Alice', country: 'USA' },
  { name: 'Bob', country: 'India' },
  { name: 'Charlie', country: 'USA' },
  { name: 'Dev', country: 'India' },
];
function group(users) {
  return users.reduce((acc, curr) => {
    acc[curr.country] = acc[curr.country] || [];
    acc[curr.country].push(curr);
    return acc;
  }, {});
}

console.log(group(users)); */
