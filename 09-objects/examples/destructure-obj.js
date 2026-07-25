/*Q1. Fetch only cit using destructure.*/
/*const user = {
  name: 'John',
  address: {
    city: 'Dhaka',
  },
};

const {
  address: { city },
} = user;

console.log(city);
//Now rename with town

const {
  address: { city: town },
} = user;
console.log(town);*/

/*Q2.
 Nested destructuring
const order = {
  orderId: "ORD-99",
  customer: { name: "Tanvir", address: { city: "Chattogram", zip: "4000" } }
};

Extract orderId, name (renamed customerName), and city — in one statement, no intermediate customer/address variables. */
/*const order = {
  orderId: 'ORD-99',
  customer: { name: 'Tanvir', address: { city: 'Chattogram', zip: '4000' } },
};
const {
  orderId,
  customer: {
    name: customerName,
    address: { city },
  },
} = order;

console.log(orderId, customerName, city);*/

/*q3 — Real-world sanitize payload

const formPayload = {
  email: "rasel@example.com",
  password: "pass123",
  confirmPassword: "pass123",
  csrfToken: "abc123xyz",
  rememberMe: true
};


Build `cleanPayload` excluding `password`, `confirmPassword`, `csrfToken` — using destructuring, not `delete`. */

/*const formPayload = {
  email: 'rasel@example.com',
  password: 'pass123',
  confirmPassword: 'pass123',
  csrfToken: 'abc123xyz',
  rememberMe: true,
};

const { password, confirmPassword, csrfToken, ...cleanPayload } = formPayload;
console.log(cleanPayload);*/

/*Q4.— Rename and default value
const product = {
  title: "Mechanical Keyboard",
  price: 4500,
  category: "Accessories"
};
​
Task:
Destructure title into a variable called productName.
Destructure price.
Try to destructure stock with a default value of 0.
Print:
Mechanical Keyboard costs 4500 BDT. Stock: 0
 */

/*function out({title,price,stock=0}){

  return `${title} costs ${price} BDT. Stock:${stock}`
}



const product = {
  title: 'Mechanical Keyboard',
  price: 4500,
  category: 'Accessories',
};
console.log(out(product));*/

/* Q5.

const order = {
  orderId: "ORD-101",
  customer: {
    name: "Karim",
    email: "karim@example.com"
  },
  shipping: {
    city: "Chattogram",
    zipCode: 4000
  },
  total: 2500
};
​
Task:  
Create a function named getOrderSummary that destructures the object directly in the function parameter.
Get:
orderId
customer name
shipping city
total
Return this exact string:
Order ORD-101: Karim from Chattogram paid 2500 BDT
 */

/*  function getOrderSummary({
  orderId,
  customer: { name },
  shipping: { city },
  total,
}) {
  return `Order ${orderId}: ${name} from ${city} paid ${total} BDT`;
}

const order = {
  orderId: 'ORD-101',
  customer: {
    name: 'Karim',
    email: 'karim@example.com',
  },
  shipping: {
    city: 'Chattogram',
    zipCode: 4000,
  },
  total: 2500,
};

console.log(getOrderSummary(order));*/

/* Q6. Write a function that take numbers as argument and separates even and odd numbers and return an object with evens and odds and destructure the output while calling function.
 */

/* function evenOdd(...arr) {
  return arr.reduce(
    (acc, curr) => {
      if (curr % 2 == 0) {
        acc['even'].push(curr);
      } else {
        acc['odd'].push(curr);
      }

      return acc;
    },
    { even: [], odd: [] },
  );
}

const{even,odd}=evenOdd(1,2,3,4,5,6);
console.log(even);
console.log(odd); */
