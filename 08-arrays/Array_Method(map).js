/*1.Add a fixed property — given [{id:1},{id:2}], use map() with spread to return new objects that each also have role: "user", without mutating the originals. */

/*const arr = [{ id: 1 }, { id: 2 }];

const modified = arr.map(elem => {
  return {
    ...elem,
    role: 'user',
  };
});
console.log(modified);*/

/*2.Index-aware transform — given ["a","b","c"], use map()'s second callback argument (index) to return ["0:a","1:b","2:c"]. */

/*const arr = ['a', 'b', 'c'];
const modified = arr.map((elem, index) => {
  return `${index}:${elem}`;
});
console.log(modified);*/

/*3.Deep-safe update — given [{id:1,info:{active:false}}], use map() to return new objects where info.active is set to true without mutating the original nested object (hint: spread two levels). */

/*const arr = [{ id: 1, info: { active: false } }];

const modified = arr.map(elem => {
  return {
    ...elem,
    info: {
      ...elem.info,
      active: true,

    },
  };
});

console.log(modified);*/

/*const employees = [
  { id: 1, name: 'Alice', departmentId: 1, salary: 5000 },
  { id: 2, name: 'Bob', departmentId: 2, salary: 7000 },
  { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 },
  { id: 4, name: 'Diana', departmentId: 1, salary: 5500 },
  { id: 5, name: 'Edward', departmentId: 2, salary: 8000 },
  { id: 6, name: 'Fiona', departmentId: 4, salary: 6000 },
  { id: 7, name: 'George', departmentId: 3, salary: 5200 },
  { id: 8, name: 'Helen', departmentId: 4, salary: 7200 },
  { id: 9, name: 'Ian', departmentId: 2, salary: 4800 },
  { id: 10, name: 'Jane', departmentId: 1, salary: 5100 },
];*/

/*Create an array of employee names only */

/*const name = employees.map(emp => emp.name);
console.log(name);

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
];*/

/*Create an array where there will be full name of every customer*/
/*const fullName = customers.map(cust => {
  return {
    ...cust,
    full_Name: `${cust.gender === 'M' ? `Mr.${cust.f_name} ${cust.l_name}` : cust.married === true ? `Mrs.${cust.f_name} ${cust.l_name} ` : `Ms.${cust.f_name} ${cust.l_name}`}`,
  };
});*/

/*const fullName = customers.map(cust => {
  return {
    ...cust,
    full_name: `${cust.gender === 'M' ? `Mr.${cust.f_name} ${cust.l_name}` : cust.married === true ? `Mrs.${cust.f_name} ${cust.l_name}` : `Ms.${cust.f_name} ${cust.l_name}`}`,
  };
});
console.log(fullName);*/

//!or

/*const fullNamee = customers.map(cust => {
  return {
    ...cust,
    full_name:
      cust.gender === 'M'
        ? `Mr.${cust.f_name} ${cust.l_name}`
        : cust.married === true
          ? `Mrs.${cust.f_name} ${cust.l_name}`
          : `Ms.${cust.f_name} ${cust.l_name}`,
  };
});
console.log(fullNamee);*/

//!flatMap()
/*const artists = [
  { name: 'Daft Punk', tracks: ['Get Lucky', 'One More Time'] },
  { name: 'The Weeknd', tracks: ['Blinding Lights', 'Starboy'] },
];*/

/*// Map would return: [["Get Lucky", "One More Time"], ["Blinding Lights", "Starboy"]]
// flatMap unboxes them perfectly:
const allTracks = artists
  .map(tr => {
    return tr.tracks;
  })
  .flat();

console.log(allTracks);
// ["Get Lucky", "One More Time", "Blinding Lights", "Starboy"]

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: -1 }, // Invalid data!
  { name: 'Charlie', age: 30 },
];
const f = users.map(user => {
  if (user.age < 0) return [];
  else return user.name;
}).flat();
console.log(f);*/

/*const items = ['light', 'banana', 'mouse', 'book'];
const itemss = items.map(elm => elm.padEnd(elm.length + 1, 's'));
console.log(itemss);*/

/*const num = [1, 2, -1, 3, -6];

const n = num.flatMap(nums => {
  if (nums > 0) return [nums];
  else return [];
});
console.log(n);*/

/*You have a list of numbers. Remove all odd numbers, and double the even ones.
const nums = [1, 2, 3, 4, 5, 6];

// Expected output: [4, 8, 12] */
/*const nums = [1, 2, 3, 4, 5, 6];
const result=nums.flatMap((n)=>n%2===0?[n*2]:[])
console.log(result);*/

/*You have a list of products. Skip out-of-stock items, and for in-stock items, return both the name and its price as a formatted string.
const products = [
  { name: "keyboard", price: 45, inStock: true },
  { name: "mouse", price: 25, inStock: false },
  { name: "monitor", price: 200, inStock: true },
];

// Expected output: ["keyboard", "$45", "monitor", "$200"] */
/*const products = [
  { name: 'keyboard', price: 45, inStock: true },
  { name: 'mouse', price: 25, inStock: false },
  { name: 'monitor', price: 200, inStock: true },
];

const result = products.flatMap(pr =>
  pr.inStock ? [pr.name, `$${pr.price}`] : [],
);
console.log(result);*/

/*You have a list of users. Each user has a role and an array of skills. Skip users whose role is "intern", and for the rest, expand their skills into individual strings formatted as "name:skill".
const users = [
  { name: "rasel", role: "dev", skills: ["react", "python"] },
  { name: "john", role: "intern", skills: ["html"] },
  { name: "sara", role: "dev", skills: ["node", "sql"] },
];

// Expected output: ["rasel:react", "rasel:python", "sara:node", "sara:sql"]
Use flatMap() only.
 */
/*const users = [
  { name: 'rasel', role: 'dev', skills: ['react', 'python'] },
  { name: 'john', role: 'intern', skills: ['html'] },
  { name: 'sara', role: 'dev', skills: ['node', 'sql'] },
];

const result = users.flatMap(us =>
  us.role != 'intern' ? us.skills.map(sk => `${us.name}:${sk}`) : [],
);
console.log(result);*/

