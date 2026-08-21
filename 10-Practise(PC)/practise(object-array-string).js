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
    planNames: subscriptions.map(elem => elem.plan).join('|'),
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

//?soln
/* const platformResults = [
  {
    platform: 'Udemy',
    courses: [
      { title: 'JavaScript Basics', students: 1200, score: 8.7 },
      { title: 'React Mastery', students: 900, score: 9.2 },
    ],
  },
  {
    platform: 'Coursera',
    courses: [
      { title: 'Python for Beginners', students: 2000, score: 9.0 },
      { title: 'Data Structures', students: 1500, score: 8.5 },
    ],
  },
  {
    platform: 'edX',
    courses: [{ title: 'Machine Learning', students: 1800, score: 9.4 }],
  },
];

function getTopCourses(platformResults, minimumScore, limit) {
  return platformResults
    .flatMap(({ platform, courses }) => {
      return courses
        .map(elem => {
          return {
            ...elem,
            platform,
          };
        })
        .filter(elem => elem.score >= minimumScore);
    })
    .sort((a, b) => {
      if (a.score === b.score) {
        return b.students - a.students;
      } else return b.score - a.score;
    })
    .slice(0, limit);
}

console.log(getTopCourses(platformResults, 8.7, 4)); */

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

/* console.log(getCartSummary(cart));  */

//!Q8.

/* Question 5 — Medium
You are building a signup form validation feature for a web app.
You receive a user object:
const user = {
  name: "  Rasel Ahmed  ",
  email: " rasel@example.com ",
  password: "js12345",
  role: "student"
};
​
Write a function called validateUser(user) that returns an object like this:
{
  name: "Rasel Ahmed",
  email: "rasel@example.com",
  isEmailValid: true,
  isPasswordStrong: false,
  welcomeMessage: "Welcome Rasel Ahmed, your role is student"
}
​
Requirements:
Trim extra spaces from name and email
isEmailValid should be true if email includes "@" and ends with ".com"
isPasswordStrong should be true if password length is at least 8
welcomeMessage should use the cleaned name and role
Try to use:
trim()
includes()
endsWith()
object destructuring
returning an object
a function
Submit your solution when ready. */
/* const user = {
  name: '  Rasel Ahmed  ',
  email: ' rasel@example.com ',
  password: 'js1234565757',
  role: 'student',
};
function validateUser(user) {
  const { name, email, password, role } = user;
  return {
    name: name.trim(),
    email: email.trim(),
    isEmailValid:
      email.includes('@') && email.trim().endsWith('.com') ? true : false,
    isPasswordStrong: password.length >= 8 ? true : false,
    welcomeMessage: `Welcome ${name.trim()}, your role is ${role}`,
  };
}

console.log(validateUser(user)); */

//!

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
    (acc, [key, val]) => {
      if (key.startsWith('user_')) {
        acc[key] = val.promptTokens + val.responseTokens;
        acc.grandTotal +=val.promptTokens + val.responseTokens;
      }
      return acc;
    },
    { grandTotal:0},
  );
}
console.log(calculateUserTokens(usage)); */

//!Q

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

  const access = requiredPermissions.every(per => {
    return permissions.includes(per);
  });
  return {
    id,
    name,
    access,
  };
}

console.log(checkAccess(users, 2, ['read', 'write'])); */

//!Q

/* Question 6 — Medium
You are building a chat message cleaner for an AI chatbot app.
You receive messy messages from users:
const messages = [
  "  hello ai bot  ",
  "I need help with javascript",
  "next.js is awesome",
  "  explain rag system  ",
  "FASTAPI backend issue"
];
​
Write a function called formatMessages(messages) that returns this:
[
  "001: Hello ai bot",
  "002: I need help with javascript",
  "003: Next.js is awesome",
  "004: Explain rag system",
  "005: FASTAPI backend issue"
]
​
Requirements:
Remove extra spaces from each message
Capitalize only the first character of each cleaned message
Add a message number before each message
Message numbers should be padded like "001", "002", "003"
Return the formatted array
Try to use:
trim()
charAt()
slice()
map()
padStart()
a function
Submit your solution when ready.
 */
/* function formatMessages(messages) {
  return messages.map((message, index) => {
    const cleaned = message.trim();

    const formatted = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);

    const number = String(index + 1).padStart(3, '0');

    return `${number}: ${formatted}`;
  });
}

const messages = [
  '  hello ai bot  ',
  'I need help with javascript',
  'next.js is awesome',
  '  explain rag system  ',
  'FASTAPI backend issue',
];

console.log(formatMessages(messages)); */

//!Q.
/* Question 7 — Medium
You are building a settings cleaner for a web app.
You receive user settings from an API:
const settings = {
  theme: " dark ",
  language: " en ",
  notifications: " true ",
  autoSave: " false ",
  aiModel: " gpt-4 "
};
​
Write a function called cleanSettings(settings) that returns:
{
  theme: "dark",
  language: "en",
  notifications: true,
  autoSave: false,
  aiModel: "gpt-4"
}
​
Requirements:
Remove extra spaces from all string values
Convert "true" into boolean true
Convert "false" into boolean false
Return a new cleaned object
Try to use:
Object.entries()
map()
Object.fromEntries()
trim()
a function
Submit your solution when ready. */
/* const settings = {
  theme: ' dark ',
  language: ' en ',
  notifications: ' true ',
  autoSave: ' false ',
  aiModel: ' gpt-4 ',
};

function cleanSettings(settings) {
  return Object.fromEntries(
    Object.entries(settings).map(([key, value]) => {
      value = value.trim();
      if (value === 'true' || value === 'false') value = JSON.parse(value)

      return [key, value];
    }),
  );
}
console.log(cleanSettings(settings)); */

//!

/* Question 8 — Medium
You are building an AI project access system.
You receive users from an API:
const users = [
  {
    id: 1,
    name: "Rasel",
    role: "student",
    skills: ["JavaScript", "React", "Next.js"],
    active: true
  },
  {
    id: 2,
    name: "Mina",
    role: "student",
    skills: ["HTML", "CSS"],
    active: true
  },
  {
    id: 3,
    name: "Tanvir",
    role: "mentor",
    skills: ["JavaScript", "FastAPI", "LangChain"],
    active: false
  },
  {
    id: 4,
    name: "Nadia",
    role: "student",
    skills: ["Python", "FastAPI", "RAG"],
    active: true
  }
];
​
Write a function called checkProjectAccess(users, userName).
The function should:
Find the user by userName
If user is not found, return:
{
  found: false,
  message: "User not found"
}
​
If user is found, check if they have at least one AI/web skill from this list:
["React", "Next.js", "FastAPI", "LangChain", "RAG"]
​
User can access the project only if:
active is true
and they have at least one skill from the AI/web skill list
Return an object like this:
{
  found: true,
  name: "Rasel",
  canAccess: true,
  matchedSkills: ["React", "Next.js"],
  message: "Rasel can access the AI project"
}
​
Example:
checkProjectAccess(users, "Rasel");
​
Expected output:
{
  found: true,
  name: "Rasel",
  canAccess: true,
  matchedSkills: ["React", "Next.js"],
  message: "Rasel can access the AI project"
}
​
Try to use:
find()
filter()
includes()
destructuring
conditional logic
object return
Submit your solution when ready. */
//?soln.

/* const users = [
  {
    id: 1,
    name: 'Rasel',
    role: 'student',
    skills: ['JavaScript', 'React', 'Next.js'],
    active: true,
  },
  {
    id: 2,
    name: 'Mina',
    role: 'student',
    skills: ['HTML', 'CSS'],
    active: true,
  },
  {
    id: 3,
    name: 'Tanvir',
    role: 'mentor',
    skills: ['JavaScript', 'FastAPI', 'LangChain'],
    active: false,
  },
  {
    id: 4,
    name: 'Nadia',
    role: 'student',
    skills: ['Python', 'FastAPI', 'RAG'],
    active: true,
  },
]; */
/* function checkProjectAccess(users, userName) {
  const user = users.find(elem => elem.name === userName);
  if (!user) {
    return {
      found: false,
      message: 'User not found',
    };
  }
  const { name, skills, active } = user;
  const skill = ['React', 'Next.js', 'FastAPI', 'LangChain', 'RAG'];
  const  canAccess=skill.some(elm => skills.includes(elm)) && active;
  return {
    found: true,
    name,
    canAccess,
    matchedSkills: skill.filter(elem => skills.includes(elem)),
    message: canAccess
      ? `${name} can access the AI project`
      : `${name} can't access the AI project`,
  };
} */

//console.log(checkProjectAccess(users, 'Rasel'));

//!Q
/* You are building a chatbot conversation history cleaner for an AI app.
You receive this data from an API:
const chats = [
  { id: 1, user: " Rasel ", message: "  hello ai  ", tags: ["js", "ai"] },
  { id: 2, user: "Mina", message: "Explain React hooks", tags: ["react", "frontend"] },
  { id: 3, user: "Tanvir ", message: "  ", tags: ["spam"] },
  { id: 4, user: " Nadia", message: "How does RAG work?", tags: ["ai", "rag"] },
  { id: 5, user: "Rasel", message: "next.js routing issue", tags: ["nextjs", "frontend"] }
];
​
Write a function called cleanChatHistory(chats) that returns an array like this:
[
  {
    id: 1,
    user: "Rasel",
    message: "Hello ai",
    category: "AI"
  },
  {
    id: 2,
    user: "Mina",
    message: "Explain React hooks",
    category: "Frontend"
  },
  {
    id: 4,
    user: "Nadia",
    message: "How does RAG work?",
    category: "AI"
  },
  {
    id: 5,
    user: "Rasel",
    message: "Next.js routing issue",
    category: "Frontend"
  }
]
​
Requirements:
Remove chats where message is empty after trim()
Trim the user name
Trim the message
Capitalize the first character of the cleaned message
Add a new category:
if tags includes "ai" or "rag", category should be "AI"
if tags includes "react", "nextjs", or "frontend", category should be "Frontend"
otherwise category should be "General"
Return only: id, user, message, and category
Try to use:
filter()
map()
trim()
charAt()
slice()
includes()
destructuring
returning new objects
Submit your solution when ready. */

/* const chats = [
  { id: 1, user: ' Rasel ', message: '  hello ai  ', tags: ['js', 'ai'] },
  {
    id: 2,
    user: 'Mina',
    message: 'Explain React hooks',
    tags: ['react', 'frontend'],
  },
  { id: 3, user: 'Tanvir ', message: '  ', tags: ['spam'] },
  { id: 4, user: ' Nadia', message: 'How does RAG work?', tags: ['ai', 'rag'] },
  {
    id: 5,
    user: 'Rasel',
    message: 'next.js routing issue',
    tags: ['nextjs', 'frontend'],
  },
];

function cleanChatHistory(chats) {
  return chats
    .filter(elem => elem.message.trim().length > 0)
    .map(elem => {
      let { id, user, message, tags } = elem;
      message = message.trim();

      let category = '';
      if (tags.includes('ai') || tags.includes('rag')) {
        category += 'AI';
      } else if (
        tags.includes('react') ||
        tags.includes('nextjs') ||
        tags.includes('nextjs')
      ) {
        category += 'Frontend';
      } else {
        category = 'General';
      }
      return {
        id,
        user: user.trim(),
        message: message.charAt(0).toUpperCase() + message.slice(1),
        category,
      };
    });
}

console.log(cleanChatHistory(chats)); */

//!Q

/* You’re building a user search feature. The API returns this data:

const users = [
  { id: 1, name: "  Rasel Ahmed  ", role: "developer" },
  { id: 2, name: "Sara Khan", role: "designer" },
  { id: 3, name: "  John Doe", role: "developer" }
];

A user searches for "rasel".

Write a function searchUsers(users, query) that:

removes extra spaces from each user's name
searches case-insensitively
returns only users whose name contains the search query
returns the users as new objects without modifying the original users array

Expected result for searchUsers(users, "rasel"):

[
  { id: 1, name: "Rasel Ahmed", role: "developer" }
]

Try it yourself and send me your code. */

//?soln
/* const users = [
  { id: 1, name: '  Rasel Ahmed  ', role: 'developer' },
  { id: 2, name: 'Sara Khan', role: 'designer' },
  { id: 3, name: '  John Doe', role: 'developer' },
];

function searchUsers(users, query) {
  return users.flatMap(elem => {
    let { id, name, role } = { ...elem };
    name = name.trim();
    return name.toLowerCase().includes(query.trim().toLowerCase())
      ? { id, name, role }
      : [];
  });
}

console.log(searchUsers(users, 'rasel')); */
