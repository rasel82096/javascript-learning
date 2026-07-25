//!Q1.Uppercase all keys
/* const config = { host: 'localhost', port: 8080 };
 → { HOST: "localhost", PORT: 8080 }
!Ans:
const upperCaseConfig = Object.keys(config).reduce((acc, curr) => {
  acc[curr.toUpperCase()] = config[curr];
  return acc;
}, {});
console.log(upperCaseConfig); */

//! Q2. Sum all the values
//const scores = { math: 90, science: 75, history: 85 };
// 250
//!Ans:
/*const scores = { math: 90, science: 75, history: 85 };

const sum = Object.keys(scores).reduce((acc, curr) => {
  return acc + scores[curr];
}, 0);
console.log(sum);*/

//!Q3. Find the key with the highest value
//const votes = { alice: 12, bob: 30, carol: 22 };
// → "bob"

/* //!Ans
const votes = { alice: 12, bob: 30, carol: 22 };
const highValue = Object.keys(votes).reduce((highest, current) => {
  return votes[current] > votes[highest] ? current : highest;
});
console.log(highValue); */

//!Q4. Filter an object by value
//const stock = { apples: 0, bananas: 5, pears: 0, plums: 12 };
// Return only items in stock → { bananas: 5, plums: 12 }

//!Ans

/* const stock = { apples: 0, bananas: 5, pears: 0, plums: 12 };

const inStock = Object.keys(stock).reduce((acc, curr) => {
  if (stock[curr] > 0) acc[curr] = stock[curr];

  return acc;
}, {});

console.log(inStock); */

//!Q5. . Invert an object (swap keys and values)
//const codes = { us: "1", uk: "44", bd: "880" };
// → { "1": "us", "44": "uk", "880": "bd" }
//!Ans:

const codes = { us: '1', uk: '44', bd: '880' };

const swap = Object.keys(codes).reduce((acc, curr) => {
  acc[codes[curr]] = curr;
  return acc;
}, {});

console.log(swap);