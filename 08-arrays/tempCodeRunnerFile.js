// const users = [
//   { name: 'Alice', country: 'USA' },
//   { name: 'Bob', country: 'India' },
//   { name: 'Charlie', country: 'USA' },
//   { name: 'Dev', country: 'India' },
// ];

// const grouped = users.reduce((acc, curr) => {
//   acc[curr.country] = acc[curr.country] || [];
//   acc[curr.country].push(curr);
//   return acc;
// }, {});

const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
  { id: 4, name: 'David', active: false },
];

const output = users.flatMap(elem => (elem.active ? elem.name : []));
console.log(output);
