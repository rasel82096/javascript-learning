//!Syntax
// 1. The simplest form
/* Object.entries(obj); */
// Object -> The global JavaScript Object constructor
// .entries() -> The static method being called
// obj -> The object you are converting into pairs

//? 2. The Loop Form (How it is used 90% of the time)
/* for (const [key, value] of Object.entries(obj)) { ... } */
// for...of -> Standard loop for iterating over arrays
// [key, value] -> Array destructuring instantly rips apart the inner flashcard

//some Exercises

/* //!Q1
const person = {
  name: "Alice",
  age: 25,
  city: "London"
};

Using

for (const [key, value] of Object.entries(person))

Print

name : Alice
age : 25
city : London */
/* const person = {
  name: 'Alice',
  age: 25,
  city: 'London',
};

for(const[key,value] of Object.entries(person)){
  console.log(`${key}:${value}`);
} */

/* //!Q2.
const scores = {
  math: 85,
  english: 62,
  science: 91,
  history: 58
};

Print only the subjects where the score is 70 or higher.

Expected output

math : 85
science : 91*/

/* const scores = {
  math: 85,
  english: 62,
  science: 91,
  history: 58,
};

for (const [key, value] of Object.entries(scores)) {
  if (value >= 70) {
    console.log(`${key}:${value}`);
  }
} */

/*  //!Q3.
— Counting
const inventory = {
  apple: 10,
  banana: 0,
  orange: 5,
  mango: 0,
  grapes: 20
};

Count how many items have quantity greater than 0.

Expected output 3

*/

/* const inventory = {
  apple: 10,
  banana: 0,
  orange: 5,
  mango: 0,
  grapes: 20,
}; */

//!Process:01

/* const count = Object.keys(inventory).reduce((acc, curr) => {
  if (inventory[curr] > 0) {
    acc++;
  }
  return acc;
}, 0);
console.log(count); */

//!Process-02
/* let count = 0;
for (const [key, value] of Object.entries(inventory)) {
  if (value > 0) count++;
}
console.log(count); */

//!Q4.

/*
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

Create a new object where every key is uppercase.

Expected output

{
  FIRSTNAME: "John",
  LASTNAME: "Doe",
  AGE: 30
} */

//?first way:

const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

/* const upp = Object.keys(profile).reduce((acc, curr) => {
  acc[curr.toUpperCase()] = profile[curr];
  return acc;
}, {}); */

//?Second way

/* const obj = {};
for (const [key, value] of Object.entries(profile)) {
  obj[key.toUpperCase()] = value;
}

console.log(obj); */

//!Q5. Find the key with the highest value
const votes = { alice: 12, bob: 30, carol: 22 };
// → "bob"

const hig = Object.keys(votes).reduce((acc, curr) => {
  return votes[acc] > votes[curr] ? acc : curr;
});
console.log(hig);

//!Q6. const prices = { pen: 5, book: 20, bag: 40 };
// Add 10% tax to each → { pen: 5.5, book: 22, bag: 44 }

const prices = { pen: 5, book: 20, bag: 40 };

//!one method:

/* const updatePrice = Object.keys(prices).reduce((acc, curr) => {
  acc[curr] = prices[curr]+prices[curr] * 0.1;
  return acc;
}, {});

console.log(updatePrice); */

//!Second method using

const updatePrice = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => {
    return [key,value + value * 0.1];
  }),
);
console.log(updatePrice);