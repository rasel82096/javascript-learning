/* const obj = {
  name: 'Rasel',
  address: {
    city: 'Munshiganj',
    zip: 123,
  },
}; */

//!shallow copy

/* const obj1 = { ...obj };

obj1.address.city = 'Dhaka';
console.log(obj); */
//!It will change the main object

//!Deep Copy

/* const trueCopy = structuredClone(obj);
trueCopy.address.city = 'Dhaka';
console.log(obj, trueCopy); */

/* It CANNOT clone functions or DOM nodes: If your object contains a function or an HTML element, it will instantly throw a DataCloneError. It strictly copies data, not behavior. */
/* const user = {
  name: 'Rasel',

  greet() {
    console.log('Hello');
  },
};

const copy = structuredClone(user); */

