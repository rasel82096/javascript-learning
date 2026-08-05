//!Q1
/* const user = {
  firstName: "rasel",
  lastName: "ahmed",
  skills: ["javascript", "react", "python"],
  isActive: true
};Write JavaScript code that produces this exact string:
Rasel Ahmed is an active user and knows JAVASCRIPT, REACT, PYTHON. */

//?sol1

/* const user = {
  firstName: 'rasel',
  lastName: 'ahmed',
  skills: ['javascript', 'react', 'python'],
  isActive: true,
};

function output({ firstName, lastName, skills, isActive }) {
  return `${firstName.replace(firstName[0], firstName[0].toUpperCase())} ${lastName.replace(lastName[0], lastName[0].toUpperCase())} is an ${isActive === true ? `active` : 'inactive'} user and knows ${skills.join(', ').toUpperCase()}.`;
}

console.log(output(user)); */

//!Q2.

/* const user = {
  id: 101,
  name: "Rasel",
  settings: {
    theme: "light",
    notifications: true
  },
  skills: ["JavaScript", "React"]
};
​
Create a function named updateUser that returns a new user object with:
theme changed to "dark"
"Next.js" added to skills
Every other value preserved
The original user, user.settings, and user.skills left unchanged */

//?ans:
/* const user = {
  id: 101,
  name: 'Rasel',
  settings: {
    theme: 'light',
    notifications: true,
  },
  skills: ['JavaScript', 'React'],
};
function updateUser({ id, name, settings, skills }) {
  return {
    name,
    id,
    settings: {
      ...settings,
      theme: 'dark',
    },
    skills: [...skills, 'Next.js'],
  };
}
console.log(user,updateUser(user)); */

/* function updateUser(user) {
  const { settings, skills } = user;

  return {
    ...user,
    settings: {
      ...settings,
      theme: "dark"
    },
    skills: [...skills, "Next.js"]
  };
} */

//!Q3

/* Question 3/15 — Medium: AI Token Usage Summary
An AI application receives token-usage records:
const usageRecords = [
  { model: "gpt-4o", tokens: 1200 },
  { model: "claude", tokens: 700 },
  { model: "gpt-4o", tokens: 800 },
  { model: "gemini", tokens: 500 },
  { model: "claude", tokens: 300 }
];
​
Create a function named summarizeUsage that returns:
{
  "gpt-4o": 2000,
  claude: 1000,
  gemini: 500
}
 */
//?ans
/* const usageRecords = [
  { model: 'gpt-4o', tokens: 1200 },
  { model: 'claude', tokens: 700 },
  { model: 'gpt-4o', tokens: 800 },
  { model: 'gemini', tokens: 500 },
  { model: 'claude', tokens: 300 },
];

function summarizeUsage(usageRecords) {
  return usageRecords.reduce((acc, curr) => {
    acc[curr.model] = (acc[curr.model] || 0) + curr.tokens;
    return acc;
  }, {});
}

console.log(summarizeUsage(usageRecords)); */

//!Q4.

/* A Next.js registration form provides:
const formData = {
  username: "  Rasel_Dev  ",
  email: "  RASEL@EXAMPLE.COM ",
  password: "secret123",
  bio: "  Full-stack AI developer  ",
  age: 22
};
​
Create a function named prepareUserData that returns:
{
  username: "Rasel_Dev",
  email: "rasel@example.com",
  bio: "Full-stack AI developer",
  age: 22
}
​
Requirements
Remove password using object destructuring and the rest operator.
Trim every remaining string value.
Convert only the email to lowercase.
Preserve non-string values such as age.
Do not manually list all the returned properties.
Do not modify the original formData.
It should still work if another property is added later.
You may find Object.entries() and Object.fromEntries() useful. */
/* const formData = {
  username: '  Rasel_Dev  ',
  email: '  RASEL@EXAMPLE.COM ',
  password: 'secret123',
  bio: '  Full-stack AI developer  ',
  age: 22,
};

function prepareUserData(obj) {
  const { password, ...rest } = obj;

  return Object.fromEntries(
    Object.entries(rest).map(([key, value]) => {
      if (typeof value === 'string') {
        value = value.trim();

        if (key === 'email') {
          value = value.toLowerCase();
        }
      }

      return [key, value];
    }),
  );
} */

//!Q5.

/* You are given this object:

const productData = {
  name: "  Mechanical Keyboard  ",
  category: "  Electronics ",
  secretCode: "ABC123XYZ",
  price: 89.99,
  stock: 15,
  brand: "  KeyMaster ",
  featured: true
};

Your task is to create a function called:

cleanProductData(productData)

that returns:

{
  name: "Mechanical Keyboard",
  category: "electronics",
  price: 89.99,
  stock: 15,
  brand: "KeyMaster",
  featured: true
}
Requirements
Remove the secretCode property using object destructuring and the rest operator.
Trim every string.
Convert only the category property to lowercase.
Keep numbers and booleans unchanged.
Don't modify the original object.
Don't manually write each property.
It should still work if more properties are added later. */

const productData = {
  name: '  Mechanical Keyboard  ',
  category: '  Electronics ',
  secretCode: 'ABC123XYZ',
  price: 89.99,
  stock: 15,
  brand: '  KeyMaster ',
  featured: true,
};

function cleanProductData(productData) {
  const { secretCode, ...rest } = productData;

  return Object.fromEntries();
}
const a = 4;
