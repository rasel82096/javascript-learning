//Destructuring

// const person = ['Rasel', 24, 'Dhaka', 'CSE'];
// const[name,age,city,dept]=person;
// console.log(name);
// console.log(age);

/*Q2. — Partial extraction
You have:
jsconst colors = ['red', 'green', 'blue', 'yellow', 'purple'];
Only extract the first and third color into variables first and third.
Log both. (Hint: think about skipping.) */

// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// const [first, , third] = colors;
// console.log(first,third);

/*Q3. — Default values
You have:
const config = [1920, 1080];
Destructure into width, height, and fps — but fps should default to 60 if not present.
Log all three. */

// const config = [1920, 1080];
// const[width,height,fps=60]=config;
// console.log(width,height,fps);

/*Q5. — Swap
You have:
jslet celsius = 'hot';
let fahrenheit = 'cold';
Swap them using one line of destructuring. No temp variable allowed.
Log both after the swap. */

// let celsius = 'hot';
// let fahrenheit = 'cold';

// [fahrenheit,celsius]=[celsius,fahrenheit]
// console.log(fahrenheit,celsius);

/*Q7. — Function return
Write a function getMinMax(arr) that receives an array of numbers and returns an array [min, max].
Call it and destructure the result directly:
const [min, max] = getMinMax([5, 2, 9, 1, 7, 3]);
console.log(min); // 1
console.log(max); // 9 */

// function getMinMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return [min,max]
//

//  const [min, max] = getMinMax([5, 2, 9, 1, 7, 3]);

//  console.log(min,max);

/*Q8. — Loop + destructuring
You have:
const students = [
  ['Rasel',  90],
  ['Tanvir', 85],
  ['Mim',    92],
  ['Sadia',  78],
];
Use a for...of loop with destructuring to print:
Rasel scored 90 — PASS
Tanvir scored 85 — PASS
Mim scored 92 — PASS
Sadia scored 78 — PASS
(Bonus: print FAIL if score is below 80) */

// const students = [
//   ['Rasel', 90],
//   ['Tanvir', 85],
//   ['Mim', 92],
//   ['Sadia', 78],
// ];

// for(elems of students){
//  const[name,score] =elems;
//  if(score>=80){
//   console.log(`${name} scored ${score} — PASS
// `);
//  }
//  else{
//   console.log(`${name} scored ${score} — FAIL
// `);
//  }
// }

// const board = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const [, [, five]] = board;
// console.log(five);
/*Q12. — String destructuring
You have:
const word = 'JavaScript';
Without using .split(''), use destructuring to extract the first three characters into a, b, c.
Then log them and also build a new string using them: a + b + c. */

// const word = 'JavaScript';
// const[a,b,c]=[...word]
// console.log(a,b,c);
// console.log(`${a}+${b}+${c}`);

// 'use strict';

// const cash = [233, 600, 900, 1000];
// Object.defineProperty(cash, 'length', { writable: false });

// cash.length = 3;
// console.log(cash);

// const arr=[1,2,3,5]
// console.log(arr.slice(0,2));

// const arr=[[1,2],[3,4]]
// console.log(arr.join("-"));

// const arr2=[1,2,3,4]
// console.log(arr2.join(""));
// const arr = [[1, 2, 3], [4, 5], [6]];

// console.log(arr.join(' | '));
// const arr = [
//   ['A', 'B'],
//   ['C', 'D'],
// ];

// console.log(arr.join('-'));
// const a="Hello";
// const b=[...a].reverse().join("")
// console.log(b);

// const items = ["b", "c", "d"];
// result=["a",...items,"e"]
// console.log(result); // ["a", "b", "c", "d", "e"]
// const words = ['I', 'love', 'JavaScript'];
// const sentence = words.join(' ');
// console.log(sentence); // "I love JavaScript"
// const parts = ["users", "42", "profile"];
// let url=parts.join("/")
// url = url.padStart(url.length + 1, '/');
// console.log(url); // "/users/42/profile"

// const sentence = 'JavaScript is awesome';
// const reversed = sentence.split(' ').reverse().join(' ');
// console.log(reversed); // "awesome is JavaScript"

// const email = 'user@example.com';
// let ind = 0;
// for (let i = 0; i < email.length; i++) {
//   if (email[i] === '@') {
//     ind = i;
//   }
// }
// let domain=email.slice(ind+1);

// console.log(domain); // "example.com"
// const email = 'user@example.com';
// const domain=email.split("@")[1];
// console.log(domain);

// const arr = [2, 3, 4, 5, 6];
// const k = arr.fill(6);
// console.log(arr);
// console.log(k);

// let k = ["Kalam", "Balam", "Alam"];

// let f=k.toSorted();
// console.log(f);

// const originalArray = [5, 1, 3, 4, 0];
// const sA = originalArray.sort((a, b) => a - b);
// sA.push(99);
// console.log(originalArray);
// //!to avoid this use spread
// const oA = [6, 2, 1, 4, 3];
// const sA2 = [...oA].sort((a, b) => a - b);

// sA2.push(45);
// console.log(oA);
// let k = ['Kalam', 'Jalam', 'Alam', 'Chalam'];

// k.sort((a, b) => a===b?0:a>b?1:-1);
// console.log(k);

// const k = [1, 2, 3, 4];
// k.splice(1,0,7)
// console.log(k);

// let m = [1, 2, 3, 4, [8, 9, [10, 11]]];

// const flatA=m.flat(2)
// console.log(flatA);

// const week1 = [88, 72, 95];
// const week2 = [63, 80, 91];
// let k = [...week1, ...week2].sort((a, b) => a - b);
// console.log(k);

// let median=(k.at(2)+k.at(3))/2
// console.log(median); // 84  (sorted: [63,72,80,88,91,95] → middle)
// const docChunks = [
//   ["React is fast","Use hooks"],
//   ["FastAPI is async","Python backend"],
//   ["RAG uses embeddings"]
// ];
// const keyword = "Use hooks";
// let found=docChunks.flat().includes(keyword)
// console.log(found); // true

//!Important

// const topics = [
//   { name: 'LangChain', mentions: 320 },
//   { name: 'RAG', mentions: 415 },
//   { name: 'FastAPI', mentions: 390 },
// ];

// topics.sort((a, b) => b.mentions - a.mentions);
// const [first, second] = topics;
// console.log(topics);
// console.log(first.name);  // "RAG"

/*//!A user drags a card from index 1 to index 3 in a Kanban board. Reorder the array without splice or mutating the original:*/

// const cards = ['Design', 'Dev', 'Review', 'Deploy', 'Done'];
//  move index 1 ("Dev") to index 3
// your code here
// const items=cards[1];
// reordered=[...cards.slice(0,1),...cards.slice(2,4),items,...cards.slice(4)]
// console.log(reordered);
// ["Design","Review","Deploy","Dev","Done"]

/*yo're building a skeleton loader UI. Create an array of 5 placeholder objects, each with a loading: true property:*/

// your code here

// const skeletons = new Array(5).fill(null).map(() => ({ loading: true }));
// console.log(skeletons);
// [
//   {loading:true},{loading:true},
//   {loading:true},{loading:true},{loading:true}
// ]
// const k = ['Lamim', 'Hamim', 'Alim', 'Balim', 'Jalim'];

// const f=k.toSorted((a,b)=>a===b?0:a>b?-1:1)
// console.log(f);
const obj = {
  0: 'A',
  1: 'B',
  2: 'c',
  length: 3,
};

const k=Array.from(obj)
console.log(typeof obj);
console.log(k);