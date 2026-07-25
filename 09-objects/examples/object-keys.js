//Rule:1 Numbers are sorted first, strings follow in insertion order. All are returned as strings.

/* const obj1 = {
  name: 'Alice',
  1: 'Terrible',
  alias: 'None',
  99: 'Perfect',
};

let keys = Object.keys(obj1);
console.log(keys); */

//?Rule:2 Ignores Inherited Properties

/* const parentObj = { eyecolor: 'brown' };
 !childObj inherits from parentObj
const childObj = Object.create(parentObj);
childObj.name = 'Alice';
childObj.age = 23;

console.log(childObj);
 !Tricky case: 'eyeColor' exists on childObj, but it is inherited!
console.log(childObj.eyecolor);
 !Object.keys ignores it completely.
console.log(Object.keys(childObj)); */
