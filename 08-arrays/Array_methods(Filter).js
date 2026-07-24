// The Customer Array
let customers = [
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

// const senior = customers.filter(elem => elem.age >= 60);
// console.log(senior);

// const arr=[10,11,12,13,14,15,16,17,18,19,20]
// const even=arr.filter((elem)=>elem%2===0)
// console.log(even);

//!Keep the countries that have blank space in their name
// const countries = [
//   'France',
//   'South Africa',
//   'Brazil',
//   'United States',
//   'Sweden',
// ];

// const b = countries.filter(elem => elem.includes(' '));
// console.log(b);

/*1. Create an array called "prices" with the following values: [1.23, 19.99, 85.2, 32.87, 8, 5.2]

2. Create a new array using filter called "lowPrices" that keeps all the prices where the price plus a 15% tax is less than 10.00

3. Print out both arrays
 */

// const values = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

// const lowPrices = values.filter(elem => elem + elem * 0.15 < 10.0);
// console.log(lowPrices);

/*
1. Create the following array called "values":
   [[1,2,3], [0,0,1], [3,6,9], [0,1,2]]

2. Create an new array called "hasTwos" that:
   - filters over values and keeps only the sub-arrays
     that have a 2 in them

3. Print out both arrays

"hasTwos" should equal to: [[1,2,3], [0,1,2]]

HINT: Google for "javascript array includes"
*/

// const values = [
//   [1, 2, 3],
//   [0, 0, 1],
//   [3, 6, 9],
//   [0, 1, 2],
// ];

// const hasTwos = values.filter(elem => elem.includes(2));
// console.log(hasTwos);

/*1. Create the following array called "nums":
   [10, 20, 30, 40, 50]

2. Create an new array called "timesTwo" that:
   - maps over "nums" and returns each number
     multiplied by two

3. Create an new array called "over50" that:
   - filters "timesTwo" to keep only values over 50

4. Print out all 3 arrays

"over50" should contain: [60, 80, 100]*/

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map(elems => elems * 2);
console.log(timesTwo);
const over50 = timesTwo.filter(elem => elem > 50);
console.log(over50);
// const month = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'November',
//   'December',
// ];

// const m = month.filter(elem => elem.toLowerCase().includes('m'));
// console.log(m);

// Use filter() (with indexOf or another method) to remove duplicate values
// const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];

// const k = numbers.filter((elem, index, array) => {return array.indexOf(elem)===index});
// console.log(k);
// Your code here
// Expected output: [1, 2, 3, 4, 5, 6]

// Return products priced between $10 and $50 (inclusive) that are in stock
// const products = [
//   { name: 'Pen', price: 2, inStock: true },
//   { name: 'Notebook', price: 15, inStock: false },
//   { name: 'Bag', price: 45, inStock: true },
//   { name: 'Laptop', price: 999, inStock: true },
//   { name: 'Bottle', price: 20, inStock: true },
// ];

// const price = products.filter(elem => elem.price >= 10 && elem.price <= 50);
// console.log(price);
// Your code here
// Expected output: [{ name: "Bag", ... }, { name: "Bottle", ... }]

// Return students who passed (score >= 60) in "Math" subject only,
// sorted by score descending
// const students = [
//   { name: 'Alice', subject: 'Math', score: 85 },
//   { name: 'Bob', subject: 'Science', score: 90 },
//   { name: 'Charlie', subject: 'Math', score: 55 },
//   { name: 'Dana', subject: 'Math', score: 70 },
//   { name: 'Eve', subject: 'Math', score: 95 },
// ];

// const k = students
//   .filter(elem => {
//     return elem.subject === 'Math' && elem.score >= 60;
//   })
//   .sort((a, b) => b.score - a.score);
// console.log(k);
// Your code here
// Expected output:
// [{ name: "Eve", subject: "Math", score: 95 },
//  { name: "Alice", subject: "Math", score: 85 },
//  { name: "Dana", subject: "Math", score: 70 }]
