/* Key rules to remember
1. Own and Enumerable only: It only extracts values from properties defined directly on the object itself. It ignores inherited properties (from the prototype) and non-enumerable properties.

2. The sorting gotcha: It does not strictly follow the order you wrote the code in. Integer keys (like '1', '2') are sorted in ascending order first. Then, string keys are added in the order they were inserted.

3. Symbols are ghosts: If you use a Symbol as a key in your object, Object.values() will completely ignore it.

4. No mutation: It is a pure function. It returns a brand-new array and leaves your original object completely untouched.

5.Type coercion traps: If you pass something that isn't an object (like a string or a number), JavaScript will quietly try to convert it into an object first. Strings become arrays of characters; numbers and booleans return empty arrays. */

//!1.

/* const parent = {
  eyecolor: 'Brown',
};
const child = Object.create(parent);

child.name = 'Alex';
child.age = 23;

console.log(child.eyecolor);
console.log(Object.values(child)); */
// Working case: It only gets Alex and 25. The inherited value is ignored.

//!2
/* const raceResults = {
  john: 'Bronze',
  1: 'Gold',
  sarah: 'Participation Trophy',
  2: 'Silver',
}; */

// Tricky case: You might expect Bronze, Gold, Trophy, Silver.
// But JS sorts the integer keys ('1', '2') first, then strings by insertion!
//console.log(Object.values(raceResults));
// Output: [ 'Gold', 'Silver', 'Bronze', 'Participation Trophy' ]

//!3
/* const secretKey = Symbol('secret');
const user = {
  username: "js_ninja",
  status: "active",
  [secretKey]: "password123"
}; */

// Working case: The symbol value is completely hidden from the output.
//console.log(Object.values(user));
// Output: [ 'js_ninja', 'active' ]

//!4

/* const config = { theme: "dark", autoSave: true };

const extracted = Object.values(config);
extracted[0] = "light"; */ // Mutating the new array

// Working case: The original object is completely safe.
//console.log(config.theme); // Output: "dark"
//!5

// Tricky case 1: String passed instead of object
// Strings are coerced to objects with index keys: {0: 'w', 1: 'o', 2: 'w'}
console.log(Object.values('wow'));
// Output: [ 'w', 'o', 'w' ]

// Tricky case 2: Numbers/Booleans passed
// Coerced to objects, but they have no enumerable properties.
console.log(Object.values(404));
// Output: []
