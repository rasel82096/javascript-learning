//Q1. Count Occurance
// const votes = { u1: "yes", u2: "no", u3: "yes", u4: "yes" };
// → { yes: 3, no: 1 }
/* const votes = { u1: 'yes', u2: 'no', u3: 'yes', u4: 'yes' };
const occurance = Object.values(votes).reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(occurance); */

//Q2.11. Flatten values that are arrays
//const groups = { team1: ["ana", "bo"], team2: ["cy"], team3: ["di", "ez"] };
// → ["ana", "bo", "cy", "di", "ez"]

/* const groups = { team1: ['ana', 'bo'], team2: ['cy'], team3: ['di', 'ez'] };

const flat=Object.values(groups).flat(1)
console.log(flat); */

//Q3. 10. Total of a nested value
/* const cart = {
  item1: { name: 'pen', price: 5 },
  item2: { name: 'book', price: 20 },
  item3: { name: 'bag', price: 40 },
};
 Sum every price → 65

const sum = Object.values(cart).reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(sum); */

//Q4. 6. Join all values into a string
const name = { first: 'Grace', middle: 'B', last: 'Hopper' };
// → "Grace B Hopper"

const ans = Object.values(name).join(' ');
console.log(ans);