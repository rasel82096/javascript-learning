const trueCopy = structuredClone(obj);
trueCopy.address.city = 'Dhaka';
console.log(obj, trueCopy);