/*const arr = [1, 2, 3, 4];

const result = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
console.log(result);

const result1 = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(result1);*/
/*q1. Find out the average age of those person who bought book */

/*let customers = [
  {
    id: 1,
    f_name: 'Abby',
    l_name: 'Thomas',
    gender: 'M',
    married: true,
    age: 32,
    expense: 500,
    purchased: ['Shampoo', 'Toys', 'Book'],
  },
  {
    id: 2,
    f_name: 'Jerry',
    l_name: 'Tom',
    gender: 'M',
    married: true,
    age: 64,
    expense: 100,
    purchased: ['Stick', 'Blade'],
  },
  {
    id: 3,
    f_name: 'Dianna',
    l_name: 'Cherry',
    gender: 'F',
    married: true,
    age: 22,
    expense: 1500,
    purchased: ['Lipstik', 'Nail Polish', 'Bag', 'Book'],
  },
  {
    id: 4,
    f_name: 'Dev',
    l_name: 'Currian',
    gender: 'M',
    married: true,
    age: 82,
    expense: 90,
    purchased: ['Book'],
  },
  {
    id: 5,
    f_name: 'Maria',
    l_name: 'Gomes',
    gender: 'F',
    married: false,
    age: 7,
    expense: 300,
    purchased: ['Toys'],
  },
];

let i = 0;
const total = customers.reduce((acc, curr) => {
  if (curr.purchased.includes('Book')) {
    acc += curr.age;
    i++;
  }
  return acc;
}, 0);

let avg_Age = Math.round(total / i);
console.log(total);
console.log(avg_Age);

//!another way

const totall = customers.reduce(
  (acc, curr) => {
    if (curr.purchased.includes('Book')) {
      acc.totalAge += curr.age;
      acc.count++;
    }
    return acc;
  },
  { totalAge: 0, count: 0 },
);

console.log(totall);
const avg_age1=Math.round(totall.totalAge/totall.count)

console.log(avg_age1);*/

/*Q. Flatten one level

Using only reduce() (no flat() or flatMap()), flatten an array of arrays into a single array.

const nested = [[1,2],[3,4],[5,6]];
// Expected: [1,2,3,4,5,6] */
/*const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatten = nested.reduce((acc, curr) => {

  acc.push(...curr)

return acc;
}, []);
console.log(flatten);*/

/*findout total price sum
const cart = [
  { id: 1, name: 'Laptop', price: 1200, quantity: 1 },
  { id: 2, name: 'Phone', price: 800, quantity: 2 },
  { id: 3, name: 'Headphones', price: 150, quantity: 3 },
];
 */
/*const cart = [
  { id: 1, name: 'Laptop', price: 1200, quantity: 1 },
  { id: 2, name: 'Phone', price: 800, quantity: 2 },
  { id: 3, name: 'Headphones', price: 150, quantity: 3 },
];

const total=cart.reduce((acc,curr)=>{
 return acc+curr.price*curr.quantity
},0)
console.log(total);*/

/*
  Grouping data by a property (Dashboards)
 

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
}
*/
/*const users = [
  { name: 'Alice', country: 'USA' },
  { name: 'Bob', country: 'India' },
  { name: 'Charlie', country: 'USA' },
  { name: 'Dev', country: 'India' },
];

const group = users.reduce((acc, curr, ind, arr) => {
  acc.USA = arr.filter(elem => elem.country === 'USA');
  acc.India = arr.filter(elem => elem.country === 'India');
  return acc;
}, {});

//!Another

const grouped=users.reduce((acc,curr)=>{
acc[curr.country]=acc[curr.country]||[]
acc[curr.country].push(curr);

return acc;
},{})
console.log(grouped);*/

/*Question Group Students by Department
const students = [
  { name: "Rahim", department: "CSE" },
  { name: "Karim", department: "EEE" },
  { name: "Sakib", department: "CSE" },
  { name: "Nafis", department: "BBA" },
  { name: "Tamim", department: "EEE" }
];
Expected Output
{
  CSE: [
    { name: "Rahim", department: "CSE" },
    { name: "Sakib", department: "CSE" }
  ],

  EEE: [
    { name: "Karim", department: "EEE" },
    { name: "Tamim", department: "EEE" }
  ],

  BBA: [
    { name: "Nafis", department: "BBA" }
  ]
} */

/*const students = [
  { name: 'Rahim', department: 'CSE' },
  { name: 'Karim', department: 'EEE' },
  { name: 'Sakib', department: 'CSE' },
  { name: 'Nafis', department: 'BBA' },
  { name: 'Tamim', department: 'EEE' },
];

const grouped1 = students.reduce((acc, curr) => {
  acc[curr.department] = acc[curr.department] || [];
  acc[curr.department].push(curr);

  return acc;
}, {});
console.log(grouped1);*/

/*
  Creating look table or index map for fast access
 const products = [
  { id: 101, name: 'Laptop', price: 1200 },
  { id: 102, name: 'Phone', price: 800 },
  { id: 103, name: 'Tablet', price: 600 },
];
o/p:{
 101:{ id: 101, name: 'Laptop', price: 1200 },
 102:{ id: 102, name: 'Phone', price: 800 },
 103: { id: 103, name: 'Tablet', price: 600 }

}
 */

/*const products = [
  { id: 101, name: 'Laptop', price: 1200 },
  { id: 102, name: 'Phone', price: 800 },
  { id: 103, name: 'Tablet', price: 600 },
];

const result = products.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(result);*/

/*const user = ['login', 'click', 'click', 'logout', 'login', 'click'];

const actionTally = user.reduce((acc, curr) => {
  acc[curr] = (acc[curr] ||0)+1;
  return acc;
}, {});
console.log(actionTally);*/

/*Exercise 3 — Word Frequency Counter (harder, single-pass)
js
const text = "the quick brown fox jumps over the lazy dog the fox runs";

Expected output:

js
{
  the: 3,
  quick: 1,
  brown: 1,
  fox: 2,
  jumps: 1,
  over: 1,
  lazy: 1,
  dog: 1,
  runs: 1
} */

/*function frequency(text) {
  return text.split(' ').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

const text = 'the quick brown fox jumps over the lazy dog the fox runs';
console.log(frequency(text));*/

/*const cart = [
  { name: 'Keyboard', price: 1200, qty: 2 },
  { name: 'Mouse', price: 500, qty: 1 },
  { name: 'Monitor', price: 8000, qty: 1 },
];

const total = cart.reduce((acc, curr) => {
  return acc + curr.price * curr.qty;
}, 0);
console.log(total);*/
// Use reduce to calculate the total price (price * qty for each item, summed)

const users = [
  { name: 'Rasel', role: 'admin' },
  { name: 'Mina', role: 'editor' },
  { name: 'Tanvir', role: 'admin' },
  { name: 'Sadia', role: 'viewer' },
  { name: 'Habib', role: 'editor' },
];

const group = users.reduce((acc, curr) => {
  acc[curr.role] = acc[curr.role] || [];
  acc[curr.role].push(curr);
  return acc;
}, {});
console.log(group);
