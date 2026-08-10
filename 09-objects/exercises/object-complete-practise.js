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
?
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
?
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
?
Create a function named prepareUserData that returns:
{
  username: "Rasel_Dev",
  email: "rasel@example.com",
  bio: "Full-stack AI developer",
  age: 22
}
?
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

/* const productData = {
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

  return Object.fromEntries(
    Object.entries(rest).map(([key, value]) => {
      if (typeof value === 'string') value = value.trim();
      if (key === 'category') value = value.toLowerCase();
      return [key, value];
    }),
  );
}

console.log(cleanProductData(productData)); */

//!Q6

/* A RAG application receives this response:
const apiResponse = {
  status: 200,
  data: {
    answer: "  JavaScript objects store key-value pairs.  ",
    sources: [
      { title: "MDN Objects", url: "/mdn/objects" },
      { title: "JS Guide", url: "/guide/javascript" }
    ]
  },
  meta: {
    model: "gpt-4o"
  }
};
?
Create a function named formatAIResponse that returns:
{
  answer: "JavaScript objects store key-value pairs.",
  model: "gpt-4o",
  sourceTitles: ["MDN Objects", "JS Guide"],
  sourceCount: 2
} 
  Requirements
Use nested destructuring in the function parameter.
Give sources a default value of [].
Give model a default value of "unknown".
Trim the answer.
Use destructuring inside map() to extract each source’s title.
Do not modify apiResponse.
The function must not crash when sources or meta is missing.


*/

/* const apiResponse = {
  status: 200,
  data: {
    answer: '  JavaScript objects store key-value pairs.  ',
    sources: [
      { title: 'MDN Objects', url: '/mdn/objects' },
      { title: 'JS Guide', url: '/guide/javascript' },
    ],
  },
  meta: {
    model: 'gpt-4o',
  },
};

function formatAIResponse({
  data: { answer, sources = [] },
  meta: { model = 'unknown' }={},
}) {
  return {
    answer: answer.trim(),
    model: model.trim(),
    sourceTitles: sources.map(({ title }) => {
      return title;
    }),
    sourceCount: sources.length,
  };
}

console.log(formatAIResponse(apiResponse),apiResponse); */

//!Q7

/* Question 6/15 — Medium: AI Chat Session Object
Create an object named chatSession:
const chatSession = {
  user: "Rasel",
  messages: []

  // Add your methods here
};
?
Add these three methods:
1. addMessage(role, content)
It should trim content and add a message object to messages.
chatSession.addMessage("user", "  What is RAG?  ");
?
Should add:
{
  role: "user",
  content: "What is RAG?"
}
?
2. getMessagesByRole(role)
It should return an array containing only messages with the given role.
chatSession.getMessagesByRole("assistant");
?
3. getSummary()
It should return an object like:
{
  user: "Rasel",
  totalMessages: 3,
  userMessages: 2,
  assistantMessages: 1
}
?
Requirements
Use object method shorthand.
Use this to access user and messages.
Use push() in addMessage.
Use filter() in getMessagesByRole.
Reuse getMessagesByRole() inside getSummary() instead of repeating the filtering logic.
Test it by adding at least three messages. */

/* const chatSession = {
  user: 'Rasel',
  messages: [],
  addMessage(role, content) {
    const newmsz = {
      role: role.trim(),
      content: content.trim(),
    };

    this.messages.push(newmsz);

    return newmsz;
  },
  getMessagesByRole(role) {
    return this.messages.filter(elem => {
      return elem.role === role;
    });
  },
  getSummary() {
    const usermsz = this.getMessagesByRole('user');
    const assismsz = this.getMessagesByRole('assistent');
    return {
      user: this.user,
      totalMessages: this.messages.length,
      userMessages: usermsz.length,
      assistantMessages: assismsz.length,
    };
  },
};

chatSession.addMessage('user', '  What is RAG?  ');
chatSession.getMessagesByRole('assistant');
console.log(chatSession.getMessagesByRole('user')); */

//!Q8.

/* Question 7/15 — Medium: AI Token Budget Tracker
Let’s practice object methods and this once more before changing concepts.
const tokenTracker = {
  limit: 5000,
  requests: []

  // Add your methods here
};
?
Add these three methods:
1. addRequest(model, tokens)
It should add an object to requests:
tokenTracker.addRequest("gpt-4o", 1200);
?
Adds:
{
  model: "gpt-4o",
  tokens: 1200
}
?
2. getTotalTokens()
It should use reduce() to return the total tokens used.
For example, after adding 1200, 800, and 500, it should return:
2500
?
3. getRemainingTokens()
It should reuse getTotalTokens() and return:
limit - total tokens used
?
Test data
tokenTracker.addRequest("gpt-4o", 1200);
tokenTracker.addRequest("claude", 800);
tokenTracker.addRequest("gemini", 500);

console.log(tokenTracker.getTotalTokens());     // 2500
console.log(tokenTracker.getRemainingTokens()); // 2500
console.log(tokenTracker.requests);
?
Requirements
Use object method shorthand—not arrow functions.
Use this.requests and this.limit.
Use push() in addRequest().
Use reduce() in getTotalTokens().
Call this.getTotalTokens() inside getRemainingTokens().
Don’t manually calculate any totals. */

/* const tokenTracker = {
  limit: 5000,
  requests: [],
  addRequest(model, tokens) {
    const obj = {
      model: model,
      tokens: tokens,
    };

    this.requests.push(obj);
    return obj;
  },
  getTotalTokens() {
    return this.requests.reduce((acc, curr) => {
      return acc + curr.tokens;
    }, 0);
  },
  getRemainingTokens() {
    const total = this.getTotalTokens();

    return this.limit - total;
  },
};
tokenTracker.addRequest('gpt-4o', 1200);
tokenTracker.addRequest('claude', 800);
tokenTracker.addRequest('gemini', 500);

console.log(tokenTracker.getTotalTokens()); // 2500
console.log(tokenTracker.getRemainingTokens()); // 2500
console.log(tokenTracker.requests); */

//!Q9.

/* Question 8/15 — Medium: Updating React Task State
Now we’ll move from object methods to immutable updates involving an array of objects.
const tasks = [
  { id: 1, title: "Build login page", status: "pending" },
  { id: 2, title: "Connect FastAPI", status: "pending" },
  { id: 3, title: "Create RAG pipeline", status: "pending" }
];
?
Create a function named updateTaskStatus:
updateTaskStatus(tasks, 2, "completed");
?
It should return:
[
  { id: 1, title: "Build login page", status: "pending" },
  { id: 2, title: "Connect FastAPI", status: "completed" },
  { id: 3, title: "Create RAG pipeline", status: "pending" }
]
?
Requirements
Use map().
Use object spread to update the matching task.
Do not modify the original tasks array or its task objects.
Preserve every other property of the matching task.
If no task has the provided ID, return the data unchanged.
The function must work with any ID and status.
 */
/* const tasks = [
  { id: 1, title: 'Build login page', status: 'pending' },
  { id: 2, title: 'Connect FastAPI', status: 'pending' },
  { id: 3, title: 'Create RAG pipeline', status: 'pending' },
];

function updateTaskStatus(taskArray, targetId, newStatus) {
  return taskArray.map(elem => {
    return {
      ...elem,
      status: `${elem.id === targetId ? newStatus : elem.status}`,
    };
  });
}

console.log(updateTaskStatus(tasks, 4, 'completed')); */

//?better sol

/* function updateTaskStatus(taskArray, targetId, newStatus) {
  return taskArray.map((task) => {
    return task.id === targetId
      ? { ...task, status: newStatus }
      : task;
  });
} */

//!Q10.

/* Question 9/15 — Medium: Add a Skill to One User
const users = [
  { id: 1, name: "Rasel", skills: ["JavaScript", "React"] },
  { id: 2, name: "Nadia", skills: ["Python", "FastAPI"] }
];
?
Create this function:
addSkillToUser(users, 1, "Next.js");
?
The arguments mean:
users ? array to process
1 ? ID of the user to update
"Next.js" ? skill to add
It should return:
[
  {
    id: 1,
    name: "Rasel",
    skills: ["JavaScript", "React", "Next.js"]
  },
  {
    id: 2,
    name: "Nadia",
    skills: ["Python", "FastAPI"]
  }
]
?
Requirements
Use map().
Update only the user whose ID matches.
Use object spread to create the updated user.
Use array spread to create the updated skills.
Return nonmatching users unchanged.
Do not modify the original users array or its objects.
If the skill already exists, don’t add it again.
For example:
addSkillToUser(users, 1, "React");
?
Rasel’s skills should remain:
["JavaScript", "React"] */

const users = [
  { id: 1, name: 'Rasel', skills: ['JavaScript', 'React'] },
  { id: 2, name: 'Nadia', skills: ['Python', 'FastAPI'] },
];

function addSkillToUser(users, target, skill) {
  return users.map(elem => {
    return elem.id === target
      ? {
          ...elem,
          skills: [...new Set([...elem.skills, skill])],
        }
      : elem;
  });
}

console.log(addSkillToUser(users, 1, 'Python'));
